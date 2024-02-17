import { useEffect, useState } from 'react';
import ChannelSelection from '../ChannelSelection/ChannelSelection';
import { channels } from './../../utils/constants';
import { deleteSettings, saveSettings, updateSettings } from '../../utils/api';
import './ChannelSettingsForm.css';
const ChannelSettingsForm = ({ settings, setSettings }) => {
    const [selectedChannels, setSelectedChannels] = useState(
        settings?.selectedChannels || []
    );
    const [channelMessages, setChannelMessages] = useState(
        settings?.messages || {}
    );
    const [keyboardTypes, setKeyboardTypes] = useState(
        settings?.keyboardTypes || {}
    );
    const [buttons, setButtons] = useState(settings?.buttons || {});
    const [id, setId] = useState(settings?._id || {});

    useEffect(() => {
        setSelectedChannels(settings?.selectedChannels || []);
        setChannelMessages(settings?.messages || {});
        setKeyboardTypes(settings?.keyboardTypes || {});
        setButtons(settings?.buttons || {});
        setId(settings?._id || {});
    }, [settings]);

    const clearParameters = (paramObject, paramName, setValue) => {
        const updatedParams = { ...paramObject };
        delete updatedParams[paramName];
        setValue(updatedParams);
    };
    const handleChannelChange = (e) => {
        const { value, checked } = e.target;

        setSelectedChannels((prevChannels) => {
            if (checked) {
                return [...prevChannels, value];
            } else {
                clearParameters(channelMessages, value, setChannelMessages);
                clearParameters(keyboardTypes, value, setKeyboardTypes);
                clearParameters(buttons, value, setButtons);
                return prevChannels.filter((channel) => channel !== value);
            }
        });
    };
    const handleMessageChange = (channel, message) => {
        setChannelMessages((prevMessages) => ({
            ...prevMessages,
            [channel]: message,
        }));
    };
    const handleKeyboardChange = (channel, keyboardType) => {
        setKeyboardTypes((prevKeyboardTypes) => ({
            ...prevKeyboardTypes,
            [channel]: keyboardType,
        }));
        clearParameters(buttons, channel, setButtons);
    };
    const handleButtonChange = (channel, index, key, value) => {
        if (key === 'add') {
            setButtons((prevButtons) => ({
                ...prevButtons,
                [channel]: [
                    ...(prevButtons[channel] || []),
                    { text: '', type: 'response', url: '' },
                ],
            }));
        } else if (key === 'delete') {
            setButtons((prevButtons) => ({
                ...prevButtons,
                [channel]: prevButtons[channel].filter((_, i) => i !== index),
            }));
        } else {
            setButtons((prevButtons) => ({
                ...prevButtons,
                [channel]: prevButtons[channel].map((button, i) =>
                    i === index ? { ...button, [key]: value } : button
                ),
            }));
        }
    };
    const handleSaveSettings = async (e) => {
        e.preventDefault();
        const settings = {
            selectedChannels,
            messages: channelMessages,
            keyboardTypes,
            buttons,
            id,
        };
        try {
            console.log(settings);
            const savedSettings = await saveSettings(settings);
            setSettings(savedSettings);
            console.log('Settings saved:', savedSettings);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteSettings = async () => {
        try {
            const deletedSettings = await deleteSettings(id);
            console.log('Settings deleted:', deletedSettings);
            setSettings(null);
        } catch (error) {
            console.error('Error deleting settings:', error);
        }
    };

    const handleUpdateSettings = async (e) => {
        e.preventDefault();
        const settings = {
            selectedChannels,
            messages: channelMessages,
            keyboardTypes,
            buttons,
            id,
        };
        try {
            const updatedSettings = await updateSettings(settings);
            setSettings(updatedSettings);
            console.log('Settings updated:', updatedSettings);
        } catch (error) {
            console.error('Error updating settings:', error);
        }
    };

    return (
        <form
            className="form channel-form"
            onSubmit={settings ? handleUpdateSettings : handleSaveSettings}
        >
            <h2>Выберите каналы:</h2>
            <ChannelSelection
                channels={channels}
                selectedChannels={selectedChannels}
                handleChannelChange={handleChannelChange}
                keyboardTypes={keyboardTypes}
                onKeyboardTypeChange={handleKeyboardChange}
                channelMessages={channelMessages}
                handleMessageChange={handleMessageChange}
                handleButtonChange={handleButtonChange}
                buttons={buttons}
            />
            {selectedChannels.length > 0 && (
                <>
                    <button className="channel-form__button" type="submit">
                        {settings ? 'обновить' : 'сохранить'}
                    </button>
                    {settings && (
                        <button
                            className="channel-form__button"
                            type="button"
                            onClick={handleDeleteSettings}
                        >
                            Удалить
                        </button>
                    )}
                </>
            )}
        </form>
    );
};

export default ChannelSettingsForm;

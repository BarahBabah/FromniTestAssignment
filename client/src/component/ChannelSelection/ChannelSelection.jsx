import ChannelFormInputs from '../ChannelFormInputs/ChannelFormInputs';
import ChannelCheckbox from '../ChannelCheckbox/ChannelCheckbox';
import './ChannelSelection.css';
const ChannelSelection = (props) => {
    const {
        channels,
        selectedChannels,
        handleChannelChange,
        channelMessages,
        keyboardTypes,
        onKeyboardTypeChange,
        handleMessageChange,
        handleButtonChange,
        buttons,
    } = props;
    return (
        <>
            <div className="channels">
                {channels.map((channel) => (
                    <ChannelCheckbox
                        className="channels__checkbox"
                        key={channel.name}
                        channel={channel}
                        onChange={handleChannelChange}
                        value={selectedChannels.includes(channel.name)}
                        checked={selectedChannels.includes(channel.name)}
                    />
                ))}
            </div>
            <div className="selected-channels">
                {selectedChannels.map((channel) => (
                    <div className="selected-channel" key={channel}>
                        <h3 className="selected-channel__title">{channel}</h3>
                        <ChannelFormInputs
                            channel={channel}
                            value={channelMessages[channel] || ''}
                            onChange={(e) =>
                                handleMessageChange(channel, e.target.value)
                            }
                            keyboardType={keyboardTypes[channel] || 'standard'}
                            keyboardTypes={keyboardTypes}
                            onKeyboardTypeChange={onKeyboardTypeChange}
                            buttons={buttons[channel] || []}
                            onButtonChange={handleButtonChange}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default ChannelSelection;

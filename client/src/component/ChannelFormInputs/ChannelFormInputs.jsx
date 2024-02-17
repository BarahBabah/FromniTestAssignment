import { channels } from './../../utils/constants';
import './ChannelFormInputs.css';
import TextArea from '../TextArea/TextArea';
import ChannelButtons from '../ChannelButtons/ChannelButtons';
const ChannelFormInputs = ({
    channel,
    value,
    onChange,
    keyboardType,
    keyboardTypes,
    onKeyboardTypeChange,
    buttons,
    onButtonChange,
}) => {
    const currentChannel = channels.find((ch) => ch.name === channel);
    const handleKeyboardTypeChange = (e) => {
        onKeyboardTypeChange(channel, e.target.value);
        console.log(keyboardTypes);
    };

    const { buttonSupports } = currentChannel;

    const handleAddButton = () => {
        onButtonChange(channel, null, 'add');
    };

    return (
        <div className="controls">
            <label className="controls__label">
                Message for {channel}:
                <TextArea
                    maxLength={currentChannel?.maxChars}
                    value={value}
                    onChange={onChange}
                />
            </label>
            <div className="controls__select">
                {buttonSupports && (
                    <select
                        className="controls__select-box"
                        value={keyboardType}
                        onChange={handleKeyboardTypeChange}
                    >
                        {Object.keys(currentChannel?.buttonSupports).map(
                            (type) => {
                                return (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                );
                            }
                        )}
                    </select>
                )}
            </div>
            <ChannelButtons
                channel={channel}
                currentChannel={currentChannel}
                keyboardType={keyboardType}
                buttons={buttons}
                onButtonChange={onButtonChange}
            />
            {buttons.length <
                (keyboardType === 'inline'
                    ? currentChannel.inlineKeyboardMaxButtons
                    : currentChannel.standardKeyboardMaxButtons) && (
                <button
                    className="controls__button"
                    type="button"
                    onClick={handleAddButton}
                >
                    Добавить кнопку
                </button>
            )}
        </div>
    );
};

export default ChannelFormInputs;

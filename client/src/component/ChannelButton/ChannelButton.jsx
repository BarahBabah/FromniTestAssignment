import './ChannelButton.css';

const ChannelButton = ({
    button,
    index,
    currentChannel,
    keyboardType,
    onButtonChange,
    buttons,
}) => {
    const { buttonSupports } = currentChannel;
    const { linkButtonsSupport, linkButtonsCountMax } =
        buttonSupports[keyboardType];
    const linkButtons = buttons.filter((btn) => btn.type === 'link');
    const isLinkButton = button.type === 'link';

    const handleButtonChange = (property, newValue) => {
        onButtonChange(index, property, newValue);
    };

    return (
        <div key={index} className="channel-button">
            <input
                className="channel-button__input"
                type="text"
                placeholder="Button Text"
                required
                value={button.text}
                onChange={(e) => handleButtonChange('text', e.target.value)}
                maxLength={buttonSupports[keyboardType].maxButtonTitleLength}
            />
            <select
                className="channel-button__select"
                value={button.type}
                onChange={(e) => handleButtonChange('type', e.target.value)}
            >
                <option value="response">response</option>
                {linkButtonsSupport &&
                    linkButtonsCountMax >= linkButtons.length && (
                        <option
                            disabled={linkButtons.length >= linkButtonsCountMax}
                            value="link"
                        >
                            link
                        </option>
                    )}
            </select>
            {linkButtonsSupport && isLinkButton && (
                <input
                    className="channel-button__url-input"
                    type="url"
                    placeholder="URL"
                    required
                    value={button.url}
                    onChange={(e) => handleButtonChange('url', e.target.value)}
                />
            )}
            <button
                className="channel-button__delete"
                type="button"
                onClick={() => handleButtonChange('delete')}
            ></button>
        </div>
    );
};

export default ChannelButton;

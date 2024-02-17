import ChannelButton from './../ChannelButton/ChannelButton';

const ButtonInput = ({
    channel,
    currentChannel,
    keyboardType,
    buttons,
    onButtonChange,
}) => {
    const handleButtonChange = (index, property, newValue) => {
        onButtonChange(channel, index, property, newValue);
    };

    return (
        <div>
            {buttons.map((button, index) => (
                <ChannelButton
                    key={index}
                    button={button}
                    index={index}
                    currentChannel={currentChannel}
                    keyboardType={keyboardType}
                    onButtonChange={handleButtonChange}
                    buttons={buttons}
                />
            ))}
        </div>
    );
};

export default ButtonInput;

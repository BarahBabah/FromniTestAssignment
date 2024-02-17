import './ChannelCheckbox.css';

const ChannelCheckbox = ({ channel, onChange, checked }) => {
    const { name, image } = channel;

    const handleChange = (e) => {
        onChange(e);
    };

    return (
        <div className="channel-checkbox">
            <label className="channel-checkbox__label">
                <input
                    className="channel-checkbox__input"
                    type="checkbox"
                    value={name}
                    onChange={handleChange}
                    checked={checked}
                />
                <img
                    className="channel-checkbox__icon"
                    src={image}
                    alt={name}
                />
            </label>
        </div>
    );
};

export default ChannelCheckbox;

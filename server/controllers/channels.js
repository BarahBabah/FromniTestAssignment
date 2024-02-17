const ChannelSetting = require('./../models/channels');

getAllChannels = async (req, res) => {
    try {
        const channels = await ChannelSetting.find();
        res.json(channels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

createChannel = async (req, res) => {
    try {
        const newChannelSetting = new ChannelSetting(req.body);
        await newChannelSetting.save();
        res.status(201).json(newChannelSetting);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

updateChannel = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedChannelSetting = await ChannelSetting.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedChannelSetting);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

deleteChannel = async (req, res) => {
    const { id } = req.params;
    try {
        await ChannelSetting.findByIdAndDelete(id);
        res.json({ message: 'Channel setting deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = { getAllChannels, createChannel, updateChannel, deleteChannel }
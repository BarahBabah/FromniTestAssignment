const mongoose = require('mongoose');
const channelSettingSchema = new mongoose.Schema({
    keyboardTypes: { type: mongoose.Schema.Types.Mixed },
    selectedChannels: [String],
    messages: {
        VKontakte: { type: String, maxlength: 4096 },
        Telegram: { type: String, maxlength: 4096 },
        SMS: { type: String },
        WhatsApp: { type: String, maxlength: 1000 }
    },
    buttons: {
        VKontakte: [{ type: Object, maxlength: 40 }],
        Telegram: [{ type: Object, maxlength: 10 }],
        SMS: [{ type: Object }],
        WhatsApp: [{ type: Object, maxlength: 10 }]
    }
});

const ChannelSetting = mongoose.model('ChannelSetting', channelSettingSchema);
module.exports = ChannelSetting;

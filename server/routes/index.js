const router = require('express').Router();
const { getAllChannels, createChannel, updateChannel, deleteChannel } = require('./../controllers/channels');

router.get('/channels', getAllChannels);
router.post('/channels', createChannel);
router.put('/channels/:id', updateChannel);
router.delete('/channels/:id', deleteChannel);

module.exports = router;

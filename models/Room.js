const mongoose = require('mongoose');

const ParticipantSchema = new mongoose.Schema({
    name: String,
    publicKey: String,
    encryptedPrivateKey: String
});

const RoomSchema = new mongoose.Schema({
    roomId: { type: String, required: true, unique: true },
    adminPass: String,
    isStarted: { type: Boolean, default: false },
    participants: [ParticipantSchema],
    assignments: { type: Map, of: String }
}, { timestamps: true });

module.exports = mongoose.model('Room', RoomSchema);
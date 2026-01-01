const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Room = require('./models/Room');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// 'mongo_db' docker-compose daxilindəki servis adıdır
const mongoURI = process.env.MONGO_URI || 'mongodb://mongo_db:27017/secretsanta';

mongoose.connect(mongoURI)
    .then(() => console.log('✅ MongoDB Connected inside Docker!'))
    .catch(err => console.error('❌ DB Connection Error:', err));

// API Endpoints
app.get('/api/room/:id', async (req, res) => {
    try {
        const room = await Room.findOne({ roomId: req.params.id });
        res.json({ exists: !!room, data: room });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/room', async (req, res) => {
    try {
        const newRoom = new Room(req.body);
        await newRoom.save();
        res.json({ success: true, data: newRoom });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/join', async (req, res) => {
    const { roomId, participant } = req.body;
    try {
        const room = await Room.findOne({ roomId });
        if (!room) return res.status(404).json({ error: "Otaq tapılmadı" });
        room.participants.push(participant);
        await room.save();
        res.json({ success: true });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/start', async (req, res) => {
    const { roomId, assignments } = req.body;
    try {
        const room = await Room.findOne({ roomId });
        room.assignments = assignments;
        room.isStarted = true;
        await room.save();
        res.json({ success: true });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
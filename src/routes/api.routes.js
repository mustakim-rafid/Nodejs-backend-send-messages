import express from 'express';
import whatsappClient from '../services/whatsapp.service.js';
import { sendMessage } from '../controller/message.controller.js';

const router = express.Router();

router.post('/send-message', sendMessage);

router.get('/status', (req, res) => {
    const state = whatsappClient.info ? 'CONNECTED' : 'DISCONNECTED';
    res.status(200).json({ status: state });
});

export default router;
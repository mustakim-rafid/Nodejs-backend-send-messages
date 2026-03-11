import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import qrcode from 'qrcode-terminal';
import whatsappClient from './services/whatsapp.service.js';
import apiRoutes from './routes/api.routes.js';
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
});

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.json());

app.use('/api', apiRoutes);

whatsappClient.on('qr', (qr) => {
    console.log('QR RECEIVED. Scan it with your phone:');
    qrcode.generate(qr, { small: true });
    
    io.emit('qr_code', { qr });
});

whatsappClient.on('ready', () => {
    console.log('WhatsApp Client is authenticated and ready!');
});

whatsappClient.on('auth_failure', (msg) => {
    console.error('Authentication failure:', msg);
});

whatsappClient.initialize();

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
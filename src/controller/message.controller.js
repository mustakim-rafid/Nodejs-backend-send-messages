import messageQueue from '../services/queue.service.js';

export const sendMessage = async (req, res) => {
    let { number, message } = req.body;

    if (!number || !message) {
        return res.status(400).json({ error: 'Number and message are required.' });
    }

    const cleanNumber = number.replace(/\D/g, ''); 
    const formattedNumber = `${cleanNumber}@c.us`;

    try {
        await messageQueue.enqueue(formattedNumber, message);
        
        res.status(200).json({ 
            status: 'queued', 
            message: 'Message added to queue and will be sent shortly.' 
        });
    } catch (error) {
        res.status(500).json({ status: 'error', error: error.message });
    }
};
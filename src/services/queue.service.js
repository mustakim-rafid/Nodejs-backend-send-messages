import whatsappClient from './whatsapp.service.js';

class MessageQueue {
    constructor() {
        this.queue = [];
        this.isProcessing = false;
    }

    async enqueue(number, message) {
        return new Promise((resolve, reject) => {
            this.queue.push({ number, message, resolve, reject });
            this.process();
        });
    }

    async process() {
        if (this.isProcessing || this.queue.length === 0) return;

        this.isProcessing = true;
        const { number, message, resolve, reject } = this.queue.shift();

        try {
            await new Promise(res => setTimeout(res, 1000)); 
            
            const response = await whatsappClient.sendMessage(number, message);
            resolve(response);
        } catch (error) {
            reject(error);
        } finally {
            this.isProcessing = false;
            this.process();
        }
    }
}

export default new MessageQueue();
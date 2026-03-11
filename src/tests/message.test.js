import request from 'supertest';
import express from 'express';
import apiRoutes from '../routes/api.routes.js';

const app = express();
app.use(express.json());
app.use('/api', apiRoutes);

describe('POST /api/send-message', () => {
    
    test('Should return 400 if number is missing', async () => {
        const response = await request(app)
            .post('/api/send-message')
            .send({ message: "Hello" }); // Missing number

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe('Number and message are required.');
    });

    test('Should return 200/queued if data is valid', async () => {
        const response = await request(app)
            .post('/api/send-message')
            .send({ 
                number: "8801700000000", 
                message: "Test message" 
            });

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('queued');
    });
});
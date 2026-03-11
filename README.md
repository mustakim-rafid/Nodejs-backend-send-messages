# WhatsApp API Bridge 🚀

A modular Node.js backend that automates WhatsApp Web to send messages via a RESTful API.

## Features
- **Session Persistence:** Scans QR once, stays logged in across restarts.
- **Real-time QR:** Uses Socket.IO to push QR codes to the client.
- **Message Queue:** Handles high concurrency to prevent rate-limiting.
- **Modular Architecture:** Separated routes, controllers, and services.
- **Automated Testing:** Includes integration tests for API reliability.

## Tech Stack
- **Node.js & Express** (Backend Framework)
- **whatsapp-web.js** (WhatsApp Web Automation)
- **Socket.IO** (Real-time communication)
- **Jest & Supertest** (Testing)

## Getting Started

1. **Clone the repo:**
   ```bash
   git clone <repo-link>
   cd whatsapp-api-bridge```

2. **Install dependencies:**
```bash
npm install

```


3. **Set up environment:**
Create a `.env` file based on `.env.example`.
4. **Run the server:**
```bash
npm start

```


5. **Scan QR Code:**
Check the terminal for a QR code and scan it with your WhatsApp mobile app.

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/status` | Checks if the WhatsApp client is connected. |
| `POST` | `/api/send-message` | Sends a message to a specific number. |

**Example Request Body:**

```json
{
  "number": "88017XXXXXXXX",
  "message": "Hello from the API!"
}

```

## Running Tests

```bash
npm test

```


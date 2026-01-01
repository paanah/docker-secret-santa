# 🎅 Dockerized Secret Santa (Secure RSA Edition)

A secure, containerized web application for organizing Secret Santa events anonymously. This project uses **RSA encryption** to ensure that gift assignments remain secret, even from the database administrator.

## 🚀 Features

- **Dockerized Environment:** Runs seamlessly with Docker Compose (No local Node/Mongo required).
- **Secure P2P Encryption:** Uses RSA (JSEncrypt) + AES to encrypt assignments on the client side.
- **Persistent Storage:** MongoDB volume ensures data isn't lost when containers stop.
- **Interactive UI:** Christmas-themed interface with snow animations and confetti effects.
- **Real-time-like Updates:** Polling mechanism to sync room state across participants.

---

## 🛠️ Tech Stack

- **Backend:** Node.js (Express.js)
- **Database:** MongoDB (via Docker Image)
- **DevOps:** Docker & Docker Compose
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Security:** `jsencrypt` (RSA), `crypto-js` (AES)

---

## 📋 How to Run

You do not need to install Node.js or MongoDB on your machine. You only need **Docker Desktop** (or Docker Engine).

### 1. Clone the Repository

~~~bash
git clone https://github.com/paanah/docker-secret-santa.git
cd docker-secret-santa
~~~

### 2. Build and Start Containers

Run the following command to build the Node.js image and start the database:

~~~bash
docker-compose up --build
~~~

*Wait until you see "MongoDB Connected inside Docker!" in the terminal.*

### 3. Open in Browser

Visit the following URL:
👉 **http://localhost:3000**

To stop the application, press `Ctrl + C` in the terminal or run:

~~~bash
docker-compose down
~~~

---

## 📂 Project Structure

~~~text
docker-santa/
├── models/
│   └── Room.js          # MongoDB Schema (Data Structure)
├── public/
│   └── index.html       # Frontend (UI & Encryption Logic)
├── Dockerfile           # Instructions to build the Backend Image
├── docker-compose.yml   # Orchestrates App + MongoDB services
├── package.json         # Project dependencies
├── server.js            # Main backend server code
└── .dockerignore        # Prevents node_modules from copying to container
~~~

---

## 🎮 How to Play

1.  **Create a Room:** Enter a room name (e.g., `Office_Party`) and set an Admin Password.
2.  **Join:** Share the room name. Participants enter their Name and create a personal Password.
3.  **Shuffle (Admin Only):** The admin clicks "Shuffle & Draw". The app generates RSA keys and encrypts a target name for each person.
4.  **Reveal:** Participants enter their personal password to decrypt and reveal who they are buying a gift for! 🎁

---

## 🐳 Docker Commands (Cheatsheet)

- **Start App:** `docker-compose up`
- **Rebuild App:** `docker-compose up --build`
- **Stop App:** `docker-compose down`
- **View Logs:** `docker-compose logs -f`
- **Check Containers:** `docker-compose ps`

---

### Author
Developed as a containerization assignment.

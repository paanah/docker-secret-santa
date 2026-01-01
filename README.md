# 🎅 Dockerized Secret Santa (Secure RSA Edition)

A secure, containerized web application for organizing Secret Santa events anonymously. This project uses **RSA encryption** to ensure that gift assignments remain secret, even from the database administrator.

## 🚀 Features

- **Dockerized Environment:** Runs seamlessly with Docker Compose or pre-built Docker Hub images.
- **Secure P2P Encryption:** Uses RSA (JSEncrypt) + AES to encrypt assignments on the client side.
- **Persistent Storage:** MongoDB volume ensures data isn't lost when containers stop.
- **Interactive UI:** Christmas-themed interface with snow animations and confetti effects.
- **Real-time-like Updates:** Polling mechanism to sync room state across participants.

---

## ⚡ Quick Start (No Code Required)

If you just want to run the app without downloading the code, use this method. It pulls the pre-built image directly from Docker Hub.

### 1. Run the "Magic" One-Liner
Copy and paste this command into your terminal (PowerShell, CMD, or Bash):

```bash
docker network create santa-net && docker run -d --name santa-mongo --network santa-net mongo && docker run -p 3000:3000 --network santa-net -e MONGO_URI=mongodb://santa-mongo:27017/secretsanta paanah/secret-santa:v2
```

### 2. Open in Browser
Visit: 👉 **http://localhost:3000**

### 3. How to Stop (Quick Start)
Since this method doesn't use Docker Compose, stop it manually:

```bash
docker stop santa-mongo $(docker ps -q --filter ancestor=paanah/secret-santa:v2)
docker rm santa-mongo $(docker ps -q --filter ancestor=paanah/secret-santa:v2)
docker network rm santa-net
```

---

## 🛠️ Development Setup (Build from Source)

Follow these steps if you want to inspect the code, modify it, or build the image yourself.

### 1. Clone the Repository

```bash
git clone https://github.com/paanah/docker-secret-santa.git
cd docker-secret-santa
```

### 2. Build and Start Containers

Run the following command to build the Node.js image locally and start the database:

```bash
docker-compose up --build
```

*Wait until you see "MongoDB Connected inside Docker!" in the terminal.*

### 3. Stop the App

To stop the application in development mode:

```bash
docker-compose down
```

---

## 📂 Project Structure

```text
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
```

---

## 🛠️ Tech Stack

- **Backend:** Node.js (Express.js)
- **Database:** MongoDB (Official Docker Image)
- **DevOps:** Docker, Docker Compose, Docker Hub
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Security:** `jsencrypt` (RSA), `crypto-js` (AES)

---

## 🎮 How to Play

1.  **Create a Room:** Enter a room name (e.g., `Office_Party`) and set an Admin Password.
2.  **Join:** Share the room name. Participants enter their Name and create a personal Password.
3.  **Shuffle (Admin Only):** The admin clicks "Shuffle & Draw". The app generates RSA keys and encrypts a target name for each person.
4.  **Reveal:** Participants enter their personal password to decrypt and reveal who they are buying a gift for! 🎁

---

## 🐳 Docker Commands Cheatsheet

- **Start App (Dev):** `docker-compose up`
- **Rebuild App:** `docker-compose up --build`
- **Stop App (Dev):** `docker-compose down`
- **Pull from Hub:** `docker pull paanah/secret-santa:v2`
- **Check Containers:** `docker ps`

---

### Author
Developed as a containerization assignment.

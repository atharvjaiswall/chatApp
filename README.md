# 💬 Real-Time Chat Application (MERN + JWT)

![MERN](https://img.shields.io/badge/Stack-MERN-green)
![JWT](https://img.shields.io/badge/Auth-JWT-blue)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![React](https://img.shields.io/badge/Frontend-React-blue)
![Node](https://img.shields.io/badge/Backend-Node.js-green)

## 🚀 Live Demo

👉 [Click here to try the app](https://chatapp-frontend-flax-eta.vercel.app/login)

A full-stack **real-time chat application** built using the **MERN stack** with secure **JWT authentication** and scalable architecture. The app enables seamless one-to-one communication with a clean UI and efficient backend design.

---

## 🚀 Tech Stack

### Frontend

* React.js (with Vite)
* Context API (Auth & Chat state management)
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

### Other Tools

* JWT Authentication
* Real-time chat using Socket.io
* Instant notifications using React Toastify
* Cloudinary (media handling)
* REST APIs

---

## ✨ Features

* 🔐 Secure Authentication (JWT-based login/signup)
* 💬 Real-time chat using Socket.io
* 🔔 Instant notifications using React Toastify
* 🧑‍🤝‍🧑 One-to-one messaging
* 📡 API-based communication
* 🌐 Global state using Context API
* 📁 Structured backend (MVC pattern)
* ☁️ Media upload support (Cloudinary)
* 📱 Responsive UI

---
## 📸 Screenshots

<p align="center">

🔐 **Login Page**  
<img src="https://github.com/user-attachments/assets/5ba1e5b5-be7d-45d8-99a6-948cbd603329" width="700"/>

<br/><br/>

🧭 **User Dashboard**  
<img src="https://github.com/user-attachments/assets/0601b16c-aef1-4b11-a7cd-a31b32305253" width="700"/>

<br/><br/>

💬 **Chat Interface**  
<img src="https://github.com/user-attachments/assets/07122e7e-4878-4187-8036-2dfea9b1a057" width="700"/>

</p>

## 📂 Project Structure

```bash
chat-app/
│
├── client/
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── ChatContext.jsx
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatContainer.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── RightSidebar.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── ProfilePage.jsx
│   │   │
│   │   ├── lib/
│   │   │   └── utils.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   │   ├── messageController.js
│   │   └── userController.js
│   │
│   ├── models/
│   │   ├── Message.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── messageRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── middleware/
│   │   └── auth.js
│   │
│   ├── lib/
│   │   ├── db.js
│   │   ├── cloudinary.js
│   │   └── utils.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/atharvjaiswall/chatApp.git
cd chatApp
```

### 2️⃣ Install dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd client
npm install
```

---

### 3️⃣ Environment Variables

Create a `.env` file inside the **server** folder:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

---

### 4️⃣ Run the Application

#### Start backend

```bash
cd server
npm run dev
```

#### Start frontend

```bash
cd client
npm run dev
```

---

## 🔐 Authentication Flow

```text
User → Login/Register → Server verifies → JWT generated → Stored in client → Used for protected routes
```

---

## 📡 Backend Architecture (MVC)

* **Models:** Define database schema (User, Message)
* **Controllers:** Handle business logic
* **Routes:** Define API endpoints
* **Middleware:** Authentication & request validation

---

## 🧠 Key Learnings

* Built scalable backend using MVC pattern
* Implemented JWT-based authentication
* Managed global state with Context API
* Integrated cloud storage (Cloudinary)
* Structured full-stack MERN project

---

## 📌 Future Improvements

* 🧑‍🤝‍🧑 Group chat feature
* 🔔 Real-time notifications
* 📎 File sharing
* 🌙 Dark mode
* 📞 Voice/Video calling

---

## 🤝 Contributing

Feel free to fork this repository and contribute!

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Atharv Jaiswal**

---

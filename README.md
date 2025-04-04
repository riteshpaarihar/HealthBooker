﻿# HealthBooker 🏥

A **MERN stack** application for seamless **appointment booking**, **doctor-patient management**, and **medical record handling**.

---

## 🚀 Features

- 🔐 **User Authentication & Authorization (JWT)**
- 👨‍⚕️ **Doctor & Patient Management**
- 📅 **Appointment Booking System**
- 📂 **Medical Records Storage**
- 📢 **Notifications & Reminders**
- 💳 **Payment Integration (Upcoming)**
- 📊 **Admin Dashboard**

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Redux Toolkit, TailwindCSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Token), bcrypt
- **Deployment:** Vercel (Frontend), Render (Backend), MongoDB Atlas

---

## 📌 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/riteshpaarihar/HealthBooker.git
cd HealthBooker
```

### 2️⃣ Backend Setup

```sh
cd backend
npm install
```

#### Create `.env` file in backend

```sh
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

#### Run Backend

```sh
npm run dev
```

---

### 3️⃣ Frontend Setup

```sh
cd frontend
npm install
npm run dev
```

---

## 📌 API Endpoints

### 🔹 Authentication

| Method | Endpoint             | Description            |
| ------ | -------------------- | ---------------------- |
| POST   | `/api/user/register` | Register a new user    |
| POST   | `/api/auth/login`    | User login & get token |

### 🔹 Doctors

| Method | Endpoint       | Description      |
| ------ | -------------- | ---------------- |
| GET    | `/api/doctors` | Get all doctors  |
| POST   | `/api/doctors` | Add a new doctor |

### 🔹 Appointments

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| POST   | `/api/appointments` | Book an appointment  |
| GET    | `/api/appointments` | Get user appointments |

### 🔹 Admin Dashboard

| Method | Endpoint                  | Description          |
| ------ | -------------------       | -------------------- |
| GET    | `/api/admin/users`        | Get all user         |
| GET    | `/api/admin/doctors`      | Get all doctors      |
| GET    | `/api/admin/appointments` | Get all appointments |

---

## 🚀 Deployment

### **Frontend (Vercel)**

```sh
vercel
```

### **Backend (Render)**

1. Create an account on [Render](https://render.com/)
2. Connect GitHub repo
3. Set environment variables (`.env`)
4. Deploy 🚀

---

## 📌 Contributing

1. **Fork** the repository 🍴
2. **Clone** the project locally
3. **Create** a new branch (`git checkout -b feature-name`)
4. **Commit** changes (`git commit -m "Added new feature"`)
5. **Push** to GitHub (`git push origin feature-name`)
6. **Open a PR** 🚀

---

## 🔗 Contact

👤 **Ritesh Singh**

- **GitHub:** [riteshpaarihar](https://github.com/riteshpaarihar)
- **LinkedIn:** [LinkedIn](www.linkedin.com/in/ritesh-singh-2388a0252)
- **Email:** [ritesh.rs199@gmail.com.com](mailto\:ritesh.rs199@gmail.com)

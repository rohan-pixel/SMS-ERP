<p align="center">
  <img src="https://raw.githubusercontent.com/abhisheknaiidu/abhisheknaiidu/master/code.gif" width="480" alt="Typewriter Animation">
</p>

<h1 align="center">🎓 Student Management System (SMS)</h1>

<p align="center">
  <strong>A modern, efficient, and scalable platform for managing students, teachers, classes, and academic workflows.</strong>
</p>

<br />

---

## 🚀 Features Overview

### 👨‍💼 Admin Features
- 📚 **Student Management** – Add, edit, delete student records; manage classes  
- 👨‍🏫 **Teacher Management** – Add, edit, delete teachers; manage schedules  
- 🏫 **Class Management** – Create & organize classes, subjects, and linked schedules  
- 🗓️ **Schedule Management** – Manage class, teacher & student schedules; generate reports  
- 📝 **Assignment Management** – Create, update, and delete assignments  

---

### 👩‍🏫 Teacher Features
- 🗓️ **View Teaching Schedule**  
- 📝 **Manage Assignments** – Create, edit, and delete assignments  

---

### 👨‍🎓 Student Features
- 📄 **Basic Student Dashboard** (customizable)

---

## 🛠️ Tech Stack

### **Frontend**
- ⚛️ React.js  
- ▲ Next.js  

### **Backend**
- 🛢️ Prisma ORM  
- 🐘 PostgreSQL  

### **Authentication**
- 🔐 NextAuth.js v5  

### **Storage**
- 🔥 Firebase Storage  
- 🐬 Supabase  

---

## 📦 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone <your-repo-url>
````

### 2️⃣ Install Dependencies

```bash
npm install
# OR
yarn install
# OR
pnpm install
```

### 3️⃣ Setup Environment Variables

Create `.env` or `.env.local`:

```
DATABASE_URL="your_postgres_url"
NEXTAUTH_SECRET="your_secret"
NEXTAUTH_URL="http://localhost:3000"
FIREBASE_API_KEY=""
SUPABASE_URL=""
SUPABASE_KEY=""
```

### 4️⃣ Generate Prisma Client

```bash
npx prisma generate
```

### 5️⃣ Run Development Server

```bash
npm run dev
# OR
yarn dev
# OR
pnpm dev
```

### 6️⃣ Visit App

➡️ `http://localhost:3000`

---

## 📁 Project Structure

```bash
sms/
│── app/               # Next.js app router pages & APIs
│── components/        # Shared UI components
│── prisma/            # Prisma schema & migrations
│── public/            # Static assets
│── utils/             # Helpers & utility functions
│── styles/            # Global and module styles
│── README.md
```

---

## 📊 Roadmap / Upcoming Enhancements

* 📈 Advanced Dashboard with analytics
* 🗂️ Attendance Management
* 📨 Notifications for students & teachers
* 🎒 Parent Portal
* 📎 File submission module

---

## 🤝 Contributing

Contributions are welcome!
Please open an issue before submitting major updates.

---

## ⭐ Support

If this project helps you, **please ⭐ star the repository** — it encourages future development!

---

<p align="center">
  Made with ❤️ for modern educational systems
</p>
```

---

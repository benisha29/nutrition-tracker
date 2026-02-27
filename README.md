# 🥗 Smart Nutrition Tracker

A full-stack web application that helps users track daily calorie intake, macronutrients, micronutrients, sugar consumption, and overall food quality.

Built using **React, Node.js, Express, and MongoDB**, this project focuses on clean architecture, secure authentication, and scalable API design.

---

## 🚀 Live Demo

*(Add link after deployment)*

---

## 📌 Overview

Smart Nutrition Tracker allows users to:

* Log daily meals
* Track calories and macronutrients
* Monitor sugar and fiber intake
* View daily nutritional summaries
* Analyze trends with charts
* Maintain health goals (weight loss, gain, maintenance)

This project demonstrates full-stack development skills including authentication, REST API design, database modeling, and state management.

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* React Router DOM
* Axios
* Chart.js / Recharts
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs

---

## 🔐 Authentication

* User registration and login
* Password hashing using bcrypt
* JWT-based authentication
* Protected API routes using middleware

---

## 🥗 Features

### Core Features (MVP)

* User authentication (Register / Login)
* Add food entries manually
* Store nutritional values (calories, protein, carbs, fats, sugar, fiber)
* Daily dashboard summary
* Automatic macro calculations
* Visual charts for analytics
* Delete food entries
* Track meal types (Breakfast, Lunch, Dinner, Snacks)

---

## 📊 Dashboard Capabilities

* Total calories consumed
* Total protein, carbs, fats
* Sugar and fiber tracking
* Daily nutrient breakdown
* Interactive data visualization

---

## 🗄 Database Schema

### User

* name
* email (unique)
* hashed password
* weight
* height
* age
* goal (lose/gain/maintain)

### FoodEntry

* userId (reference)
* foodName
* calories
* protein
* carbs
* fats
* sugar
* fiber
* mealType
* date

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/benisha29/smart-nutrition-tracker.git
cd smart-nutrition-tracker
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `/backend`:

```
PORT=5000
MONGO_URI=mongodb_connection_string
JWT_SECRET=secret_key
```

Start backend server:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔄 API Endpoints

### Authentication

* `POST /api/auth/register`
* `POST /api/auth/login`

### Food

* `POST /api/food/add`
* `GET /api/food/today`
* `GET /api/food/history`
* `DELETE /api/food/:id`

---

## 🧠 Learning Objectives

This project was built to:

* Practice full-stack development
* Implement secure JWT authentication
* Design RESTful APIs
* Model MongoDB schemas properly
* Manage global state using React Context
* Create data-driven dashboards

---

## 🚀 Future Improvements

* AI-based food recognition
* Barcode scanner integration
* Micronutrient tracking (vitamins & minerals)
* Weekly & monthly analytics
* Food quality scoring system
* PWA support
* Integration with fitness APIs
* Deployment with CI/CD

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👩‍💻 Author

Benisha Sharma
Full Stack Developer | Computer Science Student

---

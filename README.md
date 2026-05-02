# 🌍 Wanderlust Stays

> A full-stack Airbnb-style web application with listings, OpenStreetMap integration, reviews, and user authentication built using Node.js, Express, and MongoDB.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)

---

## 🌐 Live Demo

🔗 [wanderlust-stays-r1rm.onrender.com](https://wanderlust-stays-r1rm.onrender.com)

---

## 📌 About the Project

**Wanderlust Stays** is a full-stack travel listing web application where users can discover stays, create their own property listings, upload images, leave reviews, and explore locations on an interactive map — all with secure authentication.

Built from scratch as a real-world learning project covering authentication, database design, cloud image storage, form validation, and responsive UI.

---

## ✨ Features

- 🔐 **User Authentication** — Sign up, log in & log out securely with Passport.js
- 🏘️ **Property Listings** — Full CRUD: Create, view, edit, and delete stay listings
- 🖼️ **Image Uploads** — Cloud-based image hosting via Cloudinary
- ⭐ **Reviews** — Authenticated users can post and delete reviews on listings
- 🗺️ **Map Integration** — Interactive OpenStreetMap to explore listing locations
- 🔍 **Search Stays** — Find destinations easily
- 📱 **Responsive Design** — Mobile-friendly UI with Bootstrap
- ✅ **Form Validation** — Server-side schema validation using Joi
- 🛡️ **Authorization** — Only owners can edit/delete their own listings and reviews

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Database** | MongoDB |
| **ODM** | Mongoose |
| **Templating** | EJS |
| **Styling** | Bootstrap |
| **Authentication** | Passport.js |
| **Image Storage** | Cloudinary |
| **Map** | OpenStreetMap |
| **Validation** | Joi |
| **Language** | JavaScript |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- MongoDB (local or MongoDB Atlas)
- Cloudinary account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shubham-kumar0001/wanderlust-stays.git
   cd wanderlust-stays
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_KEY=your_api_key
   CLOUDINARY_SECRET=your_api_secret
   SESSION_SECRET=your_session_secret
   MAP_TOKEN=your_map_api_token
   ```

4. **Seed the database (optional)**
   ```bash
   node init/index.js
   ```

5. **Start the server**
   ```bash
   node app.js
   ```

6. Open `http://localhost:8080` in your browser 🎉

---

## 📁 Project Structure

```
wanderlust-stays/
│
├── .github/workflows/   # CI/CD configuration
├── controllers/         # Route logic (listings, reviews, users)
├── init/                # Database seed data
├── models/              # Mongoose models (Listing, Review, User)
├── public/              # Static assets (CSS, JS, images)
├── routes/              # Express routers
├── utils/               # Async error wrapper, ExpressError
├── views/               # EJS templates
├── app.js               # Main entry point
├── claudConfig.js       # Cloudinary configuration
├── middleware.js        # Auth & validation middleware
├── schema.js            # Joi validation schemas
└── .env                 # Environment variables (not committed)
```

---

## 📸 Screenshots

> *Add screenshots of your app here*

| Home Page | Listing Detail | Map View |
|-----------|---------------|----------|
| ![Home]() | ![Detail]() | ![Map]() |

---

## 🧠 What I Learned

- Building a **RESTful backend** with Express.js and MVC architecture
- **MongoDB & Mongoose** for schema design and data relationships
- **Session-based authentication** with Passport.js (Local Strategy)
- **Cloud image uploads** with Cloudinary & Multer
- **Server-side validation** using Joi schemas
- **OpenStreetMap** integration for interactive maps
- **Middleware patterns** for auth, authorization & error handling
- Deploying a full-stack Node.js app on **Render**

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ by <a href="https://github.com/Shubham-kumar0001">Shubham Kumar</a></p>

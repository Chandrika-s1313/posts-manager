# 📌 Posts Manager (React + Redux Toolkit)

A simple CRUD app built with **React** and **Redux Toolkit**.  
This project demonstrates how to fetch, add, edit, and delete posts using Redux state management.  

⚡ Note: Uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) as a mock API.  
- Fetch works from the API.  
- Add/Edit/Delete update Redux state locally (not persisted after refresh).  

---

## 🚀 Features
- Fetch posts from API
- Add new posts
- Edit posts locally
- Delete posts locally
- State management with Redux Toolkit
- React functional components with hooks

---

## 🛠️ Tech Stack
- **React** (with Hooks)
- **Redux Toolkit**
- **JavaScript (ES6+)**
- **CSS / JSX**

---

## 📂 Project Structure
```
src/
│── features/
│   └── posts/
│       ├── postsSlice.js   # Redux slice
│       ├── PostsList.jsx   # Posts list & edit/delete
│       └── AddPostForm.jsx # Add new post form
│
├── store.js                # Redux store config
├── App.jsx                 # Main component
└── index.jsx               # App entry point
```

---

## ▶️ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/posts-manager.git
cd posts-manager
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the app
```bash
npm start
```

App will run at: **http://localhost:3000**

---

## 📸 Screenshots

_Add screenshot here after running your app (Posts list & Add form)._

---

## 🌐 Deployment
You can deploy this project on:
- [Vercel](https://vercel.com)
- [Netlify](https://www.netlify.com/)

---

## 🤝 Contributing
Feel free to fork this repo and submit pull requests. Suggestions and improvements are welcome!

---

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

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

![SCREENSHOT OF THE APP](<Screenshot 2025-08-26 170039.png>)

## 🌐 Deployment
The project is deployed on 
- [Vercel](https://vercel.com/s-v-l-chandrika-devis-projects/posts-manager/EQTPRs6aGkBS4i3qDvXuoTb4QJC8)

---

## 🤝 Contributing
Feel free to fork this repo and submit pull requests. Suggestions and improvements are welcome!

---

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

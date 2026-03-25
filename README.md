#  Smart Dashboard Application

This is a responsive dashboard application built using React.js. It allows users to view, search, and filter products, along with a detailed product view and form validation.

---

##  Features

* Display products from a public API
* Search products by title
* Filter products by category
* View detailed product information
* Add product using a form with validation
* Fully responsive design (mobile, tablet, desktop)

---

##  Tech Stack

* React.js (Vite)
* Tailwind CSS
* React Router DOM
* Axios
* Joi (for validation)

---

##  Project Structure

```
src/
├── model/        # API and validation logic
├── view/         # UI components
├── controller/   # Pages (Home, Detail, Form)
├── App.jsx
├── main.jsx
└── index.css
```

---

##  Installation & Setup

1. Clone the repository:

```
git clone https://github.com/your-username/smart-dashboard.git
```

2. Install dependencies:

```
npm install
```

3. Run the project:

```
npm run dev
```

---

##  API Used

Fake Store API
https://fakestoreapi.com/

---

##  Approach

* Followed MVC structure for better code organization
* Used reusable components
* Managed state using React hooks
* Implemented responsive UI using Tailwind CSS

---

##  Note

This project uses a public API. Data added through the form is not permanently stored.

---

##  Future Improvements

* Add cart functionality
* Wishlist feature
* Authentication system
* Backend integration


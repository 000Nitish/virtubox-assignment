# VirtuBox Assignment
# Tech Stack

* Frontend: React.js, React Router, Context API, Vite.
* Backend: Node.js, Express.js.
* Database: MongoDB Atlas (Cloud).
* Authentication:JWT, Bcryptjs.

## Project Setup Guide

Follow these steps to run the project locally on your machine.

## Prerequisites
Make sure you have Node.js installed on your system.

# VirtuBox Assignment

## Tech Stack
* **Frontend:** React.js, React Router, Context API, Vite.
* **Backend:** Node.js, Express.js.
* **Database:** MongoDB Atlas (Cloud).
* **Authentication:** JWT, Bcryptjs.

## Project Setup Guide

Follow these steps to run the project locally on your machine.

### Prerequisites
Make sure you have **Node.js** and **Git** installed on your system.

### 1. Clone the Repository
Open your terminal and run the following command to download the code:

```bash
git clone https://github.com/000Nitish/virtubox-assignment.git
cd <YOUR_REPO_NAME>

## 1. Backend Setup (Server)
1.  Open a terminal and navigate to the `backend` folder:
    ```bash
    cd backend
    ```
2.  Install the required dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file inside the `backend` folder and add your MongoDB connection string and JWT Secret:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_atlas_connection_string
    JWT_SECRET=your_secret_string_here
    ```
4.  Start the Backend Server:
    ```bash
    npm start
    ```
   You should see "MongoDB Connected Successfully" in the terminal.

# 2. Frontend Setup 

1.  Open a new terminal and navigate to the `frontend` folder:
    ```bash
    cd frontend
    ```
2.  Install the required dependencies:
    ```bash
    npm install
    ```
3.  Start the React Application:
    ```bash
    npm run dev
    ```
4.  Open the link shown in the terminal in your browser.
---
## Folder Structure

Assingment/
├── backend/            
│   ├── middleware/    
│   ├── models/        
│   ├── routes/         
│   ├── .env           
│   └── server.js     
│
└── frontend/           
    ├── src/
    │   ├── components/ 
    │   ├── context/    
    │   ├── pages/      
    │   └── App.jsx    


# Method,Endpoint,Description

POST,/api/auth/createuser,Register a new user
POST,/api/auth/login,Login user & get Token
GET,/api/notes/fetchallnotes,Fetch all notes of logged-in user
POST,/api/notes/addnote,Add a new note
PUT,/api/notes/updatenote/:id,Update an existing note
DELETE,/api/notes/deletenote/:id,Delete a note
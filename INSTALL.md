# 🛠️ Installation Guide

## 📋 Prerequisites

- Node.js (v18+)
- MongoDB (local or cloud)
- Code editor like VS Code
- Git

## 🚀 Steps

1. **Clone the repo:**

   ```bash
   git clone https://github.com/abhisek2004/MERN-STACK-PROJECT.git
   cd MERN-STACK-PROJECT
   ```

2. **Explore the Projects:**
   This repository contains multiple projects. Each project (e.g., `/client`, `/server`, `/admin`, etc.) is in its own folder.  
   Open the folder of the project you want to run.

3. **Install Dependencies:**
   For each project, you need to install dependencies separately.  
   For example, to set up the main client and server:

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

   Repeat for other folders if needed.

4. **Configure Environment Variables:**

   - Each project may require a `.env` file for configuration (e.g., database URI, API keys).
   - Copy `.env.example` to `.env` in each folder and update the values as needed.

5. **Start MongoDB:**

   - If running locally, make sure MongoDB is running:
     ```bash
     mongod
     ```
   - Or use a cloud MongoDB URI in your `.env` files.

6. **Run the Projects:**

   - **Server:**  
     In the `/server` folder:
     ```bash
     npm start
     ```
   - **Client:**  
     In the `/client` folder (in a new terminal):
     ```bash
     npm start
     ```
   - **Other Projects:**  
     Go into each project folder and run:
     ```bash
     npm start
     ```
     or follow the specific instructions in that folder's README.

7. **Access the Application:**
   - The client (frontend) usually runs at [http://localhost:3000](http://localhost:3000)
   - The server (backend) usually runs at [http://localhost:5000](http://localhost:5000) or as specified in the `.env`

## 📝 Notes

- Always check for a `README.md` in each project folder for additional setup or usage instructions.
- If you face issues, ensure all dependencies are installed and environment variables are set correctly.
- You can run multiple projects simultaneously by opening new terminal windows for each.

---

If you need help with a specific project folder, refer to its documentation or open an issue!

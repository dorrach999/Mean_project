# Mean_project

This is a simple CRUD (Create, Read, Update, Delete) application for managing users. It is built using **Node.js**, **Express.js**, and **MongoDB**. 

## Features
- Add a new user.
- Retrieve all users or a single user by ID.
- Update user information.
- Delete a user.

---

## Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Running locally or hosted)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Initialize the project:
   ```bash
   npm init -y
   ```

3. Install dependencies:
   ```bash
   npm i express mongoose
   npm install dotenv
   ```

## Running the Application
Start the server:
```bash
node app.js
```

The server will run on `http://localhost:3600/api/users`.


// server.js
const express = require("express");
const session = require("express-session");
const RedisStore = require("connect-redis").default;
const redis = require("redis");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
const client = redis.createClient(); // Connect to Redis

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Session Configuration
app.use(
  session({
    store: new RedisStore({ client }),
    secret: "sdfsdjkldsj92", // Use an environment variable
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,  // Mitigates XSS attacks
      secure: process.env.NODE_ENV === 'production',  // Use secure cookies in production
      maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
  })
);

// Mock user
const users = [
  { username: "testuser", password: bcrypt.hashSync("password123", 10) }
];

// Login Route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (user && await bcrypt.compare(password, user.password)) {
    req.session.userId = user.username;  // Store user ID in session
    return res.sendStatus(200);
  }
  return res.status(401).json({ message: "Invalid credentials" });
});

// Protected Route
app.get("/dashboard", (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  return res.json({ message: `Welcome ${req.session.userId}` });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));

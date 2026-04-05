const express = require("express");
const cors = require("cors")
require("dotenv").config()

// ROUTE IMPORTS 
const authRoutes = require("./routes/authRoutes")
const carRoutes = require("./routes/carRoutes")
const enquiryRoutes = require("./routes/enquiryRoutes")
const wishlistRoutes = require("./routes/wishlistRoutes")

const app = express()
const BACKEND_PORT = process.env.BACKEND_PORT;
const FRONTEND_PORT = process.env.FRONTEND_PORT;

// MIDDLEWARE
app.use(cors({
  origin: `http://localhost:${FRONTEND_PORT}`
}))
app.use(express.json())

// ROUTES
app.use("/api/auth", authRoutes)
app.use("/api/cars", carRoutes)
app.use("/api/enquiries", enquiryRoutes)
app.use("/api/wishlist", wishlistRoutes)

// HEALTH CHECK - confirm if server is running.
app.get("/", (req,res) => {
  res.status(200).json({message: "RedBlue Rolls API is running."})
})

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({message: "Something went wrong"})
})

// START SERVER
app.listen(BACKEND_PORT, () => {
  console.log(`Server running on port ${BACKEND_PORT}`)
})
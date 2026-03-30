const express = require("express");
const cors = require("cors")
require("dotenv").config()

const app = express()
const BACKEND_PORT = process.env.BACKEND_PORT;
const FRONTEND_PORT = process.env.FRONTEND_PORT;

app.use(cors({
  origin: `http://localhost:${FRONTEND_PORT}`
}))
app.use(express.json())

app.use("/api/auth", require("./routes/authRoutes"))
app.use("/api/cars",require("./routes/carRoutes"))
app.use("/api/wishlist", require("./routes/wishlistRoutes"))

app.listen(BACKEND_PORT, () => {
  console.log(`Server running on port ${BACKEND_PORT}`)
})
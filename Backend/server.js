const express = require("express");
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", require("./routes/authRoutes"))
app.use("/api/cars",require("./routes/carRoutes"))
app.use("/api/wishlist", require("./routes/wishlistRoutes"))

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
const  express = require("express")
const router = express.Router()
const {signup, login, logout, getLoggedInUser} = require("../controllers/authController")
const {protect} = require("../middleware/authMiddleware")

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)
router.get("/me", protect, getLoggedInUser)

module.exports = router
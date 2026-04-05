const express = require("express")
const router = express.Router()
const {
    fetchAllEnquiries,
    fetchEnquiriesById, 
    fetchEnquiriesByUser, 
    fetchEnquiriesByModel,
    insertEnquiry, 
    editEnquiry, 
    editEnquiryStatus, 
    deleteEnquiry 
} = require("../controllers/enquireController")
const { protect } = require("../middleware/authMiddleware")


// PUBLIC 
router.post("/", insertEnquiry)

// PROTECTED - TOKEN REQUIRED

router.get("/", protect, fetchAllEnquiries)
router.get("/user", protect, fetchEnquiriesByUser)
router.get("/model", protect, fetchEnquiriesByModel)
router.get("/:id", protect, fetchEnquiriesById)
router.put("./:id", protect, editEnquiry)
router.patch("/:id/status", protect, editEnquiryStatus)
router.delete("/:id", protect, deleteEnquiry)

module.exports = router;
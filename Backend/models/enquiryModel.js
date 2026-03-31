const db = require("../config/db")

// GET ALL ENQUIRIES

const getAllEnquries = async () =>{
    const [enquiries] = await db.query("SELECT * FROM enquiries;");
    return enquiries;
}

// GET ENQUIRY BY CATEGORY

const getEnquiryByCategory = async (category) =>{
    const [enquiries] = await db.query("SELECT * FROM enquiries WHERE category = ?", [category])
    return enquiries;
}
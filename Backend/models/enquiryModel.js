    const db = require("../config/db")

    // GET ALL ENQUIRIES

    const getAllEnquries = async () =>{
        const [enquiries] = await db.query("SELECT * FROM enquiries;");
        return enquiries;
    }


    // GET ENQUIRY BY ID

    const getEnquiryById = async (id) =>{
        const [enquiry] = await db.query("SELECT * FROM enquiries WHERE id = ?", [id]);
        return enquiry[0];
    }

    //  GET ENQUIRY BY USER ID

    const getEnquiryByUser = async (user_id) =>{
        const [enquiry] = await db.query("SELECT * FROM enquiries WHERE user_id = ?", [user_id])
        return enquiry; 
    }

    // GET ENQUIRY BY MODEL INTEREST

    const getEnquiriesByModel = async (model_interest) =>{
        const [enquiries] = await db.query("SELECT * FROM enquiries WHERE model_interest = ?", [model_interest])
        return enquiries;
    }

    // CREATE NEW ENQUIRY

    const createEnquiry = async(enquiryData) =>{
        const {user_id, full_name, email, phone, model_interest, message,status="pending"} = enquiryData;
        const [enquiry] = await db.query(
            `INSERT INTO enquiries
            (user_id, full_name, email, phone, model_interest, message, status)
            VALUES(?,?,?,?,?,?,?)`,
        [user_id, full_name, email, phone, model_interest, message,status])
        return enquiry.insertId; // NEW ENQUIRY ID;
    }

    // UPDATE ENQUIRY

    const updateEnquiry = async (id, enquiryData)=>{
        const {user_id, full_name, email, phone, model_interest, message, status} = enquiryData;
        const [result] = await db.query(
            `UPDATE enquiries SET
            user_id = ?, full_name = ?, email = ?, phone = ?, model_interest = ?, message = ?, status = ?
            WHERE id = ? `, [user_id, full_name, email, phone, model_interest, message, status, id])
            return result.affectedRows;
    }

    // UPDATE ENQUIRY STATUS

    const updateEnquiryStatus = async (id, status) =>{
        const [enquiry] = await db.query("UPDATE enquiries SET status = ? where id = ?", [status,id]);
        return enquiry.affectedRows;
    }

    // DELETE ENQUIRY 

    const removeEnquiry = async (id) => {
        const [enquiry] = await db.query("DELETE FROM enquiries WHERE id = ?", [id])
        return enquiry.affectedRows;
    }


    module.exports = {getAllEnquries, getEnquiryById, getEnquiryByUser, getEnquiriesByModel, createEnquiry, updateEnquiry, updateEnquiryStatus, removeEnquiry};
const {getAllEnquiries, getEnquiryById, getEnquiryByUser, getEnquiriesByModel, createEnquiry, updateEnquiry, updateEnquiryStatus, removeEnquiry} = require("../models/enquiryModel")

// GET ENQUIRIES


// DELETE ENQUIRIES

const removeEnquiry = async(req,res) => {
    try{
        const deleted = await removeEnquiry(req.params.id);
        if(!deleted) return res.status(404).json({message:"Enquiry not found."})
        res.status(200).json({message: "Enquiry deleted"})
    }catch (err){
        res.status(500).json({message: "Failed to delete Enquiry."})
    }
}

module.exports = {removeEnquiry}
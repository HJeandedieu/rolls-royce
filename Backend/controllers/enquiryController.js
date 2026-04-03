const {getAllEnquiries, getEnquiryById, getEnquiryByUser, getEnquiriesByModel, createEnquiry, updateEnquiry, updateEnquiryStatus, removeEnquiry} = require("../models/enquiryModel")

// GET ALL ENQUIRIES

const getAllEnquiries = async (req, res) => {
    try{
        const {enquiries} = await getAllEnquiries();
        res.status(200).json(enquiries)
    }catch(err){
        res.status(500).json({message:"Failed to fetch enquiries"})
    }
}

// GET ENQUIRY BY ID

const getEnquiriesById = async (req,res) =>{
    try{
        const id = req.params.id;
        const {enquiry} = await getEnquiryById(id);
        res.status(200).json(enquiry)
    }catch(err){
        res.status(500).json({message:"Couldn't find Enquiry"})
    }
}

// GET ENQUIRIES BY USER

const getEnquiryByUser = async(req, res) => {
    try{
        const {user} = req.query;
        const {enquiries} = await getEnquiryByUser();
        res.status(200).json(enquiries)
    }catch(err){
        res.status(500).json({message:"Failed to fetch Enquiry"})
    }
}

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
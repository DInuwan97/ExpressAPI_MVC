
const Customer = require('../Models/CustomerModel');

/**
 * Implemented for get all document in the database
 * @param {HTTP request} req 
 * @param {HTTP response} res 
 * sends response with all documents in the database
 */
 exports.getCustomers = async (req, res) => {

    try {
        const results = await Customer.find()
        if(results)
            res.status(200).json(results)
        else
            res.status(404).json({message:'No customer Exsists'})
            
    } 
    catch (err) {
        res.status(400).json({
            error: err,
            message: 'No customer Exsists',
        });
    }
};



/**
 * Implemented for get specific document in the database
 * @param {HTTP request} req 
 * @param {HTTP response} res 
 * sends response with single documents in the database
 */
 exports.getCustomer = async (req, res) => {
    try {
        const result = await Customer.findOne({_id:req.params.id})
        if(result)
            res.status(200).json(result)
        else
            res.status(404).json({message:'Empty'})
            
    } 
    catch (err) {
        res.status(400).json({
            error: err,
            message: 'No customer Exsists',
        });
    }
};
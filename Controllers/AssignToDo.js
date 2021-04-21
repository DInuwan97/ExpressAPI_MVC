
const AssignToDo = require('../Models/IsAssignToModel');

/**
 * Implemented for get all document in the database
 * @param {HTTP request} req 
 * @param {HTTP response} res 
 * sends response with all documents in the database
 */
 exports.getAssignToDos = async (req, res) => {

    try {
        const results = await AssignToDo.find()
        if(results)
            res.status(200).json(results)
        else
            res.status(404).json({message:'No Data'})
            
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
 exports.getAssignToDo = async (req, res) => {
    try {
        const result = await AssignToDo.findOne({_id:req.params.id})
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
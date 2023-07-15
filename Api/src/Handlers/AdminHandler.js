const { Admin } = require('../db');



const STATUS_OK =200;
const STATUS_CREATED = 201; 
const STATUS_ERROR=404;

async function getRegistroAdmin(req,res){
    try {
        const admin = await Admin.findAll();
        if(!admin.length)
        res.status(STATUS_ERROR).json({message:'no hay datos en la Bd'})
        else
        res.status(STATUS_OK).json(admin)
        console.log(admin)
    } catch (error) {
        res.status(STATUS_ERROR).json({message:'error al obtener los datos'})
    }
}
 
async function postAdmin(req, res){
    const {nombre, numeroIdentificacion, fechaNacimiento, email, password, tipo} = req.body

    try {
        if(!nombre || !numeroIdentificacion || !fechaNacimiento || !email || !password){
            return res.status(STATUS_ERROR).json({message:'se requieren mas datos'})
        }

       
        const newAdmin = await Admin.create({
            nombre,
            numeroIdentificacion,
            fechaNacimiento,
            email,
            password,
            tipo:'admin',
        })
        
        res.status(STATUS_CREATED).json(newAdmin)
    } catch (error) {
        res.status(STATUS_ERROR).json({message:`error al crear el usuario Admin ${error}`});
    }
}

module.exports={
    getRegistroAdmin,
    postAdmin,
}
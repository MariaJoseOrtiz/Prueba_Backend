
const {response}= require('express')
const Usuario = require('../models/usuario')
const bcryptjs = require('bcryptjs')
const {generarJWT}= require('../helpers/generiar-jwt')
const googleVerify = require('../helpers/google-verify')

const login =async(req,res= response)=>{

  const{correo,password}=req.body
  try{
    //verificar el email
    const usuario = await Usuario.findOne({correo});
    if (!usuario){
      return res.status(400).json({
        msg: 'Usuario / Password no son correctos - correo'
      })
    }
    //si el usuario esta activo
    if(!usuario.estado){
      return res.status(400).json({
        msg:'Usuario / Password no son correctos - usuario'
      })
    }
    // verificar contrasena
    const validPassword = bcryptjs.compareSync(password,usuario.password);
    if(!validPassword){
      return res.status(400).json({
        msg:'Usuario / Password no son correctos - password'
      })
    }
    //generar el jwt
    const token = await generarJWT(usuario.id);
    res.json({
      msg:'login ok ',
      usuario,
      token
    })

  }catch(error){
    console.log(error)
    return res.status(500).json({
      msg:'Hable con el administrador'
    })
  }
  
 
}
const googleSignin = async(req, res = response) =>{

const {id_token}=req.body

  try{
    const {correo, img,nombre } =  await googleVerify(id_token);
    let usuario = await Usuario.findOne({correo});
    if(! usuario){
      const data ={
        nombre,
        correo,
        password: ':p',
        img,
        google: true
      }
      usuario = new Usuario(data);
      await usuario.save();
    }

    if(!usuario.estado){
      return res.status(401).json({
        msg: 'Hable con el administrador,usuario bloqueado'
      })
    }
    const token = await generarJWT(usuario.id);

    res.json({
      msg: 'Todo ok google signin',
      usuario,
      token
      
    })

  }catch{

    res.status(400).json({
      msg: 'token de google no es valido'
    })

  }

 

}

module.exports = { login, googleSignin

}
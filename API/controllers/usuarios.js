const {response, query}=require('express');
const Usuario =require('../models/usuario')
const bcryptjs=require('bcryptjs')

const usuariosGet = async(req, res = response)=> {

  const {limite = 5, desde = 0} = req.query;

    const [total,usuarios] = await Promise.all([
      Usuario.countDocuments({estado: true}),
      Usuario.find({estado: true})
      .skip(Number(desde))
      .limit(Number(limite))
    ])

  res.json({
    total,
    usuarios
  });
}

const usuariosPost = async(req, res = response)=> {

  const {nombre,correo,password,rol} = req.body;
  const usuario = new Usuario({nombre,correo,password,rol});
  //hacer hash
  const salt = bcryptjs.genSaltSync();
  usuario.password=bcryptjs.hashSync(password,salt);

  //guardar en base de datos 
  await usuario.save();

  res.json({
    usuario
  });
}

const usuariosPut = async(req, res = response)=> {
  
  const {id}= req.params;

  const {_id,password,google,...resto}=req.body;
  //todo validar contra base de datos
  if(password){
    const salt = bcryptjs.genSaltSync();
    resto.password=bcryptjs.hashSync(password,salt);
  }
  const usuario = await Usuario.findByIdAndUpdate(id,resto);

  res.json({
    usuario
  })
}

const usuariosDelete=async (req, res = response)=> {
  const{id}=req.params;
  //si se quiere borrar fisicamente en la base de datos 
  //este no es recomendado ya que se pierde la integridad de los datos
  //const usuario = await Usuario.findByIdAndDelete(id)

  // cambiando el estado a false para indicar que esta eliminado 
  const usuario = await Usuario.findByIdAndUpdate(id,{estado:false})
  
  res.json({usuario });
}



module.exports={
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
}
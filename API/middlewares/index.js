
const validaRoles= require('./validar-roles')
const validarCampos=require('./validar-campos')
const  validarJWT= require('./validar-jwr')

module.exports={
  ...validarCampos,
  ...validarJWT,
  ...validaRoles
}
'use strict'
const User = use('App/Models/User');// hago la importacion de Modelo

class UserController {


    //store es el nombre puede ser cualquier para guardar o create
   async  crear({request,response}){
    
   

        const nombreusuario = request.input('nombreusuario');
        const apellido =request.input('apellido');
        const edad = request.input('edad');
        const ocupacion = request.input('ocupacion')

        const usuario= await User.create({

           nombreusuario:nombreusuario,
           apellido:apellido,
           edad:edad,
           ocupacion:ocupacion
        })
        return response.status(200).json(usuario)
};


    async obtenerTodos({ request, response }) {
        
        const usuario1 = await User
        .query()
        .fetch()

        return response.status(200).json(usuario1)
}

async obtenerUnUsuario({ request, response,params }) {
  //  const obtenerUno = await User.find(params.id)
    // await User
    //.query()
    //.where('id',params.id)
    //.first()
    //return response.status(200).json(obtenerUno);
  
    const un = await User.find(params.id)
    return response.status(200).json(un);
}

async actualizarUsuario({request,response,params}){

  

    const actualizarusuario = await User.find(params.id)
    actualizarusuario.nombreusuario=request.input('nombreusuario')
    actualizarusuario.apellido=request.input('apellido')
    actualizarusuario.edad=request.input('edad')
    actualizarusuario.ocupacion=request.input('ocupacion')
    actualizarusuario.save();

    return response.status(200).json(actualizarusuario)
}

async borrar({request,response,params}){


    const borrar = await User.find(params.id)
    await borrar.delete();
    return response.status(200).json(borrar)
    
 

}




}

module.exports = UserController

'use strict'
const Tarea = use('App/Models/Tarea');
class TareaController {

    async  crear({request, response}){
  
          const usuario_id = request.input('usuario_id');
          const nombretarea=request.input('nombretarea');
     
  
          const tarea= await Tarea.create({
  
            usuario_id:usuario_id,
            nombretarea:nombretarea,
            
          })
          return response.status(200).json(tarea)

  };

  async obtenerTodos({ request, response }) {
        
    const tarea = await Tarea
    .query()
    .fetch()

    return response.status(200).json(tarea)
}


async obtenerUnaTarea({ request, response,params }) {
   
    
      const una = await Tarea.find(params.id)
      return response.status(200).json(una);
  }


  async actualizar({request,response,params}){

  

    const actualizar = await Tarea.find(params.id)
    
    actualizar.usuario_id=request.input('usuario_id')
    actualizar.nombretarea=request.input('nombretarea')
    actualizar.save();

    return response.status(200).json(actualizar)
}


async borrar({request,response,params}){


    const borrar = await Tarea.find(params.id)
    await borrar.delete();
    return response.status(200).json(borrar)
 

}
}

module.exports = TareaController

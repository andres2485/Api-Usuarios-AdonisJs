'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


// rutas para crear usuario

Route.group(() => {


    Route.post('usuarios/crear', 'UserController.crear');
    //  Route.post('usuarios/login','UserController.login');
    Route.get('usuarios/obtener', 'UserController.obtenerTodos');
    Route.get('usuarios/obtenerunusuario/:id', 'UserController.obtenerUnUsuario');
    Route.put('usuarios/actualizar/:id', 'UserController.actualizarUsuario');
    Route.delete('usuarios/borrar/:id', 'UserController.borrar');

}).prefix('api/v1');




// rutas para tareas
Route.group(() => {


    Route.post('crear', 'TareaController.crear');
    Route.get('obtener', 'TareaController.obtenerTodos');
    Route.get('obtenerunatarea/:id', 'TareaController.obtenerUnaTarea');
    Route.put('actualizar/:id', 'TareaController.actualizar');
    Route.delete('borrar/:id', 'TareaController.borrar');


  

}).prefix('api/tarea');
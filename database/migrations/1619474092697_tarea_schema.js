'use strict'

const Schema = use('Schema')

class TareaSchema extends Schema {
  up () {
    this.create('pruebaTest.tarea', (table) => {
      table.increments('id')
      table.text('nombretarea').notNullable()
      table.integer('usuario_id').notNullable()
    
      table.timestamps()
    })
  }

  down () {
    this.drop('tarea')
  }
}

module.exports = TareaSchema

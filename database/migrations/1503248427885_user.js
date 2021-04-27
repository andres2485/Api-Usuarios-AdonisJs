'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('pruebaTest.users', (table) => {
      table.increments()
      table.string('nombreusuario', 80).notNullable()
      table.string('apellido', 254).notNullable()
      table.integer('edad').notNullable()
      table.string('ocupacion', 254).notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema

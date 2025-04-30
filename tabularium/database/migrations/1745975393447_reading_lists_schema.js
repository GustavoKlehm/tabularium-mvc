'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReadingListsSchema extends Schema {
  up () {
    this.create('reading_lists', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('reading_lists')
  }
}

module.exports = ReadingListsSchema

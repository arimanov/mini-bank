import { Knex } from 'knex';

exports.up = function(knex: Knex) {
  return knex.schema
    .createTable('customers', function (table) {
      table.uuid("id").primary();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("password").notNullable();
      table.date("createdAt").notNullable();
    })
    .createTable('accounts', function (table) {
      table.uuid("id").primary();
      table.string('accountName').notNullable();
      table.uuid('customerId')
        .unsigned()
        .index()
        .references('id')
        .inTable('customers')
        .notNullable();
    });
};

exports.down = function(knex: Knex) {
  return knex.schema
    .dropTable("customers")
    .dropTable("accounts");
};
const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config])

knex.raw("SELECT 1").then(() => {
    console.log("MySQL is connected.");
})
.catch((e) => {
    console.log("MySQL is not connected.");
    console.error(e);
});

module.exports = knex
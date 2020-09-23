
exports.seed = async function(knex) {
    await knex('users').truncate()
    .then()
      .insert([
          {
            username: 'student',
            password: 'student',
            role: 'student'
          },
          {
            username: 'helper',
            password: 'helper',
            role: 'helper'
          },
          {
            username: 'student2',
            password: 'student2',
            role: 'student'
          }
      ])
}

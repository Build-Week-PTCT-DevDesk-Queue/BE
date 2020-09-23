
exports.seed = async function(knex) {
    await knex('users').insert([
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


exports.seed = function(knex) {
    knex('users').truncate()
    .then(function() {
      return knex('users').insert([
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
  })
}

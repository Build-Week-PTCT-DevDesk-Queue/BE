
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
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
      ]);
    });
};

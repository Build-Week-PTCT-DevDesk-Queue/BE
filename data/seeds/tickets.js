
exports.seed = async function(knex) {
    await knex('tickets').insert([
        {
          user_id: 1,
          helper_id: null,
          title: 'Issues deploying to Heroku',
          description: 'getting connection refused errors when I try to run migrations on the pg database',
          tried: 'set environment variables in settings, installed postgres',
          category: 'Node',
          status: false
        },
        {
          user_id: 3,
          helper_id: null,
          title: 'How to center a div?',
          description: 'Trying to center a div in CSS',
          tried: 'Google, W3Schools',
          category: 'CSS',
          status: false
        },
        {
          user_id: 1,
          helper_id: null,
          title: 'How do I configure knex for testing?',
          description: 'I\'d like to set up a separate database for testing purposes',
          tried: 'stack overflow, knex docs',
          category: 'Node',
          status: false
        },
        {
          user_id: 3,
          helper_id: null,
          title: 'Need help with Redux',
          description: 'How do you set up reducers in a React app?',
          tried: 'Google, stack overflow',
          category: 'React',
          status: false
        },
    ])
}
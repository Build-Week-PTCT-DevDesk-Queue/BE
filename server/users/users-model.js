const db = require('../../data/config');

function find(){
    return db('users').select('id', 'username', 'role');
};

function findById(id){
    return db('users')
        .where({id})
        .select('id', 'username', 'role')
        .first()
};

function findBy(filter){
    return db('users')
        .where(filter)
};

function add(user){
    return db('users').insert(user).returning('*');
};

module.exports = {
    find, 
    findBy,
    findById,
    add
};
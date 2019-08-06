const EntitySchema = require('typeorm').EntitySchema;
const Caller = require('../entity/Caller').Caller;

module.exports = new EntitySchema({
    name: 'Caller',
    target: Caller,
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
            unique: true
        },
        name: {
            type: 'varchar',
            length: 100
        },
        age: {
            type: 'int'
        },
        // TODO: change this to enum/separate table
        martial_status: {
            type: 'varchar',
            length: 10
        },
        call_counter: {
            type: 'int'
        },
        // TODO: change this to enum/separate table
        plan_involment: {
            type: 'varchar',
            length: 10
        }
    },
    relations: {
        gender: {
            target: 'Gender', // Gender entity
            type: 'many-to-one',
            joinColumn: 'gender',
            cascade: true
        },
        volonteer: {
            target: 'Volonteer', // Volonteer entity
            type: 'many-to-one',
            joinColumn: 'volonteer',
            cascade: true
        }
    }
});

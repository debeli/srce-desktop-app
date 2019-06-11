const EntitySchema = require('typeorm').EntitySchema;
const Caller = require('../entity/Caller').Caller;
const Gender = require('../entity/Gender').Gender;

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
        }
    },
    relations: {
        gender: {
            target: 'Gender',
            type: 'many-to-one',
            joinColumn: 'gender',
            cascade: true
        }
    }
});

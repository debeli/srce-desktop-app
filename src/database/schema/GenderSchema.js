const EntitySchema = require('typeorm').EntitySchema;
const Gender = require('../entity/Gender').Gender;

module.exports = new EntitySchema({
    name: 'Gender',
    target: Gender,
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
            unique: true
        },
        gender: {
            type: 'varchar',
            length: 10
        }
    }
});

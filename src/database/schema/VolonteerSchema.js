const EntitySchema = require('typeorm').EntitySchema;
const Volonteer = require('../entity/Volonteer').Volonteer;

module.exports = new EntitySchema({
    name: 'Volonteer',
    target: Volonteer,
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
            unique: true
        },
        name: {
            type: 'varchar',
            length: 50
        }
    }
});

const EntitySchema = require('typeorm').EntitySchema;
const Call = require('../entity/Call').Call;

module.exports = new EntitySchema({
    name: 'Call',
    target: Call,
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        }
    }
});

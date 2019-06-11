/* eslint-disable no-console */
/**
 * Database helper
 * ATM everything will be here
 */
// IMPORTS
const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const typeorm = require('typeorm');

const dbName = '/srce.db';
const pathToDatabase = path.join(__dirname, dbName);

// Entitys

const Gender = require('./entity/Gender').Gender;

const Caller = require('./entity/Caller').Caller;

function checkIfDatabaseExists() {
    fs.access(pathToDatabase, fs.F_OK, e => {
        if (e) {
            module.exports.CreateDatabase();
        } else {
            console.log('Already created');
        }
    });
}

exports.databaseAutomation = () => {
    checkIfDatabaseExists();
    this.ConnectToDb();
};

exports.CreateDatabase = () => {
    // eslint-disable-next-line no-unused-vars
    const db = new sqlite3.Database(pathToDatabase, e => {
        if (e) {
            console.error(e.message);
        } else {
            console.log('Created new db!');
        }
    });
};

exports.DeleteDatabae = () => {
    fs.unlink(pathToDatabase, e => {
        if (e) {
            console.log(e.message);
            return;
        }
        console.log(`Database removed: ${pathToDatabase}`);
    });
};

exports.ConnectToDb = () => {
    typeorm
        .createConnection()
        .then(() => {
            console.log('connected');
        })
        .catch(e => {
            console.log(e);
        });
};

async function saveToDb(entity, data) {
    const repo = typeorm.getRepository(entity);

    try {
        await repo.save(data);
    } catch (error) {
        console.log(error);
    }
}

async function readFormDb(entity, data) {
    const repo = typeorm.getRepository(entity);
    let result;
    try {
        result = repo.find(data);
    } catch (error) {
        console.log(error);
    }
    return result;
}

exports.populateGender = () => {
    const male = new Gender('male');
    saveToDb('Gender', male);
    const female = new Gender('female');
    saveToDb('Gender', female);
    const any = new Gender('any');
    saveToDb('Gender', any);
};

exports.addDjole = () => {
    readFormDb('Gender', { gender: 'male' }).then(data => {
        const caller = new Caller('Djole', data[0].id);
        saveToDb('Caller', caller);
    });
};

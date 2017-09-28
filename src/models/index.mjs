"use strict";

import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

let sequelize;
var db        = {sequelize, Sequelize};

// Import all models automatically
fs
    .readdirSync(__dirname)
    .filter(file => (file.indexOf(".") !== 0) && (file !== "index.js"))
    .forEach(file => {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

// Build model associations
Object.keys(db).forEach(modelName => {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

// export shared model container
export default db;
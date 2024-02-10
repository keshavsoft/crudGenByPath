// import { StartFunc as StartFuncInitializeSequelize } from "../../../src/ksSample/kSequelize/modals/RetSeqWithTableNames.js";
// import { StartFunc as StartFuncInitializeSequelize } from "../../../../../src/ksSample/kSequelize/modals/RetSeqWithTableNames.js";

import { Sequelize, DataTypes } from "sequelize";
import Configjson from '../../../../../src/Config.json' assert { type: 'json' };
import tableNameJson from '../../../../../src/ksSample/tableName.json' assert { type: 'json' };
import dotenv from 'dotenv';
dotenv.config();

let commonJonPth = Configjson.JsonPath;
let commonDbName = Configjson.DbName;
let CommonsequelizeConfig = Configjson.sequelizeConfig;

let StartFunc = async () => {
    const sequelize = await LocalFuncForTableNames();

    sequelize.sync({ force: true });

};

let LocalFuncForTableNames = async () => {
    let LocalTableName = tableNameJson.tableName;
    let LocaltableAndColumns = Configjson.sequelizeConfig.tableAndColumns;

    const sequelize = await LocalFuncFotInitiallize();

    let LocalColumnsNeeded = LocaltableAndColumns.find(element => element.tableName === LocalTableName);

    Object.entries(LocalColumnsNeeded.tableColumns).forEach(
        ([key, value]) => {
            if (value.type === "STRING") {
                value.type = DataTypes.STRING;
            };

            if (value.type === "NUMBER") {
                value.type = DataTypes.NUMBER;
            };
        }
    );

    sequelize.define(LocalTableName, LocalColumnsNeeded.tableColumns, { freezeTableName: true });

    return await sequelize;
};

let LocalFuncFotInitiallize = async () => {
    let sequelize;

    try {
        if (CommonsequelizeConfig.isMysql) {
            if ("KS_PASSWORD_FORMYSQL" in process.env === false) {
                console.log("KS_PASSWORD_FORMYSQL not found in .env file");
                return await false;
            };

            sequelize = new Sequelize(Configjson.sequelizeConfig.DbName,
                'root',
                process.env.KS_PASSWORD_FORMYSQL,
                {
                    host: 'localhost',
                    dialect: 'mysql'
                });

            return await sequelize;
        };

        sequelize = new Sequelize({
            dialect: 'sqlite',
            logging: false,
            storage: `${commonJonPth}/${commonDbName}` // You can specify the path for your SQLite database file
        });
    } catch (error) {
        return await { KTF: false, KReason: error, ErrorFrom: process.cwd() };
    };

    return await sequelize;
};

StartFunc();
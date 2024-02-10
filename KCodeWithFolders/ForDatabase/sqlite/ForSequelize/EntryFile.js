import { Sequelize, DataTypes } from "sequelize";
import fs from "fs";

let StartFunc = async ({ inColumnsJson, inFrom }) => {
    let LocalColumnsJson = inColumnsJson;

    let LocalFileName = "Config.json";
    let LocalFrom = inFrom;

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalFileName}`);
    let LocalfileNameJsonData = JSON.parse(LocalFileData);
    let LocalDataPk = LocalfileNameJsonData.ToDataDetails.DataPk;

    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: `${LocalfileNameJsonData.ToDataDetails.DataPath}/${LocalDataPk}/${LocalfileNameJsonData.ToDataDetails.DbName}` // You can specify the path for your SQLite database file
    });

    LocalColumnsJson.forEach(element => {
        Object.entries(element.tableColumns).forEach(
            ([key, value]) => {
                if (value.type === "STRING") {
                    value.type = DataTypes.STRING;
                };

                if (value.type === "NUMBER") {
                    value.type = DataTypes.NUMBER;
                };
            }
        );

        sequelize.define(element.tableName, element.tableColumns, { freezeTableName: true });
    });

    sequelize.sync({ force: true });
};

export { StartFunc };
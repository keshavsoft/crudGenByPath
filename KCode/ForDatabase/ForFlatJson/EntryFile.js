import fs from "fs-extra";
import ConfigJson from '../../../src/Config.json' assert {type: 'json'};

let StartFunc = ({ inTablesCollection, inDataPk }) => {
    let LocalTablesCollection = inTablesCollection;
    let LocalDataLocation = `${ConfigJson.ToDataDetails.DataPath}/${ConfigJson.ToDataDetails.DataPk}`;

    LocalTablesCollection.forEach(element => {
        fs.writeFileSync(`${LocalDataLocation}/${element.tableName}.json`, JSON.stringify({}));
    });
};

export { StartFunc };

import fs from "fs-extra";
import ConfigJson from '../../../../src/Config.json' assert {type: 'json'};

let StartFunc = ({ inTablesCollection }) => {
    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element
    });

    LocalFirstLevelFolders.forEach(element => {
        fs.mkdirSync(element.path.replace("FromTableColumns", ConfigJson.ToDataDetails.DataPath));
    });
};

export { StartFunc };

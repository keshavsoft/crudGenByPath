import fs from "fs-extra";
import ConfigJson from '../../../../src/Config.json' assert {type: 'json'};

let StartFunc = ({ inTablesCollection }) => {
    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element;
    });

    LocalFirstLevelFolders.forEach(LoopFirstLevel => {
        let LocalSecondLevelFiles = LoopFirstLevel.children.filter(element => {
            return "children" in element === false;
        });

        LocalSecondLevelFiles.forEach(LoopSecondLevel => {
            fs.writeFileSync(LoopSecondLevel.path.replace("FromTableColumns", ConfigJson.ToDataDetails.DataPath), JSON.stringify({}));
        });
    });
};

export { StartFunc };

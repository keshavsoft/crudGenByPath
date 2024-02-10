import dirTree from "directory-tree";

let CommonFromFolderName = "FromTableColumns";
import ConfigJson from '../../src/Config.json' assert {type: 'json'};

let StartFunc = () => {
    let LocalDataPk = ConfigJson.ToDataDetails.DataPk;
    let LocalDataPath = `${CommonFromFolderName}/${LocalDataPk}`;
    const tree = dirTree(LocalDataPath);

    // console.log("aaaaaaaa : ", tree, LocalDataPath);

    return tree;
};

export { StartFunc };

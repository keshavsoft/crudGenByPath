import fs from "fs-extra";

let StartFunc = ({ inTablesCollection, inFrom, inTo }) => {
    let LocalTo = inTo;

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element
    });


    let LocalFileName = "routesTemplate.js";
    let LocalFrom = inFrom;

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalFileName}`);
    // let LocalFileDataParsed = JSON.parse(LocalFileData);

    LocalFirstLevelFolders.forEach(element => {
        // fs.mkdirSync(element.path.replace("FromTableColumns", ConfigJson.ToDataDetails.DataPath));
        fs.writeFileSync(`${LocalTo}/${element.name}/routes.js`, LocalFileData);
    });
};

export { StartFunc };

import fs from 'fs';

let StartFunc = ({ inElement, inColumnsArray, inFrom, inTo }) => {
  let LocalFileName = "Config.json";
  let LocalFrom = inFrom;
  let LocalTo = inTo;

  let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalFileName}`);
  let LocalfileNameJsonData = JSON.parse(LocalFileData);
  LocalfileNameJsonData.DbName = "data.db";

  fs.writeFileSync(`${LocalTo}/${LocalFileName}`, JSON.stringify(LocalfileNameJsonData));
};

export { StartFunc };
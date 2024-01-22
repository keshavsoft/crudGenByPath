import { StartFunc as StartFuncreadFile } from '../../kSequelize/ReadFileList/readFile.js';
import { StartFunc as StartFunreadFileFromId } from '../../kSequelize/ReadFileList/readFileFromId.js';
import { dataColumns } from '../../kSequelize/modals/prepareColumns.js';
// import { dataColumns } from '../../kSequelize/modals/prepareColumns.js';

let GetFunc = async () => {
    return await StartFuncreadFile();
};

let GetFuncById = async ({ inId }) => {
    return await StartFunreadFileFromId({ inId });
};

let GetBodyCheckFunc = async () => {
    return dataColumns;
};

export {
    GetFunc, GetBodyCheckFunc, GetFuncById
};
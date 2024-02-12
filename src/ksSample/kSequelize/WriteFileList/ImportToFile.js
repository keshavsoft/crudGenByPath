import { StartFunc as StartFuncInitializeSequelizeWithTableName } from '../modals/initializeSequelizeWithTableName.js';

let StartFunc = async ({ inDataToInsert }) => {
    const LocalTableData = await StartFuncInitializeSequelizeWithTableName();

    if ("KTF" in LocalTableData) {
        if (LocalTableData.KTF === false) {
            return await LocalTableData;
        };
    };

    try {
        const LocalFromBuild = await LocalTableData.bulkCreate(inDataToInsert);

        return await LocalFromBuild;
    } catch (error) {
        return await { KTF: false, KReason: error, ErrorFrom: process.cwd() };
        // return await error;
    };
};

export { StartFunc };


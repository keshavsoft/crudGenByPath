// import { StartFunc as StartFuncInitializeSequelize } from "../../../src/ksSample/kSequelize/modals/RetSeqWithTableNames.js";
import { StartFunc as StartFuncInitializeSequelize } from "../../../../../src/ksSample/kSequelize/modals/RetSeqWithTableNames.js";

let StartFunc = async () => {
    const sequelize = await StartFuncInitializeSequelize();

    sequelize.sync({ force: true });
};

StartFunc();
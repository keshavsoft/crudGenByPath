import { Sequelize } from "sequelize";
import Configjson from '../Config.json' assert { type: 'json' };

let commonJonPth = Configjson.JsonPath;
let commonDbName = Configjson.DbName;
let CommonsequelizeConfig = Configjson.sequelizeConfig;

let StartFunc = async () => {
    let sequelize;

    try {
        if (CommonsequelizeConfig.isMysql) {
            if ("KS_PASSWORD_FORMYSQL" in process.env === false) {
                console.log("KS_SECRET_FORLOGIN not found in .env file");
                return await false;
            };

            sequelize = new Sequelize(Configjson.sequelizeConfig.DbName,
                'root',
                process.env.KS_PASSWORD_FORMYSQL,
                {
                    host: 'localhost',
                    dialect: 'mysql'
                });

            return await sequelize;
        };

        sequelize = new Sequelize({
            dialect: 'sqlite',
            logging: false,
            storage: `${commonJonPth}/${commonDbName}` // You can specify the path for your SQLite database file
        });
    } catch (error) {
        return await { KTF: false, KReason: error, ErrorFrom: process.cwd() };
    };

    return await sequelize;
};

export { StartFunc };
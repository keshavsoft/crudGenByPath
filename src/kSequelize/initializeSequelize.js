import { Sequelize } from "sequelize";
import Configjson from '../Config.json' assert { type: 'json' };

let commonJonPth = Configjson.JsonPath;
let commonDbName = Configjson.DbName;
let CommonsequelizeConfig = Configjson.sequelizeConfig;

let StartFunc = async () => {
    let sequelize;

    try {
        if (CommonsequelizeConfig.isMysql) {
            sequelize = new Sequelize(Configjson.sequelizeConfig.DbName,
                'root',
                'Keshav@12345',
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
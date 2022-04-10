import { Sequelize } from "sequelize";
import config from '../dotenv/config.js';


const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPasswd,  {
  dialect: 'postgres',
  host: 'localhost',
  logging: false
})

async function testDb() {
  try {
    sequelize.authenticate();
    console.log('the database is connected successfully');
  } catch (err) {
    console.log(err);
  }
}

testDb();

export default sequelize;









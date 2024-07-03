import "dotenv/config";
import config from './config';
import app from "./app";
import { Database } from "./config/database";

const db = new Database();
(
  async () => {
    await db.connection(process.env.DATABASE_URL)
  }
)()
app.listen(8000, () => {
  console.log(`SERVER RUNNING ON - ${process.env.APP_URL + ":" + config.port}`);
});

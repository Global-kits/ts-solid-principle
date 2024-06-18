import express from "express";
import routes from "./routes";
import helmet from "helmet";

const app = express();
app.use(helmet());

routes(app);
app.get("/", (req, res) => {
  return res.json("hi");
});

export default app;

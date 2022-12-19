var express = require('express');
const cors = require("cors");
const dotEnv = require("dotenv");
const zoomRouter = require("./router/zoomRouter");
const app = express();

//registering middlewares
dotEnv.config();
app.use(cors());
app.use(express.json());

//registering routes
app.use("/zoomapi", zoomRouter);

//listening to port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
const express = require("express")
const router = require("./routes/router")
const app = express();
const cookieParser = require("cookie-parser");
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("../docs/swagger.json");

app.use(express.json());
app.use(cookieParser());
app.get("/documentation.json", (req, res) => res.send(swaggerDocument));
app.use("/documentation", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

module.exports = router.apply(app);

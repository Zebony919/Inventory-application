const express = require("express");
const app = express();
const path = require("path");

const indexRouter = require("./routes/indexRouter.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }

  console.log(`Express Listening At PORT ${PORT}`);
});

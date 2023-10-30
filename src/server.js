const app = require("./app");
const { connectDB } = require("./utils/connectDB");
const port = process.env.PORT;
require("dotenv").config();

app.listen(port, async () => {
  console.log(`Server connected with - http://localhost:${port}`);
  connectDB();
});

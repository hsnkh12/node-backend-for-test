const express = require("express");
const app = express();



app.use("", (req, res) => {

	return res.json({"message":"index"});

})


app.listen(80);

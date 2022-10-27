const express = require('express');
const AppConfig = require('./src/config/app');
const app = express();

const PORT = AppConfig.PORT;
require('./src/router')(app);

app.listen(PORT, () => console.log(`server is running with port ::: ${PORT}`))

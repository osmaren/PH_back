import app from './app'
const PORT = process.env.PORT || 3001;
const database = require("./database");

app.database = database;

app.listen(PORT, () => {
    console.log(`Running in http://localhost:${PORT}`);
})
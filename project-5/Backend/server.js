
require('dotenv').config();
const app = require('./src/app');
const connectDb = require('./src/db/db');

const port = 8000;
connectDb()
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
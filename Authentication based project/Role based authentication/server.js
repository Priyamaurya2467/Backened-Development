require('dotenv').config()
const app = require('./src/app')

const port = 2000;

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})

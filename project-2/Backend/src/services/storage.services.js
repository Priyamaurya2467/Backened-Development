const imageKit = require('@imagekit/nodejs');


const cliet = new imageKit({
    privateKey : process.env.privateKeyImageKit
})

async function uploadFile(buffer) {
    // console.log(buffer)
    // const result = await cliet.files.upload({
    //     file: buffer.toString('base64'),
    //     fileName: "pfp.jpg"
    // })
    // console.log(result)
    // return result;


    
    
}

module.exports = uploadFile




















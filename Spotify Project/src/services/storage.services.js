const ImageKit = require('@imagekit/nodejs')

const imagekitclient = new ImageKit({
    privateKey: process.env.IMAGEKIT_KEY
})


async function uploadFile(file){
    const result = await imagekitclient.files.upload({
        file,
        fileName: "Music"+ Date.now(),
        folder: "spotify-project"
    })
    return result;
}

module.exports= {uploadFile}
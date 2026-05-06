const musicModel = require('../model/music.model')
const albumModel = require('../model/album.model')
const jwt =  require('jsonwebtoken')
const {uploadFile} = require('../services/storage.services')

async function createMusic(req,res){
    

    
    const {title} = req.body
    const file = req.file;

    const result = await uploadFile(file.buffer.toString('base64'))

    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: decoded.id

    })

    return res.status(201).json({
        message: "Music created Successfully",
        music: {
            id: music._id,
            uri: music.uri,
            title: music.title,
            artist: music.artist,
        }
    })
    

   

}


async function createAlbum(req,res) {
   
        const {title,musicIds} = req.body;
        const album = await albumModel.create({
            title,
            artist: decoded.id,
            music: musicIds,
        })

        res.status(201).json({
            message: "Album created successfully",
            album: {
                id:album._id,
                title: album.title
            }
        })
  
    
}

module.exports = {createMusic,createAlbum}
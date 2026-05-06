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
        artist: req.user.id

    })

    res.status(201).json({
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


async function getAllMusics(req,res){
    const musics = await musicModel.find().populate("artist","username email")
    res.status(200).json({
        message: "Music created successfully",
        music: musics
    })
}

async function getAllAlbum(req,res){
    const albums = await albumModel.find()
    res.status(201).json({
        message: "Album fetched successfully",
        album : albums
    })
}

async function getAllAlbumById(req,res){
    const albumid = req.params.albumid;
    const albums = await albumModel.findById(albumid).populate("artist","username email")
    return res.status(200).json({
        message: "Album fetched successfully",
        album:albums 
    })
}

module.exports = {createMusic,createAlbum,getAllMusics,getAllAlbum}
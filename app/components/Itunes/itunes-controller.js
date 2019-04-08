import ItunesService from "./itunes-service.js";

//Private
const itunesService = new ItunesService()

function drawAudio() {
  let template = `
            <audio controls class="audio-width" id="audSrc">
            <source src="" type="audio/ogg"></audio>
  `
  document.getElementById('audio').innerHTML = template
}


function drawSongs() {
  let songs = itunesService.Songs
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  console.log(songs)

  let template = ''
  for (let i = 0; i < songs.length; i++) {
    let song = songs[i];

    template += `
    <div class="card text-center card-width border-success bg-paleteal" onclick="app.controllers.itunesCtrl.addSrc('${song.preview}')">
    <img src="${song.albumArt}" class="card-img-top" height="250px" style="max-width:250px"/>
    <h3 class="card-title ${song.title.length > 20 ? 'big-title' : song.title.length > 12 ? 'medium-title' : ''}" style="text-shadow: 0px 0px 3px whitesmoke;"><strong>${song.title}</strong></h3>
    <h4 style="text-shadow: 0px 0px 2px grey;">${song.collection}</h4>
    </div>
    `
    document.getElementById('songs').innerHTML = template
  }
  drawAudio()
}


//PUBLIC
class ItunesController {
  constructor() {
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
    itunesService.addSubscriber('songs', drawSongs)
  }

  addSrc(src) {
    let audio = document.querySelector('audio');
    audio.setAttribute('src', src)
    audio.play();
  }

  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING...'
    itunesService.getMusicByArtist(artist)
  }
}


export default ItunesController
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

function addSrc(src) {
  let audio = document.querySelector('audio');
  audio.setAttribute('src', src)
  audio.play();
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
    <div class="card text-center card-width" onclick="addSrc('${song.preview}')">
      <img src="${song.albumArt}" class="card-img-top"/>
      <h3 class="card-title" style="text-shadow: 0px 0px 3px whitesmoke;"><strong>${song.title}</strong></h3>
      <h4 style="text-shadow: 0px 0px 3px grey;">${song.collection}</h4>
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
import ItunesService from "./itunes-service.js";

//Private
const itunesService = new ItunesService()

let songs = itunesService.Songs

function drawSongs() {
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  console.log(songs)

  let template = ''
  for (let i = 0; i < songs.length; i++) {
    let song = songs[i];
    template += `
      <div class="card text-center card-width">
        <img src="${song.albumArt}" class="card-img-top"/>
        <h3 class="card-title" style="text-shadow: 0px 0px 3px whitesmoke;"><strong>${song.title}</strong></h3>
        <h4 style="text-shadow: 0px 0px 3px grey;">${song.collection}</h4>
        <audio controls class="audio-width"><source src="${song.preview}" type="audio/ogg"></audio>
      </div>
      `
    document.getElementById('songs').innerHTML = template

  }
}

//PUBLIC
class ItunesController {
  constructor() {
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
    itunesService.addSubscriber(songs, drawSongs())
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
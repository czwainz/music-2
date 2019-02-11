## Welcome to the new and Improved Itunes!

Okay well maybe its not quite there yet, that's where you come in.

### The Setup

You will notice a file named `itunes-service.js` This file has been setup to get information from the itunes server and return a list of songs from whatever is typed into the input field. You can rest assured that this part of the application is fully functional. 

You are now being tasked with handling the data that comes back from the service after clicking the `Get Music` Button. 

The first thing to focus on will be adding the correct information to the screen. You will be doing this through a `drawSongs` function that will need to be setup in itunes-controller.js

> Your `drawSongs` function will need to accept a parameter of songs maybe call it called `(results)` 
**again this has been set up for you**

> The `results` is an `array` of `Song` class objects where you will find an example of in the models folder

When the user clicks the `Get Music Button` it runs a function in the `itunes-controller.js`  to pass data from the form to `itunes-service.js`  who will retrieve the songs from iTunes, and return them to be mapped to `Song` classes. Once that code is finished it will call a `drawSongs function` and pass in the list of songs requested. Thus you will not need to modify any of the code in the `itunes-service.js` or the `getMusic function` you will however need to finish the `drawSongs function`.

### Step 1 -  Where is the output?

It is your responsibility to update the `drawSongs function` so the user can actually see the data that is returned from the itunes service.

There are several ways to manipulate the DOM and add these elements. Primarily all of these songs will need to be added to the page I would recommend an easy to target container such as 

```html
<ul id="song-list">
  <!--SONGS ADDED DYNAMICALLY HERE-->
</ul>
```

### Step 2 - Prettify with Bootstrap

Styling is a hard area to grade so at a bare minimum you will need to show your understanding of bootstrap classes. The following image is accomplished purely with built in bootstrap classes. Feel free to customize and go crazy with some awesome styles but make it look good and ensure that you are using the grid system so the results are responsive. Also be sure to use at least 2 bootstrap components

<div>
  <img class="img-responsive" src="https://bcw.blob.core.windows.net/public/img/mytunes.jpg" />
</div>


## Requirements
 - Visualization: 
    - All songs are rendered when search button is clicked
    - Bootstrap is utilized to provide styling to the page
    - Each property of the song object is displayed (title, artist, price, album art, preview (hint: "html audio tag"))
  - Functionality: 
    - A new search will clear out old results

    




### BONUS CHALLENGES 
- Clicking on the title should play the 30 second preview 
- The preview must play without opening a new browser window 
- Clicking play on a title while another song is already playing will stop the previous song and start the new one
- When you search you will also get movies, try to filter those out

### Finished?
When You are finished please submit the url for your github repo to be graded.

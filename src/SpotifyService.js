import search1 from './data/spotifyArtistSearch_never';
import search2 from './data/spotifyArtistSearch_gonna';
import search3 from './data/spotifyArtistSearch_give';
import search4 from './data/spotifyArtistSearch_you';
import search5 from './data/spotifyArtistSearch_up';
// import { CLIENT_ID, CLIENT_SECRET } from './data/APIData';
// import SpotifyWebApi from 'spotify-web-api-js';



/** 
 * ----[ SpotifyService ]----
 * 
 * ---- Global Vars ----
 * {
 *  this.query = []
 *  this.spotifyDataArray = []
 *  this.spotifyApi = new SpotifyApi()
 * }
 * 
 * ---- Functions ----
 *  getFullPlaylist()
 *  Spotify_JsonToSongObject(jsonSearchObject)
 *  --  render --
 *  renderSpotifySongDataArray()
 *  renderAll()
 * 
 * 
 * ---- Private Functions ----
 *  splitQuery(str)
 *  cleanSongObject(songObjects, songStr, index)
 *  createSongObject(songObjectId, songObjectArtist, songObjectSong, _row, _col)
 *  createSongObjectFromArray(arr, row)
 * 
 * 
 * ---- List of TODOS----
 * @TODO Adjust to reuse song objects when user has a repeated query
 * 
*/




//@TODO App uses Spotify wrapper for the client-side. Update it to work with the backend using a nodejs wrapper.
class SpotifyService {
    constructor(userQuery){
        this.query = splitQuery(userQuery);
        this.spotifyDataArray = [];
        this.renderSpotifySongDataArray();

        // this.spotify = new Spotify(CLIENT_SECRET);
        // this.spotifyApi = new SpotifyWebApi();
        // this.spotifyApi.setAccessToken("");
        
        // //spotifyAPI EXAMPLE ARTIST ALBUM GET
        // this.spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
        //     if (err) console.error(err);
        //     else console.log('Artist albums', data);
        //   });
    }

    

    // ----- GETTERS -----
    /**
	 * Returns array with converted song objects
     * @return {object} 
	 */
    getFullPlaylist(){
        let playlistDataSongObjects = []
        // this.fullPlaylist.push(createSongObjectFromArray(Spotift_JsonToSongObject(search1), 0));

        //Converts and returns Spotify's JSON format to a songObject
        this.spotifyDataArray.forEach((elem, i) => {
            let spotifyJsonTracks = this.Spotify_JsonToSongObject(elem);
            let songObjects = createSongObjectFromArray(spotifyJsonTracks, i);

            // Clean and trim songObject to return only songs that start with user query
            songObjects = cleanSongObject(songObjects, this.query[i], i);

            playlistDataSongObjects.push(songObjects);
        });
        
        return playlistDataSongObjects;
    }

    /**
     * Gets tracks from spotifys api json file
     * @param {json} jsonSearchObject Search track json data
     * @return {object} 
     */
    Spotify_JsonToSongObject(jsonSearchObject){
        return jsonSearchObject.tracks.items;
    }

    // ----- Render Functions -----

    /**
     * 
     * Pushes gathered spotify Data to this.spotifyDataArray[]
     * @return {void} 
     */
    renderSpotifySongDataArray(){
        //push Spotify Playlist Results data to arr
        this.spotifyDataArray.push(search1);
        this.spotifyDataArray.push(search2);
        this.spotifyDataArray.push(search3);
        this.spotifyDataArray.push(search4);
        this.spotifyDataArray.push(search5);
        
    }

    /**
     * 
     * 
     * @return {void}
     */
    renderAll(){
        // Research songs needed

        //
    }
}


// ----- Private Functions -----

// Returns a str array
function splitQuery(str){
    return str.split(" ");
}


// Updates songObjects array to only include songs that begin with the string 'songStr'.
function cleanSongObject(songObjects, songStr, index){
    let updateSongObjects = [];

    songObjects.forEach((e) => {
        // console.log(`SpotiftService cleanSongObject(songObj, ${songStr}, ${index})`);
        // console.log(`SpotiftService songTitle: ${e.songTitle.toLowerCase()}`);
        
        if(e.songTitle.toLowerCase().startsWith(songStr.toLowerCase())){
            updateSongObjects.push(e);
        }
        // console.log("SpotifyService:private:.cleanSongObject() songObject= " + e.songTitle);
    });

    return updateSongObjects;
}

function createSongObject(songObjectId, songObjectArtist, songObjectSong, _row, _col){
    // console.log(`MusicService.createSongObject: songObjectId=${songObjectId} row=${_row} col=${_col}`);

    return {
        id: songObjectId, 
        artist: songObjectArtist, 
        songTitle: songObjectSong,
        location: {
            row: _row,
            column: _col
        }
    };
}

// Returns array of song objects
function createSongObjectFromArray(arr, row){
    let songObjectArrayResult = [];

    arr.forEach((object, i) => {
        
        let songObject = createSongObject(object.id, object.artists[0].name, object.name, row, i);
        songObjectArrayResult.push(songObject);


        // console.log(`MusicService.createSongObjectFromArray: row=${songObject.location.row}`);        
    });


    return songObjectArrayResult;
}


export default SpotifyService;
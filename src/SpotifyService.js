import search1 from './data/spotifyArtistSearch_never';
import search2 from './data/spotifyArtistSearch_gonna';
import search3 from './data/spotifyArtistSearch_give';
import search4 from './data/spotifyArtistSearch_you';
import search5 from './data/spotifyArtistSearch_up';



class SpotifyService {
    constructor(userQuery){
        this.query = splitQuery(userQuery);
        this.spotifyDataArray = [];
        this.renderSpotifySongDataArray();
    }

    

    // ----- GETTERS -----

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

    Spotify_JsonToSongObject(jsonSearchObject){
        return jsonSearchObject.tracks.items;
    }

    // ----- Render Functions -----

    renderSpotifySongDataArray(){

        //push Spotify Playlist Results data to arr
        this.spotifyDataArray.push(search1);
        this.spotifyDataArray.push(search2);
        this.spotifyDataArray.push(search3);
        this.spotifyDataArray.push(search4);
        this.spotifyDataArray.push(search5);

    }

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
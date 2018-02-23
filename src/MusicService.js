import search1 from './data/spotifyArtistSearch_never';
import search2 from './data/spotifyArtistSearch_gonna';
import search3 from './data/spotifyArtistSearch_give';
import search4 from './data/spotifyArtistSearch_you';
import search5 from './data/spotifyArtistSearch_up';

// MusicService Class
// 
// ------(Class Functions)------
//
//  log(str)
//      - str = {String}
// 
//  addSong(art, song)
//      - art = {String}
//      - song = {String}
//  removeSong(id)
//      - id = {int}
//
//  changeSong(id, newSongObj)
//      - id = {int}
//      - newSongObj = { id: {int}, artist: {string}, songTitle: {string} }
//             
//  ------(Private Functions)------
//  
//  log(e)             

//  createSongObject(songObjectId, songObjectArtist, songObjectSong)

/**
 * [ MusicService ]
 * 
 * ----- -----
 * log(e)
 * getPlaylist()
 * getSubPlaylist(row)
 * getSubPlaylistById(songId)
 * getParentIndexFromSongId(songId)
 * createSongObject(songObjectId, songObjectARtist,songObjectSong)
 * swapPlaylistIndex(mainPlaylistSongId, subPlaylistSongId)
 * getFullPlaylist()
 * printPlaylist()
 * printFullPlaylist(row)
 * 
 * -----subPlaylist----- 
 * addSong(art, song)
 * removeSong(id)
 * changeSong(id, newSongObj)
 * 
 * -----fullPlaylist----- 
 * fp_add(arr)
 * fp_renderPlaylist()
 * 
 * -----spotifyFunctions-----
 * renderTrackResults()
 * 
 * 
 * -----Private Functions-----
 * createSongObject(songObjectId, songObjectARtist,songObjectSong)
 * createSongObjectFromArray(arr)
 * Spotift_JsonToSongObject(jsonSearchObject)
 * 
 * 
 */
class MusicService {

    constructor(){
        this.playlist = [];
        this.fullPlaylist = [];
    }

    log(str){
        console.log(str);
        console.log(this.playlist);
    }

    //---playlist
    getPlaylist(){
        return this.playlist;
    }
    
    getSubPlaylist(row){
        // console.log("Getting Subplaylist: " + row);
        // console.log(this.fullPlaylist[row]);
        return this.fullPlaylist[row];
    }

    getSubPlaylistById(songId){
        // Looks through fullplaylist array for the selected song Id
        // console.log("Checking Full playlist");

        let locationIndexFound = -1;
        this.fullPlaylist.forEach((playlist, index) => {

            playlist.forEach(elem => { 
                // console.log(`contains() elem: ${elem.id}`);
                if(elem.id === songId){
                    // console.log(`getSubPlaylistById() playlist found at [${index}]`);
                    
                    locationIndexFound = index;
                }

            });
        });

        return this.fullPlaylist[locationIndexFound];
    }

    // Returns the location of a song
    //  Params: 
    //      songId: hash id of song
    //      
    // ex: fullplaylist[i][songinx] returns i;
    getParentIndexFromSongId(songId){
        let indexResult = -1;

        this.fullPlaylist.forEach((playlist, index) => {

            playlist.forEach(elem => { 
                // console.log(`contains() elem: ${elem.id}`);
                if(elem.id === songId){
                    // console.log(`MusicService.getParentIndexFromSongId(${songId}) index found at [${index}]`);
                    
                    indexResult = index;
                }

            });
        });


        return indexResult;
    }


    //Swaps the mainplaylist with the song selected on the editplaylist
    swapPlaylistIndex(mainPlaylistSongId, subPlaylistSongId){
        this.playlist[mainPlaylistSongId] = this.fullPlaylist[mainPlaylistSongId][subPlaylistSongId];
    }

    //---full playlist
    getFullPlaylist(){
        return this.fullPlaylist;
    }


    printPlaylist(){      
        this.playlist.forEach(e => {
            console.log(`id: ${e.id} song: ${e.artist} title: ${e.songTitle}`);
        });
    }


    printFullPlaylist(row){
        // console.log(`Printing fullplaylist[${row}]`);
        this.fullPlaylist.forEach(e => {
            console.log(e);
        });
    }


    //@TODO
    //Use HashMap<id, {data}> maybe?
    //Needs to be fixed
    addSong(art, song){
        
        //get id
        let id = 0;

        // playlist not empty 
        if(this.playlist.length > 0){
            //Iterate to end
            for(let x=0; x<this.playlist.length; x++){
                // console.log("ID: " + id);
                id++;
            }
        }

        //create object
        let obj = {
            id: id,
            artist: art,
            songTitle: song
        };

        //concat to array
        this.playlist.push(obj);
    }

    // O(n) time complexity
    // @TODO Change algorithim for faster removal
    removeSong(id){
        this.playlist.forEach((e, i) => {

            //Current object.id === id
            if(e.id === id){
                // console.log(`Removing ${e.id}|${e.songTitle}`);
                this.playlist.splice(i, 1);
                return;
            }
            
        });
    }

    //id = id of song to change
    //new object of song to change to
    changeSong(id, newSongObj){
        let nso = createSongObject(539, "an edit artist", "edit song + obj created");

        let indexOfOld = this.playlist.map(e => e.id).indexOf(id);
        this.playlist[indexOfOld] = nso;
        console.log("Song Changed!");

    }

    // ---------------------------
    //  Full Playlist Functions
    // ---------------------------
    
    // Add song array to the Full playlist [][]
    // 
    //  arr  = [{songObject}, {songObject}, {songObject}]
    //

    fp_add(arr){
        this.fullPlaylist.push(arr);
    }

    fp_renderPlaylist(){
        this.fullPlaylist.forEach((pl, i) => {
            //Append first element of fullPlaylist to main playlist
            // console.log("Appending first element of fullPlaylist array to playlist");
            // console.log(this.fullPlaylist[i][0]);
            //
            this.playlist.push(this.fullPlaylist[i][0]);

        });
    }

// ---------------------------
//  Spotify API Functions
// ---------------------------
// @TODO Move Spotify api functions to a class


    //renderTrackResults()
    //  - Renders from Spotify Api json
    renderTrackResults(){

        
        // Render Full playlist
        // console.log("SpotifyAPI printTrackResult() ");

        this.fullPlaylist.push(createSongObjectFromArray(Spotift_JsonToSongObject(search1)));
        this.fullPlaylist.push(createSongObjectFromArray(Spotift_JsonToSongObject(search2)));
        this.fullPlaylist.push(createSongObjectFromArray(Spotift_JsonToSongObject(search3)));
        this.fullPlaylist.push(createSongObjectFromArray(Spotift_JsonToSongObject(search4)));
        this.fullPlaylist.push(createSongObjectFromArray(Spotift_JsonToSongObject(search5)));



        
        // this.printFullPlaylist(0);
        this.fp_renderPlaylist();

    }

    


    // ---------------------------


}






//"Private Functions"
// let log = (e) => {
//     console.log(e);
// }


function createSongObject(songObjectId, songObjectArtist, songObjectSong){
    return {
        id: songObjectId, 
        artist: songObjectArtist, 
        songTitle: songObjectSong 
    };
}

// Returns array of song objects
function createSongObjectFromArray(arr){
    let songObjectArrayResult = [];

    arr.forEach((object, i) => {
        // console.log("artist: " + object.artists[0].name)

        let songObject = createSongObject(object.id, object.artists[0].name, object.name);
        songObjectArrayResult.push(songObject);
    });


    return songObjectArrayResult;
}



// Private Spotify Functions

function Spotift_JsonToSongObject(jsonSearchObject){
    // console.log("Spotift_JsonToSongObject: ");
    // console.log(jsonSearchObject.tracks.items);
    return jsonSearchObject.tracks.items;
}



export default MusicService;

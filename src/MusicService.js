
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
//      - e = element to console.log()
//
//  createSongObject(songObjectId, songObjectArtist, songObjectSong)
//      songObjectId        = {int}
//      songObjectArtist    = {string}
//      songObjectSong      = {string}
//      returns { id: songObjectId, artist: songObjectArtist, songTitle: songObjectSong }

class MusicService {

    constructor(){
         this.playlist = [
            createSongObject(0, "Unknown", "Untitled"),
            createSongObject(1, "Unknown", "Untitled"),
            createSongObject(2, "Unknown", "Untitled"),
            createSongObject(3, "Unknown", "Untitled"),
            createSongObject(4, "Unknown", "Untitled"),
            createSongObject(5, "Unknown", "Untitled")
        ];
    }

    log(str){
        console.log(str);
        console.log(this.playlist);
    }

    getPlaylist(){
        return this.playlist;
    }

    printPlaylist(){
        console.log();        
        this.playlist.forEach(e => {
            console.log(`id: ${e.id} song: ${e.artist} title: ${e.songTitle}`);
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
                console.log(`Removing ${e.id}|${e.songTitle}`);
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
}


//"Private Functions"
// let log = (e) => {
//     console.log(e);
// }


function createSongObject(songObjectId, songObjectArtist, songObjectSong){
    return {
        id: songObjectId, 
        artist: songObjectArtist, 
        songTitle: songObjectSong };
}




export default MusicService;

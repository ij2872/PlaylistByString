
// MusicService
// 
// Functions
//
//  log(str)
//      - str = {String}
// 
//  addSong(art, song)
//      - art = {String}
//      - song = {String}
//  removeSong(id)
//      - id = {int}
class MusicService {

    // PlaylistSongs: [
    //     { id: 0, artist: "Artist", songTitle: "Song" },
    //     { id: 1, artist: "Artist2", songTitle: "Song2" },
    //     { id: 2, artist: "Artist3", songTitle: "Song3" }
    //   ]
    // Music List
    

    constructor(){
         this.playlist = [
            { id: 0, artist: "Artist", songTitle: "Song" },
            { id: 1, artist: "Artist2", songTitle: "Song2" },
            { id: 2, artist: "Artist3", songTitle: "Song3" },
            { id: 3, artist: "Artist4", songTitle: "Song4" }      
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
}



export default MusicService;

console.log("welcome to Spotify");
// Initialize the variable
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let MasterPlay = document.getElementById('MasterPlay');
let myprogressbar = document.getElementById('progressbar');

let songs = [
    {songName:"Baareshian", filepath:"song/1.mp3",coverpath:"covers/1.jpg"}
    {songName:"Baareshian", filepath:"song/1.mp3",coverpath:"covers/1.jpg"}
    {songName:"Baareshian", filepath:"song/1.mp3",coverpath:"covers/1.jpg"}
    {songName:"Baareshian", filepath:"song/1.mp3",coverpath:"covers/1.jpg"}
    {songName:"Baareshian", filepath:"song/1.mp3",coverpath:"covers/1.jpg"}
    {songName:"Baareshian", filepath:"song/1.mp3",coverpath:"covers/1.jpg"}
    {songName:"Baareshian", filepath:"song/1.mp3",coverpath:"covers/1.jpg"}
]

// audioElement.play():

// handle pause and play click
MasterPlay.addEventListner ('click', ()=>{
    if(audioElement.paused || audioElement.currenttime<=0){
        audioElement.play();
        MasterPlay.classList.remove('fa-solid fa-play');
        MasterPlay.classList.add('fa-solid fa-pause');
    }
    else{
        audioElement.pause();
        MasterPlay.classList.remove('fa-solid fa-play');
        MasterPlay.classList.add('fa-solid fa-pause');
    }
})
// Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
})
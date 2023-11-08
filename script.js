// Initilize the variables

let surahIndex = 0;
let audioElement = new Audio('1.mp3');
let myprogressbar=document.getElementById('myprogressbar1');
let masterPlay=document.getElementById('masterPlay');
let surahItem = Array.from(document.getElementsByClassName('SurahItem'));
let masterSurahName = document.getElementById('masterSurahName');

// surah index

let surah=[
    {SurahName:'Surah Yaseen',filePath:'1.mp3',coverPath:'4.jfif'},
    {SurahName:'Surah Al-Mulk',filePath:'2.mp3',coverPath:'14.jpg'},
    {SurahName:'Surah Al-Qadr',filePath:'3.mp3',coverPath:'4.jfif'},
    {SurahName:'Surah Al-Kosar',filePath:'4.mp3',coverPath:'3.jfif'},
    {SurahName:'Surah Al-Kafiroon',filePath:'5.mp3',coverPath:'14.jpg'},
    {SurahName:'Surah Ikhlas',filePath:'6.mp3',coverPath:'4.jfif'},
    {SurahName:'Surah Al-Falak',filePath:'7.mp3',coverPath:'14.jpg'},
    {SurahName:'Surah Al-Naas',filePath:'8.mp3',coverPath:'4.jfif'},
    {SurahName:'Surah Fatiha',filePath:'9.mp3',coverPath:'14.jpg'},
]

//  All img and Name change

surahItem.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = surah[i].coverPath;
    element.getElementsByClassName('surahName')[0].innerText = surah[i].SurahName;
})

// Masterplay Play Pause

masterPlay.addEventListener('click',()=>{
    if (audioElement.currenttime<=0 || audioElement.paused){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})

//   Timeupdate of audio...     myProgressBar auto change

audioElement.addEventListener('timeupdate',()=>{
    Progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = Progress;
})

//   myProgressBar change...audio change

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=(audioElement.duration*myprogressbar.value)/100;
})

//  function use below...(Play/Pause at a time)

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('smallPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

// All SmallPlay buttons...Play nad Pause

Array.from(document.getElementsByClassName('smallPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        surahIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src =`${surahIndex+1}.mp3`
        masterSurahName.innerText = surah[surahIndex].SurahName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
    
})

//  Next button update

document.getElementById('next').addEventListener('click',()=>{
    if (surahIndex>=8){
        surahIndex = 0;
    }
    else
    {
        surahIndex +=1;  
    }
    audioElement.src =`${surahIndex+1}.mp3`
    masterSurahName.innerText = surah[surahIndex].SurahName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

//  Previous button update

document.getElementById('prvious').addEventListener('click',()=>{
    if (surahIndex<=0){
        surahIndex = 0;
    }
    else
    {
        surahIndex -=1;  
    }
    audioElement.src =`${surahIndex+1}.mp3`
    masterSurahName.innerText = surah[surahIndex].SurahName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})



const bt1=document.getElementById("1");
const bt2=document.getElementById("2");

function playButton(num){
    const vid=document.getElementById("vid"+num);
    if(vid.paused){
        vid.play();
    }else{
        vid.pause();
    }
}

bt1.addEventListener("click",playButton("1"));
bt2.addEventListener("click",playButton("2"));
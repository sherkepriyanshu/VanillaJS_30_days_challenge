/*get our element */

const player = document.querySelector('.player');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


function add(a,b)
{
    return a+b;
}

var r= add("2","3");
console.log(r)


/*Build out funtion */

function togglePlay()
{
   const method = video.paused ? 'play' :'pause';
   video[methid]();
}




/*hook up the even listner */

vi
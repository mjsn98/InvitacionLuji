document.body.style.overflow = 'hidden';

function animar() {
    document.body.style.overflow = 'auto';
    document.getElementById("top").classList.add("up");
    document.getElementById("bottom").classList.add("down");
    setInterval(() => {
           document.getElementById("intro").style.display = "none";
    }, 1000);
    document.getElementById("player").play();
    document.getElementById("button").innerHTML = "<div class='icon'><img src='img/play.gif'/></div>";
};
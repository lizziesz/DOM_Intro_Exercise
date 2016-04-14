console.log("Javascript is alive!");

var greeting = document.getElementById("greeting");
greeting.innerText = "Hello, World!";

var list = document.getElementsByTagName("li");
for(i = 0; i < list.length; i++) {
  list[i].style.background = "yellow";
}

var newImg = document.createElement("img");
newImg.src="http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
greeting.appendChild(newImg);

var clickList = document.getElementsByTagName("li");
for(var i=0; i < clickList.length; i++) {
  clickList[i].addEventListener("click", function(event) {
    for(var i=0; i < clickList.length; i++) {
      clickList[i].className="";
    }
    this.className = "selected";
  })
}

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
    if(this.innerText === "beer") {
      document.getElementsByTagName('img')[1].src = "file:///Users/lizzieszoke/work_space/practice/DOM/DOM_Intro_Exercise/images/beer.jpeg";
    }
    else if(this.innerText === "milk") {
      document.getElementsByTagName('img')[1].src = "file:///Users/lizzieszoke/work_space/practice/DOM/DOM_Intro_Exercise/images/milk.jpeg";
    }
    else if(this.innerText === "water") {
      document.getElementsByTagName('img')[1].src = "file:///Users/lizzieszoke/work_space/practice/DOM/DOM_Intro_Exercise/images/water.jpeg";
    }
    else if(this.innerText === "wine") {
      document.getElementsByTagName('img')[1].src = "file:///Users/lizzieszoke/work_space/practice/DOM/DOM_Intro_Exercise/images/wine.jpeg";
    }
    else if(this.innerText === "honey") {
      document.getElementsByTagName('img')[1].src = "file:///Users/lizzieszoke/work_space/practice/DOM/DOM_Intro_Exercise/images/honey.jpeg";
    }
  });
}

var ghosting = document.getElementById('ghosting');
ghosting.addEventListener("mouseover", function() {
  ghosting.remove();
});

var resize = document.getElementById('resize');
resize.addEventListener("mouseenter", function() {
  resize.style.width = "400px";
});
resize.addEventListener("mouseleave", function() {
  resize.style.width = "200px";
});

var reset = document.getElementById('reset');
reset.addEventListener("click", function() {
  for(var i=0; i<clickList.length; i++) {
    clickList[i].className="";
  }
  document.getElementsByTagName('img')[1].src = "file:///Users/lizzieszoke/work_space/practice/DOM/DOM_Intro_Exercise/images/panic.jpeg";
});

function checkKeyPressed(e) {
  if(e.keyCode == "49" || e.keyCode == "50" || e.keyCode == "51" || e.keyCode == "52" || e.keyCode == "53" || e.keyCode == "54" || e.keyCode == "55" || e.keyCode == "56" || e.keyCode == "57" || e.keyCode == "48") {
    alert("I HATE NUMBERZZZ!");
  }
}

window.addEventListener("keypress", checkKeyPressed);

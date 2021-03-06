window.onload = function(e){ 
  if (sessionStorage.textSize != null) {
    changeTextSize(sessionStorage.textSize);
  }
}

function changeTextSize(size){
  let fontsizechangers = document.getElementsByClassName("fontsizechange");
  let images = document.getElementsByTagName("IMG");

  for(var i = 0; i < fontsizechangers.length; i++){
    fontsizechangers[i].classList.remove("active");
  }

  if (size == 1){
    document.getElementsByTagName("BODY")[0].style.fontSize = "0.85rem";
    for (var i = 0; i < images.length; i++){
      images[i].style.maxWidth = "75%";
    }
  }

  if (size == 2){
    document.getElementsByTagName("BODY")[0].style.fontSize = "1rem";
    for (var i = 0; i < images.length; i++){
      images[i].style.maxWidth = "80%";
    }
  }

  if (size == 3){
    document.getElementsByTagName("BODY")[0].style.fontSize = "1.2rem";
    for (var i = 0; i < images.length; i++){
      images[i].style.maxWidth = "90%";
    }
  }

  if (size == 4){
    document.getElementsByTagName("BODY")[0].style.fontSize = "1.5rem";
    for (var i = 0; i < images.length; i++){
      images[i].style.maxWidth = "100%";
    }
  }

  fontsizechangers[size - 1].classList.add("active");
  sessionStorage.textSize = size;
}
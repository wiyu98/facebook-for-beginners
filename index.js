window.onload = function(e){ 
  if (sessionStorage.textSize != null) {
    changeTextSize(sessionStorage.textSize);
  }
}

function changeTextSize(size){
  let fontsizechangers = document.getElementsByClassName("fontsizechange");
  
  for(var i = 0; i < fontsizechangers.length; i++){
    fontsizechangers[i].classList.remove("active");
  }

  if (size == 1){
    document.getElementsByTagName("BODY")[0].style.fontSize = "0.85rem";
  }

  if (size == 2){
    document.getElementsByTagName("BODY")[0].style.fontSize = "1rem";
  }

  if (size == 3){
    document.getElementsByTagName("BODY")[0].style.fontSize = "1.2rem";
  }

  if (size == 4){
    document.getElementsByTagName("BODY")[0].style.fontSize = "1.5rem";
  }

  fontsizechangers[size - 1].classList.add("active");
  sessionStorage.textSize = size;
}
var i=0,text;
text= "I'm Elana Strijbis"

function typing() {
  if(i<text.length){
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,180);
  }
}
typing()

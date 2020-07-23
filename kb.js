function setf(){

var numbs = document.getElementsByName("bt");

    for (i = 0; i < numbs.length; i++){

        numbs[i].onclick = function (){

        text.innerHTML += this.value

    }

}}

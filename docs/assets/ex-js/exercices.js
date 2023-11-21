//Exercice 1
let ancienneCouleur

function ChangeColor () {
    let body = document.body;
    body.style.background = "#94D1BE"; 
}

function originalColor () {
    let body = document.body;
    body.style.background = ancienneCouleur;
}

function changeColor2 () {
    let body = document.body;

    if(body.style.background === "rgb(255, 255, 255)") {
        body.style.background = "#94D1BE";
    } else {
        body.style.background = "#FFFFFF";
    }
}

//Exercice 2
function AddText() {
    let NewElement = document.getElementById('nom').value;

    if (NewElement !== "") {
        let liste = document.getElementById('MyList');
        let NewItem = document.createElement('li');
        NewItem.textContent = NewElement;
        liste.appendChild(NewItem);

        document.getElementById('nom').value = '';
    }
}

//Exercice 3
function Addition() {
    let Value1 = document.getElementById('nb1').value;
    let Value2 = document.getElementById('nb2').value;

    if (Value1 !== '' && Value2 !== '') {
        let response = document.getElementById('Response');
        let result = document.createElement('p');
        result.textContent = parseInt(Value1) + parseInt(Value2);
        response.innerHTML = '';
        response.appendChild(result);

        document.getElementById('Nb1') = '';
        document.getElementById('Nb2') = '';
    }
}

//Exercice 4
document.getElementById('imageSelector').addEventListener('change', function(event) {
    let selectedValue = this.value;
    let imageDisplay = document.getElementById('imageDisplay');
    imageDisplay.src = selectedValue;
    consolelog(imageDisplay);
});

//Exercice 5 
function afficherAlert() {
    alert('Touche pas il est mineur')
}

//Exercice 6
/*function Horloge()  {
   let date = new Date();
   let hours = date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds();
   hours = hours < 10 ? '0' + hours : hours;
   minutes = minutes < 10 ? '0' + minutes : minutes;
   seconds = seconds < 10 ? '0' + seconds : seconds;

   document.Clock.horloge.value = hours;

   //let timeString = hours + ":" + minutes + ":" + seconds;

   document.getElementById(horloge).innerText = timeString;

   timerID = setTimeout("showtime()",1000);
   timerActif = true;

}*/
let timerID = null;
let timerActif = false;

function stopClock() {
  if (timerActif) clearTimeout(timerID);
  timerActif = false;
}

function startClock() {
  stopClock();
  showtime();
}
function showtime() {
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    heure = (hour > 9? hour:"0" + hour);
    heure += ":" + (min > 9? min:"0" + min);
    heure += ":" + (sec > 9? sec:"0" + sec);
    document.Clock.Horloge.value = heure;
    //pour mettre l'horloge dans la barre de status :
    //window.status = heure;
    timerID = setTimeout("showtime()",1000);
    timerActif = true;
  }

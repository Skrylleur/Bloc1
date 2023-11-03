//Exercice 1
var ancienneCouleur

function ChangeColor () {
    var body = document.body;
    body.style.background = "#94D1BE"; 
}

function originalColor () {
    var body = document.body;
    body.style.background = ancienneCouleur;
}

function changeColor2 () {
    var body = document.body;

    if(body.style.background === "rgb(255, 255, 255)") {
        body.style.background = "#94D1BE";
    } else {
        body.style.background = "#FFFFFF";
    }
}

//Exercice 2
function AddText() {
    var NewElement = document.getElementById('nom').value;

    if (NewElement !== "") {
        var liste = document.getElementById('MyList');
        var NewItem = document.createElement('li');
        NewItem.textContent = NewElement;
        liste.appendChild(NewItem);

        document.getElementById('nom').value = '';
    }
}

//Exercice 3
function Addition() {
    var Value1 = document.getElementById('nb1').value;
    var Value2 = document.getElementById('nb2').value;

    if (Value1 !== '' && Value2 !== '') {
        var response = document.getElementById('Response');
        var result = document.createElement('p');
        result.textContent = parseInt(Value1) + parseInt(Value2);
        response.innerHTML = '';
        response.appendChild(result);

        document.getElementById('Nb1') = '';
        document.getElementById('Nb2') = '';
    }
}

//Exercice 4
document.getElementById('imageSelector').addEventListener('change', function() {
    var selectedValue = this.value;
    var imageDisplay = document.getElementById('imageDisplay');
    imageDisplay.src = selectedValue;
});

//Exercice 5 
function afficherAlert() {
    alert('Touche pas il est mineur')
}
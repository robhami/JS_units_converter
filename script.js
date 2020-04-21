var userInput= document.getElementById("userInput");
let button = document.getElementById("button-addon2");
let resultVal =document.getElementById("resultVal");
let inputVal =document.getElementById("inputVal");
let codeVal =document.getElementById("codeVal");

let result = "";
let error = "An error. Input needs to: start with # followed 6 digits/letters using a to f or 0 to 9 (Hex), OR 9 digits from 0 to 9 (RGB)";
let nonResult = "Not possible due to entry error."

let densityFac =
		{
		kg_m3: 1, 
		g_cm3: 0.001,
		pcf: 0.06243,
		ppg: 5,
		SG: 0.001,
		};


let distance = 		
		{
		m: 1,
		ft: 3.28084
		};
		


function formSubmit () {
	//get input value
	userInput= document.getElementById("userInput").value;
	
	checker(userInput);
	
	
}

function checker (inputCheck) {
	let x = inputCheck.length;
	
	if ( /[0-9.]/i.test(inputCheck)) {
		alert("valid entry");
		getResult();

	} else {
		alert("invalid numbers, letters or length");
		console.log(inputCheck.length);
		errorMessage ();
	}

}

function getResult (userInput) {
	console.log(userInput);	
	var unitsCat = document.getElementById("unitsType").textContent;
	var unitsFrom = document.getElementById("unitsFrom").textContent;
	var unitsTo = document.getElementById("unitsTo").textContent;
	console.log(unitsCat);
	console.log(unitsFrom);
	console.log(unitsTo);

	switch (unitsCat) {
		case "Density" :
			density(unitsFrom);
		break;

	}

}

function density (unitsFrom) {

	console.log(unitsFrom);

			switch (unitsFrom) {

			case "ppg" : 
				console.log("ppg received")
			break;
		}



}


function errorMessage () {

}

function dropDown (selectText, buttToChange) {
	
	let d=document.getElementById(selectText).text
	
	buttToChange.textContent = d;
	console.log(d);
}

function createListElement(outputs, listItem) {
	// if resultVal childNodes exist (i.e. greater than 2), delete all displayed values
	if ((resultVal.childNodes.length)>2){
		deleteListElement(resultVal);
		deleteListElement(codeVal);	
		deleteListElement(inputVal);
	}
	// create variable for p
	let p =document.createElement("p");
	// add text child node to p with outputs value
	p.appendChild(document.createTextNode(outputs));
	// append listItem with p (i.e. outputs)
	listItem.appendChild(p);
	// reset outputs
	outputs="";
}	
	
function deleteListElement(idRemove) {
	// remove child nodes
	idRemove.removeChild(idRemove.childNodes[1]);
		
}

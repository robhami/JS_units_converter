var userInput= document.getElementById("userInput");
let button = document.getElementById("button-addon2");
let resultVal =document.getElementById("resultVal");
let inputVal =document.getElementById("inputVal");
let codeVal =document.getElementById("codeVal");

let result = "";
let error = "An error. Input needs to: start with # followed 6 digits/letters using a to f or 0 to 9 (Hex), OR 9 digits from 0 to 9 (RGB)";
let nonResult = "Not possible due to entry error."



let distance = 		
		{
		m: 1,
		ft: 3.28084
		};
		
function dropDown (selectText, buttToChange) {
	
	let d=document.getElementById(selectText).text
	
	buttToChange.textContent = d;
	console.log(d);
}


function formSubmit () {
	//get input value
	userInputX= document.getElementById("userInput").value;	
	checker(userInputX);	
}

function checker (userInputX) {
	//let x = userInput.length;
	
	if ( /[0-9.]/i.test(userInputX)) {
		alert("valid entry");
		getResult(userInputX);

	} else {
		alert("invalid characters");
		//console.log(userInput.length);
		errorMessage ();
	}

}

//does var name need to be different from id? I have made them different
function getResult (userInputX) {
	console.log(userInputX);	
	var unitsCat = document.getElementById("unitsType").textContent;
	var unitsFromX = document.getElementById("unitsFrom").textContent;
	var unitsToX = document.getElementById("unitsTo").textContent;
	console.log(unitsCat);
	console.log(unitsFromX);
	console.log(unitsToX);

	switch (unitsCat) {
		case "Density" :
			density(userInputX, unitsFromX, unitsToX);
		break;

	}

}

function density (userInputX, unitsFromX, unitsToX) {

	let densityFac =
		{
		kg_m3: 1, 
		g_cm3: 0.001,
		pcf: 0.06243,
		ppg: 0.0083,
		SG: 0.001,
		};

	//console.log(densityFac.SG/densityFac.ppg);
	resultX= +(userInputX*(densityFac[unitsToX]/densityFac[unitsFromX])).toFixed(5);
	console.log(resultX);
	addResult (resultX);
}


function addResult (resultX) {
	userOutput.value = resultX;
	console.log(userOutput.value);
}

function errorMessage () {

	

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

let distance = 		
		{
		m: 1,
		ft: 3.28084
		};
		
function dropDown (selectText, buttToChange) {
	
	let d = document.getElementById(selectText).text;
	let d_id= document.getElementById(selectText);
	buttToChange.textContent = d;
	console.log(d);
	console.log(buttToChange.id);
	
	if((buttToChange.id)=="unitsType"){
		
		
		return dropDownChange(d);
	}

}


function dropDownChange (val) {

	alert(val);
//need to take this value and lookup units then change
}


function formSubmit () {
	//get input value
	userInputX= document.getElementById("userInput").value;	
	checker(userInputX);	
}

function checker (userInputX) {
	//let x = userInput.length;
	
	if ( /[0-9.]/i.test(userInputX)) {
		console.log("valid entry");
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

		case "Mass" :
			mass(userInputX, unitsFromX, unitsToX);
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

function mass (userInputX, unitsFromX, unitsToX) {

	let massFac =
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

function selectUnits (val) {

	alert("hello", val);
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


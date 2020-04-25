let densityFac =
		{
		kg_m3: 1, 
		g_cm3: 0.001,
		pcf: 0.06243,
		ppg: 0.0083,
		SG: 0.001,
		};


let distance = 		
		{
		m: 1,
		ft: 3.28084
		};
		
function dropDown (ddSelect, buttToChange) {
// set ddStick var to text of id selected	
	//alert("DD");
	let ddStick = document.getElementById(ddSelect).text;
//change button to ddStick value
	buttToChange.textContent = ddStick;
	console.log(ddStick);
	console.log(buttToChange.id);
	
//if button changed is unitsType, send 	
	if((buttToChange.id)=="unitsType"){
			
		return ddConfig(ddSelect);
	
	}

}


// function dropDownChange (val) {
// 	unitFlag=(val.toLowerCase().concat("Fac"));
 	
// 	console.log(unitFlag);

// 	//callObject(unitFlag);
// }



function ddConfig(ddSelect) {
	
	//console.log("docById: ", document.getElementById(ddSelect).value);
	console.log(ddSelect);
	let unitTypeSel = document.getElementById(ddSelect).value;
	console.log(unitTypeSel);
	
	let density = ["kg_m3", "g_cm3", "pcf", "ppg", "SG"]

	 switch (unitTypeSel) {
	 	case "density":
	 		//unitsFromDD.option.length = 0; 

			for (i=0; i<density.length; i++) {
	 			
	 		let unit = density [i];
	 		console.log(unit);
			createDDVal(unit,unitsFromDD);
			createDDVal(unit,unitsToDD);
	 		}

	 	break;

	}

}


function createDDVal (unit, DD) {
//create an option node
	
	let opt = document.createElement('option');
//add attributes e.g. dropdown etc, 1st 2 came from stackoverflow
	opt.value = unit;
	opt.text = unit;
	opt.setAttribute("class","dropdown-item");
	opt.setAttribute("id",unit);
	opt.setAttribute("onclick","dropDown(this.id,this.parentElement.parentElement.children[0])");
	opt.setAttribute("href","#");

	console.log ("opt: ", opt);
	// add text node to opt 
	opt.appendChild(document.createTextNode(""));
	// append opt to unitsFromDD
	DD.appendChild(opt);

	//opt.appendChild(document.createTextNode(""));
	//unitsToDD.appendChild(opt);

//create text node
//unitsFrom.option.add(opt)

	//let textnode = document.createTextNode(unitsFromDD)
	//console.log ("text node: ", textnode);
	// add text child node to p with outputs value
	//opt.appendChild(textnode);
	
	// append listItem with p (i.e. outputs)
	//listItem.appendChild(opt);
	// reset outputs
	//outputs="";

	//unitsFromDD.add(opt);

	// opt.value = value;
	// opt.text = text;

	// DD.a.add(opt);


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


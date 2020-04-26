let densityFac =
		{
		kg_m3: 1, 
		g_cm3: 0.001,
		pcf: 0.06243,
		ppg: 0.0083,
		SG: 0.001,
		};


let  lengthFac	=
		{
		m: 1,
		ft: 3.28084,
		in: 39.3700787,
		km: 0.001,
		miles: 0.0006214,

		};
		
function dropDown (ddSelect, buttToChange) {
	// set ddStick var to text of dropdown id selected	
	//alert("DD");
	let ddStick = document.getElementById(ddSelect).text;
	//change button value to ddStick value
	buttToChange.textContent = ddStick;
	//console.log(ddStick);
	//console.log(buttToChange.id);
	
	//if button changed is unitsType, send ddSelect to DDconfig to configure units From & To dropdowns
	if((buttToChange.id)=="unitsType"){
			
		return ddConfig(ddSelect);
	
	}

}

function clearChildNodes (DDToClear) {

	//console.log("childNodes: ", DDToClear.childNodes);
 	//clear childNodes whilst any exist
	while(DDToClear.hasChildNodes()){
	DDToClear.removeChild(DDToClear.firstChild);

	}
 	
}

function ddConfig(ddSelect) {
	//clear any existing dropdown option nodes from both From and To dropdowns
	clearChildNodes(unitsFromDD);
	clearChildNodes(unitsToDD);
	//set unitTypeSel variable to value of unitsType dropdown selected
	let unitTypeSel = document.getElementById(ddSelect).value;
	//console.log(unitTypeSel);
	
	//let density = ["kg_m3", "g_cm3", "pcf", "ppg", "SG"]

	 switch (unitTypeSel) {
	 	case "density":
	 		let density = ["kg_m3", "g_cm3", "pcf", "ppg", "SG"]
			for (i=0; i<density.length; i++) {
	 			
		 		let unit = density [i];
		 		//console.log(unit);
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

	//console.log ("opt: ", opt);
	// add text node to opt 
	opt.appendChild(document.createTextNode(""));
	// append opt to DD
	DD.appendChild(opt);


}


// function deleteDDVal (DD) {
// 	let option = document.getElementById(DD);
// 	console.log(option);
// 	let length = option.childNodes.length;

// 	for (i= length-1; i>=0; i--) {
// 		console.log(option[i]);
// 		option.remove(option[i]);

// 	}
// }


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


function errorMessage () {


}

//does var name need to be different from id? I have made them different
function getResult (userInputX) {
	//console.log(userInputX);	
	var unitsCat = document.getElementById("unitsType").textContent;
	var unitsFromX = document.getElementById("unitsFrom").textContent;
	var unitsToX = document.getElementById("unitsTo").textContent;
	///console.log(unitsCat);
	//console.log(unitsFromX);
	//console.log(unitsToX);

	switch (unitsCat) {
		case "Density" :
			density(userInputX, unitsFromX, unitsToX);
		break;

		case "Mass" :
			//mass(userInputX, unitsFromX, unitsToX);
		break;
	}

}

function density (userInputX, unitsFromX, unitsToX) {
	//console.log(densityFac.SG/densityFac.ppg);
	resultX= +(userInputX*(densityFac[unitsToX]/densityFac[unitsFromX])).toFixed(5);
	//console.log(resultX);
	addResult (resultX);
}



function addResult (resultX) {
	userOutput.value = resultX;
	console.log(userOutput.value);
}


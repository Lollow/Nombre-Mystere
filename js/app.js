var solution = Math.round (Math.random() * (3-0) +0); 
console.log(solution);

for( var i=3; i>0; i--){
	var response = prompt("Choississez un nombre !");
	if (response == solution){
		alert("Bonne réponse !");
		break;
	}else if (response > solution){
		alert("Nombre trop grand !");
	}else{
		alert("Nombre trop petit !");
	}
}


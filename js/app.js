var solution = Math.round (Math.random() * (3-0) +0); 
console.log(solution);

var response = prompt("Choississez un nombre !");
console.log(response);

if (response == solution){
	console.log("Bonne réponse !");
}else if (response > solution){
	console.log("Nombre trop grand !");
}else{
	console.log("Nombre trop petit !");
}

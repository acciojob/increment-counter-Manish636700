document.getElementById("incrementBtn").addEventListener("click",function(){
	let count = document.getElementById("counter");
	let curr= parseInt(count.innerText);
	alert("Un-incremented Value.");

	count.innerText = curr+1;
	
});
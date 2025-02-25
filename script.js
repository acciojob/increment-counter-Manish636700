document.getElementById("incre").addEventListener("click",function(){
	let count = document.getElementById("count");
	let curr= parseInt(count.innerText);
	alert(curr);
	count.innerText = curr+1;
})
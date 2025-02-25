document.getElementId("incre").addEventListener("click",function(){
	let count = document.getElementId("count");
	let curr= parseInt(count.innerText);
	alert(curr);
	count.innerText = curr+1;
})
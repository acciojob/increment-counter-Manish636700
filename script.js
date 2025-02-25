document.getElementById("incrementBtn").addEventListener("click", function () {
            let count = document.getElementById("counter");
				count.innerText = parseInt(count.innerText)+1;
            let curr = parseInt(count.innerText);
            alert("Un-incremented Value: " + curr); 
        });
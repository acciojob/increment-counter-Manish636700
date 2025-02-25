document.getElementById("incrementBtn").addEventListener("click", function () {
            let count = document.getElementById("counter");
            let curr = parseInt(count.innerText);
            alert("Un-incremented Value: " + curr); // Display un-incremented value
            count.innerText = curr + 1; // Increment the counter
        });
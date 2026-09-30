function addNumbers() {

    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    if(a === "" || b === "") {
        alert("Please enter both numbers");
        return;
    }

    fetch(`/add?a=${a}&b=${b}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("result").innerHTML =
                "Result = " + data;
        })
        .catch(error => {
            console.log(error);
        });
}
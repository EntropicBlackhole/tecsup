let calcButton = document.getElementById("calcButton");

calcButton.addEventListener("click", (e) => {
    let height = document.getElementById("height").innerText;
    let weight = document.getElementById("weight").innerHTML;
    console.log(height, weight, "a")
    document.getElementById("result").innerHTML = `Tu IMC es: ${calculateBMI(height, weight).toString()}`
});

function calculateBMI(height, weight) {
	return weight / height ** 2;
}

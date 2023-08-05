/*
.button-nextquestion:hover {
    background-color: lightgray;
}
*/

let questions = [
	{
		question: "Cuando fue creado JavaScript?",
		answers: ["2004", "1992", "1994"],
		correct_answer: 3,
	},
	{
		question: "JavaScript es igual que Java?",
		answers: ["Si", "No", "Talvez"],
		correct_answer: 2,
	},
	{
		question:
			"Como se llama la propiedad para obtener la longitdud de una cadena?",
		answers: [".length", ".len", ".longitud"],
		correct_answer: 1,
	},
	{
		question: "JavaScript es un lenguaje",
		answers: [
			"Orientado a comandos",
			"Orientado a cosas",
			"Orientado a objetos",
		],
		correct_answer: 3,
	},
	{
		question: "Como se declara una variable constante?",
		answers: ["constant", "const", "var_const"],
		correct_answer: 2,
	},
];

questIndex = 0;
nextQuestion(questIndex);

function nextQuestion(index) {
	questIndex = index;
	document.getElementsByClassName("question")[0].innerHTML =
		questions[questIndex].question;
	document.getElementById("answer1").innerHTML =
		questions[questIndex].answers[0];
	document.getElementById("answer2").innerHTML =
		questions[questIndex].answers[1];
	document.getElementById("answer3").innerHTML =
        questions[questIndex].answers[2];
    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => {
        if (btn.className == 'button-answer') {
            btn.addEventListener("click", (e) => {
                console.log(e.target)
                if (btn.id.substring(6, 7) == questions[questIndex].correct_answer.toString()) {
                    console.log('trigger')
                    //answer is correct, mark green
                    let button = document.getElementById(btn.id);
                    // button.style.backgroundColor = "#90ee90";
                    console.log(button.style)
                } else {
                    //answer is wrong, mark red
                }
            });      
        }
    });
    // console.log(buttons);
	// document.getElementById('answer4').innerHTML = questions[questIndex].answer4;
}

// select divRoot
const divRoot = document.querySelector("#root");
const divContainer = document.querySelector(".container");
const buttonElement = document.querySelector(".button-calc");

function createElementResult(texto) {
	const div = document.createElement("div");
	const p = document.createElement("p");
	const text = document.createTextNode(texto);
	p.appendChild(text);
	div.setAttribute("class", "alert alert-primary");
	div.setAttribute("role", "alert");
	div.appendChild(p);
	return div;
}

// Add Events
buttonElement.addEventListener("click", () => {
	const divResult = document.querySelector(".div-result");
	const textAreaElement = document.querySelector(".text-area");
	var arrayInt = textAreaElement.value.split(",");
	textAreaElement.value = "";
	arrayItens = [];
	arrayInt.forEach((element) => {
		arrayItens.push(parseInt(element));
	});

	// Logica FizzBuzz
	arrayLen = arrayItens.length;

	for (var i = 0; i < arrayLen; i++) {
		const divResult = document.querySelector(".div-result");
		if (arrayItens[i] % 15 === 0) {
			const element = createElementResult(`${arrayItens[i]} - FizzBuzz`);
			divResult.appendChild(element);
		} else if (arrayItens[i] % 3 === 0) {
			const element = createElementResult(`${arrayItens[i]} - Fizz`);
			divResult.appendChild(element);
		} else if (arrayItens[i] % 5 === 0) {
			const element = createElementResult(`${arrayItens[i]} - Buzz`);
			divResult.appendChild(element);
		} else {
			const element = createElementResult(`${arrayItens[i]}`);
			divResult.appendChild(element);
		}
	}
});

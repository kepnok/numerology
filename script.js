
function calculateResult(userInput) {
    const charValues = {
        a: 1, i: 1, j: 1, q: 1, y: 1,
        b: 2, k: 2, r: 2,
        c: 3, g: 3, l: 3, s: 3,
        d: 4, m: 4, t: 4,
        e: 5, h: 5, n: 5, x: 5,
        u: 6, v: 6, w: 6,
        o: 7, z: 7,
        f: 8, p: 8
    };

    let result = 0;

    if (userInput !== null) {
        userInput = userInput.toLowerCase();

        // Extract and sum numbers
        const numbers = userInput.match(/\d+/g);
        if (numbers) {
            numbers.forEach(number => {
                result += parseInt(number, 10);
            });
        }

        // Remove numbers and spaces
        userInput = userInput.replace(/\d+/g, '');
        userInput = userInput.replace(/\s+/g, '');

        // Calculate letter values
        for (let char of userInput) {
            if (char in charValues) {
                result += charValues[char];
            } else {
                console.warn(`Character '${char}' is not in the dictionary.`);
            }
        }
    }

    return result;
}

const button = document.querySelector(".search");


const resultContainer = document.querySelector(".result-container");

button.addEventListener("click", event => {
   
        const input = document.querySelector("input");
        let userInput = input.value;
        let result = calculateResult(userInput);

        resultContainer.innerHTML = ""

        const displayResult = document.createElement("p");
        displayResult.textContent = result;
        resultContainer.appendChild(displayResult);
    
});

// calculadora.test.js
const { adicionarNumero } = require('../js/calcular');

// Mock do DOM
document.body.innerHTML = `
  <input type="text" id="input" />
`;

test('adicionarNumero adiciona o número ao valor do input', () => {
    const input = document.getElementById("input");

  
    adicionarNumero('4');
    expect(input.value).toBe('4');  

    adicionarNumero('3');
    expect(input.value).toBe('43');  
});

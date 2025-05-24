document.getElementById('calcular').addEventListener('click', calcularIMC);

        function calcularIMC() {
            const peso = parseFloat(document.getElementById('peso').value);
            const estatura = parseFloat(document.getElementById('estatura').value);

            if (isNaN(peso) || isNaN(estatura)) {
                alert('Por favor, ingrese valores válidos.');
                return;
            }

            if (peso <= 0 || estatura <= 0) {
                alert('El peso y la estatura deben ser mayores que cero.');
                return;
            }

            const imc = peso / (estatura ** 2);
            alert(`Tu IMC es: ${imc.toFixed(2)}`);
        }
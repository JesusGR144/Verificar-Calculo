let totalAdd = 0;

function insertRow() {
    // Obtener los valores de los inputs
    const cantidad1 = document.getElementById('cantidad1').value;
    const cantidad2 = document.getElementById('cantidad2').value;

    // Validar que los valores no estén vacíos
    if (!cantidad1 && !cantidad2) {
        alert('Por favor, ingrese valores en ambos campos.');
        return;
    }


    // Calcular el total (si es necesario)
    const total = parseFloat(cantidad1) * parseFloat(cantidad2);
    totalAdd += total;
    document.getElementById('add-total').textContent = `Total = $${totalAdd.toLocaleString()}` ;

    // Crear una nueva fila
    const tableBody = document.querySelector('#table tbody');
    const newRow = document.createElement('tr');

    // Crear las celdas de la nueva fila
    const cellNo = document.createElement('td');
    const cellCant1 = document.createElement('td');
    const cellCant2 = document.createElement('td');
    const cellTotal = document.createElement('td');

    // Asignar valores a las celdas
    cellNo.textContent = tableBody.rows.length + 1; // Número de fila
    cellCant1.textContent = `${cantidad1} ML` ;
    cellCant2.textContent = cantidad2;
    cellTotal.textContent = `$${total.toLocaleString()}`;

    // Agregar las celdas a la fila
    newRow.appendChild(cellNo);
    newRow.appendChild(cellCant1);
    newRow.appendChild(cellCant2);
    newRow.appendChild(cellTotal);

    // Agregar la fila al cuerpo de la tabla
    tableBody.appendChild(newRow);

    // Limpiar los campos de entrada
    document.getElementById('cantidad1').value = '';
    document.getElementById('cantidad2').value = '';
}
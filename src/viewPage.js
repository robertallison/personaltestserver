window.onload = function() {
    fetch('/data-api/rest/Output')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => populateTable(data))
    .catch(error => console.error('Fetching data failed:', error));
};

function populateTable(data) {
    const tableBody = document.querySelector("#resultTable tbody");

    data.forEach(rowData => {
        const row = document.createElement("tr");

        // Assuming rowData is an object with keys matching your table columns
        for (const key in rowData) {
            let cell = document.createElement("td");
            cell.textContent = rowData[key] || 'N/A';
            row.appendChild(cell);
        }

        // Add any additional row functionality here
        row.addEventListener("click", function() {
            for(let cell of this.cells) {
                cell.classList.toggle("red-text");
            }
        });

        tableBody.appendChild(row);
    });
}



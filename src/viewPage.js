window.onload = function() {
    fetch('/data-api/rest/Output')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Received data:", data); // Debugging line
        populateTable(data);
    })
    .catch(error => console.error('Fetching data failed:', error));
};

function populateTable(data) {
    const tableBody = document.querySelector("#resultTable tbody");

    // Check if data is an array before trying to iterate
    if (Array.isArray(data)) {
        data.forEach(rowData => {
            const row = document.createElement("tr");
            for (const key in rowData) {
                let cell = document.createElement("td");
                cell.textContent = rowData[key] || 'N/A';
                row.appendChild(cell);
            }
            row.addEventListener("click", function() {
                for(let cell of this.cells) {
                    cell.classList.toggle("red-text");
                }
            });
            tableBody.appendChild(row);
        });
    } else {
        console.error('Data is not an array:', data);
    }
}

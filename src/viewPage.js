window.onload = function() {
    const data = JSON.parse(localStorage.getItem("formData"));

    const tableBody = document.querySelector("#resultTable tbody");
    const row = document.createElement("tr");

    // Using an array and loop to optimize the code
    const fields = [
        'name', 'plant', 'date', 'primaryFeed', 'blastDate', 
        'thirtyfive', 'forty', 'fifty', 'sixty', 'seventy', 
        'tonsPrimary', 'tonsDryPlant', 'dryPlantScheduledHours', 'dryPlantRunHours', 
        'nonOperationalHours', 'nonOperationalComments', 'primaryEquipment1', 'primaryReason1', 
        'primaryadditionaldetails', 'primaryEquipment2', 'primaryReason2', 'primaryadditionaldetails2', 
        'runFactors', 'secondaryplantDropdown', 'wetSource', 'tonsProducedWetPlant', 
        'wetPlantScheduledHours', 'wetPlantOperatingHours', 'nonOperationalDowntime', 
        'nonOperationalDowntimeComments', 'secondaryEquip1', 'secondaryReason1', 'secondaryadditionaldetails', 
        'secondaryEquip2', 'secondaryReason2', 'wetplantrunfactors'
    ];
    

    fields.forEach(field => {
        let cell = document.createElement("td");
        cell.textContent = data[field] || 'N/A'; 
        row.appendChild(cell);
    });
    

    // Adding click event to the row
    row.addEventListener("click", function() {
        // Toggle the text color for each cell in the row
        for(let cell of this.cells) {
            cell.classList.toggle("red-text");
        }
    });

    tableBody.appendChild(row);
}



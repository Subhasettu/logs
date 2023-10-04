document.addEventListener('DOMContentLoaded', function() {
    const logs = [
        { type: 'error',timestamp: '2023-10-01T12:34:56', level: 'ERROR', message: 'Issue with shipment.',totalquantity:5000,damagedquantity:40, remainingproducts:5960},
        { type: 'warning',timestamp: '2023-10-01T12:35:23', level: 'WARNING', message: 'Damaged stock for arrived in someitems.',totalquantity:5000,damagedquantity:40, remainingproducts:5960},
        { type: 'info',timestamp: '2023-10-01T12:36:45', level: 'INFO', message: 'New arrivals added.',totalquantity:5000,damagedquantity:40, remainingproducts:5960}
    ];

    const logListElement = document.getElementById('logList');
    const logDetailsElement = document.getElementById('logDetails');
    const filterElement = document.getElementById('filter');

    function generateLogEntries(filter) {
        logListElement.innerHTML = '';
        logs.forEach((log, index) => {
            if (filter === 'all' || log.type.toLowerCase() === filter) {
                const logEntry = document.createElement('div');
                logEntry.classList.add('log-entry');
                logEntry.dataset.index = index;
                logEntry.innerHTML = `
                <span class="timestamp">${log.timestamp}</span>
                <span class="level">${log.level}</span>
                <span class="message">${log.message}</span>
                <span class="totalquantity">${log.totalquantity}</span>
                <span class="damagedquantity">${log.damagedquantity}</span>
                <span class="remainingproducts">${log.remainingproducts}</span>
                `;
                logEntry.addEventListener('click', () => {
                    showLogDetails(log);
                });
                logListElement.appendChild(logEntry);
            }
        });
    }

    function showLogDetails(log) {
        logDetailsElement.style.display = 'block';
        logDetailsElement.innerHTML = `
            <h2>Log Details</h2>
            <p><strong>Timestamp:</strong> ${log.timestamp}</p>
            <p><strong>Level:</strong> ${log.level}</p>
            <p><strong>Message:</strong> ${log.message}</p>
            <p><strong>Total Quantity:</strong> ${log.totalquantity}</p>
            <p><strong>Damaged Quantity:</strong> ${log.damagedquantity}</p>
            <p><strong>Remaining Products:</strong> ${log.remainingproducts}</p>
            
        `;
    }

    generateLogEntries('all');

    filterElement.addEventListener('change', function() {
        const selectedFilter = this.value;
        generateLogEntries(selectedFilter);
    });
});

function login(event) {
    event.preventDefault(); 
    window.location.href = 'ProjectView.html';
}

function logout() {
    window.location.href = 'mss.html';
}

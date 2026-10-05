const tableHeader = ['#', 'Moves', 'Date'];

const createTable = (results) => {
    const table = document.createElement('table');
    table.classList.add('table');
    const head = table.createTHead();
    const headRow = head.insertRow();
    tableHeader.forEach((el) => {
        const th = document.createElement('th');
        th.textContent = el;
        headRow.append(th);
    });
    let counter = 1;
    results.forEach((result) => {
        const row = table.insertRow();
        const cell = row.insertCell();
        cell.textContent = counter;
        counter += 1;
        Object.entries(result).forEach(([, value]) => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    })
    table.append(head);
    return [table];
};
export default createTable;

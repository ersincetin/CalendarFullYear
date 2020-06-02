let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let months = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
let days = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];
fullYear(currentMonth,currentYear);
function fullYear(month,year) {
    for (let i = 0; i < months.length; i++) {
        showCalendar(i,year);
    }
}
function showCalendar(month, year) {
    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let tbl = document.getElementById("calendar-body");
    let row = document.createElement("tr");
    let cell = document.createElement("th");
    let cellText = document.createTextNode(months[month]+" / "+currentYear);
    cell.appendChild(cellText);
    row.appendChild(cell);
    for (let j = 0; j < 31; j++) {
        if (j+1 > daysInMonth){
            break;
        }
        let cell = document.createElement("td");
        let br = document.createElement("br");
        let cellText = document.createTextNode(days[(firstDay+j)%7]);
        let font = document.createElement("i");
        font.style.color="#00c851";
        font.classList.add("fa");
        font.classList.add("fa-check");
        cell.appendChild(cellText);
        cell.appendChild(br);
        cell.appendChild(font);
        row.appendChild(cell);
    }
    tbl.appendChild(row);
}
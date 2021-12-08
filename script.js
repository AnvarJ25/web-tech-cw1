const navSlide = () => {
    const burger = document.querySelector('.lines');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelector('.nav-links li');


    //Toggle Nav
    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
    });
}

navSlide();

let btnGet = document.querySelector('button');
let scheduleTable = document.querySelector('#table');
let schedules = [
    { Day: 'Monday', Room: 203, Time: '11:00 am - 9:00 pm', Trainer: 'Joseph' },
    { Day: 'Tuesday', Room: 203, Time: '11:00 am - 9:00 pm', Trainer: 'Misha'},
    { Day: 'Wednesday', Room: 203, Time: '11:00 am - 9:00 pm', Trainer: 'Joseph' },
    { Day: 'Thursday', Room: 203, Time: '11:00 am - 9:00 pm', Trainer: 'Misha' },
    { Day: 'Friday', Room: 203, Time: '8:00 am - 9:00 pm', Trainer: 'Joseph' },
    { Day: 'Saturday', Room: 203, Time: '8:00 am - 9:00 pm', Trainer: 'Aleksandr' },
    { Day: 'Sunday', Room: 203, Time: '8:00 am - 9:00 pm', Trainer: 'Vladislav' },
]
let headers = ['Day', 'Room', 'Time', 'Trainer'];
btnGet.addEventListener('click', () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    schedules.forEach(schedule => {
        let row = document.createElement('tr');
        Object.values(schedule).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
        table.appendChild(row);
    });
    scheduleTable.appendChild(table);
});

let btnSubmit = document.querySelectorAll('.send-request');
let inputs = document.querySelectorAll('input');
    btnSubmit.addEventListener('click', () => {
        inputs.forEach(input =>  input.value = '');
});
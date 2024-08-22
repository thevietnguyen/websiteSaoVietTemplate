window.addEventListener("load", () => {
    const subContents = document.querySelectorAll('.sub-content');
    sessionStorage.setItem('totalCalendar', subContents.length);
})

document.addEventListener('DOMContentLoaded', function () {
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString().substring(0, 10);
    document.getElementById("date").value = formattedDate;
    
    const notificationCalendar = document.querySelector('#notification-calendar');
    const btnSubmit = document.querySelector('#btn-submit');

    btnSubmit.addEventListener("click", () => {
        let subContents = document.querySelectorAll('.sub-content');
        let total = sessionStorage.getItem('totalCalendar');
        const totalCalendar = document.getElementById('totalCalendar');
        
        if(subContents.length > total) {
            notificationCalendar.style.display = 'block';
            sessionStorage.setItem('totalCalendar', subContents.length);
            localStorage.setItem('notificationCalendar', 'true');
            totalCalendar.innerHTML = subContents.length;
        }
    })
})

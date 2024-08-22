document.addEventListener('DOMContentLoaded', function () {
    const aElement = document.querySelectorAll('.menu a');
    
    aElement.forEach((element, index) => {
        element.addEventListener("click", () => {
            sessionStorage.setItem("navStatus", index);
        })
    });

    let checkStatus = sessionStorage.getItem("navStatus");
    if(checkStatus) {
        aElement[checkStatus].style.color = 'white';
        aElement[checkStatus].style.backgroundColor = '#45C3D2';
    }
    
    isNotification();
    totalCalendar();
})

let scrollStopped = false;
window.addEventListener('scroll', function() {
    const container = document.querySelector('.calendar');
    const windowWidth = window.innerWidth;
    const bodyHeight = document.body.scrollHeight;
    const scrollTop = window.scrollY;

    if(scrollTop <= bodyHeight - window.innerHeight) {
        scrollStopped = false;
    }

    if (!scrollStopped) {
        if (container.getBoundingClientRect().right <= windowWidth && container.getBoundingClientRect().left >= 0) {
            container.style.transition = 'none';
            container.style.transform = `translateY(${scrollTop}px) translateX(-400px)`;
        }

        if (scrollTop >= bodyHeight - window.innerHeight) {
            scrollStopped = true;
        }
    }
})

function totalCalendar() {
    const calendar = document.querySelector('.calendar');
    const btnClose = document.getElementById('btn-close');
    const subContents = document.querySelectorAll('.sub-content');
    const totalCalendar = document.getElementById('totalCalendar');
    const clickCalendarImg = document.querySelector('.icon-calendar img');
    const clickCalendarP = document.querySelector('.icon-calendar p');
    const notificationCalendar = document.querySelector('#notification-calendar');

    clickCalendarImg.addEventListener("click", () => {
        calendar.style.transform = 'translateX(-400px)';
        calendar.style.transition = 'transform 0.5s ease';
        notificationCalendar.style.display = 'none';
        localStorage.setItem('notificationCalendar', 'false');
    })

    clickCalendarP.addEventListener("click", () => {
        calendar.style.transform = 'translateX(-400px)';
        calendar.style.transition = 'transform 0.5s ease';
        notificationCalendar.style.display = 'none';
        localStorage.setItem('notificationCalendar', 'false');
    })

    btnClose.addEventListener("click", () => {
        calendar.style.transform = 'translateX(400px)';
        calendar.style.transition = 'transform 0.5s ease';
    })

    totalCalendar.textContent = subContents.length;
    sessionStorage.setItem('totalCalendar', subContents.length);
}

function isNotification() {
    const notificationCalendar = document.querySelector('#notification-calendar');
    const checkIsNotifi = localStorage.getItem('notificationCalendar');

    if(checkIsNotifi === 'true') {
        notificationCalendar.style.display = 'block';
    }
}
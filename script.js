const toggle = document.getElementById('toggle');
const switched = document.getElementById('switched');
toggle.addEventListener('change', e => { 
    switched.classList.toggle('show-monthly');
})

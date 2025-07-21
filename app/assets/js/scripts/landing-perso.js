// Code pour page launcher : 
const navbar_home = document.getElementById('navbar_home')
const navbar_NP_Empire = document.getElementById('navbar_NP-Empire')
const bas_de_page_home = document.getElementById('bas-de-page_home')
const bas_de_page_np_empire = document.getElementById('bas-de-page_np-empire')

const tirret_home = document.getElementById('navbar_encadrer-selection-page_tirret_home')
const tirret_np_empire = document.getElementById('navbar_encadrer-selection-page_tirret_np-empire')
const tirret_parametre = document.getElementById('navbar_encadrer-selection-page_tirret_parametre')
const display_none = 'display_none'

navbar_home.addEventListener('click', function() {
    bas_de_page_np_empire.classList.add(display_none)
    bas_de_page_home.classList.remove(display_none)
    tirret_home.classList.remove(display_none)
    tirret_np_empire.classList.add(display_none)
    tirret_parametre.classList.add(display_none)
    console.log('[DEBUG]: Page home charger')
})

navbar_NP_Empire.addEventListener('click', function() {
    bas_de_page_home.classList.add(display_none)
    bas_de_page_np_empire.classList.remove(display_none)

    tirret_np_empire.classList.remove(display_none)
    tirret_home.classList.add(display_none)
    tirret_parametre.classList.add(display_none)
    console.log('[DEBUG]: Page NP Empire charger')
})


// ratio page principale
// const box = document.getElementsByClassName('page-principale')
// if ( > 0) {}
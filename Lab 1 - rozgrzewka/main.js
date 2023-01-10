const liczba1 = document.querySelector('#liczba1')
const liczba2 = document.querySelector('#liczba2')
const liczba3 = document.querySelector('#liczba3')
const liczba4 = document.querySelector('#liczba4')

const sumaWynik = document.querySelector('#suma')
const sredniaWynik = document.querySelector('#srednia')
const minWynik = document.querySelector('#min')
const maxWynik = document.querySelector('#max')

const przeliczBtn = document.querySelector('#przelicz')

przeliczBtn.addEventListener('click', () => {
    sumaWynik.innerHTML = 'Suma: '+ (parseInt(liczba1.value) + parseInt(liczba2.value) + parseInt(liczba3.value) + parseInt(liczba4.value))
    sredniaWynik.innerHTML = 'Srednia: ' + (parseInt(liczba1.value) + parseInt(liczba2.value) + parseInt(liczba3.value) + parseInt(liczba4.value))/4
    minWynik.innerHTML = 'Min: ' + Math.min(parseInt(liczba1.value), parseInt(liczba2.value), parseInt(liczba3.value), parseInt(liczba4.value))
    maxWynik.innerHTML = 'Max: ' + Math.max(parseInt(liczba1.value), parseInt(liczba2.value), parseInt(liczba3.value), parseInt(liczba4.value))
})
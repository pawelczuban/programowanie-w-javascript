const liczba1 = document.querySelector('#liczba1')
const liczba2 = document.querySelector('#liczba2')
const przeliczBtn = document.querySelector('#przelicz')
const wynikiPojemnik = document.querySelector('#wyniki')

console.dir(liczba1)
console.dir(liczba2)
przeliczBtn.addEventListener('click', () => {
    console.log(Math.min(+liczba1.value,+"4"))
    wynikiPojemnik.innerHTML = `Wynik: ${parseInt(liczba1.value)+parseInt(liczba2.value)}`
    //wynikiPojemnik.innerHTML = `Wynik: ${liczba1.value+liczba2.value}`
})
// Math.min(), .max()
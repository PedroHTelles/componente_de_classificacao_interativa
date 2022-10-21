const form = document.querySelector('#classification')
const rating = document.getElementsByName('rating')
const component_1 = document.querySelector('#component-1')
const component_2 = document.querySelector('#component-2')
const res = document.querySelector('#res')
// Retornando o valor "checked".
function check(rating) {
    let val = ``
    rating.forEach((obj,index)=>{
        if (rating[index].checked == true) {
            val = rating[index].value          
        }       
    })
    return val
}
// Ação-pós "subimit".
function sub(event) {
    event.preventDefault()

    component_1.classList.add('submit')

    component_2.classList.add('visible')

    res.innerHTML = check(rating)
}

form.addEventListener('submit', sub)
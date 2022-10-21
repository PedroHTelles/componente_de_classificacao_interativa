var form = document.querySelector('#classification')
var rating = document.getElementsByName('rating')
var component_1 = document.querySelector('#component-1')
var component_2 = document.querySelector('#component-2')
var res = document.querySelector('#res')

function check(rating) {
    var val = ''
    if (rating[0].checked) {
        val = rating[0].value
    } else if (rating[1].checked) {
        val = rating[1].value
    } else if (rating[2].checked) {
        val = rating[2].value
    } else if (rating[3].checked) {
        val = rating[3].value
    } else if (rating[4].checked) {
        val = rating[4].value
    }
    return val
}

function sub(event) {
    event.preventDefault()

    component_1.classList.add('submit')

    component_2.classList.add('visible')

    res.innerHTML = check(rating)
}

form.addEventListener('submit', sub)
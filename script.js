const list = document.querySelector('.list')
const inputBox = document.querySelector('#inputBox')
const addItem = (value) => {
    if (inputBox.value === "") {
        alert('Please enter your input first')
    } else {
        const li = document.createElement('LI')
        li.innerHTML = value
        li.classList.add('listItem')
        list.appendChild(li)

        const span = document.createElement('SPAN');
        span.innerHTML = `<img src='images/cross.png'>`
        li.appendChild(span)

        li.addEventListener('click', imgchanged)

        span.addEventListener('click', () => {
            li.remove()
        })
    }

}

const imgchanged = () =>{
    document.querySelector('.listItem').classList.toggle('checked');
}

document.querySelector('.addTask').addEventListener('click', function () {
    addItem(inputBox.value)
    inputBox.value = ''
})
const myButton = document.querySelector('#myButton')
const nameInput = document.querySelector('#nameInput')
const list = document.querySelector('#list')

let newElementList = function () {
    const newItem = document.createElement('li');
    const itemText = document.createElement('span')
    const strike = document.createElement('s')
    const cancel = document.querySelector('#cancel')
    const accept = document.querySelector('#delete')
    const IND = document.querySelector('#itemNameDelete')
    const frame = document.querySelector('#warning')

    newItem.classList.add('item')
    itemText.textContent = nameInput.value

    list.appendChild(newItem)
    newItem.appendChild(itemText)
    newItem.appendChild(strike)

    nameInput.value = ''

    let struck = false

    const delBtn = document.createElement('button')
    delBtn.textContent = 'X'
    newItem.appendChild(delBtn)

    delBtn.addEventListener('click', () => {
        frame.classList.remove('hidden')
        IND.textContent = itemText.textContent
    })

    accept.addEventListener('click', () => {
        if (itemText.textContent == IND.textContent) {
            list.removeChild(newItem)
        }
        frame.classList.add('hidden')
    })

    cancel.addEventListener('click', () => {
        frame.classList.add('hidden')
    })

    newItem.addEventListener('click', () => {
        if (struck == false) {
            struck = true
            strike.appendChild(itemText)
        } else {
            struck = false
            newItem.appendChild(itemText)
        }
    })
}

myButton.addEventListener('click', () => {
    newElementList()
})
nameInput.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        newElementList()
    }
})
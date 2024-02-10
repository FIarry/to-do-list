const myButton = document.querySelector('#myButton')
const nameInput = document.querySelector('#nameInput')
const clrButton = document.querySelector('#clrButton')
const findInput = document.querySelector('#findInput')
const list = document.querySelector('#list')
const cancel = document.querySelector('#cancel')
const accept = document.querySelector('#delete')
const IND = document.querySelector('#itemNameDelete')
const frame = document.querySelector('#warning')

let newElementList = function () {

    if (nameInput.value != '' && nameInput.value != ' ') {
        const newItem = document.createElement('li');
        const itemText = document.createElement('span')
        const strike = document.createElement('s')
    
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
    
        findInput.addEventListener('keyup', (event) => {
            if (list.childElementCount > 0) {
                if (findInput.value != '') {
                    if ((newItem.textContent.toLowerCase()).indexOf((findInput.value).toLowerCase()) == -1) {
                        newItem.classList.add('hidden')
                    } else {
                        newItem.classList.remove('hidden')
                    }
                } else {
                    newItem.classList.remove('hidden')
                }
            }
        })
    }
}

myButton.addEventListener('click', () => {
    newElementList()
})
nameInput.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        newElementList()
    }
})

clrButton.addEventListener('click', () => {
    findInput.value = ''
})
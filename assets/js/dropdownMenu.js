// to get the moment when user will click on button "Option" to open the menu
$('#btnOption').click(() => {            
    let dropMenu = $('#dropMenu').hasClass('drop-area-show')

    if(!dropMenu) {
        $('#dropMenu').fadeOut(1).addClass('drop-area-show').fadeIn(50)
    } else {
        $('#dropMenu').removeClass('drop-area-show')
    }
})

//to choose the option on dropdown menu
function changeItemsList(e) {
    let itemsQuantity =  $('#itemsQuantity')
    let dropSelect = $('#dropSelect')
    
    let nItems = parseInt(itemsQuantity[0].value)
        
    let dropSelectLetter =  dropSelect[0].value.split('_')[1]
    console.log(nItems)
    console.log(dropSelectLetter)

    if(itemsQuantity[0].value.length != 0) {
        itemsQuantity.removeClass('empty-quantity')
        createList(nItems, dropSelectLetter)
        itemsQuantity[0].value = ''
        dropSelect[0].value = 'Dropdown'

    } else {
        itemsQuantity.addClass('empty-quantity')
    }
}


//to create a list of items dinamicly
function createList(nItems, itemType) {    
    let list = document.querySelector('#ItemsList')
    list.innerHTML = ''
    
    for(let i = 0; i < nItems; i++) {
        let li = document.createElement('li')
        let pNumber = document.createElement('p')
        let pItem = document.createElement('p')


        //setting numbers dinamicly
        pNumber.textContent = i+1
        pItem.textContent = `item ${itemType}${i+1}`

        //adding classes on tags
        pNumber.classList.add('item-number')
        pItem.classList.add('item-name')
        li.classList.add('item')

        //setting child on father
        li.appendChild(pNumber)
        li.appendChild(pItem)

        //setting li's on ul
        list.appendChild(li)

        //reseting values for more consults

    }
}
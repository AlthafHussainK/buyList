const downButton = document.querySelector('#down')
const upButton = document.querySelector('#up')
const buyListDisplay = document.querySelector('#first-list')
const fridgeListDisplay = document.querySelector('#second-list')

const buyList = ['almond milk', 'avacado', 'cheese', 'helloumi' ]
const fridge = []

// filling fridge with items
fridge.push('tomato', 'chocolate', 'butter', 'salad', 'curd')

// a function that will remove an item from the fridge, and put it in the buyList, on moveUP button

function moveUp() {
  let fridgeItem = fridge.pop()
  buyList.push(fridgeItem)
  buyListDisplay.innerHTML = buyList
  fridgeListDisplay.innerHTML = fridge
}

upButton.addEventListener('click', moveUp)

// a function to remove last item from the buyList

function moveDown(){
  let buyItem = buyList.pop()
  fridge.push(buyItem)
  buyListDisplay.innerHTML = buyList
  fridgeListDisplay.innerHTML = fridge
}

downButton.addEventListener('click', moveDown)

buyListDisplay.innerHTML = buyList
fridgeListDisplay.innerHTML = fridge
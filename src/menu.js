function createMenu(){
    console.log('its ok')
    const menu = document.createElement('div')
    menu.classList.add('menu')

    const menuHeader = document.createElement('h1')
    menuHeader.classList.add('menu-header')
    menuHeader.textContent = 'PIZZA MENU'

    const menuOptions = document.createElement('div')
    menuOptions.classList.add('menu-options')

    const option1 = document.createElement('div')
    option1.classList.add('option')

    menu.appendChild(menuHeader)
    menu.appendChild(menuOptions)
    
    menuOptions.appendChild(createOption("Mexican Hot", "double pepperoni, mince beef, red onions, jalapenos,  tomatoes", '10$'))
    menuOptions.appendChild(createOption("Supreme", "pepperoni, minced beff, mushrooms, mixed peppers, red onions, grated cheese", '15$'))
    menuOptions.appendChild(createOption("Seafood Pizza", "tomatoes, salad mix, seafood mix, olive oil, cheese, pepper", '20$'))
    menuOptions.appendChild(createOption("Margherita", "tomatoe sauce, extra mozzerella cheese, fresh basil", '20$'))
    menuOptions.appendChild(createOption("Pepperoni", "double pepperoni, extra mozzerella, tomatoe sauce, spice, olive oil", '20$'))
    menuOptions.appendChild(createOption("The Chicken One", "chicken, mushrooms, tomatoes, peppers", '30$'))
    return menu
}

function createOption(name, descp, cost){
    const option = document.createElement('div')
    option.classList.add('option')

    const optionName = document.createElement('div') 
    optionName.textContent = name
    optionName.classList.add('option-name')


    const optiondesc = document.createElement('div')
    optiondesc.textContent = descp
    optiondesc.classList.add('option-desc')
    
    const price = document.createElement('div')
    price.classList.add('price')
    price.textContent = cost

    option.appendChild(optionName)
    option.appendChild(optiondesc)
    option.appendChild(price)

    return option
}


function loadMenu(){
    const main = document.querySelector(".main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu

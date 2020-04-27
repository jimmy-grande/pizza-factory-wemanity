const availableSizes = ['small', 'medium', 'large']

class PizzaMaker {
    constructor(inputs) {

        checkIfDoughValid(inputs.size)
        checkIfAnyTopping(inputs.toppings)

        this.size = inputs.size
        this.type = inputs.type
        this.toppings = inputs.toppings
    }
}

function checkIfAnyTopping(toppings) {
    if(toppings.length == 0)
        throw new Error('You should provide at least 1 topping')
}


function checkIfDoughValid(size) {
    if(!availableSizes.includes(size))
        throw new Error('You should have a dough')
}

module.exports = {
    PizzaMaker
}
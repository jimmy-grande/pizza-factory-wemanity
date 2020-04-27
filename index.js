class PizzaMaker {
    constructor(inputs) {

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

module.exports = {
    PizzaMaker
}
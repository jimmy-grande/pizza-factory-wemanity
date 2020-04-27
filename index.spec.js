const { PizzaMaker } = require('./index')

describe('Make a small mexican pizza', () => {
    it('should make a small mexican pizza when I ask for it', () => {
        // Arrange

        //Add sauce and toppings :-)
        const toppings = []
        toppings.push('tomato sauce')
        toppings.push('minced meat')
        toppings.push('pepperoni')
        toppings.push('pineapple')
        toppings.push('pepper')
        toppings.push('cheddar')
        toppings.push('hot sauce')

        const inputs = {
            type: 'mexican',
            size: 'small',
            toppings
        }
        // Act
        const result = new PizzaMaker(inputs)

        // Assert
        expect(result).not.toBeNull()
        expect(result.type).toEqual(inputs.type)
        expect(result.size).toEqual(inputs.size)
        expect(result.toppings).toEqual(inputs.toppings)
        
    })
})
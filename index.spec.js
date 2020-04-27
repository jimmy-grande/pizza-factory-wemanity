const { PizzaMaker } = require('./index')

describe('Make a pizza', () => {
    it('should make a small mexican pizza when I ask for it', () => {
        // Arrange

        // Add sauce and toppings :-)
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
    
    it('should make a small 4 seasons pizza when I ask for it', () => {
        // Arrange

        // Add sauce and toppings :-)
        const toppings = []
        toppings.push('tomato sauce')
        toppings.push('egg')
        toppings.push('spinach')
        toppings.push('pepper')
        toppings.push('cheddar')
        toppings.push('vinegar')

        const inputs = {
            type: '4 seasons',
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

    it('should NOT make a pizza WHEN mandatory toppings are not there', () => {
      
        // Arrange 
        const toppings = []
        const inputs = {
            type: '4 seasons',
            size: 'small',
            toppings
        }
        // Act
        const result = () => new PizzaMaker(inputs)

        // Assert
        expect(result).toThrow()
 
    })

    it('Should NOT make pizza WHEN no dough', () => {
        // Arrange

        const toppings = ['tomato sauce']

        const inputs = {
            type: '4 seasons',
            size: 'euh',
            toppings
        }

        // Act
        const result = () => new PizzaMaker(inputs)

        // Assert
        expect(result).toThrow()

    })
})
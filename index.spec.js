const { make } = require('./index')

describe('Make a small mexican pizza', () => {
    it('should make a small mexican pizza when I ask for it', () => {
        // Act
        const inputs = {
            type: 'mexican',
            size: 'small'
        }
        // Arrange
        const result = make(inputs)
        // Assert
    })
})
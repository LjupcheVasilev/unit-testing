import { sum } from './sum'
describe('sum', () => {
    it('should add two numbers', () => {
        expect(sum(1, 2)).toBe(3)
    })
})
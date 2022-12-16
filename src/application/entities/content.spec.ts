import { Content } from "./content"

describe("Notification content", () => {
    
    it('should be able to create notification content', () => {
        const content = new Content("Nova notificação recebida")
        expect(content).toBeTruthy()
    })
    
    
    it('should not be able to create notification content with less than 5 caracters', () => {
        expect(() => new Content("Erro")).toThrow()
    })
    
    it('should not be able to create notification content with less than 5 caracters', () => {
        expect(() => new Content("a".repeat(241))).toThrow()
    })
})

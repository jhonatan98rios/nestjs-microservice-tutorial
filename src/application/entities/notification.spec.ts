import { Content } from './content'
import { Notification } from './notification'

describe("Noticiation", () => {
    it('Should bee able to create a notification', () => {
        const notification = new Notification({
            content: new Content("New notification"),
            category: 'social',
            recipientId: 'example-recipient-id'
        })

        expect(notification).toBeTruthy()
    })
})
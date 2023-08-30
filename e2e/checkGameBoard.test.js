import { device, element, by } from 'detox';

describe('Check Game Board', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
    describe('Press Button', () => {
      it('should start successfully', async () => {
        await element(by.id('startButton')).tap();
        await expect(element(by.id('gameView'))).toBeVisible();
      });

      it('game board should be complete', async () => {
        const boardIndexs = [ 0, 1, 2, 3, 4, 5, 6, 7, 8]
        for (const index of boardIndexs) {
            await expect(element(by.id(`Square${index}`))).toBeVisible();
        }
      });
    });
});
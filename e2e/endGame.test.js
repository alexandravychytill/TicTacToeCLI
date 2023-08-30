import { device, element, by } from 'detox';

describe('End Game', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
    describe('Press Button', () => {
      it('should start successfully', async () => {
        await element(by.id('startButton')).tap();
      });
    });

    describe('Press Button', () => {
        it('should end game', async () => {
          await element(by.id('endButton')).tap();
          await expect(element(by.id('homeView'))).toBeVisible();
        });
      });
  });
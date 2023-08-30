import { device, element, by } from 'detox';

describe('Start Game', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  describe('Press Button', () => {
    it('should start successfully', async () => {
      await element(by.id('startButton')).tap();
      await expect(element(by.id('gameView'))).toBeVisible();
    });
  });
});
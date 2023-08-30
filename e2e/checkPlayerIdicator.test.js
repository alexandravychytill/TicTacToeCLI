import { device, element, by } from 'detox';

describe('Check Player Indicators', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
    describe('Press Button', () => {
      it('should start successfully', async () => {
        await element(by.id('startButton')).tap();
        await expect(element(by.id('gameView'))).toBeVisible();
    });

      it('check both player indicators', async () => {
        await element(by.id(`Square0`)).tap();
        await element(by.id(`Square1`)).tap();

        await expect(element(by.label('ellipse-outline_0'))).toBeVisible();
        await expect(element(by.label('close-outline_1'))).toBeVisible();
      });
    });
  });
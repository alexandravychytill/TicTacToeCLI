describe('Draw Game', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
    describe('Press Button', () => {
      it('should start successfully', async () => {
        await element(by.id('startButton')).tap();
        await expect(element(by.id('gameView'))).toBeVisible();
      });

      it('play draw game', async () => {
        const drawPattern = [ 0, 4, 8, 6, 2, 5, 3, 1, 7]
        for (const index of drawPattern) {
            await element(by.id(`Square${index}`)).tap();
        }
      });

      it('should display draw', async () => {
        await element(by.label('Draw!').and(by.type('_UIAlertControllerActionView')));
        await element(by.label('OK').and(by.type('_UIAlertControllerActionView'))).tap();
    });
    });
  });
  
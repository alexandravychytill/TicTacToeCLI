import { getRandomNumberNotInArray, randomInt } from "./Helper"

describe('Draw Game', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
    describe('Press Button', () => {
      it('should login successfully', async () => {
        await element(by.id('startButton')).tap();
      });

      it('should correctly detect all winning conditions', async () => {
        const winningPatterns = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6], [1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6],];
    
        for (const pattern of winningPatterns) {
          await simulateGameWithPattern(pattern);
          await assertWinningCondition();
          await restartGame();
        }
      });
    });
    
    async function simulateGameWithPattern(winPattern) {
      const losePattern = getRandomNumberNotInArray(9, winPattern)
      for (const index of winPattern) {
        var i = randomInt(losePattern.length)
        await element(by.id(`Square${index}`)).tap();
        if(losePattern.length > 4)
        await element(by.id(`Square${String(losePattern[i])}`)).tap();
        losePattern.splice(i, 1);
      }
    }
    
    async function assertWinningCondition() {
      const messageElement = element(by.label('OK').and(by.type('_UIAlertControllerActionView')));
      await expect(messageElement).toBeVisible();
    }
    
    async function restartGame() {
      await element(by.label('OK').and(by.type('_UIAlertControllerActionView'))).tap();
      await element(by.id('startButton')).tap();
    }
});

  

import watchesPage from '../pages/watches.page';


describe(' validate the watches page in myntra application', () => {
    
    it('should get the gender list & verify the url of new page opened ', async () => {
       watchesPage.open();
       await watchesPage.waitForWatchesPage();
       await watchesPage.getWatchGenderCategoryListText();
       await expect(browser).toHaveUrl("https://www.myntra.com/watches");
       await browser.pause(5000);    
    });

});

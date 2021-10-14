import page from './page';

class watchesPage extends page {
// to use selectors we have to use geter function    
// open()--> is a method

    get watchProduct() {
         return $("//img[@title='boAT Unisex Blue Storm M Smart Watch']");
    }

    get watchBreadCrumbs() {
        return $("span.breadcrumbs-crumb");
    }

    get watchGenderCategoryList() 
    {
        return $$('//div[@class="vertical-filters-filters"][1]/ul/li/label');// 4 elements
    }

    open() {
        super.open("/watches");

    }

    waitForWatchesPage(){
        return this.watchBreadCrumbs.waitForDisplayed({timeout:3000});
    }

     getWatchGenderCategoryListText()   {
       return this.watchGenderCategoryList.forEach(async (element) => {
            let text = await element.getText();
            console.log(text);
           });
    }
}

export default new watchesPage();
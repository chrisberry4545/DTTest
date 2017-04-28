'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */


var PageObject = {

    getFilterMenu() {
        return element(by.css('div[data-e2e=header__menu]'));
    },

    getBurgerMenuButton() {
        return element(by.css('button[data-e2e=header__burger-button]'));
    }

}


describe("dtTestApp UI", function() {

    beforeEach(function() {
        browser.get('/#!/maintable');
    })

    describe("When clicking the burger menu", function() {

        beforeEach(function() {
            PageObject.getBurgerMenuButton().click();
        });

        it("Then it shows the filter menu", function() {
            browser.wait(protractor.ExpectedConditions.presenceOf(PageObject.getFilterMenu()), 10000);
            expect(PageObject.getFilterMenu().isDisplayed()).toBeTruthy();
        });


        describe("When clicking the burger menu again", function() {

            beforeEach(function() {
                PageObject.getBurgerMenuButton().click();
            });

            it("Then it hides the filter menu", function() {
                expect(PageObject.getFilterMenu().isPresent()).toBeFalsy();
            });

        });



    });

});

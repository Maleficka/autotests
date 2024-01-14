class BasePage{

    constructor(url){
        this.url=url;
    }

    get backBtn(){
        return $('//*/button/span[text()="Back"]/..');
    }

}

module.exports = BasePage;
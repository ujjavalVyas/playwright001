

class loginP2{

    constructor(page){

this.page=page;
this.uname = "//input[contains(@type, 'text')]";
this.pass = "//input[contains(@type, 'password')]";
this.btn = "//button[@id= 'submit']";

    }

    async login12(){
        await this.page.fill(this.uname,"student");
        await this.page.fill(this.pass,"Password123");
        await this.page.click(this.btn);

    }
}

module.exports = loginP2;
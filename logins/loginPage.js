
class loginPage{


constructor(page){
    this.page = page;
    this.username = "//input[@placeholder='Username']";
    this.password = "//input[@placeholder='Password']";
    this.loginButton = "//button[normalize-space()='Login']";
}

async loginToPage(){
    
    await this.page.fill(this.username,"Admin")
    await this.page.fill(this.password,"admin123")
    await this.page.click(this.loginButton)

}
}

module.exports=loginPage;
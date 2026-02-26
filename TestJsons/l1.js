

export class l1{

    constructor(page){

        this.page = page;
        this.uname = page.locator("//input[@id='username']");
        this.pass = page.locator("//input[@id='password']");

    }

    async login(){

            // await expect(this.uname).toBeVisible();
            //  await expect(this.pass).toBeVisible();
            await this.uname.fill("student")
            await this.pass.fill("Password123")
    }

}
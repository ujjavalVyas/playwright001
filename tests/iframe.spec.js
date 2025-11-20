//const{test,expect} =require('@playwright/test')



function div(a,b){

    return new Promise((resolve,reject) => {

        if(b===0){
            console.log("can't divide by zero");
            
        }else{
            resolve(a/b)
        }

    }

)}

div(1,2);



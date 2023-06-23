///<reference types ="Cypress"/>

describe('Login', () => {
//     it('Login Standrd-user', () => {       
//         cy.visit("https://www.saucedemo.com/")
//         cy.get('[data-test="username"]').type("standard_user")
//         cy.get('[data-test="password"]').type("secret_sauce")
//         cy.get('[data-test="login-button"]').click()
        
// });





        // it('add all item', () => {
        //     cy.visit("https://www.saucedemo.com/")
        //     cy.get('[data-test="username"]').type("standard_user")
        //     cy.get('[data-test="password"]').type("secret_sauce")
        //     cy.get('[data-test="login-button"]').click()

        //     let myarray=[0,1,2,3,4,5]

        //     for(let i=0 ; i < myarray.length ; i++  ){

        //         let myarray = cy.get('div#inventory_container').find('.btn').eq(i).click()

        //     }  
        
        // });





  
        
                it('add all item', () => {
            cy.visit("https://www.saucedemo.com/")
            cy.get('[data-test="username"]').type("standard_user")
            cy.get('[data-test="password"]').type("secret_sauce")
            cy.get('[data-test="login-button"]').click()

            let myarray=[0,1,2,3,4,5]

            for(let i=0 ; i < myarray.length ; i++  ){



                if(i %2===1){

                  
                let myarray = cy.get('div#inventory_container').find('.btn').eq(i).click()
                }

            }  
        
        });




    
    
});
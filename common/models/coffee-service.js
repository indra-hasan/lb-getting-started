'use strict';

module.exports = function(Coffeeservice) {
   
    let app = require("../../server/server");    
    /** 
     * 
     * Get listing coffee shop
     *  
     **/

     Coffeeservice.remoteMethod('getListCoffeeShop',{
        accepts: [
            {
                args:"params",
                type: "object",
                required: false,
                http: { source: "body" }
            }
        ],
        returns: {
            arg: "paramReturn",
            type: "object",
            root: true
        },
        http: {
            path: "/getListCoffeeShop",
            verb: "get"
        },
     });

     Coffeeservice.getListCoffeeShop = async function (params) {
        try {
            let coffeeShop = app.models.CoffeeShop;
            let listing = await new Promise((resolve, reject) =>{
                coffeeShop.find({
                    limit: 10
                },function (err, ret) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(ret);
                    }
                });
            });  
            
            return listing;
        } catch (error) {
            throw error.message;
        }

     }

     /** 
     * 
     * Add coffee shop
     *  
     **/

     /** 
     * 
     * Edit coffee shop
     *  
     **/

     /** 
     * 
     * Delete coffee shop
     *  
     **/

};

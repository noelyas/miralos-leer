import { Products } from "./Products";

export const getFetch = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(Products);
    }, 2000)

})
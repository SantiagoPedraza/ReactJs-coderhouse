import { stock } from "../data/data"

export const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(stock)
            }, 3000)
        } )
}



   
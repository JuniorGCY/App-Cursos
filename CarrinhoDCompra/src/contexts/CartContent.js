import React, {createContext, useState} from "react";

export const CarContext = createContext({})

function CarProvider({ children }){
    const [cart,setCart] = useState([]);

    function addItemCart(newitem) {
        const indexItem = cart.findIndex(item => item.id === newitem.id)

        if (indexItem !== -1) {

        }

        let data = {
            ...newitem,
            amount: 1,
            total: newitem.price
        }

        setCart(produtos => [...produtos, data], console.log('Carrinho atualizado', cart) )
    }

    return (
        <CarContext.Provider value={{cart,addItemCart}}
        >
            {children}
        </CarContext.Provider>
    )
}

export default CarProvider;

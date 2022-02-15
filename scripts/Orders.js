//importing "getOrders" function from database.js

import { getOrders } from "./database.js"

//declaring a function called "buildOrderListItem" and giving it the "order" perameter and having it return a string.
const buildOrderListItem = (order) => {
    return `<li>
        Order #${order.id} was placed on ${order.timestamp}
    </li>`
}

//declaring and exporting a function called "Orders" 
export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */

    // declaring variable "orders" and setting it equal to "getOrders" function from database.js
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}


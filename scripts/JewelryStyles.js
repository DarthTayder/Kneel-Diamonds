//importing the "getStyles" function from database.

import { getStyles, setStyle } from "./database.js"

//declaring that "styles" is equal to the "getStyles" function imported from database.js

const styles = getStyles()

//"change" event listener that displays window when style is selected.

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
        setStyle(parseInt(event.target.value))
        }
    }
)

//declaring a function "JewelryStyles" which establishes a ul and creates radio buttons.

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = styles.map(style => {
        return `<li>
            <input type="radio" name="style" value="${style.id}" /> ${style.style}
        </li>`
    })


    // Join all of the strings in the array into a single string
    html += listItems.join("")

    //end of ul

    html += "</ul>"
    
    return html
}


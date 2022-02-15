//importing getSizes function from database.

import { getSizes, setSize } from "./database.js"

// declaring that "sizes" is equal to the "getSizes" function.

const sizes = getSizes()

//adding a "change" event listener so a window pops up when selecting.

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

//declaring and exporting the "DiamondSizes" function which creates the ul and creates the radio buttons

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    //joining the "listItems" together

    html += listItems.join("")

    //end of ul
    
    html += "</ul>"

    return html
}


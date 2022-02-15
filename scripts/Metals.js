//importing "getMetals" function from database.js

import { getMetals, setMetal } from "./database.js"

//declairing const "metals" and setting it equal to the "getMetals" function imported from database.

const metals = getMetals()

//change event listener to display window when selection on the "metals" html.

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
        setMetal(parseInt(event.target.value))
    }
    }
)
//declaring and exporting a function called "Metals" and having it iterate through the metals array and assign radio buttons for the properties.

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    //end of ul

    html += "</ul>"
    
    return html
}


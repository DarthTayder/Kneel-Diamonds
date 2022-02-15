//importing "KneelDiamonds" from the module of the same name. 

import { KneelDiamonds } from "./KneelDiamonds.js"

//

const mainContainer = document.querySelector("#container")

// declaring a function called "renderAllHTML" and having it set mainContainer *above* equal to the "KneelDiamonds" function from the KneelDiamonds.js
const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

//invoking function above
renderAllHTML()


document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})



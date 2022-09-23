import { getAreas, getParkGuests } from "./database.js"

const areas = getAreas()
const parkGuests = getParkGuests()


export const areasList = () => {
    let html = '<ul class="area__list">'

    for (const area of areas) {
        html += `<li id="area--${area.id}">${area.title}</li>`
    }

    html += "</ul>"

    return html
}
// make listener to find number of people per area//
// first identify clicked area 
document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    const numberOfGuestsArray = []
    if (itemClicked.id.startsWith("area")) {
        //use split to separate string at -- into an array. deconstruct clicked item's array. assign second indexed variable to areaId 
        const [,areaId] = itemClicked.id.split("--")
        //iterate through area of areas to find area.id that matches clicked parsedInt areaId and if it matches iterate through list of parkGuests to see if that parkGuests.parkId matches with area and push into numberOfGuestsArray to be counted later.
        for (const area of areas){
            if (area.id === parseInt(areaId)) {
                    for (const parkGuest of parkGuests) {
                        if (parkGuest.parkId === area.id) {
                            numberOfGuestsArray.push(parkGuest)
                        }
                    } 
                //make if statement for window alert to display different output for single or multiple guests
                if (numberOfGuestsArray.length < 2){
                    window.alert(`There is ${numberOfGuestsArray.length} guest in this area`)
                } else {
                    window.alert(`There are ${numberOfGuestsArray.length} guests in this area`)
                }
            }
            
        }

    
    
    }
    
    
    
    
    
    
    
    
    
}
)                                          



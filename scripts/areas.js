import { getAreas, getGuests } from "./database.js"

const areas = getAreas()
const guests = getGuests()

export const areasList = () => {
    let html = '<ul class="area__list">'

    for (const area of areas) {
        html += `<li id="area--${area.id}">${area.title}</li>`
    }

    html += "</ul>"

    return html
}
//click event for area click displays current number of guests
// iterate through areas to find area clicked on
// when found iterate through guest ids of guests to match with guest id of areas and push it in array
// use .length method to count guests and add them to string interpolated window alert
document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    const numberOfGuestsInAreaArray = []
    if (itemClicked.id.startsWith("area")) {
        const [,areaId] = itemClicked.id.split("--")
        //check to see if clicked item's id matches one of the area's id. once the right one is found, use it to find number of guestId's that match with list of guest.id's
        for (const area of areas){
            if (area.id === parseInt(areaId)) {
            // if more than one guest in an area, iterate through that array of guestId's, then iterate through array of guests to see if guest.id matches guestIdsOfArray
                if (Array.isArray(area.guestId)){
                    for (const guestIdsOfGuestIdArray of area.guestId){
                        for(const guest of guests){
                            if(guestIdsOfGuestIdArray === guest.id){
                            numberOfGuestsInAreaArray.push(guestIdsOfGuestIdArray)
                            }
                        }
                    }
                } else {
                    for (const guest of guests) {
                        if (guest.id === area.guestId) {
                            numberOfGuestsInAreaArray.push(guest)
                        }        
                    } 
                }
            } 
            if (numberOfGuestsInAreaArray.length === 1){
                window.alert(`There is ${numberOfGuestsInAreaArray.length} guest in this area`)
            } else if (numberOfGuestsInAreaArray.length === 0){
                window.alert(`There are currently no guests in this area`)
            } else {
                window.alert(`There are ${numberOfGuestsInAreaArray.length} guests in this area`)
            }            
        }

    
    
    }  
}     
)                                          


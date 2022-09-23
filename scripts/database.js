/* 
This module contains all the data for the project. it exports 3 functions for the other modules to use

*/


const database = {
    guests: [{
        id: 1,
        name: "Andy Anderson",
    },{
        id: 2,
        name: "Betty Black",
    },{
        id: 3,
        name: "Colt Charms",
    },{
        id: 4,
        name: "Danny Devito",
    },{
        id: 5,
        name: "Eddy Elms",
    },{
        id: 6,
        name: "Frank Fisk",
    },{
        id: 7,
        name: "Guy Grimmes",
    },{
        id: 8,
        name: "Harvey Holder",
    }
    ],

    services: [{
        id: 1,
        name: "Fishing",
    },{
        id: 2,
        name: "Rafting",
    },{
        id: 3,
        name: "Canoeing",
    },{
        id: 4,
        name: "Lodging",
    },{
        id: 5,
        name: "Parking",
    },{
        id: 6,
        name: "Information",
    },{
        id: 7,
        name: "Picnicking",
    },{
        id: 8,
        name: "Hiking",
    },{
        id: 9,
        name: "Rock Climbing",
    },{
        id: 10,
        name: "Zip lines",
    }
    ],
    parkAreas: [{
        id: 1,
        location:"NorthWest",
        title: "Lodge",
        guestId: 1,
        serviceId: [4, 5, 6, 7] 
    },{
        id: 2,
        location:"Northern",
        title: "Lost Wolf Hiking Trail",
        guestId: 2,
        serviceId: [7, 8, 9] 
    },{
        id: 3,
        location:"NorthEast",
        title: "Chamfort River",
        guestId: 3,
        serviceId: [1, 2, 3] 
    },{
        id: 4,
        location:"SouthWest",
        title: "Gander River",
        guestId: 4,
        serviceId: [1, 8] 
    },{
        id: 5,
        location:"Southern",
        title: "Campgrounds",
        guestId: 5,
        serviceId: [6,4,5] 
    },{
        id: 6,
        location:"Southeast",
        title: "Pine Bluffs Trails",
        guestId: [7,8],
        serviceId: [8,7,10] 
    }
    ]
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
  }
export const getAreas = () => {
    return database.parkAreas.map(area => ({...area}))
  }
export const getServices = () => {
    return database.services.map(service => ({...service}))
  }


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
    },{
        id: 9,
        name: "India Inez",
    },{
        id: 10,
        name: "Jaylene Janson",
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

    },{
        id: 2,
        location:"Northern",
        title: "Lost Wolf Hiking Trail",

    },{
        id: 3,
        location:"NorthEast",
        title: "Chamfort River",
   
    },{
        id: 4,
        location:"SouthWest",
        title: "Gander River",

    },{
        id: 5,
        location:"Southern",
        title: "Campgrounds",
   
    },{
        id: 6,
        location:"Southeast",
        title: "Pine Bluffs Trails",
  
    }
    ],
    parkGuests: [{
        id: 1,
        parkId: 1,
        guestId: 8
    },{
        id: 2,
        parkId: 2,
        guestId: 7
    },{
        id: 3,
        parkId: 2,
        guestId: 6
    },{
        id: 4,
        parkId: 2,
        guestId: 5
    },{
        id: 5,
        parkId: 3,
        guestId: 4
    },{
        id: 6,
        parkId: 4,
        guestId: 3
    },{
        id: 7,
        parkId: 5,
        guestId: 2
    },{
        id: 8,
        parkId: 6,
        guestId: 1
    },{
        id: 8,
        parkId: 5,
        guestId: 9
    },{
        id: 8,
        parkId: 4,
        guestId: 10
    }
    ],
    parkServices: [{
        id: 1,
        parkId: 1,
        serviceId: 4
    },{
        id: 2,
        parkId: 1,
        serviceId: 5
    },{
        id: 3,
        parkId: 1,
        serviceId: 6
    },{
        id: 4,
        parkId: 1,
        serviceId: 7
    },{
        id: 5,
        parkId: 2,
        serviceId: 7
    },{
        id: 6,
        parkId: 2,
        serviceId: 8
    },{
        id: 7,
        parkId: 2,
        serviceId: 9
    },{
        id: 8,
        parkId: 3,
        serviceId: 1
    },{
        id: 9,
        parkId: 3,
        serviceId: 2
    },{
        id: 10,
        parkId: 3,
        serviceId: 3
    },{
        id: 11,
        parkId: 4,
        serviceId: 1
    },{
        id: 12,
        parkId: 4,
        serviceId: 8
    },{
        id: 13,
        parkId: 5,
        serviceId: 6
    },{
        id: 14,
        parkId: 5,
        serviceId: 4
    },{
        id: 15,
        parkId: 5,
        serviceId: 5
    },{
        id: 16,
        parkId: 1,
        serviceId: 8
    },{
        id: 17,
        parkId: 6,
        serviceId: 7
    },{
        id: 18,
        parkId: 6,
        serviceId: 8
    },{
        id: 19,
        parkId: 6,
        serviceId: 10
    },

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
  export const getParkServices = () => {
    return database.parkServices.map(parkServices => ({...parkService}))
  }
  export const getParkGuests = () => {
    return database.parkGuests.map(parkGuest => ({...parkGuest}))
  }


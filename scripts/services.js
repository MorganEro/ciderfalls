import { getServices } from "./database.js"

const services = getServices()

export const servicesList = () => {
    let html = '<ul class="service__group">'

    for (const service of services) {
        html += `<li id="service--${service.id}">${service.name}</li>`
    }

    html += "</ul>"

    return html
}

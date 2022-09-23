import { getAreas } from "./database.js"

const areas = getAreas()

export const areasList = () => {
    let html = '<ul class="area__list">'

    for (const area of areas) {
        html += `<li id="area--${area.id}">${area.title}</li>`
    }

    html += "</ul>"

    return html
}



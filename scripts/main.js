import { areasList } from "./areas.js"
import { guestList } from "./guestList.js"
import { servicesList } from "./services.js"


const mainContainer = document.querySelector(".htmlData")

const applicationHTML = `
<article class="details">
    <section class="services">
        <h2>Services</h2>
        ${servicesList()}
    </section>
</article><article class="details">
    <section class="areas">
        <h2>Areas</h2>
        ${areasList()}
    </section>
</article>
<article class="details">
    <section class="guests">
        <h2>Guests</h2>
        ${guestList()}
    </section>
</article>

`

mainContainer.innerHTML = applicationHTML
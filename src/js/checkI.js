
export default function CheckI(entries, heat) {


    if(heat < 25) {
        entries.classList.add("ph-sun")
    }

    if(heat >= 50 || heat <= 67) {
        entries.classList.add("ph-cloud")
    }

    if(heat > 80 || heat < 90) {
        entries.classList.add("ph-cloud-rain")
    }

    if(heat >= 90) {
        entries.classList.add("ph-cloud-lightning")
    }

}
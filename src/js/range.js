export function range() {

    function updateValues() {
        const range = document.getElementById('range');
        const rangeV = document.getElementById('range-v');
        const rangeVr = document.getElementById('range-vr');

        rangeV.textContent = range.value;
        rangeVr.textContent = range.max - range.value;
    }

}
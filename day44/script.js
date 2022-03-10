const range = document.getElementById('range')
const label = document.getElementById('label')
const rangeWidth = getComputedStyle(range).getPropertyValue('width')
const labelWidth = getComputedStyle(label).getPropertyValue('width')
const rangeWidthNum = +rangeWidth.substring(0, rangeWidth.length - 2)
const labelWidthNum = +labelWidth.substring(0, labelWidth.length - 2)
const rangeMin = +range.min
const rangeMax = +range.max

range.addEventListener('input', (e) => {
    const value = +e.target.value

    const left = value * (rangeWidthNum / rangeMax) - labelWidthNum / 2 + scale(value, rangeMin, rangeMax, 10, -10)
    label.style.left = `${left}px`

    label.innerHTML = value
    
})

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
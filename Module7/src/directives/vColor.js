let intervalId;

let defaultColor;

const mouseover = (evt) => {
    evt.target.style.color = '#000'
}
const mouseout = (evt) => {
    evt.target.style.color = defaultColor;
}

export default {
    mounted(el, binding) {
        el.style[binding.arg] = binding.value
        // console.log(el, binding);
        defaultColor = binding.value;
        if (binding.modifiers.blink) {
            let flag = true;
            intervalId = setInterval(() => {
                el.style[binding.arg] = flag ? '#fff' : binding.value;
                flag = !flag;
            }, 1000)
        }
        if (binding.modifiers.hover) {
            el.addEventListener("mouseover", mouseover)
            el.addEventListener("mouseout", mouseout)
        }
    },
    updated(el, binding) {
        el.style[binding.arg] = binding.value
    },
    unmounted(el) {
        if (intervalId) {
            clearInterval(intervalId);
        }

        el.removeEventListener("mouseover", mouseover);
        el.removeEventListener("mouseout", mouseout);
        console.log("unmounted")
    },
    name: "color"
}
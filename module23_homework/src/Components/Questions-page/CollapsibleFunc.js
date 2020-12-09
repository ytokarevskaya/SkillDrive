export const CollapsibleFunc = e => {
    if (!e.target.nextSibling.classList.contains("is-active")) {
        e.target.classList.add("is-active");
        e.target.nextSibling.style.maxHeight = e.target.nextSibling.scrollHeight + "px"
        e.target.querySelector(":last-child").classList.add("is-active");
    } else {
        e.target.classList.remove("is-active");
        e.target.nextSibling.style.maxHeight = 0;
        e.target.querySelector(":last-child").classList.remove("is-active");
    }
    e.target.nextSibling.classList.toggle("is-active");
}
function ready(eventHandler) {
    if (document.readyState !== 'loading') {
        eventHandler();
    } else {
        document.addEventListener('DOMContentLoaded', eventHandler);
    }
}

ready(function() {
    const dayElements = document.getElementsByClassName('day');
    if (dayElements.length == 0) return;

    for (const dayEl of dayElements) {
        if (dayEl.getAttribute("fill") == "#ebedf0") {
            dayEl.setAttribute("fill", "#272c32");
        }
        if (dayEl.getAttribute("fill") == "#c6e48b"){
            dayEl.setAttribute("fill", "#1d2125")
        }
        if (dayEl.getAttribute("fill") == "#7bc96f"){
            dayEl.setAttribute("fill", "#131619")
        }
        if (dayEl.getAttribute("fill") == "#239a3b"){
            dayEl.setAttribute("fill", "#090b0c")
        }
        if (dayEl.getAttribute("fill") == "#196127"){
            dayEl.setAttribute("fill", "#000")
        }
    }
    
    document.querySelector(".legend > li:nth-child(1)").setAttribute("style", "background-color:#272c32");
    document.querySelector(".legend > li:nth-child(2)").setAttribute("style", "background-color:#1d2125");
    document.querySelector(".legend > li:nth-child(3)").setAttribute("style", "background-color:#131619");
    document.querySelector(".legend > li:nth-child(4)").setAttribute("style", "background-color:#090b0c");
    document.querySelector(".legend > li:nth-child(5)").setAttribute("style", "background-color:#000");
});

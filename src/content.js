function ready(eventHandler) {
    if (document.readyState !== 'loading') {
        eventHandler();
    } else {
        document.addEventListener('DOMContentLoaded', eventHandler);
    }
}

ready(function () {

    // meta tag for loading font

    var meta = document.createElement("meta")
    meta.httpEquiv = "Content-Security-Policy";
    meta.content = "font-src https://fonts.googleapis.com/ https://fonts.gstatic.com/ 'unsafe-inline' 'unsafe-eval'; style-src  https://cdn.jsdelivr.net/ https://github.githubassets.com/ 'unsafe-inline' 'unsafe-eval';";

    // import font

    var css = "@import url('https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap')";
    var font = document.createElement('style');
    font.type = 'text/css';
    if (font.styleSheet) {
        font.styleSheet.cssText = css;
    } else {
        font.appendChild(document.createTextNode(css));
    }


    // create svg for repo activity graph thingy

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    var linearGradient = document.createElementNS("http://www.w3.org/2000/svg", 'linearGradient');
    linearGradient.setAttribute('id', 'black');
    linearGradient.setAttribute('x1', '0');
    linearGradient.setAttribute('x2', '0');
    linearGradient.setAttribute('y1', '1');
    linearGradient.setAttribute('y2', '0');

    var stop1 = document.createElementNS("http://www.w3.org/2000/svg", 'stop');
    stop1.setAttribute('offset', '10%');
    stop1.setAttribute('stop-color', '#272c32');

    var stop2 = document.createElementNS("http://www.w3.org/2000/svg", 'stop');
    stop2.setAttribute('offset', '33%');
    stop2.setAttribute('stop-color', '#1d2125');

    var stop3 = document.createElementNS("http://www.w3.org/2000/svg", 'stop');
    stop3.setAttribute('offset', '66%');
    stop3.setAttribute('stop-color', '#131619');

    var stop4 = document.createElementNS("http://www.w3.org/2000/svg", 'stop');
    stop4.setAttribute('offset', '90%');
    stop4.setAttribute('stop-color', '#090b0c');

    linearGradient.appendChild(stop1)
    linearGradient.appendChild(stop2)
    linearGradient.appendChild(stop3)
    linearGradient.appendChild(stop4)
    svg.appendChild(linearGradient);

    // append everything

    document.getElementsByTagName('body')[0].appendChild(svg);
    document.getElementsByTagName('head')[0].appendChild(meta);
    document.getElementsByTagName('head')[0].appendChild(font);

    const barElements = document.getElementsByClassName('progress-bar');
    if (barElements.length != 0) {
        for (const bars of barElements) {
            if (bars.style.backgroundColor == "rgb(235, 237, 240)") {
                bars.style.backgroundColor = "#272c32";
            }
            if (bars.style.backgroundColor == "rgb(198, 228, 139)") {
                bars.style.backgroundColor = "#1d2125";
            }
            if (bars.style.backgroundColor == "rgb(123, 201, 111)") {
                bars.style.backgroundColor = "#131619";
            }
            if (bars.style.backgroundColor == "rgb(35, 154, 59)") {
                bars.style.backgroundColor = "#090b0c";
            }
            if (bars.style.backgroundColor == "rgb(25, 97, 39)") {
                bars.style.backgroundColor = "#000";
            }
        }
    }

    const dayElements = document.getElementsByClassName('day');
    if (dayElements.length == 0) return;

    for (const dayEl of dayElements) {
        if (dayEl.getAttribute("fill") == "#ebedf0") {
            dayEl.setAttribute("fill", "#272c32");
        }
        if (dayEl.getAttribute("fill") == "#c6e48b") {
            dayEl.setAttribute("fill", "#1d2125")
        }
        if (dayEl.getAttribute("fill") == "#7bc96f") {
            dayEl.setAttribute("fill", "#131619")
        }
        if (dayEl.getAttribute("fill") == "#239a3b") {
            dayEl.setAttribute("fill", "#090b0c")
        }
        if (dayEl.getAttribute("fill") == "#196127") {
            dayEl.setAttribute("fill", "#000")
        }
    }

    document.querySelector(".legend > li:nth-child(1)").setAttribute("style", "background-color:#272c32");
    document.querySelector(".legend > li:nth-child(2)").setAttribute("style", "background-color:#1d2125");
    document.querySelector(".legend > li:nth-child(3)").setAttribute("style", "background-color:#131619");
    document.querySelector(".legend > li:nth-child(4)").setAttribute("style", "background-color:#090b0c");
    document.querySelector(".legend > li:nth-child(5)").setAttribute("style", "background-color:#000");
});
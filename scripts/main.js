"use strict"

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function logoCheck() {
    if (window.innerWidth > 1200) {
        if (window.scrollY > 230 && window.scrollY < 340) {
            document.getElementById("SSALLogo").style.display = "none"
            document.getElementById("CyberFlightLogo").style.display = "block"
            document.getElementById("CyberFlightLogo").style.transform = "rotateY(" + scale(window.scrollY, 230, 340, 0, 90) + "deg)"
        } else if (window.scrollY > 340 && window.scrollY < 450) {
            document.getElementById("CyberFlightLogo").style.display = "none"
            document.getElementById("SSALLogo").style.display = "block"
            document.getElementById("SSALLogo").style.transform = "rotateY(" + scale(window.scrollY, 340, 450, 90, 0) + "deg)"
        } else if (window.scrollY < 340) {
            document.getElementById("SSALLogo").style.display = "none"
            document.getElementById("CyberFlightLogo").style.display = "block"
            document.getElementById("CyberFlightLogo").style.transform = "rotateY(0deg)"
        } else if (window.scrollY > 450) {
            document.getElementById("SSALLogo").style.display = "block"
            document.getElementById("CyberFlightLogo").style.display = "none"
            document.getElementById("SSALLogo").style.transform = "rotateY(0deg)"
        }
    } else {
        document.getElementById("CyberFlightLogo").style.display = "block"
        document.getElementById("SSALLogo").style.display = "none"
        document.getElementById("CyberFlightLogo").style.transform = "rotateY(0deg)"
    }
}

function arCheck() {
    if (document.getElementById("logocontainer").relList.supports("ar")) {
        document.getElementById("logocontainer").rel = "ar"
        document.getElementById("logocontainer").href = "./assets/CyberFlightLogo.usdz"
        document.getElementById("logocontainer").click()
    }
}
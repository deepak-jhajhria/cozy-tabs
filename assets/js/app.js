
function opentab(Tabid) {
    const tabs = document.querySelectorAll(".tabs");
    tabs.forEach((openTab) => {
        openTab.classList.add("d-none");
        openTab.classList.remove("d-block");
    });
    const opentabs = document.getElementById(Tabid);
    opentabs.classList.add("d-block");
    opentabs.classList.remove("d-none");
}
function closetab(Tabid) {
    const closetabs = document.querySelectorAll(".closeBtn");
    closetabs.forEach((closeTab) => {
        closeTab.classList.add("d-none");
        closeTab.classList.remove("d-block");
    });
    const opentabs = document.getElementById(Tabid);
    opentabs.classList.add("d-block");
    opentabs.classList.remove("d-none");
}

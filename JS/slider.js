const tabsSliderClass = "tabs-slider";
const tabsContainerClass = "tabs";
const tabClass = "tab";

function InitSlider(slider) {
    const activeTabClass = `${tabClass}_active`;
    const activeTab = slider.querySelector(`.${activeTabClass}`);
    const tabs = slider.querySelectorAll(`.${tabClass}`);
    const tabsContainer = slider.querySelector(`.${tabsContainerClass}`);
    

    goto(3);

    function goto(index) {
        const id = index % tabs.length;
        const itemPosition = window.getComputedStyle(tabs[id]).left;
        tabsContainer.style.marginLeft = `${-itemPosition}px`;
        console.log(tabsContainer);
        console.log(tabsContainer.style.marginLeft);

        console.log(`"goto ${id}`);
    }
}

function Init() {
    const sliders = document.querySelectorAll(`.${tabsSliderClass}`);
    sliders.forEach(slider => InitSlider(slider));
};

Init();
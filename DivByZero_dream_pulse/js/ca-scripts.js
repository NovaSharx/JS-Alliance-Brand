var customerName = "Alliance  ";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;
    
    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
    let h1 = document.getElementById('tm-header')
    h1.textContent = customerName;
    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->
    let introHeader = document.getElementById('introheader')
    introHeader.textContent = customerName
};

function toggleColors() {
    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
    whiteRects = document.querySelectorAll('.tm-white-rect')

    whiteRects.forEach(element => {
        element.classList.add('tm-blue-rect')
        element.classList.remove('tm-white-rect')
    });
};

function hideElement() {
    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->
    let socialLinks = document.querySelectorAll('.tm-social-links')
    socialLinks.forEach(element => {
        element.style.display = 'none'
    });

};

 function addText() {

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->
    document.getElementById('intropara1').textContent = 'Alliance was founded in 1931 by Albert Daniels'
    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->
    document.getElementById('intropara2').textContent = 'The company is a leader in P.C. Manufacturing'
     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->
    document.getElementById('aboutpara1').textContent = 'We deliver the best service this side of creation'
    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->
    document.getElementById('aboutpara2').textContent = 'Our motto is satisfaction guaranteed'
    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->
    document.getElementById('addresspara').textContent = '1-800-565-5656'
}; 




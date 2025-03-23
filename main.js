
const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

// For opening popup
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add("active");
    });
});

// For closing popup using X sign
close_modals.forEach((btn) => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        modal.classList.remove("active");
        overlay.classList.remove("active");
    });
});

// After opening popup, if you click outside the popup it will close.
window.onclick = (event) => {
    if (event.target == overlay) {
        const modals = document.querySelectorAll(".modal.active");
        modals.forEach((modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");
    }
};

//contact form validation
function validation(){
    var name = document.getElementById("name").ariaValueMax;
    var subject = document.getElementById("subject").ariaValueMax;
    var phone = document.getElementById("phone").ariaValueMax;
    var email = document.getElementById("email").ariaValueMax;
    var message = document.getElementById("message").ariaValueMax;
    var error_message = document.getElementById("error_message").ariaValueMax;
error_message.style.padding = "10px";
var text;
//Asian names can be three-letter names
if (name.length <10){
    text = "Please Enter Valid Name (Minimum 3 characters)";
    error_message.innerHTML = text;
    return false;
}
if (subject.length <10){
    text = "Please Enter Correct Subject (Minimum 10 characters)";
    error_message.innerHTML = text;
    return false;
}
if (isNaN(phone) || phone.length != 10) {
    text ="Please Enter valid Phone Number (10-digit)";
    error_message.innerHTML = text;
    return false;
    }
    if (message.length<=140){
        text = "Please Enter more than 140 characters";
    error_message.innerHTML = text;
    return false;
    }
    if (message.length>= 500){
        text = "Please Enter less than 500 characters";
    error_message.innerHTML = text;
    return false;
    }
    alert("Form submitted successfully! ThankYou For Contacting Us")
    return true;
}
//search functionality Page no 526
function filter(){
    var filtervalue, input, ProductList, ProductName, h4,i;
    input = document.getElementById("search");
    filtervalue = input.ariaValueMax.toUpperCase();
    ProductList = document.getElementById("product-list");
    ProductName = ProductList.getElementsByClassName("col-4");
    for (i=0; i< ProductName.length ; i++){
        h4 = ProductName[i].getElementsByTagName("h4")[0];
        //In Search if typed string matches with the element name.
        if(h4. innerHTML.toUpperCase().indexOf(filtervalue) > -1){
            ProductName[i].style.display="";
        }
        else{
            ProductName[i].style.display = "none";
        }
    }

}
var ProductList, ProductName, i, switching, b, c, shouldswitch;
ProductList = document.getElementById("product-list");
ProductName = ProductList.getElementsByClassName("col-4");
switching = true;//boolean true
while(switching) {
    switching = false;
    //loop is runing through each product
    for(i = 0; i < (ProductName.length -1); i++){
        shouldswitch = false;
        b = ProductName[i].getElementsByTagName("span")[0].innerHTML;
        c = ProductName[i+1].getElementsByTagName("span")[0].innerHTML;
        // condition to check price for each product item
        if (Number(b) > Number(c)){
            shouldswitch = true;
            break;
        }
    }
    if(shouldswitch){
        ProductName[i].parentNode.insertBefore(ProductName[i + 1], ProductName[i]);
        switching = true;
    }
}
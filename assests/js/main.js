
document.addEventListener("DOMContentLoaded", () => {
    const $ = (selector, root = document) => root.querySelector(selector);

    const form = $("#my_form");
    const username = $("#username");
    const count_massage= $("#count_massage");

    username.addEventListener( "input" , () => {
        count_massage.textContent=username.value.length ;
        if( username.value.length < 5){
            username.setCustomValidity("نام کاربری باید حداقل 5 کاراکتر باشد.")
        }else{
            username.setCustomValidity("");
        }
    })
});
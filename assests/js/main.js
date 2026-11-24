
document.addEventListener("DOMContentLoaded", () => {
    const $ = (selector, root = document) => root.querySelector(selector);

    const form = $("#my_form");
    const username = $("#username");
    const countmassage = $(".count_massage");

    username.addEventListener("input", () => {
        countmassage.textContent = username.value.length;


        if (username.value.length < 5) {
            username.setCustomValidity("نام کاربری باید حداقل 5 کاراکتر باشد.");

            username.reportValidity();

        } else {
            username.setCustomValidity("");
        }
    });

    document.addEventListener( "submit" , (e)=> {

        if (!form.checkValidity()) {
            e.preventDefault();
        }else{
            alert("فرم با موفقیت ارسال شد.");
        }
    });
});
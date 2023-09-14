// @ts-ignore
const appInit = async => {
    console.log("Learning git has been loaded.");
    // @ts-ignore
    var userEmail = document.getElementById("userEmail")
        ?.addEventListener("click", function () {
            console.log("Clicked");
        });

}
document.addEventListener("DOMContentLoaded", appInit);

function addUser() {
    var message = document.getElementById("message");
    // Get the form element
    var form = document.getElementById('myForm');
    if (form){
        // @ts-ignore
        var userName = form.elements['userName'].value;
        // @ts-ignore
        var userEmail = form.elements['userEmail'].value;
        // Perform validation
        
        if (userName.trim() === '') {

            if (message)
                message.innerHTML = "Please enter your name."
            return false; // Prevent form submission
        }

        if (userName.trim() === '') {
            alert('Please enter your email.');
            return false; // Prevent form submission
        }

        // @ts-ignore
        form.submit();
    }
    // console.log("Submited");





}

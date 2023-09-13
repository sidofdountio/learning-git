const appInit = async => {
    console.log("Learning git has been loaded.");
    var userEmail = document.getElementById("userEmail")
    ?.addEventListener("click", function () {
        // this.style.outlineColor = "1px solid #4c4cc1"
        console.log("Clicked");
    });

}
document.addEventListener("DOMContentLoaded", appInit);

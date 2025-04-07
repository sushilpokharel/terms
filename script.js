document.addEventListener("DOMContentLoaded", function () {
    console.log("Updated Privacy Policy & Terms Page Loaded");

    // Show loader for 5 seconds before displaying content
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 10000);
});
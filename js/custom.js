document.addEventListener("DOMContentLoaded", function () {
    var avatar = document.getElementById("avatar");
    if (avatar) {
        avatar.addEventListener("mouseover", function () {
            this.style.transform = "rotate(360deg)";
            this.style.transition = "transform 0.5s ease-in-out";
        });

        avatar.addEventListener("mouseout", function () {
            this.style.transform = "rotate(0deg)";
        });
    }
});


var holder = document.getElementById("collapsible");
holder.addEventListener("click", function() {
    this.classList.toggle("active");
    var colors = this.nextElementSibling();
    if(content.style.display = "block")
    {
        content.style.display = "none";
    }
    else
    {
        content.style.display = "block";
    }
});

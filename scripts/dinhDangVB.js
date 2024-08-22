document.addEventListener("DOMContentLoaded", function() {
    let contentDoctor = document.querySelector(".introduce");
    let describes = document.querySelectorAll("#describe");
    describes.forEach(element => {
        let text = element.innerHTML;
        let newText = text.replace(/\\/g, "\.<br>").replace(/\|/g, "<br>- ").replace(/\//g, "- ");
        element.innerHTML = newText;
    })

    if(contentDoctor) {
            let text = contentDoctor.innerHTML;
            let newText = text.replace(/\=/g, "<p><b>").replace(/\|/g, "<br>- ").replace(/\*/g, "</b></p>").replace(/\\/g, "- ");
            contentDoctor.innerHTML = newText;
    }
})

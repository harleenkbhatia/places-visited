let input = document.querySelector(".place-input");
let ul = document.querySelector(".place-list");


function deleteplace(e) {
    e.currentTarget.remove();
}

input.addEventListener("keypress", function(e) {
    console.log(e);
    if(e.key == "Enter") {
        let place = input.value;
        if(!place) {
            alert("Error- Adding empty place");
            return;
        }
        input.value = "";
        let li = document.createElement("li");
        li.innerText = place;
        ul.insertBefore(li, ul.firstChild);
        li.addEventListener("dblclick", deleteplace);
    }
});

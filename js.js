var button = document.getElementById("clickhere"),
count = 0
button.onclick = function(){
    count=count+1;
    button.innerHTML = "click here" + count;
}
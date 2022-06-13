var button = document.getElementById("clickhere"),
count = 0
button.onclick = function(){
    

    if (count<=10 && count==1) {
        count +=1;
        button.innerHTML="Click Here" + count;
    }
    else if (count>10 || count==0){
        if (count==0){
            count+=1;
            button.innerHTML = "Click Here" 
            + count;
        }
        else{
            count-=1;
            button.innerHTML = "click Here" +count;
        }
    }

    
}

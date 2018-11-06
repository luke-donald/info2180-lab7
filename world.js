window.onload = function(){
    
    var lookupButton = document.getElementById("lookup");
    
    lookupButton.onclick = findCountry;
}

function findCountry(){
    
    var checkBox = document.getElementById("checkbox");
    
    if (checkBox.checked){
        
        var appendtoURL = "all=" + checkBox.value;
        
    } else {
        
        var country = document.getElementById("country");
        var appendtoURL = "country=" + country.value;
    }
    
    var fullURL = "https://info2180-lab7-lukedonald.c9users.io/world.php?" + appendtoURL;
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = doSomething;
    
    function doSomething() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                
                if (!checkBox.checked && country.value !== ""){
                    alert(response);
                    document.getElementById("result").innerHTML = this.responseText;
                    
                }else if (checkBox.checked){
                    document.getElementById("result").innerHTML = this.responseText;
                    
                }else {
                    document.getElementById("result").innerHTML = "Please enter a country name in the text field above.";
                }
                
            } else {
                alert('There was a problem with the request.');
            }
        }
    }
    
    httpRequest.open('GET', fullURL, true);
    httpRequest.send();
    
    
}
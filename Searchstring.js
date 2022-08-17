// load a boof from disk

function loadbook(filename,displayname){
    let currentbook="";
    let url = "books/" + filename;

    //reset our ui

    document.getElementById("filename").innerHTML=displayname;
    document.getElementById("searchstat").innerHTML="";
    document.getElementById("keyword").value ="";

    //create a server request to load our books
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.send();

    xhr.onreadystatechange = function (){
        if(xhr.readyState == 4 && xhr.status == 200){
            currentbook=xhr.responseText;
            document.getElementById("fileContent").innerHTML=currentbook;

            var elmnt = document.getElementById("fileContent");
            elmnt.scrollTop= 0;
            
        }

    };

}
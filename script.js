var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var res=JSON.parse(request.response);
    console.log(res);

for(var i=0;i<res.length;i++){
    console.log(res[i].name.common);
    console.log(res[i].region)
    console.log(res[i].subregion)
    console.log(res[i].population)

    //console.log(res[i].region +":"+ res[i].subregion +":"+ res[i].population);
    //console.log(res[i].flags.alt);
    console.log(res[i].flags.png)
    //console.log(res[i].flags.svg)

    //or

    if(res[i].capital){
        //console.log(res[i].name.common+":"+res[i].capital[0]+"-"+res[i].area)
        console.log(res[i].capital[0] +":"+ res[i].area)
    }
    else{
        console.log("Invalid capital"+ res[i].area);
    } 
}
}
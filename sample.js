function beforesubmit(){
    let outputdate =document.querySelector(".outputdate");
    let inputdate =document.querySelector(".inputdate");
    console.log(inputdate.value); //stringform---. date(en_IN)
 let forecast = new Date(inputdate.value).toLocaleDateString("en-IN");
 outputdate.value=forecast;
}



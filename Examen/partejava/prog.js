function calctemp(){
    const temp = document.getElementById("temp").innerHTML;

    let tempc = (temp - 32) * (5/9);

    window.alert(" La temperatura calculada es : " + tempc);

    

}
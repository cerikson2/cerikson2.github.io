function doMath() {
    let num1 = Number(document.getElementById("num1").value); 
    let num2 = Number(document.getElementById("num2").value); 

    let a = n1+n2;
    let s = n1-n2;
    let m = n1*n2;
    let d = n1/n2;
    let mod = n1%n2;
    var pow = n1 ** n2; 
    let sq1 = Math.sqrt(n1);
    let sq = Math.sqrt(n2);


    let out = "";
    out +="Add:" + a + "<br>";
    out +="Sub:" + s + "<br>";
    out +="Mul:" + m + "<br>";
    out +="Div:" + d + "<br>";
    document.getElementById("output").innerHTML = out;
}
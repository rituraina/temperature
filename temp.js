
var cel = document.getElementById("cels");
var fah = document.getElementById("farh");

cel.addEventListener('input', function () {
    let cl = this.value;
    let f = (cl * 9 / 5) + 32;
    if(!Number.isInteger(f)){
     f=f.toFixed(4);
    }
    fah.value = f;
});

fah.addEventListener('input', function () {
    let f = this.value;
    let cl =(f - 32)*(5/9);
    if(!Number.isInteger(cl))
     cl=cl.toFixed(4);
     
    cel.value = f;
});
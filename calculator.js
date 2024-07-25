function get(val) {
    document.getElementById('a').value +=val;

}

function solve () {

     var b = document.getElementById('a').value;
     var c = eval(b);
     document.getElementById('a').value=c;
}

function clearfield() {
document.getElementById('a').value =" ";

}
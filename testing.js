
function one(){
    var one = document.getElementById('1').innerHTML;
    document.getElementById("inputtext").value +=1;
}
function two(){
    var two = document.getElementById('2').innerHTML;
    document.getElementById("inputtext").value += 2;
}
function plus(){
    
    var plus = document.getElementById('+').innerHTML;
    document.getElementById("inputtext").value += plus;
}
function three(){
    
    var three = document.getElementById('3').innerHTML;
    document.getElementById("inputtext").value += three;
}
function four(){
    
    var four = document.getElementById('4').innerHTML;
    document.getElementById("inputtext").value += four;
}
function five(){
    
    var five = document.getElementById('5').innerHTML;
    document.getElementById("inputtext").value += five;
}
function six(){
    
    var six = document.getElementById('6').innerHTML;
    document.getElementById("inputtext").value += six;
}
function seven(){
    
    var seven = document.getElementById('7').innerHTML;
    document.getElementById("inputtext").value += seven;
}
function eight(){
    
    var eight = document.getElementById('8').innerHTML;
    document.getElementById("inputtext").value += eight;
}
function nine(){
    
    var nine = document.getElementById('9').innerHTML;
    document.getElementById("inputtext").value += nine;
}
function into(){
    var into = document.getElementById('*').innerHTML;
    document.getElementById('inputtext').value+=into;
}
function minus(){
    var minus = document.getElementById('-').innerHTML;
    document.getElementById('inputtext').value+=minus;
}
function zero(){
    var zero = document.getElementById('0').innerHTML;
    document.getElementById('inputtext').value+=zero;
}
function decimal(){
    var deci = document.getElementById('decimal').innerHTML;
    document.getElementById('inputtext').value+=deci;
}
function bracketr(){
    var bracketr = document.getElementById(')').innerHTML;
    document.getElementById('inputtext').value+=bracketr;
}
function bracketl(){
    var bracketr = document.getElementById('(').innerHTML;
    document.getElementById('inputtext').value+=bracketr;
}
function divide(){
    var divide = document.getElementById('/').innerHTML;
    document.getElementById('inputtext').value+=divide;
}
function doubleinto(){    
    document.getElementById('inputtext').value+='**';
}
function percent(a,b){
    return a *(b/100);
}
function getResults(){
    var cdata = document.getElementById("inputtext").value;
    var head1 = document.getElementById("head1");
    head1.innerText=eval(cdata);
}
function del() {
    var input = document.getElementsByName("Input")[0];
    input.value = input.value.substring(0, input.value.length - 1);
  }
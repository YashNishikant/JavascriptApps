
        function calcFunctionC() {
            console.log("");   
            var textbox1element = document.getElementById("textbox1");
            textbox1element.value="";   
            var textbox2element = document.getElementById("textbox2");
            textbox2element.value="";    
        }   
   
        function calcFunction1() {
            console.log("1");   
            var textbox1element = document.getElementById("textbox1");
            textbox1element.value= textbox1element.value + "1";      
            var textbox2element = document.getElementById("textbox2");
            textbox2element.value= math.eval(textbox1element.value);      
            
        }   
    
        function calcFunction2() {
            console.log("2");   
            var textbox1element = document.getElementById("textbox1");
            textbox1element.value= textbox1element.value + "2";   
            var textbox2element = document.getElementById("textbox2");
            textbox2element.value= math.eval(textbox1element.value);    
        }     
    
        function calcFunction3() {
            console.log("3");   
            var textbox1element = document.getElementById("textbox1");
            textbox1element.value= textbox1element.value + "3";   
            var textbox2element = document.getElementById("textbox2");
            textbox2element.value= math.eval(textbox1element.value);
        }     
   
        function calcFunction4() {
            console.log("4");   
            var textbox1element = document.getElementById("textbox1");
            textbox1element.value= textbox1element.value + "4"; 
            var textbox2element = document.getElementById("textbox2");
            textbox2element.value= math.eval(textbox1element.value);    
        }     
   
        function calcFunction5() {
            console.log("5");   
            var textbox1element = document.getElementById("textbox1");
            textbox1element.value= textbox1element.value + "5";    
            var textbox2element = document.getElementById("textbox2");
            textbox2element.value= math.eval(textbox1element.value);      
        }     
   
        function calcFunction6() {
            console.log("6");   
            var textbox1element = document.getElementById("textbox1");
            textbox1element.value= textbox1element.value + "6";    
            var textbox2element = document.getElementById("textbox2");
            textbox2element.value= math.eval(textbox1element.value);   
        }     
    
        function calcFunction7() {
            console.log("7");   
            var textbox1element = document.getElementById("textbox1");
            textbox1element.value= textbox1element.value + "7";    
            var textbox2element = document.getElementById("textbox2");
            textbox2element.value= math.eval(textbox1element.value);     
        }     
    
        function calcFunction8() {
            console.log("8");   
            var textbox1element = document.getElementById("textbox1");
            textbox1element.value= textbox1element.value + "8";    
            var textbox2element = document.getElementById("textbox2");
            textbox2element.value= math.eval(textbox1element.value);    
        }     
    
        function calcFunction9() {
            console.log("9");   
            var textbox1element = document.getElementById("textbox1");
            textbox1element.value= textbox1element.value + "9";    
            var textbox2element = document.getElementById("textbox2");
            textbox2element.value= math.eval(textbox1element.value);    
        }     
    
        function calcFunction0() {
            console.log("0");   
            var textbox1element = document.getElementById("textbox1");
            textbox1element.value= textbox1element.value + "0";    
            var textbox2element = document.getElementById("textbox2");
            textbox2element.value= math.eval(textbox1element.value);    
        }     
   
        function calcFunctionAdd() {
            console.log("+");   
            var textbox1element = document.getElementById("textbox1");
            textbox1element.value= textbox1element.value + "+";         
        }     
    
        function calcFunctionSubtract() {
            console.log("-");   
            var textbox1element = document.getElementById("textbox1");
            textbox1element.value= textbox1element.value + "-";      
        }     
   
        function calcFunctionDivide() {
            console.log("/");   
            var textbox1element = document.getElementById("textbox1");
            textbox1element.value= textbox1element.value + "/";     
        }     
   
        function calcFunctionMultiply() {
            console.log("*");   
            var textbox1element = document.getElementById("textbox1");
            textbox1element.value= textbox1element.value + "*";       
        }     
 
 
        function solve() {   
            console.log("Solve is called")
            var textbox1element = document.getElementById("textbox1");
            textbox1element.value= math.eval(textbox1element.value);    
            var textbox2element = document.getElementById("textbox2");
            textbox2element.value= math.eval(textbox2element.value);      
        }     

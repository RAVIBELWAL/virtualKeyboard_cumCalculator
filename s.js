    var output="";
    var caps=true;
    var count=0;
    var count_s=0;
    var num1=0;
    
//--Display----------------FUNCTION update()------------------



    var update=(input)=>{
        output=document.getElementById("io").value;
        if(count===0&&count_s==0){//
        if(!caps){var input= input.toLowerCase();} // for caps
        output+=input;          //to display
        document.getElementById("io").value=output;
        }

//-------------------------Add---------------------------------

        if(count===1){
            output+=input; 
            document.getElementById("io").value=output;}
        if(count===2) {
            document.getElementById("io").value=input;
            document.getElementById("io").value=(`Sum of ${num1} and ${output} = ${(parseInt(num1)+parseInt(output))}`);
            num1=0;count=0;output="";
        }//

//----------------------------SUB---------------------------
    
    if(count_s===1){
            output+=input; 
            document.getElementById("io").value=output;}
        if(count_s===2){
            document.getElementById("io").value=input;
            document.getElementById("io").value=(`Difference of ${num1} and ${output} = ${(parseInt(num1)-parseInt(output))}`);
            num1=0;count_s=0;output="";    
        }//       
    }//update

//----------------------------FUNCTION Clean()------------------
    var clean=()=>{
            output="";
            document.getElementById("io").value=output;
            num1=0;count=0;count_s=0;//
            }
//----------------------------FUNCTION Caps()------------------
    var cap=()=>{
    var cap_but=document.getElementById("cap");

    if(caps)
    { caps=false;
        cap_but.textContent="cap"
    }
    else {caps=true;
        cap_but.textContent="CAP"}
}

//--ADD--------------------------FUNCTION add()------------------
var add=()=>{ 
    if(output<=9999999&&output>=0&&num1===0){
        num1=document.getElementById("io").value;
        alert(`Enter another number to add ${num1} + ? ..!!`);
        document.getElementById("io").value="";count++;
        output=""; }
   else if(count===1){count++;add();}
   else{update("+");}
}

//--Sub--------------------------FUNCTION sub()------------------
var sub=()=>{
    if(output<=9999999&&output>=0&&num1===0){
        num1=document.getElementById("io").value;
        alert(`Enter another number to add ${num1} - ? ..!!`);
        document.getElementById("io").value="";count_s++;
        output=""; }
    else if(count_s===1){count_s++;sub();}
    else{update("-");}
}
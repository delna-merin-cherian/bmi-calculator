function calculate()
{
 var field1=document.getElementById("n1").value;
 var field2=document.getElementById("n2").value;
 var result=parseFloat(field1)/(parseFloat(field2)*parseFloat(field2));
 document.getElementById("ans").innerHTML="BMI is "+result;
 if(result<=18.5)
    document.getElementById("detail").innerHTML="You are underweight.";
 else if(result>18.5 && result<=24.9)
    document.getElementById("detail").innerHTML="You have normal weight.";
 else if(result>=25.0 && result<=29.9)
    document.getElementById("detail").innerHTML="You are overweight.";
 else
    document.getElementById("detail").innerHTML="You are obese.";
}

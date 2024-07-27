
function inputNumber(id){
  let givenNumber = document.getElementById(id).innerHTML;
  displayNumber(givenNumber)
}

function displayNumber(number){
    let prasentNumber = document.getElementById('display-number').innerText;
    const finalNumber = prasentNumber + number;
    document.getElementById('display-number').innerText=finalNumber;
}

document.getElementById("button-c").addEventListener('click',function(){
    document.getElementById('display-number').innerText='';
})

document.getElementById("button-back").addEventListener('click',function(){
    const displayValue = document.getElementById('display-number').innerText;
   const valueInNumber = parseFloat(displayValue);
    const mod_value = valueInNumber%10;
    const value = valueInNumber - mod_value;
    const finalValue = document.getElementById('display-number').innerText=value/10;
    if(finalValue==0){
        document.getElementById('display-number').innerText=''
    }
})

 


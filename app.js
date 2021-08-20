function updateCaseQuantity(isIncreasing)
{
    const CaseCounter=document.getElementById('case-counter');
    const casePrice=document.getElementById('case-price');
    if(isIncreasing){
    CaseCounter.value++;
    casePrice.innerText=59*CaseCounter.value;
    }
    else
    {
        if(CaseCounter.value>0){
            CaseCounter.value--;
            casePrice.innerText-=59;
            }

    }
    const mobilePrice=document.getElementById('mobile-price');
    const subTotal=document.getElementById('sub-total');
    console.log(mobilePrice.innerText);
    subTotal.innerText=parseFloat(mobilePrice.innerText)+parseFloat(casePrice.innerText);
    const totalVat=document.getElementById('vat');
    totalVat.innerText=((subTotal.innerText)*10)/100;
    const totalPrice=document.getElementById('total');
    totalPrice.innerText=parseFloat(totalVat.innerText)+parseFloat(subTotal.innerText);

    
   
}
document.getElementById('case-increase').addEventListener('click',function()
{
     updateCaseQuantity(true)
})

document.getElementById('case-decrease').addEventListener('click',function()
{
    updateCaseQuantity(false)
  
})
//mobile quantity
function updatemobileQuantity(isIncreasing)
{
    const mobileCounter=document.getElementById('mobile-counter') 
    const mobilePrice=document.getElementById('mobile-price');
    if(isIncreasing){
    mobileCounter.value++;
    mobilePrice.innerText=1219*mobileCounter.value;
    }
    else{
        if(mobileCounter.value>0){
        mobileCounter.value--; 
        mobilePrice.innerText-=1219;
        }
    }
    const casePrice=document.getElementById('case-price');
    const subTotal=document.getElementById('sub-total');
    subTotal.innerText=parseFloat(casePrice.innerText)+parseFloat(mobilePrice.innerText);
    const totalVat=document.getElementById('vat');
    totalVat.innerText=((subTotal.innerText)*10)/100;
    const totalPrice=document.getElementById('total');
    totalPrice.innerText=parseFloat(totalVat.innerText)+parseFloat(subTotal.innerText);
    console.log(totalPrice.innerText);
   
   

}

document.getElementById('mobile-increase').addEventListener('click',function()
{
    updatemobileQuantity(true);
})

document.getElementById('mobile-decrease').addEventListener('click',function()
{
    updatemobileQuantity(false);
})
/*function doubleIt(num){
    const result=num * 2;
    return result;
}
const first = doubleIt(5);
const second= doubleIt(7);
*/

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const amountValue = parseFloat(inputField.value);

    //clear input field----------------------------------
    inputField.value = "";

    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = parseFloat(totalElement.innerText);
    totalElement.innerText = totalText + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = parseFloat(balanceTotal.innerText);
    return balanceTotalText;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = parseFloat(balanceTotal.innerText);
    const balanceTotalText = getCurrentBalance();
    if (isAdd === true) {
        balanceTotal.innerText = balanceTotalText + amount;
    } else {
        balanceTotal.innerText = balanceTotalText - amount;
    }

}


document.getElementById('deposit-button').addEventListener('click', function () {
    /* const depositInput = document.getElementById('deposit-input');
     const depositAmount = parseFloat(depositInput.value);
   */

    //get current deposit--------------------------------
    /* 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = parseFloat(depositTotal.innerText);
    depositTotal.innerText = depositTotalText + depositAmount;
    */


    //update balance-------------------------------------

    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = parseFloat(balanceTotal.innerText);
    balanceTotal.innerText = balanceTotalText + depositAmount;
 */

    // //clear input field----------------------------------
    // depositInput.value = "";


    const depositAmount = getInputValue('deposit-input');//function-getInputValue(1)

    if (depositAmount > 0) {
        //get current deposit--------------------------------
        updateTotalField('deposit-total', depositAmount);//function-updateField(2)
        //update balance-------------------------------------
        updateBalance(depositAmount, true);
    }

});

//handle withdraw  button--------------------------------
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawInputAmountText = parseFloat(withdrawInput.value);
    // console.log(withdrawInputAmountText);



    /*   const withdrawTotal = document.getElementById('withdraw-total');
      const withdrawTotalText = parseFloat(withdrawTotal.innerText);
      withdrawTotal.innerText = withdrawTotalText + withdrawInputAmountText;
   */


    //update balance-------------------------------------

    /*    const balanceTotal = document.getElementById('balance-total');
       const balanceTotalText = parseFloat(balanceTotal.innerText);
       balanceTotal.innerText = balanceTotalText - withdrawInputAmountText; */

    // //clear input field----------------------------------
    // withdrawInput.value = "";


    const withdrawInputAmountText = getInputValue('withdraw-input')//function-getInputValue(1)
    const balanceTotalText = getCurrentBalance();
    if (withdrawInputAmountText > 0 && withdrawInputAmountText < balanceTotalText) {
        // update withdraw total-------------------------------
        updateTotalField('withdraw-total', withdrawInputAmountText);
        //update balance-------------------------------------
        updateBalance(withdrawInputAmountText, false)
    }
});
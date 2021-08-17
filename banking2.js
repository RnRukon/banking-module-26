

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
    //update balance-------------------------------------
    const withdrawInputAmountText = getInputValue('withdraw-input')//function-getInputValue(1)
    const balanceTotalText = getCurrentBalance();
    if (withdrawInputAmountText > 0 && withdrawInputAmountText < balanceTotalText) {
        // update withdraw total-------------------------------
        updateTotalField('withdraw-total', withdrawInputAmountText);
        //update balance-------------------------------------
        updateBalance(withdrawInputAmountText, false)
    }
});
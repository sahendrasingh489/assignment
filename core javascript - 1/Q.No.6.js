// Function to get the processing fee based on payment method

const prompt = require('prompt-sync')();
 
function getProcessingFee(paymentMethod) {
    let feePercentage;

    // Switch statement to determine the fee based on the payment method
    switch (paymentMethod.toLowerCase()) {
        case 'credit':
            feePercentage = 2; // 2% for credit
            break;
        case 'debit':
            feePercentage = 1.5; // 1.5% for debit
            break;
        case 'paypal':
            feePercentage = 3; // 3% for PayPal
            break;
        default:
            return "Invalid payment method.";
    }

    return `The processing fee for ${paymentMethod} is ${feePercentage}%.`;
}


let paymentMethod = prompt('enter payment method : ');
let result = getProcessingFee(paymentMethod);
console.log(result);

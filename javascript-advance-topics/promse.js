



// const orderPizza = new Promise((resolve, reject) => {

//     let shopOpen = false;

//     if (shopOpen) {
//         resolve("Pizza Delivered 🍕");
//     } else {
//         reject("Shop Closed ❌");
//     }

// });

// // promise state handling
// orderPizza
// .then((result)=>{console.log(result);
// })
// .catch((error)=>{console.log(error);
// });




// const pizza = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve("Pizza Ready 🍕");
//     }, 3000);

//     reject("pizza error")
// });

// pizza.then((data) => {
//     console.log(data);
// }).catch((error)=>{
//  console.log(error);
// })


// Step 1: Check Inventory
function checkInventory() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("✅ Inventory Checked");
            resolve();
        }, 1000);
    });
}

// Step 2: Receive Order
function receiveOrder() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("✅ Order Received");
            resolve();
        }, 1000);
    });
}

// Step 3: Check Payment
function checkPayment() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("✅ Payment Checked");
            resolve();
        }, 1000);
    });
}

// Step 4: Send Invoice
function sendInvoice() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("✅ Invoice Sent");
            resolve();
        }, 1000);
    });
}

// Calling
checkInventory()
    .then(receiveOrder)
    .then(checkPayment)
    .then(sendInvoice)
    .then(function () {
        console.log("🎉 Order Process Completed");
    })
    .catch(function (error) {
        console.log(error);
    });

    
    function checkInventory() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Inventory Checked");
            resolve();
        }, 1000);
    });
}

function receiveOrder() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Order Received");
            resolve();
        }, 1000);
    });
}

function checkPayment() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Payment Checked");
            resolve();
        }, 1000);
    });
}

function sendInvoice() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Invoice Sent");
            resolve();
        }, 1000);
    });
}

async function processOrder() {
    try {
        await checkInventory();
        await receiveOrder();
        await checkPayment();
        await sendInvoice();
        console.log("Order Completed Successfully");
    } catch (error) {
        console.log(error);
    }
}

processOrder();
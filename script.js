//Variable Inserts
let product = prompt("Product Name");
let price = prompt("Product Price - do not include dollar sign");
let unitSize = prompt("Units Purchased");
const stateTax = .046;
const localTax = .037;
let docStateTax = 4.6;
let docLocalTax = 3.7;

 //variable price math
let total = (price*unitSize)
let totalTaxed = (total + (total*stateTax) + (total*localTax))

 //Console Display
console.log(`Product Name: ${product}
Product Price: ${price}
Units Purchased: ${unitSize}`)

console.log(`Total Cost: ${totalTaxed}`)
//HTML Display
document.write(`
<div class="grid-container">
        <h1>Amount</h1>
        <h1>Product</h1>
        <h1>Price</h1>
        <p>${unitSize}</p>
        <p>${product}</p>
        <p>$${price}</p>
    </div>
    <div class="break"></div>
    <div class="column-container">
    <p>Sub-Total:$ ${total}</p>
    <p>Local Tax Rate: ${docLocalTax}%</p>
    <p>State Tax Rate: ${docStateTax}%</p>
    <div class="break"></div>
    <p>Total:$ ${totalTaxed}</p>
    </div>
    `);

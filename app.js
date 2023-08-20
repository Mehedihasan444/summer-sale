let totalPrice = 0;
let discount = 0;
let total = 0;

let numberOfCartItem = 1;
function showProducts(title) {
    const p = document.createElement('p');
    const span = document.createElement('span');
    span.appendChild(document.createTextNode(numberOfCartItem + '. '));
    p.appendChild(document.createTextNode(title));
    const cart = document.getElementById('cart-products');
    p.insertBefore(span, p.firstChild);
    cart.appendChild(p);
    numberOfCartItem++;
}

function converter(id) {
    const textPrice = document.getElementById(id);
    const price = parseFloat(textPrice.innerText);
    return price;
}


function Calculation(price) {
    totalPrice += price;
    if (totalPrice > 0) {
        const makePurchase = document.getElementById('Make-Purchase');
        makePurchase.removeAttribute('disabled');
    }
    if (totalPrice >= 200) {
        const apply = document.getElementById('apply');
        apply.removeAttribute('disabled');

    }
}

function couponApply(coupon) {

    if (coupon === 'SELL200') {
        discount = (totalPrice * 20) / 100;
        showAmount();
    }
    else {
        alert('Coupon is not correct!!!');
    }
}

function showAmount() {
    total = totalPrice - discount;
    const tPrice = document.getElementById('total-price');
    tPrice.textContent = totalPrice.toFixed(2) + " TK";
    const dis = document.getElementById('discount');
    dis.textContent = discount.toFixed(2) + " TK";
    const tot = document.getElementById('total');
    tot.textContent = total.toFixed(2) + " TK";

}
function goHome() {
    window.location.href = "./index.html";
    totalPrice = 0;
    discount = 0;
    total = 0;
    numberOfCartItem = 1;

    const cartProducts = document.getElementById('cart-products');
    cartProducts.innerHTML = '';
    const tPrice = document.getElementById('total-price');
    const dis = document.getElementById('discount');
    const tot = document.getElementById('total');
    tPrice.textContent = '';
    dis.textContent = '';
    tot.textContent = '';
}


document.getElementById('apply').addEventListener('click', function () {
    const inputField = document.getElementById('coupon-input-field');
    const inputText = inputField.value;
    couponApply(inputText);
    inputField.value = '';
});


const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6', 'card-7', 'card-8', 'card-9'];


for (const card of cards) {
    document.getElementById(card).addEventListener('click', function () {
        const title = document.getElementById(card + '-title').innerText;
        showProducts(title);
        const price = converter(card + '-price');
        Calculation(price);
        showAmount();
    });
}


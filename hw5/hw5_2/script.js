'use strict'

const basket = {
    content: [{
        productType: 'skirt',
        price: 5000,
        quantity: 1
    },
    {
        productType: 'top',
        price: 1700,
        quantity: 4
    },
    {
        productType: 'bag',
        price: 12700,
        quantity: 2
    },
    {
        productType: 'shirt',
        price: 3200,
        quantity: 1
    },
    {
        productType: 'jeans',
        price: 7500,
        quantity: 1
    }],

    // content: [],

    countBasketPrice() {
        return this.content.reduce((basketPrice, item) => basketPrice + item.price * item.quantity, 0);
    },

    countItemsQuantity() {
        return this.content.reduce((basketCount, item) => basketCount + item.quantity, 0);
    }
}

const cart = document.getElementsByClassName('cart')[0];

function renderBasket(cart) {
    if (basket.content.length === 0) {
        const basketInfo = cart.insertAdjacentHTML('beforeend', `Корзина пуста`);
    } else {
        const basketInfo = cart.insertAdjacentHTML('beforeend', `В корзине ${basket.countItemsQuantity()} товаров на сумму ${basket.countBasketPrice()} рублей`);
    }
    return;
};

renderBasket(cart);




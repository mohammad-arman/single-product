const firstImage = document.getElementById('first');
const secondImage = document.getElementById('second');
const thirdImage = document.getElementById('third');

const mainImage = document.getElementById('art');

const productDescription = document.getElementById('desc');
const productPrice = document.getElementById('price');

const freeShipping = document.getElementById('free');
const expressShipping = document.getElementById('express');

const shippingAmount = document.getElementById('shipping');

const total = document.getElementById('total');

freeShipping.addEventListener('click', function(){
    if(!isContain(freeShipping)){
        freeShipping.classList.add('selected');
        expressShipping.classList.remove('selected');
    }
    shippingAmount.innerText = 5;
    updateTotal();
});
expressShipping.addEventListener('click', function(){
    if(!isContain(expressShipping)){
        freeShipping.classList.remove('selected');
        expressShipping.classList.add('selected');
    }
    shippingAmount.innerText = 30;
    updateTotal();
});


firstImage.addEventListener('click', function(){
    if(!isContain(firstImage)){
        firstImage.classList.add('selected');
        secondImage.classList.remove('selected');
        thirdImage.classList.remove('selected');
    }
    mainImage.src = 'images/1.jpg';
    productDescription.innerText = 'First product Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus porro corrupti est, facere, praesentium aliquid unde in quas, vitae reprehenderit incidunt culpa fugiat voluptate dolor.';
    productPrice.innerText = 750;
    updateTotal();
});
secondImage.addEventListener('click', function(){
    if(!isContain(secondImage)){
        firstImage.classList.remove('selected');
        secondImage.classList.add('selected');
        thirdImage.classList.remove('selected');
    }
    mainImage.src = 'images/2.jpg';
    productDescription.innerText = 'Second product Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus porro corrupti est, facere, praesentium aliquid unde in quas, vitae reprehenderit incidunt culpa fugiat voluptate dolor.';
    productPrice.innerText = 650;
    updateTotal();
});
thirdImage.addEventListener('click', function(){
    if(!isContain(thirdImage)){
        firstImage.classList.remove('selected');
        secondImage.classList.remove('selected');
        thirdImage.classList.add('selected');
    }
    mainImage.src = 'images/3.jpg';
    productDescription.innerText = 'Third product Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus porro corrupti est, facere, praesentium aliquid unde in quas, vitae reprehenderit incidunt culpa fugiat voluptate dolor.';
    productPrice.innerText = 550;
    updateTotal();
});

function updateTotal(){
    const shipping = parseInt(shippingAmount.innerText);
    const price = parseInt(productPrice.innerText);
    const subtotal = shipping + price;
    total.innerText = subtotal;
};

function isContain(element){
    return element.classList.contains('selected');
};




function memoryPriceUpdate(price){
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = price;

};
//Handle Memory Events 
document.getElementById('8gb-memory').addEventListener('click', function(){
    memoryPriceUpdate(0);
    updateTotal();
});
document.getElementById('16gb-memory').addEventListener('click', function(){
    memoryPriceUpdate(180);
    updateTotal();
});

//Handle Storage Events
function storagePriceUpdate(price){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = price;
};
document.getElementById('256gb-storage').addEventListener('click', function(){
    storagePriceUpdate(0);
    updateTotal();
});
document.getElementById('512gb-storage').addEventListener('click', function(){
    storagePriceUpdate(100);
    updateTotal();
});
document.getElementById('1tb-storage').addEventListener('click', function(){
    storagePriceUpdate(180);
    updateTotal();
});
// 3. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта,
// необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// 1) Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// 2) Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
//    необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// 3) Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

let listShop = [{
        nameProduct: "молоко",
        count: "4",
        isBuy: true
    },
    {
        nameProduct: "хлеб",
        count: "3",
        isBuy: true
    },
    {
        nameProduct: "шоколад",
        count: "4",
        isBuy: false
    },
    {
        nameProduct: "лимон",
        count: "3",
        isBuy: true
    },
    {
        nameProduct: "пиво",
        count: "2",
        isBuy: false
    }
];

let showProducts = function () {
    listShop.sort(function (a, b) {
        return b.isBuy - a.isBuy;
    });
    let i = 0;
    for (let product of listShop) {
        console.log(
            `Продукт №${i+1} ${product.nameProduct},\t ${product.count}, ${product.isBuy}`
        );
        ++i;
    }
    console.log("\n\n");
};

let addProduct = function (Product) {
    let count = 0;
    for (let i = 0; i < listShop.length; ++i) {
        if (listShop[i].nameProduct === Product) {
            count = i;
        }
    }

    if (count === 0) {
        listShop[listShop.length - 1] = {
            nameProduct: Product,
            count: "1",
            isBuy: true
        };
        console.log("count === 0");
    } else {
        listShop[count].count = Number(listShop[count].count);
        listShop[count].count += 1;
    }
};

let buyProduct = function (myProduct) {
    let count = 0;
    myProduct = String(myProduct);
    for (let i = 0; i < listShop.length; ++i) {
        if (listShop[i].nameProduct === myProduct) {
            count = i;
        }
    }

    if (count === 0) {
        console.log(`Этого продукта нет: ${myProduct}`);
    } else {
        listShop[count].isBuy = true;
    }
};

showProducts(listShop);
addProduct("хлеб");
showProducts(listShop);
buyProduct("шоколад");
showProducts(listShop);

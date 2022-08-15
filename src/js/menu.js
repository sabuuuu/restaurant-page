
export function menu() {
    const content = document.querySelector('#content');

    content.replaceChildren();

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('menu-img');
    content.appendChild(imgDiv);

    const header = document.createElement('h1');
    header.textContent = "menu café";
    imgDiv.appendChild(header);

    const textDiv = document.createElement('div');
    textDiv.classList.add('menu-text');
    content.appendChild(textDiv);

    const espressoHeader = document.createElement('h1');
    espressoHeader.textContent = "espresso";
    textDiv.appendChild(espressoHeader);
    const espresso = document.createElement('div');
    espresso.classList.add('espresso');
    textDiv.appendChild(espresso);


    const products = document.createElement('div');
    products.classList.add("products");
    espresso.appendChild(products);

    const p1 = document.createElement('p');
    p1.textContent = "mocha";
    products.appendChild(p1);
    const p2 = document.createElement('p');
    p2.textContent = "latte";
    products.appendChild(p2);
    const p3 = document.createElement('p');
    p3.textContent = "cappuccino";
    products.appendChild(p3);
    const p4 = document.createElement('p');
    p4.textContent = "americano";
    products.appendChild(p4);
    const p5 = document.createElement('p');
    p5.textContent = "espresso";
    products.appendChild(p5);
    const p6 = document.createElement('p');
    p6.textContent = "macchiato";
    products.appendChild(p6);
    const p7 = document.createElement('p');
    p7.textContent = "vanilla";
    products.appendChild(p7);

    const prices = document.createElement('div');
    prices.classList.add('prices');
    espresso.appendChild(prices);
    
    const pr1 = document.createElement('p');
    pr1.textContent = "$3.00";
    prices.appendChild(pr1);
    const pr2 = document.createElement('p');
    pr2.textContent = "$4.00";
    prices.appendChild(pr2);
    const pr3 = document.createElement('p');
    pr3.textContent = "$3.50";
    prices.appendChild(pr3);
    const pr4 = document.createElement('p');
    pr4.textContent = "$4.50";
    prices.appendChild(pr4);
    const pr5 = document.createElement('p');
    pr5.textContent = "$4.25";
    prices.appendChild(pr5);
    const pr6 = document.createElement('p');
    pr6.textContent = "$4.00";
    prices.appendChild(pr6);
    const pr7 = document.createElement('p');
    pr7.textContent = "$3.75";
    prices.appendChild(pr7);


    const icedHeader = document.createElement('h1');
    icedHeader.textContent = "iced blended";
    textDiv.appendChild(icedHeader);
    const iced = document.createElement('div');
    iced.classList.add('iced');
    textDiv.appendChild(iced);


    const products2 = document.createElement('div');
    products2.classList.add("products");
    iced.appendChild(products2);

    const i1 = document.createElement('p');
    i1.textContent = "caramel";
    products2.appendChild(i1);
    const i2 = document.createElement('p');
    i2.textContent = "coffee latte";
    products2.appendChild(i2);
    const i3 = document.createElement('p');
    i3.textContent = "frappe";
    products2.appendChild(i3);
    const i4 = document.createElement('p');
    i4.textContent = "mocha";
    products2.appendChild(i4);
    const i5 = document.createElement('p');
    i5.textContent = "mint";
    products2.appendChild(i5);
    const i6 = document.createElement('p');
    i6.textContent = "matcha cream";
    products2.appendChild(i6);

    const prices2 = document.createElement('div');
    prices2.classList.add('prices');
    iced.appendChild(prices2);

    const ic1 = document.createElement('p');
    ic1.textContent = "$4.25";
    prices2.appendChild(ic1);
    const ic2 = document.createElement('p');
    ic2.textContent = "$3.50";
    prices2.appendChild(ic2);
    const ic3 = document.createElement('p');
    ic3.textContent = "$3.00";
    prices2.appendChild(ic3);
    const ic4 = document.createElement('p');
    ic4.textContent = "$4.00";
    prices2.appendChild(ic4);
    const ic5 = document.createElement('p');
    ic5.textContent = "$3.75";
    prices2.appendChild(ic5);
    const ic6 = document.createElement('p');
    ic6.textContent = "$5.00";
    prices2.appendChild(ic6);


    const teaHeader = document.createElement('h1');
    teaHeader.textContent = "tea";
    textDiv.appendChild(teaHeader);
    const tea = document.createElement('div');
    tea.classList.add('tea');
    textDiv.appendChild(tea);


    const products3 = document.createElement('div');
    products3.classList.add('products');
    tea.appendChild(products3);

    const t1 = document.createElement('p');
    t1.textContent = "jasmine tea";
    products3.appendChild(t1);
    const t2= document.createElement('p');
    t2.textContent = "green tea";
    products3.appendChild(t2);
    const t3 = document.createElement('p');
    t3.textContent = "earl grey";
    products3.appendChild(t3);
    const t4 = document.createElement('p');
    t4.textContent = "english tea";
    products3.appendChild(t4);

    const prices3 = document.createElement('div');
    prices3.classList.add('prices');
    tea.appendChild(prices3);

    const te1 = document.createElement('p');
    te1.textContent = "$3.75";
    prices3.appendChild(te1);

    const te2 = document.createElement('p');
    te2.textContent = "$4.50";
    prices3.appendChild(te2);

    const te3 = document.createElement('p');
    te3.textContent = "$4.00";
    prices3.appendChild(te3);

    const te4 = document.createElement('p');
    te4.textContent = "$3.75";
    prices3.appendChild(te4);
}
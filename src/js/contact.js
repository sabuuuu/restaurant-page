export function contact() {
    const content = document.querySelector('#content');
    content.replaceChildren();

    const header = document.createElement('div');
    header.classList.add('header-contact');
    content.appendChild(header);

    const h1 = document.createElement('h1');
    h1.textContent = '"the finest drinks"';
    header.appendChild(h1);

    const p1 = document.createElement('p');
    p1.textContent = "good taste, great vibes";
    header.appendChild(p1);

    const textDiv = document.createElement('div');
    textDiv.classList.add('contact-text');
    content.appendChild(textDiv);

    const h2 = document.createElement('h1');
    h2.textContent = "contact us";
    textDiv.appendChild(h2);

    const p2 = document.createElement('p');
    p2.textContent = "if you are interested in our products, roasted or green beans please contact us today, and we will get back to you as soon as possible.";
    textDiv.appendChild(p2);

    const p3 = document.createElement('p');
    p3.textContent = "If you have any questions or want your order on invoice instead please contact us by phone, mail or fill in the form below.";
    textDiv.appendChild(p3);

    const form = document.createElement('div');
    form.classList.add('contact-form');
    textDiv.appendChild(form);

    const h3 = document.createElement('h3');
    h3.textContent = "get in touch";
    form.appendChild(h3);

    const name = document.createElement('input');
    name.type = "text";
    name.placeholder = "name";
    form.appendChild(name);

    const email = document.createElement('input');
    email.type = "email";
    email.placeholder = "email";
    form.appendChild(email);

    const phoneNum = document.createElement('input');
    phoneNum.type = "number";
    phoneNum.placeholder = "phone number";
    form.appendChild(phoneNum);

    const comment = document.createElement('textarea');
    comment.rows = "5";
    comment.cols = "40";
    comment.maxLength = "150";
    comment.placeholder = "comment";
    form.appendChild(comment);

    const sendBtn = document.createElement('button');
    sendBtn.textContent = "send message";
    form.appendChild(sendBtn);
}
let s1 = "";
var s1inp = document.querySelector('#inputbilljs');
function s1append(event) {
    // console.log(event);
    s1 += event.data;
    console.log(s1);
    if (s1.length == 8) {
        s1inp.removeEventListener('input', s1append);
        console.log("total bill is : " + s2);
    }
}
s1inp.addEventListener('input', s1append);

let s2 = "";
var s2inp = document.querySelector('.inputpeoplejs');
function s2append(event) {
    // console.log(event);
    s2 += event.data;
    console.log(s2);
    if (s2.length > 4) {
        s2inp.removeEventListener('input', s2append);
        console.log("number of people is : " + s2);
    }
}
s2inp.addEventListener('input', s2append);

var flag = 0;
var tipPercent = "";
function tip(k) {
    flag = 0;
    tipPercent = k;
    console.log("tip percent is " + tipPercent);
}

document.querySelector('.tipAmt').innerHTML = 500;

var hideButton = document.querySelector('.customPercent');
var showInputField = document.querySelector('#percentInput');
function resetFields() {
    let bill = Number(s1);
    let persons = Number(s2);
    let tip = tipPercent;
    if (flag == 0) {
        let calc1 = eval (`${s1} \/ ${s2} \/ ${tipPercent}`);
        console.log(typeof calc1);
        let calc2 = eval (`${calc1} + ${s1} \/ ${s2}`);
        document.querySelector('.tipAmt').value = calc1;
        document.querySelector('.totalAmt').value = calc2;
    }
    else {
        let calc1 = eval (`${s1} \/ ${s2} \/ ${s3}`);
        let calc2 = eval (`${calc1} + ${s1} \/ ${s2}`);
        document.querySelector('.tipAmt').value = calc1;
        document.querySelector('.totalAmt').value = calc2;
    }

    document.querySelector('#inputbilljs').value = '';
    document.querySelector('.inputpeoplejs').value = '';
    document.querySelector('#percentInput').value = '';

    hideButton.style.display = 'block';
    showInputField.style.display = 'none';

    s1 = "";
    s2 = "";
    s3 = "";
    tipPercent = "";
    flag = 0;
}

function changeToInputField() {
    flag = 1;
    hideButton.style.display = 'none';
    showInputField.style.display = '';
}

let s3 = "";
var s3inp = document.querySelector('#percentInput');
function s3append(event) {
    flag = 1;
    // console.log(event);
    s3 += event.data;
    console.log(s3);
    tipPercent = s3;
    if (s3.length > 4) {
        s3.inp.removeEventListener('input', s3append);
        console.log(s3);
        tipPercent = s3;
    }
}
s3inp.addEventListener('input', s3append);
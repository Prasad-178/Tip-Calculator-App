let s1 = "";
var s1inp = document.querySelector('#inputbilljs');
function s1append(event) {
    // console.log(event);
    s1 += event.data;
    // console.log(s1);
    if (s1.length == 8) {
        s1inp.removeEventListener('input', s1append);
        console.log(s2);
    }
}
s1inp.addEventListener('input', s1append);

let s2 = "";
var s2inp = document.querySelector('.inputpeoplejs');
function s2append(event) {
    // console.log(event);
    s2 += event.data;
    // console.log(s2);
    if (s2.length > 4) {
        s2inp.removeEventListener('input', s2append);
        console.log(s2);
    }
}
s2inp.addEventListener('input', s2append);

let s3 = s1 + "/" + s2;
var tipPercent;

function tip(k) {
    tipPercent = k;
    console.log(tipPercent);
}

function resetFields() {
    document.querySelector('#inputbilljs').value = '';
    document.querySelector('.inputpeoplejs').value = '';
}

var hideButton = document.querySelector('.customPercent');
var showInputField = document.querySelector('#percentInput');
function changeToInputField() {
    hideButton.style.display = 'none';
    showInputField.style.display = '';
}

document.querySelector('.tipAmt').innerHTML = 
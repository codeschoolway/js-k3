function checkIdName(button) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if(isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = `数値を入力してください。`;
        return;
    }    

    switch(button.id) {
        case 'btn-add':
            var result = num1 + num2;
            break;

        case 'btn-sub':
            var result = num1 - num2;
            break;

        case 'btn-mul':
            var result = num1 * num2;
            break;

        case 'btn-div':
            if(num2 === 0) {
                document.getElementById('result').textContent = `0で割ることはできません。`;
                return;
            }
            var result = num1 / num2;
            break;    
    }

    document.getElementById('result').textContent = `答えは「${result}」です。`;
}



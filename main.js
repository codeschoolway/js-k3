function checkIdName(button) {
    const res = button.id;

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (res === "btn-add") {        
        var result = num1 + num2;
    }else if(res === "btn-sub") {
        var result = num1 - num2;
    }else if(res === "btn-mul") {
        var result = num1 * num2;
    }else if(res === "btn-div") {
        var result = num1 / num2;
    }

    document.getElementById(
        "result"
        ).textContent = `答えは「${result}」です。`; 
}



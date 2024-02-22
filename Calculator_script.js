let input = document.getElementById("input2");

let output = document.getElementById("output");

function addition(){
    let input_first = parseInt(document.getElementById("input1").value);
    let input_second = parseInt( document.getElementById("input2").value);
    output.innerText = input_first + input_second;
}

function multiplication(){
    let input_first = parseInt(document.getElementById("input1").value);
    let input_second = parseInt( document.getElementById("input2").value);
    output.innerText = input_first * input_second;
}

function division(){
    let input_first = parseInt(document.getElementById("input1").value);
    let input_second = parseInt( document.getElementById("input2").value);
    try {
        if (input_second === 0){
            throw new Error("Ділення на 0 неможливе");
        } else{
            output.innerText = input_first / input_second;
        }
    } catch (error) {
        output.innerText = error.message;
    }
}

function subtraction(){
    let input_first = parseInt(document.getElementById("input1").value);
    let input_second = parseInt( document.getElementById("input2").value);
    output.innerText = input_first - input_second;
}


document.getElementById("division_btn").addEventListener("click", division())
const input = document.querySelectorAll("input");
const output = document.getElementById("output");


let sum = "";
let value = output;

input.forEach((button)=> {
    button.addEventListener("click", () => {
        let btnValue = button.value;
        let outputValue = value;
        if(btnValue == "AC"){
            sum = "";
            output.value = sum;
        }else if(btnValue == "A+"){
            sum = "4";
            output.value = sum;
            outputValue = sum;
        }else if(btnValue == "A"){
            sum = "3.75";
            output.value = sum;
        }else if(btnValue == "A-"){
            sum = "3.50";
            output.value = sum;
        }else if(btnValue == "B+"){
            sum = "3.25";
            output.value = sum;
        }else if(btnValue == "B"){
            sum = "3";
            output.value = sum;
        }else if(btnValue == "B-"){
            sum = "2.75";
            output.value = sum;
        }else if(btnValue == "C+"){
            sum = "2.5";
            output.value = sum;
        }else if(btnValue == "C"){
            sum = "2.25";
            output.value = sum;
        }else if(btnValue == "D"){
            sum = "2";
            output.value = sum;
        }else if(btnValue == "F"){
            sum = "0";
            output.value = sum;
        }else if(btnValue == "Remove"){
            sum = sum.substring(0, sum.length -1);
            output.value = sum;
        }else if(btnValue == "="){
            sum = eval(sum);
            output.value = sum;
        }else{
            sum = sum + btnValue;
            output.value = sum;
        }
        // console.log(btnValue)
    })
})
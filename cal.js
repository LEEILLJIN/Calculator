//2021-4-14일에 시작
//각 버튼 눌리면 input에 표기되도록
//local storage이용
/*2021-4-19 해야할거 : 
    이름 각인 기능도 구현해보자
    버튼 이벤트
    연산 함수(숫자와 연산자 구분까지는 했음 js 내장함수 eval을 이용하면 쉽겠지만 내가 구현해보자)
*/
/*
2021-4-21 :
    연산함수 후위 표기식으로 변환하여 계산 ⭕
    루트 퍼센트 C CE ON/C MR/C M- M+ 는 버튼 이벤트 하면서 같이 하기
    후위 표기식 구현한거 내가 한게 아니니까 잘 살펴보기 
    해야할 것 : 
    버튼 이벤트->**
                눌리는 거 마다 input text칸에 표시
                계산 결과도 마지막에 input text칸에 표시
    각인 기능
*/
/*
2021-4-23 : 
    ON/C,MR/C, M-, M+, 루트, % , .제외한 버튼 이벤트⭕
    해야할 것:
        ON/C,MR/C, M-, M+, 루트, %, . 이벤트 처리
        각인기능


2021-4-26 : 
    MR/C, M-, M+ 버튼은 사칙연산의 우선순위를 위한 기능인데 이건 이미 구현했으니 필요없다
    ON/C 버튼 역시 계산기의 전원 버튼이니 구현할 필요 없다.
 */
const form = document.querySelector(".calcul"),
    input = form.querySelector("input"),
    buttons_form = document.querySelector(".calcul"),
    btn_ON_C = buttons_form.querySelector(".btn_ON_C"),
    btn_7 = buttons_form.querySelector(".btn_7"),
    btn_8 = buttons_form.querySelector(".btn_8"),
    btn_9 = buttons_form.querySelector(".btn_9"),
    btn_divide = buttons_form.querySelector(".btn_divide"),
    btn_squrt = buttons_form.querySelector(".btn_√"),

    btn_MR_C = buttons_form.querySelector(".btn_MR_C"),
    btn_4 = buttons_form.querySelector(".btn_4"),
    btn_5 = buttons_form.querySelector(".btn_5"),
    btn_6 = buttons_form.querySelector(".btn_6"),
    btn_multiply = buttons_form.querySelector(".btn_multiply"),
    btn_percent = buttons_form.querySelector(".btn_percent"),

    btn_M1 = buttons_form.querySelector(".btn_M1"),
    btn_1 = buttons_form.querySelector(".btn_1"),
    btn_2 = buttons_form.querySelector(".btn_2"),
    btn_3 = buttons_form.querySelector(".btn_3"),
    btn_minus = buttons_form.querySelector(".btn_minus"),
    btn_C = buttons_form.querySelector(".btn_C"),

    btn_M2 = buttons_form.querySelector(".btn_M2"),
    btn_0 = buttons_form.querySelector(".btn_0"),
    btn_dot = buttons_form.querySelector(".btn_dot"),
    btn_equals = buttons_form.querySelector(".btn_equal"),
    btn_plus = buttons_form.querySelector(".btn_plus"),
    btn_CE = buttons_form.querySelector(".btn_CE");

const INPUT="input";
let inputs=[];
let btns="";
let pre_value="";

const  logo_form=document.querySelector(".logo-form"),
        logo_input = logo_form.querySelector(".logo-input"),
        logo = document.querySelector(".logo");

const cal= document.querySelector(".cal"),
    circle = document.querySelector(".circle");

const SHOWING = "showing",
        LOGO = "logo";

const color_btn = document.querySelector(".controls_colors"),
    c1 = color_btn.querySelector(".c1"),
    c2 = color_btn.querySelector(".c2"),
    c3 = color_btn.querySelector(".c3"),
    c4 = color_btn.querySelector(".c4"),
    c5 = color_btn.querySelector(".c5"),
    c6 = color_btn.querySelector(".c6"),
    c7 = color_btn.querySelector(".c7"),
    c8 = color_btn.querySelector(".c8");

const C_1 ="c1",
    C_2 ="c2",
    C_3 ="c3",
    C_4 ="c4",
    C_5 ="c5",
    C_6 ="c6",
    C_7 ="c7",
    C_8 ="c8";

function handlecolor(event){
    const color = event.target;
    let clickcolor = color.id;
    let i =0;
    let cur_calclass = cal.classList;
    let cur_circleclass = circle.classList;
    for(i=0; i<cur_calclass.length; i++){
        if(cur_calclass[i] === C_1){
            cal.classList.remove(C_1);
        }
        if(cur_calclass[i] === C_2){
            cal.classList.remove(C_2);
        }
        if(cur_calclass[i] === C_3){
            cal.classList.remove(C_3);
        }
        if(cur_calclass[i] === C_3){
            cal.classList.remove(C_3);
        }
        if(cur_calclass[i] === C_4){
            cal.classList.remove(C_4);
        }
        if(cur_calclass[i] === C_5){
            cal.classList.remove(C_5);
        }
        if(cur_calclass[i] === C_6){
            cal.classList.remove(C_6);
        }
        if(cur_calclass[i] === C_7){
            cal.classList.remove(C_7);
        }
        if(cur_calclass[i] === C_8){
            cal.classList.remove(C_8);
        }  

    }
    for(i=0; i<cur_circleclass.length; i++){
        if(cur_circleclass[i] === C_1){
            circle.classList.remove(C_1);
        }
        if(cur_circleclass[i] === C_2){
            circle.classList.remove(C_2);
        }
        if(cur_circleclass[i] === C_3){
            circle.classList.remove(C_3);
        }
        if(cur_circleclass[i] === C_3){
            circle.classList.remove(C_3);
        }
        if(cur_circleclass[i] === C_4){
            circle.classList.remove(C_4);
        }
        if(cur_circleclass[i] === C_5){
            circle.classList.remove(C_5);
        }
        if(cur_circleclass[i] === C_6){
            circle.classList.remove(C_6);
        }
        if(cur_circleclass[i] === C_7){
            circle.classList.remove(C_7);
        }
        if(cur_circleclass[i] === C_8){
            circle.classList.remove(C_8);
        }  

    }
    switch(clickcolor){
        case "1":
            cal.classList.add(C_1);
            circle.classList.add(C_1);
            break;
        case "2":
            cal.classList.add(C_2);
            circle.classList.add(C_2);
            break;
        case "3":
            cal.classList.add(C_3);
            circle.classList.add(C_3);
            break;
        case "4":
            cal.classList.add(C_4);
            circle.classList.add(C_4);
            break;
        case "5":
            cal.classList.add(C_5);
            circle.classList.add(C_5);
            break; 
        case "6":
            cal.classList.add(C_6);
            circle.classList.add(C_6);
            break;      
        case "7":
            cal.classList.add(C_7);
            circle.classList.add(C_7);
            break;                     
        case "8":
            cal.classList.add(C_8);
            circle.classList.add(C_8);
            break;
    }
}
function contorlcolor(){
    c1.addEventListener("click",handlecolor);
    c2.addEventListener("click",handlecolor);
    c3.addEventListener("click",handlecolor);
    c4.addEventListener("click",handlecolor);
    c5.addEventListener("click",handlecolor);
    c6.addEventListener("click",handlecolor);
    c7.addEventListener("click",handlecolor);
    c8.addEventListener("click",handlecolor);
}
function handleLogoEdite(event){
    localStorage.removeItem(LOGO);
   // logo_form.classList.add(SHOWING); 이게 여기있고 밑에 askForLogo가 없으면 첫번째 edit에서 고친 logo가 submit이 안된다.
    logo.classList.remove(SHOWING);
    logo_input.value ="";
    askForLogo();
}
function EditeLogo(){
    logo.addEventListener("click",handleLogoEdite);
}
function saveLogo(text){
    localStorage.setItem(LOGO,text);
}
function paintLogo(text){
    logo.classList.add(SHOWING);
    logo.innerText = text;
    EditeLogo();
}

function handleLogoSubmit(event){
    event.preventDefault();
    logo_form.classList.remove(SHOWING);
    paintLogo(logo_input.value);
    saveLogo(logo_input.value);
}

function askForLogo(){
    logo_form.classList.add(SHOWING);
    logo_form.addEventListener("submit",handleLogoSubmit);
}
function loadLogo(){
    const currentLogo = localStorage.getItem(LOGO);
    if(currentLogo === null){
        askForLogo();
    }else{
        paintLogo(currentLogo);
    }
}




function btnHandle(event){
    const btn = event.target;//event가 일어난 곳을 반환
    let currentbtn = btn.value;
   // let currentInputValue=[];
    // currentInputValue.push(localStorage.getItem(INPUT));
    // currentInputValue.push(currentbtn);
   // inputs.push(currentbtn)
    console.log(currentbtn);
    console.log(inputs);
    console.log(btns);
    switch(currentbtn){
        case "÷":
            currentbtn = "/";
            pre_value="";
            if(btns == ""){
                //  pre_value=currentbtn;
                  btns = input.value;
              }
            break;
        case "×":
            currentbtn = "*";
            pre_value="";
            if(btns == ""){
                //  pre_value=currentbtn;
                  btns = input.value;
              }
            break;
        case "＋":
            currentbtn = "+";
            pre_value="";
            if(btns == ""){
                //  pre_value=currentbtn;
                  btns = input.value;
              }
            break;
        case "－":
            currentbtn = "-";
            pre_value="";
            if(btns == ""){
                //  pre_value=currentbtn;
                  btns = input.value;
              }
            break;   
        case "C":
            localStorage.removeItem(INPUT);
            btns = "";
            inputs = [];//주의하자*************************
            currentbtn="";
            pre_value="";
            break;
        case "CE":
            console.log(input.value);
            input.value=  input.value.slice(0,-1);//String의 마지막 문자 제거 str.slice(beginindex, endindex) 부분 추출
            btns = input.value;
            currentbtn="";
            break;   
        case "%":
            if(btns == ""){
                if(input.value != ""){
                    btns = input.value;
                }else{
                    alert("앞에 숫자를 입력해주세요.")
                    currentbtn = "";
                }
              }
            break;
        case "√":
            if(btns == ""){
                    if(input.value != ""){
                        btns = input.value;
                    }
                }
            
            break;
        default:
            break;
    }
    if(btns == ""){

        btns = currentbtn;
    }else{
        const ca = currentbtn;
        console.log(pre_value);
        btns = btns + ca;
    }


    input.value = btns;
}

function btnOnclick(){
    buttons_form.addEventListener('submit',handleSubmit);

    btn_0.addEventListener('click',btnHandle);
    btn_1.addEventListener('click',btnHandle);
    btn_2.addEventListener('click',btnHandle);
    btn_3.addEventListener('click',btnHandle);
    btn_4.addEventListener('click',btnHandle);
    btn_5.addEventListener('click',btnHandle);
    btn_6.addEventListener('click',btnHandle);
    btn_7.addEventListener('click',btnHandle);
    btn_8.addEventListener('click',btnHandle);
    btn_9.addEventListener('click',btnHandle);

    btn_divide.addEventListener('click',btnHandle);
    btn_multiply.addEventListener('click',btnHandle);
    btn_minus.addEventListener('click',btnHandle);
    btn_plus.addEventListener('click',btnHandle);
 //   btn_equals.addEventListener('click',handleSubmit); = 버튼은 이미 속성을 submit으로 해놨기 때문에 따로 이벤트 처리를 안해도 된다.
    btn_squrt.addEventListener('click',btnHandle);
    btn_percent.addEventListener('click',btnHandle);//앞에 있는 숫자에 *0.01
    btn_dot.addEventListener('click',btnHandle);

    btn_C.addEventListener('click',btnHandle);
    btn_CE.addEventListener('click',btnHandle);
}

function saveInput(text){
    localStorage.setItem(INPUT,JSON.stringify(inputs));
    if(text == ""){
        paintResult("");
    }else{
        calculate(text);
    }
}
function inputText(){
    form.addEventListener("submit",handleSubmit);
}

function handleSubmit(event){
    event.preventDefault();//event를 막음 정보를 내가 원하는 곳(local storage)에 저장하기 위해
    const currentValue = input.value;
    if(currentValue != ""){//공백은 localstorage에 저장되지 않도록
        inputs.push(currentValue);
    }
    btns="";
    saveInput(currentValue);

}
function calculate(text){
    //java script 내장함수 eval() : ()안의 식을 계산해줌 연산자 우선순위도 고려해줌
    const currentInput=text.split(/(["\-","+","/","*"])/);//구분자가 ()를 포함하는 정규표현식일 경우, 포획된 결과도 배열에 포함된다.
    let i = 0;
    let stack1=[];
    let stack2=[];
    var top1 = -1;
    var j=0;
    var num1;
    var num2;
    var top2 = -1;
    let result=[];
    console.log(currentInput);
    while(i < currentInput.length){
        switch(currentInput[i]){
            case "(":
                stack1[++top1] = currentInput[i];
                break;
            case "*":
            case "/":
                while(top1>-1 && (stack1[top1]=== "*" || stack1[top1] === "/")){
                    result.push(stack1[top1]);
                    top1--;
                }
                stack1[++top1] = currentInput[i];
                break;
            case "-":
            case "+":
                while(top1>-1 && (stack1[top1] === "*" || stack1[top1] === "/" || stack1[top1] === "+" || stack1[top1] === "-")){
                    result.push(stack1[top1]);
                    top1--;
                }
                stack1[++top1] = currentInput[i];
                break;

            case ")":
                while(top1>-1 && stack1[top1] != "("){
                    result.push(stack1[top1]);
                    top1--;
                }
                if(stack1[top1] === "("){
                    top1--;5
                }
                break;
            default:
                if(currentInput[i].includes("%")){
                    currentInput[i] = (currentInput[i].replace("%",""))*0.01;
                }else if(currentInput[i].includes("√")){
                    currentInput[i] = Math.sqrt(currentInput[i].replace("√",""));
                }
                console.log(currentInput);
                result.push(currentInput[i]);
                break;
 A        }
        i++;
    }
    while(top1 > -1){
        result.push(stack1[top1--]);
    }
    console.log(result);
    while(j < result.length){
        switch(result[j]){
            case "+":
                num2 = stack2[top2--];
                num1 = stack2[top2--];
                stack2[++top2] = num1+num2;
                break;

            case "\-":
                num2 = stack2[top2--];
                num1 = stack2[top2--];
                stack2[++top2] = num1-num2;
                break;

             case "*":
                num2 = stack2[top2--];
                num1 = stack2[top2--];
                stack2[++top2] = num1*num2;
                break;
            
            case "/":
                num2 = stack2[top2--];
                num1 = stack2[top2--];
                stack2[++top2] = num1/num2;
                break;

            default:
                stack2[++top2] = parseFloat(result[j]);
                break;        
            } 
        j++;
    }
    let finalresult = stack2[top2--]
    paintResult(finalresult);
    return finalresult;
}
function paintResult(result){
    if(result!=0 && result == ""){//아무것도 입력하지 않은 경우 아무일도 일어나지 않도록 처리
        console.log(result);
        result = "";
    }
    input.value = result;
    console.log(result);
}

function loadInput(){
    const loadedInput = localStorage.getItem(INPUT);
    if(loadedInput !== null){
        const parsedInput = JSON.parse(loadedInput);
        var i=0;
        while(i<parsedInput.length){
            inputs.push(parsedInput[i]);
            i++;
        }
    }
}
function init(){
    loadInput();
    inputText();
    btnOnclick();
    loadLogo();
    contorlcolor();
}
init();
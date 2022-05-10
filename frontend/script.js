let globalVar1 = 12;
let globalVar2 = function () {
    console.log("Inside the function ", globalVar1);
    let funVar1 = "Hello";
    let funVar2 = function () {
        console.log("funVar2 belseje");
        console.log(globalVar1);
        console.log(funVar1);
        let funInFunVar1 = true;
        console.log(funInFunVar1);
        let funInFunVar2 = function(){
            console.log(funInFunVar1);
        };
        funInFunVar2();
    };
    funVar2();
    console.log(funVar1);
    if (funVar1 === "Hello") {
        var blockVar1 = "Bye";
        console.log(blockVar1);
    } else {
    };
    console.log(blockVar1);
};
globalVar2();

const globalVar3 = function (para1, para2, para3) {
    console.log(para1);
    console.log(para2);
    console.log(para3);
    console.log(para3());
};
const globalVar4 = "Hi";
const globalVar5 = function () {
    return "Yo"
};
const globalVar6 = function () {
    return "Hey"
};
globalVar3(globalVar5(), globalVar4, globalVar6);

const loadEvent = function (parameter1) {
    const rootElement = document.getElementById("root");
    console.log(parameter1);
    rootElement.addEventListener("click", function (event) {
        console.log(event.currentTarget);
        event.currentTarget.insertAdjacentHTML("beforeend", "Clicked, ");
        event.currentTarget.classList.toggle("clicked");
    });
    
};

window.addEventListener("load", loadEvent);
let z = +prompt("Перше число");

for (let i = 1 ; i == 1;){
    if (z){
        console.log("зараз число дорівнює", z)
    }
    let c = prompt("Яку дію ти хочеш виконати по типу + і *");
    let y = +prompt("Яке друге число?");
    
    if (c == "+"){
        z = z + y
    }
    if (c == "-"){
        z = z - y
    }
    if (c == "/"){
        z = z / y
    }
    if (c == "*"){
        z = z * y
    }
    console.log(z)
    let a = confirm("Далі рахуємо?");
    if (a == false){
        i=0
    }

}
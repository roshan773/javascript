function generateTable(){
    let table = document.getElementById("tableInput").value;
    table = parseInt(table);

    if(table <= 0){
        document.querySelector(".result").innerHTML = "<p>Enter a valid number</p>";
        return;
    }

    let output = ""


    for(let i=1; i<=12; i++){
        output += `${table} X ${i} = ${table * i} <br>`
    }

    document.querySelector(".result").innerHTML = output;
}
const myModal = new bootstrap.Modal ("#transaction-Modal");
let logged= sessionStorage.getItem("logged");
const session= localStorage.getItem("session")

let data= {
  transactions: []
};

document.getElementById("button-logout").addEventListener('click', logout);

//adicionar lançamentos
document.getElementById("transaction-form").addEventListener("submit", function(e){
    e.preventDefault();

    const value = parseFloat (document.getElementById ("value-input").value);
    const descrepition = document.getElementById("description-input").value;
    const date= document.getElementById("date-input").value;
    const type= document.querySelector('input[name="type-input"]:cheked').value;

    data.transactions.unshift({
        value:value, type:type,description:description,date:date
    });
    savedata (data);
    e.target.reset();
    myModal.hide();

    getTransactions();

    alert("lançamento adicionado com sucesso.");
}

checklogged();

function checklogged(){
    if (session) {
        sessionStorage.setItem("logged",session);
        logged=session;
    }
    if (!logged){
        window.location.href="index.html";
        return;
    }
    constdataUser= localStorage.getItem(logged);
    if(dataUser) {
        data= JSON.parse(dataUser);
    }
    getTransactions();
}  

function logout {
    sessionStorage.removeItem("logged");
    localStorage.removeitem("session");
    window.location.href="index.html";
}

function getTransactions(){
    const transactions = data.transactions;
    let transactionsHtml = ``;

    if (transactions.length) {
        transactions.forEach((item)=> {
            let type = "entrada";
            if (item.type==="2") {
                type = "Saída";
            }

            transactionsHtml += `
            <tr>
                                <th scope="row">${item.date}</th>
                                <td>${item.value.tofixed(2)}</td>
                                <td>${type}</td>
                                <td>${item.description}</td>
                              </tr>
            `
        })
        document.getElementById("transactions-list").innerHTML=
        transactionshtml;
    }
}

function saveData(data){
    localStorage.setItem(data.login, JSON.stringify (data));
}
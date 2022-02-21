const myModal = new bootstrap.Modal ("#register-Modal");
let logged= sessionStorage.getItem("logged");
const session= localStorage.getItem("session");

<<<<<<< HEAD
checklogged();

=======
checklog();
>>>>>>> 7eec10ba6c0eed6d4de2a60a438984bd02bfe879
//logar no sistema
 document.getElementById("login-form").addEventListener("submit", function(e){
     e.preventDefault();

     const email=document.getElementById("email-input").value;
     const password=document.getElementById(password-input).value;
     const checksession=document.getElementById("session-check").Checked;

     const account = getAccount(email);
     if (!account){
         alert("Oops! Verifique o usuário ou a senha.");
         return;
     };

     if(account){
         if (account.password !== password) {
             alert("Oops! Verifique o usuário ou a senha.");
             return;
         };

         saveSession (email,checksession )
         window.location.href="home.html";
     };
 });
//CRIARCONTA

document.getElementById("create-form").addEventListener("submit",function(e) {
    e.preventDefault();
    const email = document.getElementById("email-create-input").value;
    const password= document.getElementById ("password-create-input").value;

    if (email.length <5 ) {
        alert ("Preencha o campo com E-mail valido.");
        return;
    };
    if (password.length <4){
        alert ("preencha a senha com no mínimo 4 digitos.");
        return;
    };

    saveAccount({
        login:email,
        password:password,
        transactions:[]
    });
    
    myModal.hide();

    alert("Conta criada com sucesso");
});

function checklogged(){
    if (session) {
        sessionStorage.setItem("logged",session);
        logged=session;
    };
    if (logged){
        saveSession(logged,session);
        window.location.href="home.html";
    };
};

function saveAccount(data){
    localStorage.setItem(data.login, JSON.stringify(data));
}
function saveSession (data,saveSession){
    if (saveSession){
        localStorage.setItem("session", data);
    };
    sessionStorage.setItem("logged", data);
};

function getAccount(key){
    const account= localStorage.getItem(key);
    if(account){
        return JSON.parse(account);
    };
    return"";
};

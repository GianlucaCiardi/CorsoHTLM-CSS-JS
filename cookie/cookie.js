const cookie = () => {
    const name = prompt("Inserisci nome: ", "Gianluca");
    document.cookie = `NomeUtente= ${name};`;
}

cookie();

const localStorage = () => {
    window.localStorage.setItem("Username", "Gianluca");
    alert(window.localStorage.getItem("Username"));
}

localStorage();
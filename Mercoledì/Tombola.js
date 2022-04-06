let vettoreCasuale = Array();
let vettoreFisso = Array();
let i, j;
for (i = 0; i < 10; i++) {
    let app = Math.floor(Math.random() * 90 + 1);
    let flag = true;
    for (j = 0; j < vettoreFisso.length; j++) {
        if (vettoreFisso[j] == app) flag = false;
    }
    let controllo = flag;
    (flag) ? vettoreCasuale[i] = app: i--;
}
for (i = 0; i < 10; i++) {
    app = parseInt(prompt("insersisci " + (i + 1) + " valore"));
    flag = true;
    if (app < 91 && app > 0) {
        for (j = 0; j < vettoreFisso.length; j++) {
            if (vettoreFisso[j] == app) flag = false;
        }
    } else flag = false;
    (flag) ? vettoreFisso[i] = app: i--;
}
let cont = 0;
for (i = 0; i < 10; i++) {
    app = vettoreCasuale[i];
    for (j = 0; j < 10; j++) {
        if (app == vettoreFisso[j]) {
            cont++;
        }
    }
}
if (cont == 2) alert("Ambo");
else if (cont == 3) alert("Terna");
else if (cont == 4) alert("Quaterna");
else if (cont == 5) alert("Cinquina");
else if (cont == 10) alert("Tombola");
else alert("non hai vinto");

console.log(vettoreCasuale);
console.log(vettoreFisso);
console.log(cont);
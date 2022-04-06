function arr() {
    let num = prompt("inserisci dimensione vettore");

    let arr = [];
    let x;
    let j;

    for (let i = 0; i < num; i++) {
        x = Math.floor(Math.random() * 90);
        arr.push(x);
    }


    for (let i = 0; i < num; i++) {
        document.write(arr[i]);
        document.write("<br>");
    }



    for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    document.write("<br> inverto gli elementi del vettore <br><br>");
    for (let i = 0; i < num; i++) {
        document.write(arr[i]);
        document.write("<br>");
    }

    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    document.write("<br>ordinato in ordine crescente <br><br>");
    for (let i = 0; i < num; i++) {
        document.write(arr[i]);
        document.write("<br>");
    }

}
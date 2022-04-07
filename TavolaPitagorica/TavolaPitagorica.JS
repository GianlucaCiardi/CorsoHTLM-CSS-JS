function tabella() {

    let count = 1;

    document.write("<table>")
    for (let i = 1; i <= 10; i++) {

        document.write("<tr>")
        for (let j = 1; j <= 10; j++) {
            document.write("<td>")
            document.write(i * j);
            document.write("<td>")
            count++
        }
        document.write("</tr>")
    }

    document.write("</table>")

}
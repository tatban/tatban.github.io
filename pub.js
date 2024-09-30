function fetchPubs() {
    let xhttp = new XMLHttpRequest();
    var pubArr;
    var doc_tab = document.getElementById('pubTAB');
    xhttp.open("GET", "https://tatban.github.io/pub.json", false)
    xhttp.send(null)

    pubArr = JSON.parse(xhttp.responseText);
    //pubArr.sort(sortDate);

    var resultHtml = "";
    var currYear;
    var conf_link;
    var year = "";
    pubArr.forEach(element => {
        conf_link = element.published_in.conf_link
        if (!conf_link){
            conf_link = "#"
        }
        resultHtml += `
        <tr>
            <td class="pubRow">
                <a href="${element.link}" class="papertitle">${element.title}</a><br>
                ${element.authors} <br>
                <em><a href="${conf_link}">${element.published_in.conf}</a></em>, ${element.year}
            </td>
        </tr>
        `
    });
    var tbody = document.createElement('tbody');
    tbody.innerHTML = resultHtml;
    doc_tab.appendChild(tbody);
}

var list = [];

//Функция добавляющая пользовательский ввод в массив
function addItem() {
    list.push([document.getElementById('product').value, document.getElementById('nmbr').value, document.getElementById('price').value]);
    showList();
    return document.getElementById('product').value = "", document.getElementById('nmbr').value = "", document.getElementById('price').value = "";
}

//Функция печатающая массив в виде списка в блок id="table"
function showList() {
    var boxComposition = document.getElementById('table');
    var res = "<table>";
    var total = 0,
        serNum = 1;

    for (var i = 0; i < list.length; i++) {
        res += "<tr><td>" + serNum + ". </td>";
        for (var j = 0; j < list[i].length; j++) {
            res += "<td>" + list[i][j] + "</td>";

        }
        res += '<td><span class="delete" onclick="deleteItem(' + i + ')">&times</span></tr></td>';
        total += list[i][1] * list[i][2];
        serNum++;
    }
    document.getElementById('total').innerHTML = total;
    res += "</table>";
    boxComposition.innerHTML = res;
}

//функция удаляющая подмассив из массива
function deleteItem(row) {
    list.splice(row, 1);
    showList();
}
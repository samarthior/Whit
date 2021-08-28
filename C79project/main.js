menu_list_array = [
    
]
function add_item() {
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata = "<section class='cards'>"
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + '<div class="cards">' + '<img src"images/pizzalmg.png"/>' + menu_list_array[i] = '</div>'

    }
    htmldata=htmldata+"</section>"
    document.getElementById()
}
function get_para1(){
    var inputs1 = [];
    for(var i=1;i<=6;i++){
        inputs1.push(document.getElementById("para1input" + i).value);
        inputs1.join(". ");
        document.getElementById("show_para1").innerHTML = inputs1.join(". ");
    }
}
function get_para2(){
    var input2 = []
    for(var t=1;t<=6;t++){
        inputs1.push(document.getElementById("para2input" + i).value);
        inputs1.join(". ");
        document.getElementById("show_para2").innerHTML = inputs1.join(". ");
    }
}
	
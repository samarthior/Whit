name_of_the_student_array=[] 
function submit(){
    var display_student_array=[]
    for(j=1;j<=4;j++){
        var name_student=
        document.getElementById("NFTS"+j).value
        console.log(name_student)
        name_of_the_student_array.push(name_student)
    }
    console.log(name_of_the_student_array)
    for(var k=0;k<name_of_the_student_array.length;k++){
        display_student_array.push("<h4>"+name_of_the_student_array[k]+"</h4>")
        console.log(display_student_array)
    }
    document.getElementById("display_name_with_commas").innerHTML=display_student_array
    var remove_commas=
    display_student_array.join("")
    console.log(remove_commas)
    document.getElementById("display_name_with_out_commas").innerHTML=remove_commas
    document.getElementById("submit_button").style.display="inline-block"
    document.getElementById("sort_button").style.display=""
    document.getElementById("display_name_with_commas").style.display="none"
}


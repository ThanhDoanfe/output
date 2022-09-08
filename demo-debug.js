//hiển thị kết quả hàm document.write()
function message(){
    document.write("helo")
}
//hiển thị nội dung trong console
function message(){
    console.log("helo")
}


//thay đổi nội dung thẻ html
function message(){
    document.getElementById("demo2").innerHTML='1'
}

//hiển thị kết quả hàm alert
var demo=document.getElementById("demo");
demo.addEventListener("click",clickon);
function clickon(){
    alert("helo");
}

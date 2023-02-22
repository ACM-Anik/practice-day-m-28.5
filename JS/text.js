// Textarea input:
const inputField = document.getElementById('input-field');
const inputValue = inputField.value;

// // 1: Bold
document.getElementById('btn-bold').addEventListener('click', function(){
    //  let inputValue =inputField.value.style.fontWeight= "bold";

    if(inputField.style.fontWeight == "bold"){
        inputField.style.fontWeight == "normal";
    }
    else{
        inputField.style.fontWeight == "bold";
    }
    // console.log(inputField);
});
// // 2 : Italic
document.getElementById('btn-italic').addEventListener('click', function(){
    console.log(inputValue);

//     if(inputValue.style.fontStyle == "bold"){
//         inputValue.style.fontStyle == "normal";
//     }
//     else{
//         inputValue.style.fontStyle == "bold";
//     }
});
// // 3: Underline
document.getElementById('btn-underline').addEventListener('click', function(){
    console.log(inputValue);

//     if(inputValue.style.fontDecoration == "underline"){
//         inputValue.style.fontDecoration == "none";
//     }
//     else{
//         inputValue.style.fontDecoration == "underline";
//     }
});
// // 4: Align left
document.getElementById('btn-left').addEventListener('click', function(){
    inputField.style.textAlign = "left";
});
// // 5; Align center
document.getElementById('btn-center').addEventListener('click', function(){
   inputField.style.textAlign = "center";
});
// // 6 Align justify
document.getElementById('btn-center-equal').addEventListener('click', function(){
    inputField.style.textAlign = "justify";
});
// // 7: align right
document.getElementById('btn-right').addEventListener('click', function(){
    console.log(inputValue);
    inputField.style.textAlign = "right";
});
// // 8 : Font size
document.getElementById('btn-font-size').addEventListener('click', function(e){
    buttonValue = e.target.value;
    inputField.style.fontSize= buttonValue + "px";
});
// // 9: Font style
document.getElementById('btn-font-style').addEventListener('click', function(){
    console.log(inputValue);

    if(inputField == toUpperCase()){
        const fontStyle = inputField.toLowerCase();
    }
    else{
        const fontStyle = inputField.toUpperCase();
    }
});
// // 10 font color
document.getElementById('font-color').addEventListener('click', function(e){
    textColor = e.target.value;
    inputField.style.color = textColor;
});


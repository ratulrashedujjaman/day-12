$('#btn').click(function () {

    var firstNameValue=$('#firstName').val();
    var lastNameValue=$('#lastName').val();
    var fullName=firstNameValue+ ' ' + lastNameValue;

    $('#fullName').val(fullName);
});

// alert( $('#h1').html('Hello ') );
// $(selector).Action();    (Syntex of jQuery)



// var redBtnElement = document.getElementById('redBtn');
// redBtnElement.onclick=function () {
//    var divOneElement=  document.getElementById('divOne');
//    divOneElement.style.backgroundColor='red';
//    divOneElement.className="class-one";
// };
//
// var greenBtnElement = document.getElementById('greenBtn');
// greenBtnElement.onclick=function ()
//
//  {
//     var divOneElement=  document.getElementById('divOne');
//     divOneElement.style.backgroundColor='green';
//      divOneElement.className="class-two";
// };
//
// var blueBtnElement = document.getElementById('blueBtn');
// blueBtnElement.onclick=function ()
//
// {
//     var divOneElement=  document.getElementById('divOne');
//     divOneElement.style.backgroundColor='blue';
//     divOneElement.className="class-three";
// };
//
// var defaultBtnElement = document.getElementById('defaultBtn');
// defaultBtn.onclick=function () {
//     var divOneElement=  document.getElementById('divOne');
//     divOneElement.style.backgroundColor='white';
//
// };
//
//
//
//
//
//
// var btnElement=document.getElementById('btn');
// btnElement.onclick=function () {
//   var startingNumberValue=  document.getElementById('startingNumber').value();
//   var endingNumberValue=  document.getElementById('endingNumber').value();
//
//   var res=' ';
//
//   for (var x=startingNumberValue; x<=endingNumberValue; x++){
//       document.write(x+ ' ');
//   }
//
// };
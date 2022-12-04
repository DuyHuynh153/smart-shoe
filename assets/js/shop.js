
// let obj = {
//     id:1,
//     brand: "nike",
//     title: "Nike Air"
// };
// let obj2 = {
//     id:2,
//     brand: "puma",
//     title: "puma Air"
// };

// localStorage.setItem("p1", JSON.stringify(obj));

// var arr =[];
// var data = JSON.parse(localStorage.getItem("p1"));
// console.log("data");
// console.log(data);
// arr.push(data);
// arr.push(obj2);
// console.log(arr);

// localStorage.setItem("p1", JSON.stringify(arr));




// console.log(giohang);

var arr = [];
var giohang = JSON.parse(localStorage.getItem("giohang"));
var mangArr = giohang;

// function getLT(arr){
//     arr.push(mangArr);

//     return arr;
// }
// getLT(arr);
console.log(arr);
// var mangArr = [];

// function getlT(mangArr){
//     let json = JSON.parse(localStorage.getItem("giohang"));
//     let temp = json;
//     mangArr.push(temp);

// }
// getlT(mangArr);
// // mangArr.push(json);
// // // for (i =0 ; )
// // // mangArr.push(json[0]);
// // for (let i = 0 ; i< json.length ; i++){
// //     mangArr.push(json[i]);
// // }
// // console.log("json is:");
// // console.log(json);


            let obj = {
                id: json.id,
                brand: json.brand,
                 image:json.image,
                 title:json.title,
                price: json.price
            }
var html=   `<article onclick="infor()" class="sneaker">
    <div class="sneaker__sale">Sale</div>
    <img src=${mangArr[0].image} alt="" class="sneaker__img">
    <span class="sneaker__name">${mangArr[0].title}</span>
    <span class="sneaker__preci">${mangArr[0].price}<span>
</article>`;

document.getElementById("feartured__container").innerHTML = html;
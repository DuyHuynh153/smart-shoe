

var arr = [];
var giohang = JSON.parse(localStorage.getItem("giohang"));
var mangArr = giohang;


console.log(arr);



            let obj = {
                id: json.id,
                brand: json.brand,
                 image:json.image,
                 title:json.title,
                price: json.price
            }
var html=   `<article onclick="infor()" class="sneaker">
    <div class="sneaker__sale">Sale</div>
    <img src="./assets/img/${mangArr[0].image}" alt="" class="sneaker__img">
    <span class="sneaker__name">${mangArr[0].title}</span>
    <span class="sneaker__preci">${mangArr[0].price}<span>
</article>`;

document.getElementById("feartured__container").innerHTML = html;
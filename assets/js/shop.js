


var giohang = JSON.parse(localStorage.getItem("giohang"));


console.log("giohang")
console.log(giohang);




// --------------------------
var html='';
for (i=0;i<giohang.length;i++){
    html+=  `<article   class="sneaker shop-featured__item">
        <img src="./assets/img/${giohang[i].image}" alt="" class="sneaker__img">
        <span class="sneaker__name shop-description__name ">${giohang[i].title}</span>
        <span class="sneaker__preci shop-description__price">${giohang[i].price}<span>
        <input class="soLuongSp" type="number" name="" id="soLuong" placeholder="Số lượng">

    </article>`;

    
}

document.getElementById("feartured__container").innerHTML = html;
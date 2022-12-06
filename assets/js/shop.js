


var giohang = JSON.parse(localStorage.getItem("giohang"));


console.log("giohang")
console.log(giohang);




// --------------------------
var html='';
for (i=0;i<giohang.length;i++){
    html+=  `<article  class="sneaker">
        <div class="sneaker__sale">Sale</div>
        <img src="./assets/img/${giohang[i].image}" alt="" class="sneaker__img">
        <span class="sneaker__name">${giohang[i].title}</span>
        <span class="sneaker__preci">${giohang[i].price}<span>
    </article>`;

    
}

document.getElementById("feartured__container").innerHTML = html;
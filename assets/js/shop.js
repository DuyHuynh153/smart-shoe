


var giohang = JSON.parse(localStorage.getItem("giohang"));


console.log("giohang")
console.log(giohang);

function thanhToanXong() {
    alert("Thanh toan thanh cong");
    var gHang = JSON.parse(localStorage.getItem('giohang'));
    if(localStorage.getItem('donhang')!=null){	
        var dHang = JSON.parse(localStorage.getItem('giohang'));	
        dHang.push(gHang);
        localStorage.setItem('donhang',JSON.stringify(gHang));
      }	
      else{localStorage.setItem("donhang",JSON.stringify(gHang));}
      localStorage.removeItem("giohang");
    window.location="shop.html";
}

var temp=0;
function tongSoTien() {
    var gHang = JSON.parse(localStorage.getItem('giohang'));
    for (let index = 0; index < gHang.length; index++) {
      temp+=gHang[index].price*document.getElementById("soLuong"+index).value;
    }
    document.getElementById("thanhTien").innerHTML="Thành Tiền: "+temp;
    document.getElementById("tongTienThanhToan").innerHTML=temp;
  }

// --------------------------
var html='';
for (i=0;i<giohang.length;i++){
    html+=  `<article   class="sneaker shop-featured__item">
        <img src="./assets/img/${giohang[i].image}" alt="" class="sneaker__img">
        <span class="sneaker__name shop-description__name ">${giohang[i].title}</span>
        <span class="sneaker__preci shop-description__price">${giohang[i].price}<span>
        <input class="soLuongSp" type="number" name="" id="soLuong${i}" placeholder="Số lượng">

    </article>`;

    
}

document.getElementById("feartured__container").innerHTML = html;

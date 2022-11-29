const brand =["Adidas","Nike","Jordan",'Yeezy'];

function initBrandOption(arr){
    var select = document.getElementById("selectBrand");
    for(let i = 0;i<arr.length;i++){
      var opt = document.createElement('option');
      opt.value = arr[i];
      opt.innerHTML = arr[i];
      select.appendChild(opt);
    }
  }

  function addProduct(){
    {
        var title = document.getElementById("name").value;
        var price = document.getElementById("price").value;
        var brand = document.getElementById("selectBrand").value;
        var sanPham = JSON.parse(localStorage.getItem('product'));
        var product = {id:1,brand: brand,image: 1, title:title,price: price };
        console.log(product);
        console.log("Type user 1:");
        console.log(typeof(user1));
        sanPham.push(product);
        
        localStorage.setItem('product',JSON.stringify(sanPham));
        showUserList();
        
    }
  }
  function createProduct(){
    if(localStorage.getItem('product')===null){
      var product = [
        { id: 1,brand:"Adidas", image: "./assets/img/featured1.png", title: "Adidas",price:"3.000.000 VND" },
        { id: 2, brand:"Nike",image: "./assets/img/featured2.png", title: "Nike" ,price:"3.000.000 VND"},
        { id: 3,brand:"Jordan", image: "./assets/img/featured3.png", title: "Jordan" ,price:"5.000.000 VND"},
        {  id: 1,brand:"Nike", image: "./assets/img/featured1.png", title: "Nike"  ,price:"8.000.000 VND"},
        { id: 5,brand:"Yeezy", image: "./assets/img/featured2.png", title: "Yeezy" ,price:"3.000.000 VND"},
        {  id: 1,brand:"Adidas", image: "./assets/img/featured3.png", title: "Adidas"  ,price:"3.000.000 VND"},
        {  id: 1,brand:"Nike", image: "./assets/img/featured1.png", title: "Nike",price:"2.000.000 VND"  },
        { id: 1,brand:"Jordan", image: "./assets/img/featured1.png", title: "Jordan" ,price:"10.000.000 VND" },
        {  id: 1,brand:"Yeezy", image: "./assets/img/featured1.png", title: "Yeezy" ,price:"4.000.000 VND" },
      ];
      localStorage.setItem('product',JSON.stringify(product));
    }
  }
  function showUserList(){
    if(localStorage.getItem('product')===null){
      return false;
    }
    var product = JSON.parse(localStorage.getItem('product'));
    // STT| TÊN SP| HÃNG| GIÁ|HÌNH|NÚT XÓA
    var tr='<tr><th>STT</th><th>Tên sản phẩm</th><th>Hãng</th><th>Giá</th><th>Hình</th><th>Nút Xóa</th></tr><br />';
    for(var i=0; i<product.length;i++){
      tr+='<tr><td>'+i+'</td><td>'+product[i].title+'</td><td>'+product[i].brand+'</td><td>'+product[i].price+'</td><td><img src="'+product[i].image+'"</img></td><td><button class="delete" onClick="deleteuser(\''+product[i].id+'\')">&times;</button></td></tr>';
    }
    document.getElementById('productList').innerHTML=tr;
  } 
  window.onload =function(){
  initBrandOption(brand);
  createProduct();
  showUserList() ;}
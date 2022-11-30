const brand =["Adidas","Nike","Jordan",'Yeezy'];
const imageURL = "./assets/img/";
function initBrandOption(arr){
    var select = document.getElementById("selectBrand");
    for(let i = 0;i<arr.length;i++){
      var opt = document.createElement('option');
      opt.value = arr[i];
      opt.innerHTML = arr[i];
      select.appendChild(opt);
    }
  }
//thêm sản phẩm
  function addProduct(){
    {
      
        var title = document.getElementById("name").value;
        var price = document.getElementById("price").value;
        var brand = document.getElementById("selectBrand").value;
        
        var sanPham = JSON.parse(localStorage.getItem('product'));
        var product = {id:sanPham.length +1,brand: brand,image: img, title:title,price: price };
        sanPham.push(product);
        
        localStorage.setItem('product',JSON.stringify(sanPham));
        showProductList();
        
        
    }
  }
  //khởi tạo localstorage
  function createProduct(){
    if(localStorage.getItem('product')===null){
      var product = [
        { id: 1,brand:"Adidas", image: "new1.png", title: "Adidas Yeezy",price:"3.000.000" },
        { id: 2, brand:"Nike",image: "nike7.png", title: "Nike Jordan 1" ,price:"2.990.000"},
        { id: 3,brand:"Nike", image: "nike8.png", title: "Nike Jordan 2" ,price:"5.000.000 "},
        {  id: 4,brand:"Vans", image: "vans1.png", title: "Vans Old Skool"  ,price:"3.000.000 "},
        { id: 5,brand:"Nike", image: "nike10.png", title: "Nike Jordan 3" ,price:"3.000.000 "},
        {  id: 6,brand:"Adidas", image: "new2.png", title: "Adidas Yeezy 27"  ,price:"3.000.000 "},
        {  id: 7,brand:"Adidas", image: "new3.png", title: "Adidas Yeezy 50",price:"4.000.000 "  },
        { id: 8,brand:"Nike", image: "nike1.png", title: "Nike Pegasus " ,price:"1.000.000 " },
        {  id: 9,brand:"Nike", image: "nike11.png", title: "Nike React" ,price:"4.000.000 " },
        {  id: 10,brand:"Nike", image: "/nike6.png", title: "Nike Air Max" ,price:"4.000.000" },
        {  id: 11,brand:"Nike", image: "nike2.png", title: "Nike Roshe" ,price:"4.000.000 " },
        {  id: 12,brand:"Nike", image: "nike4.png", title: "Nike Pegasus 1" ,price:"4.000.000 " },
        {  id: 13,brand:"Vans", image: "vans2.png", title: "Vans Old Skool" ,price:"4.000.000 " },
        {  id: 14, brand:"Puma", image: "puma5.png", title: "Puma Suede" ,price:"4.000.000 " },
      ];
      localStorage.setItem('product',JSON.stringify(product));
    }
  }
  //xóa sản phẩm
  function deleteProduct(productID){
    var productArray = JSON.parse(localStorage.getItem('product'));
    for(var i=0;i<productArray.length;i++){
      if(productArray[i].id == productID){
        if(confirm('Bạn có muốn xóa sản phẩm này?')){
          productArray.splice(i, 1);
          localStorage.setItem('product',JSON.stringify(productArray))
        }
      }
    }
    showProductList();
  }
  //load danh sách san phẩm
  function showProductList(){
    if(localStorage.getItem('product')===null){
      return false;
    }
    var product = JSON.parse(localStorage.getItem('product'));
    // STT| TÊN SP| HÃNG| GIÁ|HÌNH|NÚT XÓA
    var tr='<tr><th>STT</th><th>Tên sản phẩm</th><th>Hãng</th><th>Giá</th><th>Hình</th><th>Nút Xóa</th></tr><br />';
    for(var i=0; i<product.length;i++){
      tr+='<tr><td>'+i+'</td><td>'+product[i].title+'</td><td>'+product[i].brand+'</td><td>'+product[i].price+' VND </td><td><img src="'+imageURL+product[i].image+'" height = 200px width = 100px></img></td><td><button class="delete" onClick="deleteProduct(\''+product[i].id+'\')">&times;</button></td></tr>';
    }
    document.getElementById('productList').innerHTML=tr;
  } 
  window.onload =function(){
  initBrandOption(brand);
  createProduct();
  showProductList() ;}
//khởi tạo localstorage
function createProduct() {
  if (localStorage.getItem('product') === null) {
    var product = [
      { id: 1, brand: "Adidas", image: "new1.png", title: "Adidas Yeezy", price: "3.000.000 VND" },
      { id: 2, brand: "Nike", image: "nike7.png", title: "Nike Jordan 1", price: "2.990.000 VND" },
      { id: 3, brand: "Nike", image: "nike8.png", title: "Nike Jordan 2", price: "5.000.000 VND" },
      { id: 4, brand: "Vans", image: "vans1.png", title: "Vans Old Skool", price: "3.000.000 VND" },
      { id: 5, brand: "Nike", image: "nike10.png", title: "Nike Jordan 3", price: "3.000.000 VND" },
      { id: 6, brand: "Adidas", image: "new2.png", title: "Adidas Yeezy 27", price: "3.000.000 VND" },
      { id: 7, brand: "Adidas", image: "new3.png", title: "Adidas Yeezy 50", price: "4.000.000 VND" },
      { id: 8, brand: "Nike", image: "nike1.png", title: "Nike Pegasus ", price: "1.000.000 VND" },
      { id: 9, brand: "Nike", image: "nike11.png", title: "Nike React", price: "4.000.000 VND" },
      { id: 10, brand: "Nike", image: "nike6.png", title: "Nike Air Max", price: "4.000.000 VND" },
      { id: 11, brand: "Nike", image: "nike2.png", title: "Nike Roshe", price: "4.000.000 VND" },
      { id: 12, brand: "Nike", image: "nike4.png", title: "Nike Pegasus 1", price: "4.000.000 VND" },
      { id: 13, brand: "Vans", image: "vans2.png", title: "Vans Old Skool", price: "4.000.000 VND" },
      { id: 14, brand: "Puma", image: "puma5.png", title: "Puma Suede", price: "4.000.000 VND" },
    ];
    localStorage.setItem('product', JSON.stringify(product));
  }
}
const brand = ["Adidas", "Nike", "Vans", 'Puma'];
const imageURL = "./assets/img/";
function initBrandOption(arr) {
  var select = document.getElementById("selectBrand");
  for (let i = 0; i < arr.length; i++) {
    var opt = document.createElement('option');
    opt.value = arr[i];
    opt.innerHTML = arr[i];
    select.appendChild(opt);
  }
}

//thêm sản phẩm
function addProduct() {
  {
    var img ='';
    if(document.getElementById('imgButton').files[0] == undefined){
      img = "noimage.png";
    }else
    {
      img = document.getElementById('imgButton').files[0].name;
    }

    var title = document.getElementById("name").value;
    var price = Number(document.getElementById("price").value);

    var brand = document.getElementById("selectBrand").value;

    var sanPham = JSON.parse(localStorage.getItem('product'));
    var product = { id: sanPham.length + 1, brand: brand, image: img, title: title, price: price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) };
    sanPham.push(product);

    localStorage.setItem('product', JSON.stringify(sanPham));
    showProductList();
    alert("Đã thêm sản phẩm");

  }
}

//xóa sản phẩm
function deleteProduct(productID) {
  var productArray = JSON.parse(localStorage.getItem('product'));
  for (var i = 0; i < productArray.length; i++) {
    if (productArray[i].id == productID) {
      console.log(i);
      if (confirm('Bạn có muốn xóa sản phẩm này?')) {
        productArray.splice(i, 1);
        localStorage.setItem('product', JSON.stringify(productArray))
        
      }
    }
  }
  showProductList();
}

//load danh sách san phẩm
function showProductList() {
  if (localStorage.getItem('product') === null) {
    return false;
  }
  var product = JSON.parse(localStorage.getItem('product'));
  // STT| TÊN SP| HÃNG| GIÁ|HÌNH|XÓA|SỬA
  var tr = '<tr><th>STT</th><th>Tên sản phẩm</th><th>Hãng</th><th>Giá</th><th>Hình</th><th>Xóa</th><th>Sửa</th></tr><br />';
  for (var i = 0; i < product.length; i++) {
    
    tr += '<tr><td>' + (i + 1) + '</td><td>' + product[i].title + '</td><td>' + product[i].brand + '</td><td>' + product[i].price + '</td><td><img src="' + imageURL + product[i].image + '" height = 200px width = 100px></img></td><td><button class="delete" onClick="deleteProduct(\'' + product[i].id + '\')"><i class="fa fa-trash"></i></button></td><td><button class="update" onClick="openForm(\'' + product[i].id + '\')"><i class="fa  fa-pencil"></i></button></td></tr>';
  }
  document.getElementById('productList').innerHTML = tr;
  
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function showUserList() {
  if (localStorage.getItem('taikhoan') === null) {
    return false;
  }
  var acc = JSON.parse(localStorage.getItem('taikhoan'));
  // STT| TÊN SP| HÃNG| GIÁ|HÌNH|NÚT XÓA
  var tr = '<tr><th>STT</th><th>Tên tài khoản</th><th>Mật khẩu</th><th>Nút Xóa</th></tr><br />';
  for (var i = 0; i < acc.length; i++) {
    tr += '<tr><td>' + (i + 1) + '</td><td>' + acc[i].username + '</td><td>' + acc[i].password + '</td><td><button class="delete" onClick="deleteUser(i)"><i class="fa fa-trash"></i></button></td></tr>';
  }
  document.getElementById('userList').innerHTML = tr;
}

function deleteUser(i) {
  var userArray = JSON.parse(localStorage.getItem('taikhoan'));
  for (var j = 0; j < userArray.length; j++) {
    if (j==i) {
      if (confirm('Bạn có muốn xóa tài khoản này?')) {
        userArray.splice(j, 1);
        localStorage.setItem('taikhoan', JSON.stringify(userArray))
      }
    }
  }
  showUserList();
}

//Sửa sản phẩm
function updateProduct(productID) {

  var newImage = '';
  var newName = document.getElementById('newName').value;
  var newPrice = Number(document.getElementById('newPrice').value.replace( /^\D+/g, ''));
  
  if(document.getElementById('newImg').files[0] == undefined){
    newImage = "noimage.png";
  }else{

     newImage = document.getElementById('newImg').files[0].name;
  }
    var newBrand = document.getElementById('newBrand').value;
  let newProduct ={
    id : productID,
    brand:newBrand,
    image:newImage,
    title: newName,
    price:newPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
  }
  var productArray = JSON.parse(localStorage.getItem('product'));
  for (var i = 0; i < productArray.length; i++) {
    if (productArray[i].id == productID) {
      productArray[i] = newProduct;
      localStorage.setItem('product',JSON.stringify(productArray));
    }
  }
  showProductList();
}
//Mở popup sửa sản phẩm
function openForm(productID) {
  document.getElementById("myForm").style.display = "block";
  var productArray = JSON.parse(localStorage.getItem('product'));
  for( var i = 0;i<productArray.length;i++){
    if(productArray[i].id == productID){
      document.getElementById('productID').value = productArray[i].id
      $('#newBrand').val(productArray[i].brand).change();
        document.getElementById('newName').value = productArray[i].title;
        document.getElementById('newPrice').value = productArray[i].price;
    }
  }
}
//đóng popup
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

initBrandOption(brand);
createProduct();
showProductList();
showUserList();

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

    if (toggle && nav ){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link'),
    navMenu = document.getElementById('nav-menu')

function linkAction (){
    navMenu.classList.remove('show')
}

navLink.forEach(n=>n.addEventListener('click', linkAction()))  // chỗ này có thể bị lỗi, clip phút thứ 16:15


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const section = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scroolActive())

function scroolActive(){
    const scrollY = window.pageYOffset

    section.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        // if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        //     // document.querySelector('nav__menu a[href=#' + sectionId + ' ] '.classList.add(active))

        //     document.querySelector('nav__menu a[href=#' + sectionId + ' ] ' + ' active')
        // }

        // else{
        //     document.querySelector('nav__menu a[href=#' + sectionId + ' ] '.classList.add(active))
            
        // }


    })
}

/*===== CHANGE COLOR HEADER =====*/ 
window.onscroll = ()=> {
    const nav = document.getElementById('header')
    if (this.scrollY >= 200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}

const imageURL = "./assets/img/"
const product = [
  { id: 1,brand:"Adidas", image: "adidas1.png", title: "Adidas Yeezy",price:"3000000 " },
  { id: 2, brand:"Nike",image: "nike7.png", title: "Nike Jordan 1" ,price:"2990.000 "},
  { id: 3,brand:"Nike", image: "nike8.png", title: "Nike Jordan 2" ,price:"1990000 "},
  {  id: 4,brand:"Vans", image: "vans1.png", title: "Vans Old Skool"  ,price:"3654000 "},
  { id: 5,brand:"Nike", image: "nike10.png", title: "Nike Jordan 3" ,price:"2545000 "},
  {  id: 6,brand:"Adidas", image: "adidas2.png", title: "Adidas Yeezy 27"  ,price:"3500000 "},
  {  id: 7,brand:"Adidas", image: "adidas3.png", title: "Adidas Yeezy 50",price:"4289000 "  },
  { id: 8,brand:"Nike", image: "nike1.png", title: "Nike Pegasus " ,price:"1090000 " },
  {  id: 9,brand:"Nike", image: "nike9.png", title: "Nike React" ,price:"4000000 " },
  {  id: 10,brand:"Nike", image: "nike6.png", title: "Nike Air Max" ,price:"4323000 " },
  {  id: 11,brand:"Nike", image: "nike2.png", title: "Nike Roshe" ,price:"7566000 " },
  {  id: 12,brand:"Nike", image: "nike4.png", title: "Nike Pegasus 1" ,price:"4000000 " },
  {  id: 13,brand:"Vans", image: "vans2.png", title: "Vans Old Skool" ,price:"2123000 " },
  {  id: 14,brand:"Puma", image: "puma1.png", title: "Puma Suede" ,price:"5334000 " },
  {  id: 14,brand:"Puma", image: "puma2.png", title: "Puma Suede" ,price:"5999000 " },
  {  id: 14,brand:"Puma", image: "puma3.png", title: "Puma Suede" ,price:"4232000 " },
  {  id: 14,brand:"Puma", image: "adidas4.png", title: "Puma Suede" ,price:"4000000 " },
  {  id: 14,brand:"Puma", image: "adidas5.png", title: "Puma Suede" ,price:"2200000 " },
  {  id: 14,brand:"Puma", image: "adidas6.png", title: "Puma Suede" ,price:"8300000 " },
];

const brand =["Adidas","Nike","Puma",'Vans'];
  
  
  
  let perPage = 4;  // mỗi trang chỉ được có 4 sản phẩm 
  let currentPage = 1;
  let start = 0;
  let end = perPage;
  let productArr = JSON.parse(localStorage.getItem('product')); /*mảng sản phẩm lấy từ localstorage bỏ vào */
  let productArrFiltered = productArr.slice();
  let totalPages = Math.ceil(productArr.length / perPage);
  const btnnext = document.querySelector(".btn-next");
  const btnprev = document.querySelector(".btn-prev");
  
  //lấy sản phẩm dựa trên số trang
  function getCurrentPage(page){
    start = (page - 1) * perPage;
    end = page * perPage;
  }
  //làm mới li số trang sau khi đổi thể loại hoặc sau khi tìm kiếm
  function renderPageNumbers(array){
    const list = document.getElementById('number-page')
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
   totalPages = Math.ceil(array.length / perPage);
   listPage(totalPages);
   initChangePage(array);
  }
  //tìm kiếm theo tên (chưa làm xong, tìm được theo tên nhưng bị lỗi)
  function searchName(name){
    productArrFiltered.splice(0,productArrFiltered.length);
    currentPage = 1;
    let result = name;
    if (result ==''){
      productArrFiltered = productArr.slice();
    }
    if(name !== ''){
      productArrFiltered = productArr.filter(item=>{
        return item.title.toLowerCase().indexOf(name.toLowerCase()) > -1;
      })
    }
    getCurrentPage(currentPage);
    renderPageNumbers(productArrFiltered);
    initProductPage(productArrFiltered,totalPages);
    initChangePage(productArrFiltered);
  }
  //chuyển hãng
  function brandChange(brand){

    currentPage = 1;
    productArrFiltered.splice(0,productArrFiltered.length);
    
      productArrFiltered = productArr.filter(item =>{
        return item.brand === brand;
  })
  
    getCurrentPage(currentPage);
    renderPageNumbers(productArrFiltered);
    initProductPage(productArrFiltered,totalPages);
    initChangePage(productArrFiltered);
  }
  //load sản phẩm 
  function listProduct(array) {
    html = '';
   
    const content = array.map((item, index) => {
      if (index >= start && index < end) {
        // html += `<article onclick="document.getElementById("modal${index}").styles.display="block""  class="sneaker">`;  // sự kiện onlick article hiển thị thông tin chi tiết
        var priceVND = Number(item.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
        html += `<article  onclick="infoProduct(${index})" class="sneaker">`;
        html+= `<div class="modal" id="modal${index}" style="display:none">
        <form class="modal__container">
            <div class="img-logo">
                <img src="./assets/img/${item.image}" alt="">
            </div>
            <div class="img-desc">
                <h3 class="img-title">${item.title}</h3>
                <p>Sản phẩm có nguồn gốc xuất xứ từ Châu Âu <br></p>
                <p>Có từ vật liệu cao cấp </p>
                <h2 style="font: weight 500px; ;" class="size">Size: <span style="font: size 20px;">38 đến
                        43</span> </h2>

            </div>

        </form>
    </div>`;
        html += '<div class="sneaker__sale">Sale</div>';
        html += '<img src="'+imageURL+item.image+'" alt="" class="sneaker__img">';
        html += '<span class="sneaker__name">'+item.title+'</span>';
        html += '<span class="sneaker__preci">'+priceVND+'</span>';
        html += `<a type="button" href="" onclick="checkGioHang(${index})" class="button-light"><br>Thêm vào giỏ hàng <i class="bx bx-right-arrow-alt button-icon"></i></a>`;
        html += '</article> ';
        return html;
    //     <article onclick="infor()" class="sneaker">
    //     <div class="sneaker__sale">Sale</div>
    //     <img src="featured1.png" alt="" class="sneaker__img">
    //     <span class="sneaker__name">Nike Jordan</span>
    //     <span class="sneaker__preci">3.000.000 </span>
    //     <a href="" class="button-light"><br>Thêm vào giỏ hàng <i class='bx bx-right-arrow-alt button-icon'></i></a>
    // </article>
      }
    });
    document.getElementById('featured__container').innerHTML = html;
  }

  // click vào sản phẩm để xem thông tin chi tiết
  // function infoProduct(array) {
  //   html = '';
   
  //   const content = array.map((item, index) => {
  //     if (index >= start && index < end) {
  //       html += '<article onclick="document.getElementById(\'modal\').style.display=\'block\'"  class="sneaker">';  // sự kiện onlick article hiển thị thông tin chi tiết
  //       // html += '<article   class="sneaker">';
  //       html += '<div class="sneaker__sale">Sale</div>';
  //       html += '<img src="'+imageURL+item.image+'" alt="" class="sneaker__img">';
  //       html += '<span class="sneaker__name">'+item.title+'</span>';
  //       html += '<span class="sneaker__preci">'+item.price+'</span>';
  //       html += `<a type="button" href="" onclick="checkGioHang(${index})" class="button-light"><br>Thêm vào giỏ hàng <i class="bx bx-right-arrow-alt button-icon"></i></a>`;
  //       html += '</article> ';
  //       return html;
  //   //     <article onclick="infor()" class="sneaker">
  //   //     <div class="sneaker__sale">Sale</div>
  //   //     <img src="featured1.png" alt="" class="sneaker__img">
  //   //     <span class="sneaker__name">Nike Jordan</span>
  //   //     <span class="sneaker__preci">3.000.000 </span>
  //   //     <a href="" class="button-light"><br>Thêm vào giỏ hàng <i class='bx bx-right-arrow-alt button-icon'></i></a>
  //   // </article>
  //     }
  //   });
  //   document.getElementById('featured__container').innerHTML = html;
  // }


  
  var json= JSON.parse(localStorage.getItem("product"));
  var a = json;
  var chuoi = [];
  function checkGioHang(index){
    // var indexArr =[];

  //   var anchors = document.getElementsByTagName("a");
  //   for(var i = 0; i < anchors.length; i++) {
  //     anchors[i].onclick = function() {
  //         if (anchors[i].id == "nav-shop-market")
  //         {

  //         }
  //     }
  // }

    // vòng for đã tìm đc index sản phẩm cần cho vào giỏ hàng

    if(localStorage.getItem('dangnhap')==null)
    {
      alert("Phai dang nhap moi duoc mua hang! ");
      return 0;
    }

    for (let i=0;i<a.length;i++){

      if (index == i ){
        if(localStorage.getItem('giohang')!=null){		
          var gHang = JSON.parse(localStorage.getItem('giohang'));
          console.log(gHang);
          let temp = a[i];
        alert("san pham " + a[index].title + " đã được thêm vào giỏ hàng");
        gHang.push(temp);
          localStorage.setItem('giohang',JSON.stringify(gHang));
          break;
        }	
        let temp = a[i];
        alert("san pham " + a[index].title + " đã được thêm vào giỏ hàng");
        chuoi.push(temp);
        // localStorage.setItem("giohang",JSON.stringify(chuoi));
        localStorage.setItem("giohang",JSON.stringify(chuoi));
        // alert("san pham " + index + " đã được thêm vào giỏ hàng");

         
      }

    }
   
   
  }
 
  
  // thông tin từng sản phẩm khi click vào
  
  function infoProduct (index){
    for (let i=0;i<product.length;i++){

      if (index == i ){
        let x = document.getElementById("modal"+i);
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
         
      }
      

    }

  }
  
  //khởi tạo nút số trang
  function listPage(totalPages) {
    let html = '';
    html += `<li class="current-page active"><a>${1}</a></li>`;
    for (let i = 2; i <= totalPages; i++) {
      html += `<li><a>${i}</a></li>`;
    }
    if (totalPages === 0) {
      html = ''
    }
    document.getElementById('number-page').innerHTML = html;
  }
  //nút tiến trang
  btnnext.addEventListener('click', () => {
    currentPage++;
    if (currentPage > totalPages) {
      currentPage = totalPages;
    }
    if(currentPage === totalPages){
      $('.btn-next').addClass('btn-active');
    }
    $('.btn-prev').removeClass('btn-active');
    $( '.pagination .pagination__content .number-page li' ).removeClass('active');
    $( `.pagination .pagination__content .number-page li:eq(${currentPage -1})` ).addClass('active');
    getCurrentPage(currentPage);
    listProduct(productArrFiltered);
  }
  )
  //nút lùi trang
  btnprev.addEventListener('click', () => {
    currentPage--;
    if (currentPage <= 1) {
      currentPage = 1;
    }
    if(currentPage === 1){
      $('.btn-prev').addClass('btn-active');
    }
    $('.btn-next').removeClass('btn-active');
    $( '.pagination .pagination__content .number-page li' ).removeClass('active');
    $( `.pagination .pagination__content .number-page li:eq(${currentPage -1})` ).addClass('active');
   
    getCurrentPage(currentPage);
    listProduct(productArrFiltered);
  }
  )
  // tự động tạo menu dropdown để chọn hãng
  function initBrandMenu(arr){
    let html = '';
    for(let i = 0;i<arr.length;i++){
      // <li onclick="brandChange('Adidas');document.getElementById('featured').scrollIntoView()"><a>test 1</a></li>
html += `<li class="brands" onclick ="brandChange('`+arr[i]+`');document.getElementById('featured').scrollIntoView()"><a>`+arr[i]+`</a></li>`;
    }
    document.getElementById("dropdown").innerHTML = html;
  
  }
  function initBrandOption(arr){
    var select = document.getElementById("selectBrand");
    for(let i = 0;i<arr.length;i++){
      var opt = document.createElement('option');
      opt.value = arr[i];
      opt.innerHTML = arr[i];
     
    }
  }
   //Thêm function đổi trang cho các nút số
  function initChangePage(array){
    const availablePages = document.querySelectorAll('.number-page li');
    for(let i = 0; i < availablePages.length;i++){
      availablePages[i].addEventListener('click', ()=>{
        let value = i + 1;
        currentPage = value;
        $( '.pagination .pagination__content .number-page li' ).removeClass('active');
        availablePages[i].classList.add('active');
        if(currentPage === 1){
          $('.btn-prev').addClass('btn-active');
          $('.btn-next').removeClass('btn-active');
        }
        if(currentPage === availablePages.length ){
          $('.btn-next').addClass('btn-active');
          $('.btn-prev').removeClass('btn-active');
        }
        if(currentPage > 1 && currentPage < availablePages.length){
          $('.btn-prev').removeClass('btn-active');
          $('.btn-next').removeClass('btn-active');
        }
        getCurrentPage(currentPage);
        listProduct(array);
        console.log('gay');
      })
    }
  }
  
  function initProductPage(arr,page){
    listProduct(arr);
    listPage(page);
  }

  initProductPage(productArrFiltered,totalPages);
  initBrandMenu(brand);
  initBrandOption(brand);
  initChangePage(productArrFiltered);
  
  

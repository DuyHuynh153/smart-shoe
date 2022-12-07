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

navLink.forEach(n=>n.addEventListener('click', linkAction))  // chỗ này có thể bị lỗi, clip phút thứ 16:15


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

const brand =["Adidas","Nike","Puma",'Vans'];
  
  
  
  let perPage = 4;
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
        // html += '<article onclick="document.getElementById(\'modal\').style.display=\'block\'"  class="sneaker">';  // sự kiện onlick article hiển thị thông tin chi tiết
        html += '<article   class="sneaker">';
        html += '<div class="sneaker__sale">Sale</div>';
        html += '<img src="'+imageURL+item.image+'" alt="" class="sneaker__img">';
        html += '<span class="sneaker__name">'+item.title+'</span>';
        html += '<span class="sneaker__preci">'+item.price+'</span>';
        html += `<a href="" onclick="checkGioHang(${index})" class="button-light"><br>Thêm vào giỏ hàng <i class="bx bx-right-arrow-alt button-icon"></i></a>`;
        html += '</article>';
        return html;
    //     <article onclick="infor()" class="sneaker">
    //     <div class="sneaker__sale">Sale</div>
    //     <img src="featured1.png" alt="" class="sneaker__img">
    //     <span class="sneaker__name">Nike Jordan</span>
    //     <span class="sneaker__preci">3.000.000 VND</span>
    //     <a href="" class="button-light"><br>Thêm vào giỏ hàng <i class='bx bx-right-arrow-alt button-icon'></i></a>
    // </article>
      }
    });
    document.getElementById('featured__container').innerHTML = html;
  }


  
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
    for (let i=0;i<a.length;i++){

      if (index == i ){
        let temp = a[i];
        alert("san pham " + a[index].title + " đã được thêm vào giỏ hàng");
        chuoi.push(temp);
        // localStorage.setItem("giohang",JSON.stringify(chuoi));
        
        // alert("san pham " + index + " đã được thêm vào giỏ hàng");

         
      }

    }
    // var checkShop = document.getElementById("nav-shop-market");
    // if (checkShop.onclick)
    // kiểm tra có nhấn vào giỏ hàng chưa
    // var clickShop = document.getElementById("nav-shop-market")
   
    localStorage.setItem("giohang",JSON.stringify(chuoi));
    // return chuoi;
   
  }
 
  // chuoiBackup.push( JSON.parse(localStorage.getItem("chuoi")));
  
  function addToCart(index){
    window.location.href = "shop.html";
    html ='';
    html += `<article onclick="infor()" class="sneaker">
    <div class="sneaker__sale">Sale</div>
    <img src=${productArrFiltered[index].image} alt="" class="sneaker__img">
    <span class="sneaker__name">Nike Jordan</span>
    <span class="sneaker__preci">3.000.000 VND</span>
    <a href="" class="button-light"><br>Thêm vào giỏ hàng <i class='bx bx-right-arrow-alt button-icon'></i></a>
</article>`;

document.getElementById('featured__container').innerHTML = html;


    
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
  
  

// const card_arr = [
//     'new1','new2','new3','new4','new5',
//     'featured1','featured2','featured3','featured4'
// ];

// for (i=0;i<card_arr.length;i++) {
//     let subs = card_arr[i].substring(0,3);
//     if (subs == 'new'){
//         console.log(subs);
//     } 
// }

const card_arr = [
    'new1','new2','new3','new4','new5',
    'featured1','featured2','featured3',
    'women1','women2','women3'
];

generateCard()
function generateCard (){

    let main = document.querySelector('.main')
    let navList = document.querySelector('nav_list')

    if (navList)
            // for (i =0 ; i< card_arr.length;i++){
            //     let mm = document.createElement('article')
        
            //     mm.innerHTML = 
            //     `
            //     <article class="sneaker shadow">
            //         <div class="sneaker__sale">Sale</div>
            //         <img src="./assets/img/${card_arr[i]}.png" alt="" class="sneaker__img ">
            //         <span class="sneaker__name">Nike Free</span>
            //         <span class="sneaker__preci">3.000.000 VND</span>
            //         <a href="" class="button-light"><br> Thêm vào giỏ hàng <i class='bx bx-right-arrow-alt button-icon'></i></a>
            //     </article>
        
            //     `;
            //     main.appendChild(mm);
    
            // }

}

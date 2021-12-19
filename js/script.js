/* products ----------------------------------------- */
var prod_cont = document.querySelector(".all_product .contents");
var prod_arr = [
    ["E8_2_300x300_black.png", "E8", "BEOPLAY E8 3RD GEN", "€350"],
    ["P6_300x300_black.png", "P6", "BEOPLAY P6", "€550"],
    ["M3_black_300x300_new.png", "M3", "BEOPLAY E8 M3", "€650"],
    ["", "", "", ""],
    ["H9i_natural_300x300_new.png", "H9i", "BEOPLAY H9i", "€500"],
    ["P2_natural_300x300.png", "P2", "BEOSOUND P2", "€250"],
    ["H4_300x300_violet.png", "H4", "BEOPLAY H4", "€400"],
    ["E8_CHARCOALGREY_300X300.png", "E8", "BEOPLAY E8 3RD GEN", "€250"],
    ["A9_300x300.png", "A9", "BEOPLAY A9", "€2,500"],
    ["Form2_300x300.png", "FORM 2i", "BEOPLAY FORM 2ND GEN", "€200"],
    ["", "", "", ""]
];
var insert_p = "";

for( v of prod_arr ){
    insert_p += `
    <div class="prod_info">
        <img src="./img/${v[0]}" alt="${v[1]}">
        <p>${v[1]}</p>
        <div class="prod_txt">
            <h4>${v[2]}</h4>
            <span>${v[3]}</span>
        </div>
    </div>
    `;
}

prod_cont.innerHTML = insert_p;

var prod_4th = document.querySelector(".all_product .contents .prod_info:nth-child(4)");
var prod_11th = document.querySelector(".all_product .contents .prod_info:nth-child(11)");

prod_4th.innerHTML = `
    <div class="add_img"><img src="./img/recommand_01.jpg" alt="스피커 이미지"></div>
    <div class="txt_wrap">
        <span>SOUND AND STYLE FOR EVERY HOME</span>
        <h3>Find the right connected speaker for you</h3>
        <p>Bang & Olufsen connected speakers give you an immersive listening experience throughout the home. Our diverse selection means there's a perfect speaker to match any space and taste - from bold living rooms to minimal kitchens. Find yours now.</p>
        <a href="#">Get Started</a>
    </div>
`;
prod_11th.innerHTML = `
    <img src="./img/gift_box_01.jpg" alt="헤드폰 이미지">
    <div class="dark_img">
        <span>HEADPHONE ACCESSORIES</span>
    </div>
`;

/* categories----------------------------------------- */
var ctgr_cont = document.querySelector(".categories .content_wrap");
var ctgr_arr = [
    ["Speakers", "Speakercomparenew.png", "View All"],
    ["Headphones", "Headphonecomparenew.png", "View All"],
    ["Earphones", "Earphonecomparenew.png", "View All"]
];
var insert_c = "";

for( v of ctgr_arr ){
    insert_c += `
    <div>
        <h3>${v[0]}</h3>
        <img src="./img/${v[1]}" alt="${v[0]}">
        <a href="#">${v[2]}</a>
    </div>
    `;
}

ctgr_cont.innerHTML = insert_c;


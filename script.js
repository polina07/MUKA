
let btn1=document.getElementById("weekly_frescriptions_offer")
btn1.onclick=()=>{
    console.log("worked")
}
let btn2=document.getElementById("bi_weekly_family_plan")
btn2.onclick=()=>{
    console.log("worked")
}
let btn3=document.getElementById("monthly_bulk_plan")
btn3.onclick=()=>{
    console.log("worked")
}

let selectElement = document.getElementById("subscription_type");

btn1.onclick= function() {
    selectElement.value= "standart";
};
btn2.onclick= function() {
    selectElement.value= "due";
};
btn3.onclick= function() {
    selectElement.value= "pro";
};
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".custom_arrow_right",
      prevEl: ".custom_arrow_left",
    },
  });

const reserveButton = document.querySelector(".reserve_button");
const modal = document.querySelector(".modal_bg");
const okBtn = document.querySelector(".ok_btn");

reserveButton.addEventListener("click", function(){
    modal.style.display = "flex";
});

okBtn.addEventListener("click", function(){
    modal.style.display = "none";
});

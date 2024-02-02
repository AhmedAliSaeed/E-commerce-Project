var mainImage= document.getElementById("main-img")
var Image1= document.getElementById("img1")
var Image2= document.getElementById("img2")
var Image3= document.getElementById("img3")
var Image4= document.getElementById("img4")

var Minus= document.getElementById("minus")
var Plus= document.getElementById("plus")
var Count= document.getElementById("count")
var Num= 0
var Goods= document.getElementById("n-goods")
var cartCount= document.getElementById("c-count")
var cartTotal= document.getElementById("c-total")
var cartButton= document.getElementById("c-btn")
var Button= document.getElementById("btn")
var Cart= document.getElementById("cart")

var Delet= document.getElementById("c-dele")
var cartContent= document.getElementById("c-con")

// 4
Delet.addEventListener("click", ()=>{
    cartContent.style.display= "none"
    Goods.style.display= "none"
            
})





// 3
Button.addEventListener("click", ()=>{
    var res= 125 * Count.innerHTML
    cartCount.innerHTML = Count.innerHTML
    cartTotal.innerHTML = "$"+res
    Cart.style.display= "block"
    cartContent.style.display= "block"
    Cart.style.marginTop= "20px"
    Goods.style.display= "block"
    Goods.innerHTML= Count.innerHTML
})

cartButton.addEventListener("click", ()=>{
    Cart.style.display= "none"
    Goods.style.display= "none"
    Count.innerHTML= 0
    Num= 0
})







// 2
Minus.addEventListener("click", ()=>{
    Num--;
    if(Num < 0){
        Num=0
        Count.innerHTML= Num
    }
    else{
        Count.innerHTML= Num
    }
})

Plus.addEventListener("click", ()=>{
    Num++;
    Count.innerHTML= Num
})







// 1
Image1.addEventListener('click',()=>{
    mainImage.src = Image1.src
})

Image2.addEventListener('click',()=>{
    mainImage.src = Image2.src
})

Image3.addEventListener('click',()=>{
    mainImage.src = Image3.src
})

Image4.addEventListener('click',()=>{
    mainImage.src = Image4.src
})



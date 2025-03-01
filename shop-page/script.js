
let cartCount = 0;


function addToCart() {
  
  
    
  
  
  const cartIcon = document.querySelector('.toggle p');
    if(cartCount<9){
      cartCount++;
    }
    if(cartCount>=9){
        /* kırmızı */
        
        cartIcon.style.backgroundColor="red";
        
        
    }
    cartIcon.textContent=cartCount;
}



const liste = document.getElementsByClassName("ekleButonu");
console.log(liste); 

const listem = Array.from(liste); 

listem.forEach((element) => {
  element.addEventListener("click",addToCart);
});

for(let i=0; i< listem.length;i++){
  listem[i].addEventListener("click",addToCart)
}
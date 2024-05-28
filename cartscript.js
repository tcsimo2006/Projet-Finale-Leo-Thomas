const logo =document.querySelector("img")
logo.addEventListener("click", function() {
  window.location.href = "index.html"
})

function CartLoad(){
  alert(Cart.length)
  Cart.forEach(e => {
      if (e.quantity !=0)
          {
            alert()
              const CarDiv = document.createElement("div");
                      CarDiv.setAttribute("class", "Cardiv")
                      CarDiv.innerHTML = `
                      <img src="${e.image}" class="CartImg" alt="...">
                      <h4 class="cart-h3">${e.nom} ${e.prix}$</h4>
                      <button class="CartButton" id="CartPlus" onclick ="PlusQuantity(${e.index})">+</button>
                      <h4 class="cart-h3" id>${e.quantity}</h4>
                      <button class="CartButton" id="CartMinus" onclick = "moinsQuantity(${e.index})">-</button>
                      `
            document.getElementById("cart").appendChild(CarDiv)
          }
  })
}
CartLoad()
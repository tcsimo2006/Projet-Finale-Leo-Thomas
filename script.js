

const { createClient } = supabase
const supabaseUrl = 'https://rydwpjxlzndwuizciztd.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5ZHdwanhsem5kd3VpemNpenRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MTc2MzAsImV4cCI6MjAzMjQ5MzYzMH0.4Dwu98uqKQwdw_TIYtPbYvT3i1P0jEcpy6wIocnKZfA"
const client = createClient(supabaseUrl, supabaseKey)

async function getCartData() {
let { data, error } = await client
  .from('Cart')
  .select('*')
console.log(data)
}

const { error } = await client
  .from('Cart')
  .insert([
    { Product_id: 2, Quantity: 10 },
  ])
  .select()


let BreadItems = [
    {
        index: 0,
        quantity: 0,
        nom: "Sourdough",
        image: src = "Resrouces/IMG/Sourdough.gif",
        prix: 25
    },
    {
        index: 1,
        quantity: 0,
        nom: 'Bagels',
        image: src = "Resrouces/IMG/Bagels.jpg",
        prix: 15.99
    },
    {
        index: 2,
        quantity: 0,
        nom: 'Baguette',
        image: src = "Resrouces/IMG/Bagueetes.jpeg",
        prix: 13.99
    },
    {
        index: 3,
        quantity: 0,
        nom: 'Challah',
        image: src = "Resrouces/IMG/Challah.jpg",
        prix: 32.99
    },
]
let CakeItems =[
  {
    index: 0,
    quantity: 0,
    nom: "Smith Island Cake",
    image: src = "Resrouces/IMG/smith.jpg",
    prix: 75
  },
  {
    index: 1,
    quantity: 0,
    nom: 'Funfetti Cake',
    image: src = "Resrouces/IMG/funfetti_cake_49993_16x9.jpg",
    prix: 125
  },
  {
    index: 2,
    quantity: 0,
    nom: 'Red Velvet Cake',
    image: src = "Resrouces/IMG/Red Velvet.jpeg",
    prix: 200
  },
  {
    index: 3,
    quantity: 0,
    nom: 'Flan',
    image: src = "Resrouces/IMG/Flan.jpg",
    prix: 45
  },
]
let SandItems =[
  {
    index: 0,
    quantity: 0,
    nom: "Ham And Cheese Sandwhich",
    image: src = "Resrouces/IMG/HC.jpg",
    prix: 12
  },
  {
    index: 1,
    quantity: 0,
    nom: 'Steak Panini',
    image: src = "Resrouces/IMG/SS.jpg",
    prix: 15
  },
  {
    index: 2,
    quantity: 0,
    nom: 'Caprese Panino',
    image: src = "Resrouces/IMG/CS.jpg",
    prix: 10
  },
  {
    index: 3,
    quantity: 0,
    nom: 'Croque Monsieur',
    image: src = "Resrouces/IMG/CM.jpg",
    prix: 9
  },
  {
    index: 4,
    quantity: 0,
    nom: 'Chicken Club',
    image: src = "Resrouces/IMG/ClubS.jpg",
    prix: 20
  },
]
let PastItems =[
  {
    index: 0,
    quantity: 0,
    nom: "Croissant",
    image: src = "Resrouces/IMG/Cross.jpg",
    prix: 4
  },
  {
    index: 1,
    quantity: 0,
    nom: 'New York Roll',
    image: src = "Resrouces/IMG/NYC.jpg",
    prix: 14
  },
  {
    index: 2,
    quantity: 0,
    nom: 'Sugar Cookie',
    image: src = "Resrouces/IMG/SC.jpg",
    prix: 1.99
  },
  {
    index: 3,
    quantity: 0,
    nom: 'Lemon Bars',
    image: src = "Resrouces/IMG/LB.jpg",
    prix: 2.99
  },
]
let items = [BreadItems, CakeItems, PastItems, SandItems]
var Cart = []	
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function openNav(name){
  document.getElementById(name).style.width = "100%";
  document.getElementById(name).style.zIndex = 2
}
function closeNav(name){
  document.getElementById(name).style.width = "0"
  document.getElementById(name).style.zIndex = 0
}
function AddCart(Group, ind)
{ 
  alert()
  let j=0;
  if (Cart.length ==0) {
    Cart.push(items[Group, ind])
    items[Group, ind].quantity ++
    const CarDiv = document.createElement("div");
    CarDiv.setAttribute("class", "Cardiv")
    CarDiv.innerHTML = `
    <img src="${items[Group, ind].image}" class="CartImg" alt="...">
    <h4 class="cart-h3">${items[Group, ind].nom} ${items[Group, ind].prix}$</h4>
    <button class="CartButton" id="CartPlus" onclick="PlusQuantity(${items[Group, ind].index})">+</button>
    <h4 class="cart-h3">${items[Group, ind].quantity}</h4>
    <button class="CartButton" id="CartMinus" onclick="moinsQuantity(${items[Group, ind].index})">-</button>
    `
    document.getElementById("cart").appendChild(CarDiv)
  }
  Cart.forEach(item => {
    if (item.index == index) {
        if(Cart.length > 0)
            {
                PlusQuantity(item.index)
                return
            }
        else {
          j++
          if (j == Cart.length) {
          Cart.push(items[Group, ind])
          items[Group, ind].quantity ++
          const CarDiv = document.createElement("div");
          CarDiv.setAttribute("class", "Cardiv")
          CarDiv.innerHTML = `
          <img src="${items[Group, ind].image}" class="CartImg" alt="...">
          <h4 class="cart-h3">${items[Group, ind].nom} ${items[Group, ind].prix}$</h4>
          <button class="CartButton" id="CartPlus" onclick="PlusQuantity(${items[Group, ind].index})">+</button>
          <h4 class="cart-h3">${items[Group, ind].quantity}</h4>
          <button class="CartButton" id="CartMinus" onclick="moinsQuantity(${items[Group, ind].index})">-</button>
          `
          document.getElementById("cart").appendChild(CarDiv)
          }
        }  
      }
  });
  items[Group,ind].quantity = 0;
}
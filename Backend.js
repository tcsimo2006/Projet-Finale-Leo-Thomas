let BreadItems = [
  {
      index: 0,
      quantity: 0,
      nom: "Sourdough",
      image:"Resrouces/IMG/Sourdough.gif",
      prix: 25
  },
  {
      index: 1,
      quantity: 0,
      nom: 'Bagels',
      image:"Resrouces/IMG/Bagels.jpg",
      prix: 15.99
  },
  {
      index: 2,
      quantity: 0,
      nom: 'Baguette',
      image:"Resrouces/IMG/Bagueetes.jpeg",
      prix: 13.99
  },
  {
      index: 3,
      quantity: 0,
      nom: 'Challah',
      image:"Resrouces/IMG/Challah.jpg",
      prix: 32.99
  },
]
let CakeItems =[
{
  index: 0,
  quantity: 0,
  nom: "Smith Island Cake",
  image: "Resrouces/IMG/smith.jpg",
  prix: 75
},
{
  index: 1,
  quantity: 0,
  nom: 'Funfetti Cake',
  image: "Resrouces/IMG/funfetti_cake_49993_16x9.jpg",
  prix: 125
},
{
  index: 2,
  quantity: 0,
  nom: 'Red Velvet Cake',
  image: "Resrouces/IMG/Red Velvet.jpeg",
  prix: 200
},
{
  index: 3,
  quantity: 0,
  nom: 'Flan',
  image: "Resrouces/IMG/Flan.jpg",
  prix: 45
},
]
let SandItems =[
{
  index: 0,
  quantity: 0,
  nom: "Ham And Cheese Sandwhich",
  image: "Resrouces/IMG/HC.jpg",
  prix: 12
},
{
  index: 1,
  quantity: 0,
  nom: 'Steak Panini',
  image: "Resrouces/IMG/SS.jpg",
  prix: 15
},
{
  index: 2,
  quantity: 0,
  nom: 'Caprese Panino',
  image: "Resrouces/IMG/CS.jpg",
  prix: 10
},
{
  index: 3,
  quantity: 0,
  nom: 'Croque Monsieur',
  image: "Resrouces/IMG/CM.jpg",
  prix: 9
},
{
  index: 4,
  quantity: 0,
  nom: 'Chicken Club',
  image: "Resrouces/IMG/ClubS.jpg",
  prix: 20
},
]
let PastItems =[
{
  index: 0,
  quantity: 0,
  nom: "Croissant",
  image: "Resrouces/IMG/Cross.jpg",
  prix: 4
},
{
  index: 1,
  quantity: 0,
  nom: 'New York Roll',
  image: "Resrouces/IMG/NYC.jpg",
  prix: 14
},
{
  index: 2,
  quantity: 0,
  nom: 'Sugar Cookie',
  image: "Resrouces/IMG/SC.jpg",
  prix: 1.99
},
{
  index: 3,
  quantity: 0,
  nom: 'Lemon Bars',
  image: "Resrouces/IMG/LB.jpg",
  prix: 2.99
},
]
let items = [BreadItems, CakeItems, PastItems, SandItems]
var Cart = []
const { createClient } = supabase
const supabaseUrl = 'https://rydwpjxlzndwuizciztd.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5ZHdwanhsem5kd3VpemNpenRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MTc2MzAsImV4cCI6MjAzMjQ5MzYzMH0.4Dwu98uqKQwdw_TIYtPbYvT3i1P0jEcpy6wIocnKZfA"
const client = createClient(supabaseUrl, supabaseKey)

// const response = await client 
// .from('Cart')
// .delete()
// .eq('Quantity', 0)


async function getCartData() {
let { data, error } = await client
  .from('Cart')
  .select('*')
console.log(data)
  
}
getCartData()

async function AddCart(group, ind){
  items[group][ind].quantity ++;

  // let { data: Cart, error } = await client
  //   .from('Cart')
  //   .select('*')
// iterate though data to see if its there 
  let { data, error } = await client
  .from('Cart')
  .insert([
    { Product_id: ind, Product_type: group, Quantity: items[group][ind].quantity},
  ])
  .select()
  
}

function LoadCart(){
  
}



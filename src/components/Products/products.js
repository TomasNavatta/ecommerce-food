import { doc, getDoc, getFirestore } from "firebase/firestore"
const productos = [
    {
        id:1,
        image:'../assets/hamburguesa.jpg',
        title:'Hamburguesa 1',
        info:'1 medallon de carne 120g, 1 feta de cheddar, tomate, lechuga, cebolla y BBQ',
        price:20000,
        stock: 100,
        amount: 0
        
    },
    {
        id:2,
        image:'../assets/hamburguesa-2.jpg',
        title:'Hamburguesa 2',
        info:'1 medallon de carne 180g, 1 feta de cheddar, tomate, lechuga, cebolla y bacon',
        price:15000,
        stock: 400,
        amount: 0
    },
    {
        id:3,
        image:'../assets/hamburguesa-3.jpg',
        title:'Hamburguesa 3',
        info:'1 medallon de carne, 1 feta de cheddar, salsa de cheddar, pepino, lechuga y bacon',
        price:18000,
        stock: 70,
        amount: 0
    },
    {
        id:4,
        image:'../assets/hamburguesa-4.jpg',
        title:'Hamburguesa 4',
        info:'1 medallon de carne, 1 feta de cheddar, ketchup, pepino, lechuga y tomate',
        price:13000,
        stock: 120,
        amount: 0
    },
    {
        id:5,
        image:'../assets/hamburguesa-5.jpg',
        title:'Hamburguesa 5',
        info:'1 medallon de carne, queso brie, salsa especial, lechuga, tomate y pepinos',
        price:11000,
        stock: 30,
        amount: 0
    },
    {
        id:6,
        image:'../assets/hamburguesa-6.jpg',
        title:'Hamburguesa 6',
        info:'1 medallon de carne 180g, queso azul, rucula, cebolla, pepinos y bacon',
        price:16000,
        stock: 90,
        amount: 0
    },
    {
        id:7,
        image:'../assets/hamburguesa-7.jpg',
        title:'Hamburguesa 7',
        info:'1 medallon de carne, 2 fetas de cheddar, rucula , lechuga, tomate cherry, cebolla y pepinos',
        price:12000,
        stock: 150,
        amount: 0
    },
    {
        id:8,
        image:'../assets/hamburguesa-8.jpg',
        title:'Hamburguesa 8',
        info:'1 medallon de carne 160g, 1 feta de cheddar, bacon y lechuga',
        price:20000,
        stock: 60,
        amount: 0
    },
    {
        id:9,
        image:'../assets/hamburguesa-9.jpg',
        title:'Cheese Burger',
        info:'1 medallon de carne, 2 fetas de cheddar, tomate, pepino y lechuga',
        price:10000,
        stock: 500,
        amount: 0
    }
]
export const getdata = () => {
    return new Promise((resolve)=> {
        setTimeout (() => {
            resolve(productos)
        },3000)
    })
}

export const getProductById = async (id) => {
    try {
        const db = getFirestore();
        const itemRef = doc(db, 'productos', id);
        const itemSnap = await getDoc(itemRef);
    
        if (itemSnap.exists()) {
          const itemData = itemSnap.data();
          return itemData;
        } else {
          console.log('Documento no encontrado');
          return null;
        }
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
      }
  
}

export default productos;
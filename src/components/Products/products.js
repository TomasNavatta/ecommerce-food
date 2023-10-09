
const productos = [
    {
        id:'1',
        image:'../assets/hamburguesa.jpg',
        title:'doble cuarto',
        info:'2 medallones de carne, 2 fetas de cheddar',
        stock: '100'
    },
    {
        id:'2',
        image:'../assets/hamburguesa-2.jpg',
        title:'simple',
        info:'1 medallon de carne, cheddar',
        stock: '400'
    },
    {
        id:'3',
        image:'../assets/hamburguesa-3.jpg',
        title:'doble cuarto',
        info:'2 medallones de carne, 2 fetas de cheddar',
        stock: '70'
    },
    {
        id:'4',
        image:'../assets/hamburguesa-4.jpg',
        title:'doble cuarto',
        info:'2 medallones de carne, 2 fetas de cheddar',
        stock: '120'
    },
    {
        id:'5',
        image:'../assets/hamburguesa-5.jpg',
        title:'doble cuarto',
        info:'2 medallones de carne, 2 fetas de cheddar',
        stock: '30'
    },
    {
        id:'6',
        image:'../assets/hamburguesa-6.jpg',
        title:'doble cuarto',
        info:'2 medallones de carne, 2 fetas de cheddar',
        stock: '90'
    },
    {
        id:'7',
        image:'../assets/hamburguesa-7.jpg',
        title:'doble cuarto',
        info:'2 medallones de carne, 2 fetas de cheddar',
        stock: '150'
    },
    {
        id:'8',
        image:'../assets/hamburguesa-8.jpg',
        title:'doble cuarto',
        info:'2 medallones de carne, 2 fetas de cheddar',
        stock: '60'
    },
    {
        id:'9',
        image:'../assets/hamburguesa-9.jpg',
        title:'Cheese Burger',
        info:'1 medallon de carne, 2 fetas de cheddar, tomate, pepino y lechuga',
        stock: '500'
    }
]

export const getProductById = (productosId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productosId))
        }, 500)
    })
}

export default productos;
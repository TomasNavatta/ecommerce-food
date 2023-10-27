import '../../components/stylesshets/home.css'

const ProductSection = () => {
    return(
        <main className="products">
            <div className="tabs container">
                <input type="radio" name="tabs" id="tab1" defaultChecked="checked" className="tabInput" value={1}/>
                <label htmlFor="tab1">Hamburguesas</label>
                <div className="tab">
                    <div className="swiper mySwiper-2" id="awiper1">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="product">
                                    <div className="product-img">
                                        <h4>Nuevo</h4>
                                        <img src='../assets/burguer-portada.png' />
                                    </div>
                                    <div className="product-txt">
                                        <h4>Producto</h4>
                                        <p>calidad premium</p>
                                        <span className="precio">$80.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="product">
                                    <div className="product-img">
                                        <h4>Nuevo</h4>
                                        <img src='../assets/burguer-portada.png' />
                                    </div>
                                    <div className="product-txt">
                                        <h4>Producto</h4>
                                        <p>calidad premium</p>
                                        <span className="precio">$80.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="product">
                                    <div className="product-img">
                                        <h4>Nuevo</h4>
                                        <img src='../assets/burguer-portada.png' />
                                    </div>
                                    <div className="product-txt">
                                        <h4>Producto</h4>
                                        <p>calidad premium</p>
                                        <span className="precio">$80.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </main>

    )
}

export default ProductSection;
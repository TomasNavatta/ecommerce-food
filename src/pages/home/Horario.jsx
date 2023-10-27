import '../../components/stylesshets/home.css'

const Horario = () => {
    return(
        <section className="horario">
            <div className='horario-info container'>
                <h2>Horario</h2>
            <div className="horario-txt">
                <div className="txt">
                  <h4>Direccion</h4>
                  <p>Lorem ipsum dolor sit amet </p>
                  <p>Lorem ipsum dolor sit amet </p>    
                </div>
                <div className="txt">
                    <h4>Horario</h4>
                    <p>Lunes a viernes : 9 am - 20 pm</p>
                    <p>Sabado y Domingo : 11 am - 19 pm</p>

                </div>
                <div className="txt">
                    <h4>telefono</h4>
                    <p>555555555</p>
                    <p>555555555</p>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Horario;
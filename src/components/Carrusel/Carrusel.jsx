const Carrusel = (props) => {
    return (
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require(`./imagen/${props.imagen1}.jpg`)} alt= {`(${props.nombre1})`} />
          </div>
          <div className="carousel-item">
            <img src={require(`./imagen/${props.imagen2}.jpg`)} alt= {`(${props.nombre2})`} />
          </div>
          <div class="carousel-item">
            <img src={require(`./imagen/${props.imagen3}.jpg`)} alt= {`(${props.nombre3})`} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )

}

export default Carrusel


const Promesas = () => {

    const miPromesa = (estado) => {
        return new Promise((resolve, reject) => {
                estado ? resolve('Promesa cumplida') : reject('Promesa rechazada');
        })

    }
 

  return (
    <div>
      
    </div>
  )
}

export default Promesas

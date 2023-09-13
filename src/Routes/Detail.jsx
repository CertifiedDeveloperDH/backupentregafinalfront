import {useParams} from 'react-router-dom'
import styles from "../Components/DetailCard.module.css"
const Detail = () => {
  let params = useParams()
  return (
    <>
    <h1>Detail Dentist {params.id} </h1>
      <section className="card col-sm-12 col-lg-6 container">
        <div
          className={`card-body row`}
        >
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="./public/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nombre: {params.nombre}</li>
              <li className="list-group-item">Email: {params.email}</li>
              <li className="list-group-item">Teléfono: {params.phone}</li>
              <li className="list-group-item">Sitio web: {params.website}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Detail
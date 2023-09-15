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
              src="./images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nombre: {datos && datos.name}</li>
              <li className="list-group-item">Email: {datos && datos.email}</li>
              <li className="list-group-item">Teléfono: {datos && datos.phone}</li>
              <li className="list-group-item">Sitio web: {datos && datos.website}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Detail
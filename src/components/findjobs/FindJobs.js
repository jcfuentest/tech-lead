import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Detail from "../detalle/Detail";
import "../findjobs/findjobs.css";

const FindJobs = ({ history }) => {
  const [job, setJob] = useState("");
  const [date, setData] = useState({});
  const [isError, setIserror] = useState(false)

  const fetchApi = async () => {
    const url = `https://staging-api.transvip.cl/get_booking_info?access_token=f6f3dc14b2409152ebfe7a9db250b947&job_id=${job}`;
    const resp = await fetch(url);

    const { data } = await resp.json();
    console.log(data);

    const jobs = {
      reserva: job,
      pasajero: data.customer_first_name,
      horaRetiro: data.job_delivery_datetime,
      fecha: data.job_time,
      desde: data.job_pickup_address,
      hacia: data.job_address,
    };
    setData(jobs);

  };
  useEffect(() => {
    fetchApi();
  }, [job]);

  const handleInputChange = (e) => {
    setJob(e.target.value);

  };

  const handleSubmit = (e) => {
    console.log("date", date);
    e.preventDefault();
    if (!date) {
      setIserror(true)
      setJob("");
      return
    }
    setIserror(false)
    setJob("");
  };

  return (
    <div className="findjob">
      {
        isError == true ? <div className="inputerror">el numero de la reserva es invalido</div>
          :
          <div className="inputerror"></div>
      }

      <p className="numreserva">Numero de reserva</p>
      <img
        className="img2"
        src="reloj.png"
        alt="reloj.png"
        width="25"
        height="25"
      ></img>
      <img
        className="img3"
        src="aspas.png"
        alt="reloj.png"
        width="10"
        height="10"
      ></img>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="jobid"
          className="form-control"
          placeholder="Ej:2356732"
          autoComplete="off"
          value={job}
          onChange={handleInputChange}
        ></input>

        {
          date.desde != null
            ? <Link
              to={{
                pathname: "/detail",
                state: date,
                job: job,
              }}
            >
              <button className="btn-find">Buscar</button>
            </Link>
            : <Link to="/notfound" >
              <button className="btn-find">Buscar</button>
            </Link>

        }
      </form>

    </div>
  );
};

export default FindJobs;

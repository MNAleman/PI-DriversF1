import React from 'react'

const details = () => {
  return (
    <div>details</div>
  )
}

export default details


// import React from "react";
// import { useEffect } from "react";
// import { UseSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import {getById} from "../../Redux/Actions/actions";

// const Details = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const driverId = UseSelector((state) => state.driverId);

//   useEffect(() => {
//     dispatch(getById(id));
//   }, [dispatch, id]);

//   if (!driverId|| driverId.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{driverId.name} {driverId.lastName}</h1>
//       <p>Nacinalidad: {driverId.nationality}</p>
//       <img src={driverId.image} alt={`Imagen de ${driverId.name} ${driverId.lastName}`} />
//       <p>Descripción: {driverId.description}</p>
//       <p>Fecha de Nacimiento: {driverId.birthDate}</p>
//       <p>Escuderías: {driverId.teams.join(', ')}</p>
//     </div>
//   );
// };

// export default Details;
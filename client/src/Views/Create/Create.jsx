import React, { useState } from 'react'
import { postDriver } from '../../Redux/Actions/actions';
import { useDispatch } from 'react-redux';

const Create = () => {

  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    lastName: "",
    description: "",
    image: "",
    nationality: "",
    birthdate: "",
    teams: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    description: "",
    image: "",
    nationality: "",
    birthdate: "",
    teams: "",
  });

  const teams = ["Alfa Romeo", "Maserati", "Mercedes", "Ferrari"]

  const validate = (state, name) => {
    const nameRegex = /^[\p{L}\s]+$/u;

    if (name === "name") {
      if (state.name === "") {
        setErrors({ ...errors, name: " El nombre es requerido" });
      } else if (state.name.length >= 20) {
        setErrors({ ...errors, name: " El nombre es demasiado extenso" });
      } else if (!nameRegex.test(state.name)) {
        setErrors({ ...errors, name: " Solo se permiten letras y espacios en el nombre" });
      } else {
        setErrors({ ...errors, name: "" });
      }
    }


    if (name === "lastName") {
      if (state.lastName === "") {
        setErrors({ ...errors, lastName: " El apellido es requerido" });
      } else if (state.lastName.length >= 20) {
        setErrors({ ...errors, lastName: " El apellido es demasiado extenso" });
      } else if (!nameRegex.test(state.lastName)) {
        setErrors({ ...errors, lastName: " Solo se permiten letras y espacios en el apellido" });
      } else {
        setErrors({ ...errors, lastName: "" });
      }
    }

    const imageRegex = /\.(jpeg|jpg|gif|png)$/i;

    if (name === "image") {
      if (state.image === "") {
        setErrors({ ...errors, image: " La URL de la imagen es requerida" });
      } else if (!imageRegex.test(state.image)) {
        setErrors({ ...errors, image: " Por favor, introduce una URL de imagen válida" });
      } else {
        setErrors({ ...errors, image: "" });
      }
    }


    const nationalityRegex = /^[\p{L}\s]{1,20}$/u;

    if (name === "nationality") {
      if (state.nationality === "") {
        setErrors({ ...errors, nationality: " La nacionalidad es requerida" });
      } else if (!nationalityRegex.test(state.nationality)) {
        setErrors({ ...errors, nationality: " Por favor, introduce una nacionalidad válida" });
      } else {
        setErrors({ ...errors, nationality: "" });
      }
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (name === "birthdate") {
      if (state.birthdate === "") {
        setErrors({ ...errors, birthdate: " La fecha de nacimiento es requerida" });
      } else if (!dateRegex.test(state.birthdate)) {
        setErrors({ ...errors, birthdate: " Por favor, introduce la fecha de nacimiento en el formato YYYY-MM-DD" });
      } else {
        setErrors({ ...errors, birthdate: "" });
      }
    }

    const descriptionRegex = /^[\p{L}0-9\s.,!?&'"()\-]{1,350}$/u;

    if (name === "description") {
      if (state.description === "") {
        setErrors({ ...errors, description: "La descripción es requerida" });
      } else if (!descriptionRegex.test(state.description)) {
        setErrors({ ...errors, description: "La descripción debe contener hasta 350 caracteres válidos" });
      } else {
        setErrors({ ...errors, description: "" });
      }
    }


  };

  const handleChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    console.log(event.target.name)

    if (event.target.name === "teams") {
      if (state.teams.includes(event.target.value)) return
      setState({
        ...state,
        [event.target.name]: [...state[event.target.name], event.target.value]
      })
      return
    }

    setState({
      ...state,
      [event.target.name]: event.target.value
    })

    validate({ ...state, [event.target.name]: event.target.value }, event.target.name)

  }

  const disabledFuntion = () => {
    return (
      !state.name ||
      !state.lastName ||
      !state.description ||
      !state.image ||
      !state.nationality ||
      !state.birthdate ||
      state.teams.length === 0
    )
  }

  const remove = (event) => {
    // const value = document.getElementById(event.target.name).value
    setState({
      ...state,
      [event.target.name]: [...state[event.target.name].filter(x => x !== event.target.id)]
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postDriver(state));

  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre: </label>
          <input onChange={handleChange} type="text" name="name" id="name" placeholder="Name" />
          <span>{errors.name}</span>
        </div>

        <div>
          <label>Apellido: </label>
          <input onChange={handleChange} type="text" name="lastName" id="lastName" placeholder="Last Name" />
          <span>{errors.lastName}</span>
        </div>

        <div>
          <label>URL de la Imagen: </label>
          <input onChange={handleChange} type="text" name="image" id="image" placeholder="Image URL" />
          <span>{errors.image}</span>
        </div>

        <div>
          <label>Nacionalidad: </label>
          <input onChange={handleChange} type="text" name="nationality" id="nationality" placeholder="Nationality" />
          <span>{errors.nationality}</span>

        </div>

        <div>
          <label>Fecha de Nacimiento: </label>
          <input onChange={handleChange} type="text" name="birthdate" id="birthdate" placeholder="Birthdate" />
          <span>{errors.birthdate}</span>

        </div>

        <div>
          <label>Descripción: </label>
          <textarea onChange={handleChange} name="description" id="description" placeholder="Description" rows="3" cols="30" />
          <span>{errors.description}</span>
        </div>

        <div>
          <label>Escuderias: </label>
          <select onChange={handleChange} name="teams" id="teams">
            {teams.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {state.teams.map((team) => (
            <div key={team}>
              <span id="teams">{team}</span>
              <button className="remove-btn" type="button" id={team} name="teams" onClick={remove}>
                x
              </button>
            </div>
          ))}
        </div>
        
        <div>
          <input disabled={disabledFuntion()} type="submit" />
        </div>
      </form>
    </div>
  );

}


export default Create
import { useState } from "react";

const InputTodo = () => {
  const carBrands = ["Mercedes", "BMW", "Maserati", "Infinity", "Audi"];
  const carBrandOptions = carBrands.map((carBrand, key) => (
    <option value={carBrand} key={key}>
      {carBrand}
    </option>
  ));

  const [state, setState] = useState({
    fname: "",
    lname: "",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Controlled Form</h1>
      <form>
        <label>
          First Name:{" "}
          <input
            name="fname"
            type="text"
            value={state.fname}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            name="lname"
            type="text"
            value={state.lname}
            onChange={handleChange}
          />
        </label>
        <label>
        Car brand:
        <select
          name="carBrand"
          value={state.carBrand}
          onChange={handleChange}
        >
          <option value={""} disabled>
            --Pick a car brand--
          </option>
          {carBrandOptions}
        </select>
      </label>
      </form>
      <h5>
        Name:{state.fname} {state.lname}
      </h5>
    </>
  );
};
export default InputTodo;

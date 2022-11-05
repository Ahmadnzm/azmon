import React, { useState } from "react";
import Login from "./components/Login";
import "./App.css";
import MapGl from "./components/Map";
import axios from "axios";

const App = () => {
  const [cars, setCars] = useState([]);
  const [login, setLogin] = useState(false);
  const [filteredCars, setFilteredCars] = useState([]);
  const [queryCar, setQueryCar] = useState({ text: "" });

  const enterUser = async (values) => {
    try {
      const { status, data } = await axios.post(
        "https://exam.pishgamanasia.com/webapi/Account/Login",
        values,
        );
        if (status === 200 && data.status ===1) {
          // console.log(data)
        setLogin(true)
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const searchCar =async (event) => {
    const allCarSearch = await axios.get("https://exam.pishgamanasia.com/webapi/Request/GetVehicleUsers?SearchTerm=need_more_coffee&UserToken=996701"
    )
    console.log(allCarSearch);
    // setQueryCar({ ...queryCar, text: event.target.value });
    // const allCar = cars.filter((car) => {
    //   return car.carName.includes(event.target.value);
    // });

    // setFilteredCars(allCar)
  };

  return (
    <div className="App">
      {login ? (
        <MapGl searchCar = {searchCar}/>
      ) : (
        <Login login={login} setLogin={setLogin} enterUser={enterUser} />
      )}
    </div>
  );
};

export default App;

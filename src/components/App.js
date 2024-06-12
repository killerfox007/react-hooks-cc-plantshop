import React, { useState, useEffect }  from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";


function App() {
  const [plants, SetPlants] = useState([])
  const [searching, setSearching] = useState("")

  function handleAddPlant(newPlant){
    SetPlants([...plants, newPlant])
  }

 

useEffect(() =>{
  async function getPlants(){
    const resp = await fetch("http://localhost:6001/plants")
    const data = await resp.json()
    SetPlants(data)
  }
  getPlants()
  
}, [])



   const viewedPlants = plants.filter((plant) => plant.name.toLowerCase().includes(searching.toLowerCase()))
   



  return (
    <div className="app">
      <Header />
      <PlantPage plants={viewedPlants} handleAddPlant={handleAddPlant} searching={searching} setSearching={setSearching} />
    </div>
  );
}

export default App;

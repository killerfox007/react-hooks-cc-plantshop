import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants,handleAddPlant, setSearching, searching}) {

  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant}/>
      <Search searching={searching} setSearching={setSearching} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;

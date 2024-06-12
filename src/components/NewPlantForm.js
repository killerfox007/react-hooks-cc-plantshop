import React, {useState} from "react";

function NewPlantForm({handleAddPlant}) {

const initalPlantData = {
  name: "",
  image: "",
  price: "",
}
const [newPlant, setNewPlant] = useState(initalPlantData)

function handleChange(event) {
  const newPlantData = {
    ...newPlant, 
    [event.target.name]: event.target.value
  }
  setNewPlant(newPlantData);
}

async function handleSubmit(event){
  event.preventDefault()
  const resp = await fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON"  
    },
    body: JSON.stringify(newPlant)
  })
   
  const data = await resp.json()
  handleAddPlant(data)
  setNewPlant(initalPlantData)
}
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={ handleSubmit }>
        <input type="text" name="name" placeholder="Plant name" value={ newPlant.name } onChange={ handleChange }/>
        <input type="text" name="image" placeholder="Image URL" value={ newPlant.image } onChange={ handleChange }/>
        <input type="number" name="price" step="0.01" placeholder="Price"value={ newPlant.price } onChange={ handleChange } />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

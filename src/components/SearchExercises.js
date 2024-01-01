import "./styling/SearchExercises.css";
import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";



function SearchExercises() {
  const [search, setSearch] = useState("");
  const[exercises, setExercises] = useState([])
  const[bodyParts,setBodyParts] =useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };
    
    fetchExercisesData();
  }, []);
  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );
  
      // Filter exercises based on search criteria
      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search)
      );
  
      // Update state with the searched exercises
      setExercises(searchedExercises);
      console.log(searchedExercises);
  
      // Clear the search input after performing the search
      setSearch('');
    }
  };
  
  
  return (
    <div className="search-container">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        type="text"
        placeholder="Search exercises..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchExercises;

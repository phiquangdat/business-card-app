import BusinessCard from "./BusinessCard";
import "./App.css";
import { useState } from "react";
import { data } from "./data";
function App() {
  const [isDetailed, setIsDetailed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  function handleSearch(event) {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = data.filter(
      (card) =>
        card.name.toLowerCase().includes(query) ||
        card.education.toLowerCase().includes(query) ||
        card.jobTitle.toLowerCase().includes(query) ||
        card.company.toLowerCase().includes(query) ||
        card.email.toLowerCase().includes(query)
    );

    setFilteredData(filtered);
  }

  return (
    <>
      <button onClick={() => setIsDetailed(!isDetailed)}>Show email</button>
      <br></br>
      <input
        type="text"
        id="email-search"
        name="email"
        placeholder="Value to search"
        value={searchQuery}
        onChange={handleSearch}
      ></input>
      <br></br>
      {filteredData.map((card) => {
        return (
          <BusinessCard
            className="businessCard"
            name={card.name}
            education={card.education}
            jobTitle={card.jobTitle}
            company={card.company}
            email={isDetailed ? card.email : null}
            key={card.name + card.phone}
          ></BusinessCard>
        );
      })}
    </>
  );
}

export default App;

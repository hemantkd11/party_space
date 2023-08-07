import React, { useState } from "react";

const RentApp = () => {
  const [dateTimeFrom, setDateTimeFrom] = useState("");
  const [dateTimeTo, setDateTimeTo] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [minRent, setMinRent] = useState("");
  const [maxRent, setMaxRent] = useState("");
  const [furnished, setFurnished] = useState(false);
  // const [petFriendly, setPetFriendly] = useState(false);
  // const [parking, setParking] = useState(false);
  // const [airConditioning, setAirConditioning] = useState(false);
  // const [laundryFacilities, setLaundryFacilities] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search or filtering based on the form inputs
    // You can use these states to fetch data from a server or perform filtering locally
    // For brevity, this example doesn't include the actual search or filtering logic.
  };

  return (
    <div className="rent-input">
      <form onSubmit={handleSubmit}>
        {/* Date and Time */}
        <label>
          From:
          <input
            type="datetime-local"
            value={dateTimeFrom}
            onChange={(e) => setDateTimeFrom(e.target.value)}
          />
        </label>
        <label>
          To:
          <input
            type="time"
            value={dateTimeTo}
            onChange={(e) => setDateTimeTo(e.target.value)}
          />
        </label>

        {/* Search Location */}
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label>
          Neighborhood/Area:
          <input
            type="text"
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
          />
        </label>

        {/* Additional Filters */}
        <label>
          Property Type:
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="">Any</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Condo">Condo</option>
          </select>
        </label>
        <label>
          Number of Bedrooms:
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          >
            <option value="">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5+</option>
          </select>
        </label>
        <label>
          Rent Range:
          <input
            type="number"
            value={minRent}
            onChange={(e) => setMinRent(e.target.value)}
            placeholder="Min"
          />
          <input
            type="number"
            value={maxRent}
            onChange={(e) => setMaxRent(e.target.value)}
            placeholder="Max"
          />
        </label>

        {/* Amenities */}
        <p>Amenities:</p>
        <label>
          <input
            type="checkbox"
            checked={furnished}
            onChange={() => setFurnished(!furnished)}
          />
          Furnished
        </label>
        {/* Add more amenity checkboxes as needed */}

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default RentApp;

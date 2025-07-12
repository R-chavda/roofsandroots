import { useState, useEffect, useRef } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { getAllProperties } from "../utils/api";
import "./SearchBar.css";
const SearchBar = ({ filter, setFilter }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchProperties = async () => {
      if (!filter.trim()) {
        setSuggestions([]);
        return;
      }

      try {
        const properties = await getAllProperties();
        const filteredProperties = properties.filter(
          (property) =>
            property.title.toLowerCase().includes(filter.toLowerCase()) ||
            property.city.toLowerCase().includes(filter.toLowerCase()) ||
            property.country.toLowerCase().includes(filter.toLowerCase())
        );

        const propertySuggestions = filteredProperties.map((property) => ({
          title: property.title,
          id: property.id,
        }));
        setSuggestions(propertySuggestions);
        setShowSuggestions(true);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setSuggestions([]);
      }
    };

    const debounce = setTimeout(fetchProperties, 200);
    return () => clearTimeout(debounce);
  }, [filter]);

  const handleSelect = (selectedProperty) => {
    setFilter(selectedProperty.title);
    setShowSuggestions(false);
    navigate(`/properties/${selectedProperty.id}`);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        setActiveIndex((prev) => (prev + 1) % suggestions.length);
        break;
      case "ArrowUp":
        setActiveIndex(
          (prev) => (prev - 1 + suggestions.length) % suggestions.length
        );
        break;
      case "Enter":
        if (activeIndex >= 0 && activeIndex < suggestions.length) {
          handleSelect(suggestions[activeIndex]);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="flexCenter-search search-bar" style={{ position: "relative" }}>
      <div className="search-bar-top">
        <HiLocationMarker color="var(--blue)" size={25} />
        <input
          ref={inputRef}
          placeholder="Search by title or city"
          type="text"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setActiveIndex(-1);
          }}
          onFocus={() => filter && setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <button className="button">Search</button>

      {showSuggestions && (
        <div className="suggestion-box">
          {suggestions.length > 0 ? (
            suggestions.map((s, idx) => (
              <div
                key={idx}
                className={`suggestion-item ${
                  idx === activeIndex ? "active" : ""
                }`}
                onClick={() => handleSelect(s)}
                onMouseDown={(e) => e.preventDefault()}
              >
                {s.title}
              </div>
            ))
          ) : (
            <div className="no-results-content">
              <img
                loading="lazy"
                src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                alt="No results"
              />
              <h2>Oops! No properties found here</h2>
              <p>Try searching in a nearby area or adjust your filters.</p>
              <button
                onClick={() => setFilter("")}
                className="try-again-button"
              >
                Try Another Search
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

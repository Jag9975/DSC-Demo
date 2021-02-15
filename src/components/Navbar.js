import React, { useState } from "react";
import "../App.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import SearchIcon from "@material-ui/icons/Search";
import Card from "./Card.js";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [data, setdata] = useState("");
  const [results, setresults] = useState([]);

  async function fetchdata() {
    try {
      fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${data}&apiKey=5d3e34bc4dd4492485f19a63dff768fd`
      )
        .then((res) => res.json())
        .then((res) => {
          //return error if code: 402
          setresults(res["results"]);
        });
    } catch (e) {}
  }

  return (
    <div>
      <div className="Navbar">
        <div className="leftSide">
          <div className="links" id={showLinks ? "hidden" : ""}>
            <a href="/home" className="webTitle">
              Easy Recipes
            </a>
            <a href="/home">Home</a>
            <a href="/view">View</a>
            <a href="/post">Post</a>
            <a href="/forum">Forum</a>
          </div>
          <button onClick={() => setShowLinks(!showLinks)}>
            <ReorderIcon />
          </button>
        </div>
        <div className="rightSide">
          <input
            onChange={(event) => setdata(event.target.value)}
            type="text"
          />
          <button className="searchBar" onClick={(e) => fetchdata(e)}>
            <SearchIcon />
          </button>
        </div>
      </div>
      <div id="datafield">
        {results.map((ele) => (
          <Card title={ele.title} image={ele.image} key={ele.id} />
        ))}
      </div>
    </div>
  );
}

export default Navbar;

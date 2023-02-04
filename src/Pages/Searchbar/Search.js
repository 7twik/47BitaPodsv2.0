import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
const Search = () => {
  return (
    <div className="filser">
      <div className="searchcon">
        <div className="searchInput">
          <input
            type="text"
            className="inputtab"
            placeholder="Search here...."
          />
        </div>
        <div className="searchIcon">
          <FaSearch />
        </div>
      </div>
      <div className="filtercon">
        <div className="buttondiv">
          <Dropdown as={ButtonGroup} className="filbut">
            <Button variant="danger">Location</Button>

            <Dropdown.Toggle
              split
              variant="danger"
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown as={ButtonGroup} className="filbut">
            <Button variant="danger">Urban/Rural</Button>

            <Dropdown.Toggle
              split
              variant="danger"
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Urban</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Rural</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown as={ButtonGroup} className="filbut">
            <Button variant="danger">Room Types</Button>

            <Dropdown.Toggle
              split
              variant="danger"
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Meeting Rooms</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Conference</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Cabins</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown as={ButtonGroup} className="filbut">
            <Button variant="danger">Pricing</Button>

            <Dropdown.Toggle
              split
              variant="danger"
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Within Rs10k</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Within Rs5k</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Within Rs4k</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Search;

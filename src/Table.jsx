import React, { useState } from "react";
import "./Table.css";

const Table = () => {
  const [columns, setColumns] = useState({
    Title: true,
    Categories: true,
    Price: true,
    Date: true,
    Author: true,
    Status: true,
    Action: true,
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleColumn = (columnName) => {
    setColumns((prevColumns) => ({
      ...prevColumns,
      [columnName]: !prevColumns[columnName],
    }));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const data = [
    {
      Title: "Title 1",
      Categories: "Category 1",
      Price: "$10",
      Date: "2024-02-22",
      Author: "Author 1",
      Status: "Active",
      Action: "Edit",
    },
    {
      Title: "Title 2",
      Categories: "Category 2",
      Price: "$20",
      Date: "2024-02-23",
      Author: "Author 2",
      Status: "Inactive",
      Action: "Delete",
    },
  ];

  return (
    <div className="table-container">
      <div className="table-title">Table Title</div>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      {menuOpen && (
        <div className="menu">
          <div className="menu-header">Add or remove columns</div>
          {Object.keys(columns).map((columnName) => (
            <div key={columnName} className="menu-item">
              <input
                type="checkbox"
                checked={columns[columnName]}
                onChange={() => toggleColumn(columnName)}
              />
              <label>{columnName}</label>
            </div>
          ))}
        </div>
      )}
      <div className="table">
        <div className="row header">
          {Object.keys(columns).map(
            (key) =>
              columns[key] && (
                <div key={key} className="cell">
                  {key}
                </div>
              )
          )}
        </div>
        {data.map((row, index) => (
          <div key={index} className="row">
            {Object.keys(row).map(
              (key) =>
                columns[key] && (
                  <div key={key} className="cell">
                    {row[key]}
                  </div>
                )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;

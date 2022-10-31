import React from "react";

const Characters = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col mb-4">
          <div className="card" style={{minWidth: "200px"}}>
            <img src={item.avatar} alt="" />
            <div className="card-boby">
              <h5 className="card-title">{item.first_name} {item.last_name}</h5>
              <hr />
              <p>Email: {item.email}</p>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;

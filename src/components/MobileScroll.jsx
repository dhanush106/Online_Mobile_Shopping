import React from "react";
import "./MobileScroll.css";

const MobileScroll = () => {
  const companies = [
    "Apple", "Samsung", "Xiaomi", "OnePlus", "Google", "Realme",
    "Vivo", "Oppo", "Nokia", "Motorola", "Asus", "Sony"
  ];
  const infiniteCompanies = [...companies, ...companies];

  return (
    <div className="scroll-container">
      <div className="scroll-track">
        {infiniteCompanies.map((company, index) => (
          <div key={index} className="card-x">
            <h3>{company}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileScroll;

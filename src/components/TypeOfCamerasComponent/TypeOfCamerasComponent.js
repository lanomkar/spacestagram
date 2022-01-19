import React from "react";
import "./TypeOfCamerasComponent.css";

const TypeOfCamerasComponent = ({ value, handleCameraChange }) => {
  return (
    <div className="cameras-select">
      <label htmlFor="camera-select">Select a Rover Camera: </label>
      <select
        name="cameras"
        id="camera-select"
        value={value}
        onChange={handleCameraChange}
        className="select-form"
      >
        <option value="ALL">ALL</option>
        <option value="FHAZ">Front Hazard Avoidance Camera</option>
        <option value="RHAZ">Rear Hazard Avoidance Camera</option>
        <option value="MAST">Mast Camera</option>
        <option value="CHEMCAM">Chemistry and Camera Complex</option>
        <option value="MAHLI">Mars Hand Lens Imager</option>
        <option value="MARDI">Mars Descent Imager</option>
        <option value="NAVCAM">Navigation Camera</option>
        <option value="PANCAM">Panoramic Camera</option>
        <option value="MINITES">
          Miniature Thermal Emission Spectrometer (Mini-TES)
        </option>
      </select>
    </div>
  );
};

export default TypeOfCamerasComponent;

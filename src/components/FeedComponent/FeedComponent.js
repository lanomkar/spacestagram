import React, { useState } from "react";
import ImagesFeedComponent from "../ImagesFeedComponent/ImagesFeedComponent";
import TypeOfCamerasComponent from "../TypeOfCamerasComponent/TypeOfCamerasComponent";
import "./FeedComponent.css";

function FeedComponent() {
  const [camera, setCamera] = useState("ALL");

  return (
    <>
      <div className="api-title">
        <h4>Brought to by NASA's Mars Rover Photos API</h4>
      </div>

      <TypeOfCamerasComponent
        value={camera}
        handleCameraChange={(e) => setCamera(e.target.value)}
      />
      <div>
        <ImagesFeedComponent camera={camera} />
      </div>
    </>
  );
}

export default FeedComponent;

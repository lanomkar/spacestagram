import React, { useState } from "react";
import "./ImageCardComponent.css";

const ImageCardComponent = ({ imageDetail, islike }) => {
  const [likeState, setLikeState] = useState(islike);
  return (
    <div className="article-tag">
      <article>
        <div>
          <img
            src={imageDetail.img_src}
            alt={`Mars Image taken by ${imageDetail.camera.full_name}-${imageDetail.id}`}
            width="100%"
            className="image-style"
          />
        </div>
        <div className="image-details">
          <div className="rover-title">
            <h5>
              {imageDetail.rover.name} Rover - {imageDetail.camera.full_name}
            </h5>
          </div>

          <div className="date-detail">
            <p>
              Earth Date :<time>{imageDetail.earth_date}</time>
            </p>
          </div>
          <div className="button-outerdiv">
            {likeState ? (
              <button
                className="button-unlike"
                type="button"
                onClick={() => setLikeState(!likeState)}
              >
                <span className="heart-unlike-button"></span> UnLike
              </button>
            ) : (
              <button
                className="button-like"
                type="button"
                onClick={() => setLikeState(!likeState)}
              >
                <span className="heart-like-button"></span> Like
              </button>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ImageCardComponent;

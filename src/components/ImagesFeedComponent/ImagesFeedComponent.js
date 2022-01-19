import React from "react";
import axios from "axios";
import { useInfiniteQuery } from "react-query";
import LoaderComponent from "../LoaderComponent/LoaderComponent";
import ImageCardComponent from "../ImageCardComponent/ImageCardComponent";
import "./ImagesFeedComponent.css";

const fetchImages = ({ pageParam = 1, queryKey }) => {
  const cameraSelected = queryKey[0];

  if (cameraSelected == "ALL") {
    return axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${pageParam}&api_key=${process.env.REACT_APP_NASA_API_KEY}`
    );
  }

  return axios.get(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${pageParam}&camera=${cameraSelected}&api_key=${process.env.REACT_APP_NASA_API_KEY}`
  );
};

const ImagesFeedComponent = ({ camera }) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    status,
    isFetching,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery([camera], fetchImages, {
    getNextPageParam: (lastPage, pages) => {
      var lastTotalPage = lastPage.data.photos.length;
      var nextPageNo = pages.length;
      if (lastTotalPage < 25) return undefined;
      return nextPageNo + 1;
    },
  });

  if (isLoading) {
    return <LoaderComponent />;
  }

  if (isError) {
    return <h5>Failed to Load Data!</h5>;
  }

  return (
    <div>
      <div>
        {data.pages.map((page, i) => {
          return (
            <div key={i}>
              {page.data.photos.map((imageDetail) => (
                <ImageCardComponent
                  key={imageDetail.id}
                  imageDetail={imageDetail}
                  islike={false}
                />
              ))}
            </div>
          );
        })}
      </div>
      <div>
        {hasNextPage && !isFetchingNextPage ? (
          <div className="centerTheButton">
            <button
              className="loadmore-btn"
              disabled={!hasNextPage || isFetchingNextPage}
              onClick={() => fetchNextPage()}
            >
              Load more
            </button>
          </div>
        ) : null}
      </div>
      <div>{isFetching && isFetchingNextPage && <LoaderComponent />}</div>
      <div>
        {(data.pages[0].data.photos.length === 0 || !hasNextPage) && (
          <div className="info-data">
            <h6>No more Images</h6>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagesFeedComponent;

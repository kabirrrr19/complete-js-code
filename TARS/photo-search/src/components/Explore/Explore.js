import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { AiFillLike } from "react-icons/ai";

export default function Explore() {
  let [photos, setPhotos] = useState([]);
  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await axios.get("https://api.unsplash.com/photos/random", {
        params: {
          count: 30,
          client_id: "-UC_-0Tp826OaxEA-8Jk1wrKc04W_BW8d0kXDJ7DmkA",
        },
      });
      if(res)setPhotos(res.data);
    };
    fetchPhotos();
  });

  return (
    <div className="bg-gray-300 dark:bg-neutral-800">
      <div className="container">
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1  justify-content align-items p-4 gap-x-2 gap-y-4">
          {photos.map((photo) => (
              <Popup
                className=""
                key={photo.id}
                trigger={
                  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white cursor-pointer">
                    <img
                      src={photo.urls.regular}
                      alt={photo.alt_description}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-4 flex">
                      <div className="">
                        <img
                          src={photo.user.profile_image.medium}
                          alt=""
                          className="p-2"
                        />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold mb-2">
                          {photo.user.name}
                        </h2>
                        <p className="flex items-center text-gray-600 text-sm mb-2">
                          {photo.likes} <AiFillLike className="text-blue-900" />
                        </p>
                        <p className="text-gray-600 text-sm mb-4">
                          @{photo.user.username}
                        </p>
                      </div>
                    </div>
                  </div>
                }
                modal
                nested
              >
                {(close) => (
                  <div className="modal">
                    <div className="flex mx-auto bg-transparent rounded-lg sm:px-4">
                      <img
                        src={photo.urls.full}
                        alt={photo.alt_description}
                        className="w-2/3"
                      />
                      <div className="p-10 ">
                        <div className="rounded-xl">
                          <img
                            src={photo.user.profile_image.small}
                            alt=""
                            className="p-2"
                          />
                        </div>
                        <h2 className="text-lg font-semibold mb-2">
                          {photo.user.name}
                        </h2>
                        <p className="flex items-center text-gray-600 text-sm mb-2">
                          {photo.likes} likes{" "}
                          <AiFillLike className="text-blue-900" />
                        </p>
                        <p className="text-gray-600 text-sm mb-4">
                          @{photo.user.username}
                        </p>
                        <button
                          className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors duration-300 ease-in-out"
                          onClick={close}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </Popup>
            ))
        }
        </div>
      </div>
    </div>

    // <div className="mx-auto px-4 bg-gray-100 dark:bg-neutral-800">
    //   <div className="container mx-auto py-10">
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    //       {photos.map((photo) => (
    //         <div
    //           key={photo.id}
    //           className="bg-white shadow-sm rounded-lg overflow-hidden"
    //         >
    //           <img
    //             src={photo.urls.thumb}
    //             alt={photo.alt_description}
    //             className="w-full h-56 object-cover"
    //           />
    //           <div className="p-2">
    //             <img src={photo.user.profile_image.small} alt="" className="w-6"/>
    //             <h2 className="text-lg font-semibold mb-2">
    //               {photo.user.name}
    //             </h2>
    //             <p className="text-gray-600 text-sm mb-2">
    //               @{photo.user.username}
    //             </p>
    //             <p className="text-gray-600 text-sm mb-4">
    //               {photo.likes} likes
    //             </p>
    //             <a
    //               href={photo.links.html}
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors duration-300 ease-in-out"
    //             >
    //               View on Unsplash
    //             </a>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}

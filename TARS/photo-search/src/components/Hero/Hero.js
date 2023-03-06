import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import UnsplashAPI from "../UnsplashAPI/UnsplashAPI";

export default function Hero({searchPhotos}) {
  const [query, setQuery] = useState("");
    // query.length === 0 ? searchPhotos("") : searchPhotos(query);
    
  return (
    <form id="hero" >
      <div className="bg-[url('/public/images/headerBg11.jpg')] bg-hero bg-no-repeat bg-cover bg-center bg-fixed h-screen">
        <div>
          <h1 className="text-center text-3xl p-10 lg:pt-30 pt-20 text-white">
            Your Image Search Buddy
          </h1>
          <div className="relative text-gray-600 ">
            <div className="mx-auto w-3/4">
              <input
                type="search"
                name="search"
                placeholder="Search for photos..."
                value={query}
                onChange={(event) => {setQuery(event.target.value);searchPhotos(event.target.value)}}
                
                className="mx-auto bg-white text-center text-xl h-12 px-5 pr-10 rounded-full text-sm focus:outline-none w-full"
              />
            </div>
            
            
                      
          </div>
        </div>
      </div>
    </form>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const LoaderComponent = () => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
  </div>
);
const MainContent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://api-qa.agorum.co/api/v3/artifacts?limit=20'")
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(Error);
  }, []);
  return (
    <main className="flex-grow p-4 pt-1">
      {loading ? (
        <LoaderComponent />
      ) : (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 800: 3, 850: 4, 900: 5 }}
        >
          <Masonry columnsCount={5} gutter="12px">
            {posts.map((p) => (
              <div
                className="transition-transform duration-300 ease-in-out hover:scale-101 hover:mb-5 group"
                key={p.userId}
              >
                <img
                  className="border shadow-md rounded-2xl group-hover:shadow-custom group-hover: cursor-pointer"
                  src={`${p.url}`}
                  alt="disp-image"
                />
                <div className="flex relative justify-between mt-2 group-hover: cursor-pointer  group-hover:shadow-custom rounded-xl">
                  <span className="flex justify-between">
                    <img
                      className="h-5 w-5 group-hover:mx-1 group-hover:my-0.5 transition-all duration-300 rounded-xl"
                      src={`${p.user.profilePicture}`}
                      width={20}
                      height={20}
                      alt="Profile"
                    />
                    <p className="absolute left-9 transition-all duration-300">
                      {p.listingSlugs === "photography" ? "Photographer" : ""}
                    </p>
                  </span>
                  <span className="group-hover:pr-2 transition-all duration-300">
                    ⋮
                  </span>
                </div>
                <p className="ml-7 px-2 t group-hover:mt-2 rounded-xl group-hover: cursor-pointer group-hover:shadow-custom group-hover:inline-block">
                  $ {p.price + " " + p.payUnit}
                </p>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </main>
  );
};

export default MainContent;

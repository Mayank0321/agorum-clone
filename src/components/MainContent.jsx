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
    <main className="flex-grow p-6">
      {loading ? (
        <LoaderComponent />
      ) : (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 800: 3, 850: 4, 900: 5 }}
        >
          <Masonry columnsCount={5} gutter="25px">
            {posts.map((p) => (
              <div
                className="transition ease-out hover:scale-105 hover: cursor-pointer delay-100"
                key={p.userId}
              >
                <img
                  className="border rounded-xl hover:shadow-lg"
                  src={`${p.url}`}
                  alt="disp-image"
                />
                <span className="flex hover:border hover:shadow-lg rounded-xl">
                  <img
                    className="border rounded-full"
                    src={`${p.url}`}
                    width={20}
                    height={20}
                    alt="Profile"
                  />
                  <p className="ml-5">
                    {p.listingSlugs === "photography" ? "Photographer" : ""}
                  </p>
                </span>
                <p className="ml-5 hover:border hover:shadow-lg rounded-xl">
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

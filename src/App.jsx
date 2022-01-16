// @ts-nocheck
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import image2 from "./images/image-2.jpg";
import "./sass/main.scss";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body")?.classList.add("loading")
      : document.querySelector("body")?.classList.remove("loading");
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          {!loading && (
            <div className="transition-image final">
              <img src={image2} alt="image-2" />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;

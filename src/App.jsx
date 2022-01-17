// @ts-nocheck
import { useEffect, useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Loader from "./components/Loader";
import image2 from "./images/image-2.jpg";
import "./sass/main.scss";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading ? document.querySelector("body")?.classList.add("loading") : document.querySelector("body")?.classList.remove("loading");
  }, [loading]);

  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header />
            <Banner />
            {!loading && (
              <div className="transition-image final">
                <motion.img src={image2} alt="image-2" layoutId="main-image-1" />
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;

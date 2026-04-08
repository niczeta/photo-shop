import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CartProvider } from "./context/CartContext";
import { Layout } from "./layout/Layout";
import { Home } from "./routes/Home";
import { Cart } from "./routes/Cart";
import { ScrollManager } from "./layout/ScrollManager";

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.992,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 1.004,
  },
};

const pageTransition = {
  duration: 0.52,
  ease: [0.25, 0.1, 0.25, 1] as const,
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
                className="will-change-transform"
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/cart"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
                className="will-change-transform"
              >
                <Cart />
              </motion.div>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export const App = () => {
  return (
    <CartProvider>
      <ScrollManager />
      <AnimatedRoutes />
    </CartProvider>
  );
};
import { Bodies } from "../sections/Bodies";
import { Hero } from "../sections/Hero";
import { Lenses } from "../sections/Lenses";

export const Home = () => {
  return (
    <>
      <Hero />
      <Bodies />
      <Lenses />
    </>
  );
};
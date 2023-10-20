import ProTypes from "prop-types";

import { GifsGrid } from "@/components/organisms/gifs-grid/GifsGrid";

export const Category = ({ gifsCategory }) => {
  return (
    <>
      {gifsCategory.map((category) => (
        <GifsGrid key={category} category={category} />
      ))}
    </>
  );
};

Category.propTypes = {
  gifsCategory: ProTypes.arrayOf(ProTypes.string).isRequired,
};

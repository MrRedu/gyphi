import ProTypes from "prop-types";

import { GifsGrid } from "@/components/organisms/gifs-grid/GifsGrid";

export const Category = ({ gifsCategory, numberGifsToRender }) => {
  return (
    <>
      {gifsCategory.map((category) => (
        <GifsGrid
          key={category}
          category={category}
          numberGifsToRender={numberGifsToRender}
        />
      ))}
    </>
  );
};

Category.propTypes = {
  gifsCategory: ProTypes.arrayOf(ProTypes.string).isRequired,
  numberGifsToRender: ProTypes.number.isRequired,
};

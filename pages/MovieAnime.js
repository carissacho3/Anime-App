import React, { useState } from "react";
import useSWR from "swr";
import AnimeLayout from "@/components/AnimeLayout";

const MovieAnimeComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: allAnime, error } = useSWR(
    `https://api.jikan.moe/v4/top/anime?type=movie&page=${currentPage}`
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (error) {
    return <div>Error loading</div>;
  }

  if (!allAnime) {
    return <div>loading</div>;
  }

  return (
    <div>
      <AnimeLayout
        animes={allAnime}
        title="Top Anime Movies"
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
};

export default MovieAnimeComponent;

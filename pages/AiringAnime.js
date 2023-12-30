import React, { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import AnimeLayout from "@/components/AnimeLayout";
import MainNav from "@/components/MainNav";

const AiringAnimeComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const { data: allAnime, error } = useSWR(
    `https://api.jikan.moe/v4/top/anime?filter=airing&page=${currentPage}`
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);

    router.push({
      pathname: router.pathname,
      query: { page: newPage },
    });
  };

  if (error || !router) {
    return <div>Error loading</div>;
  }

  if (!allAnime) {
    return <div>loading</div>;
  }

  return (
    <div>
      <MainNav onClickPage={() => handlePageChange(1)}></MainNav>
      <AnimeLayout
        animes={allAnime}
        title="Top Airing Anime"
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
};

export default AiringAnimeComponent;

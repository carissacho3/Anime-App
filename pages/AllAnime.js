import React, { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import MainNav from "@/components/MainNav";
import AnimeLayout from "@/components/AnimeLayout";

const AllAnimeComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const { data: allAnime, error } = useSWR(
    `https://api.jikan.moe/v4/top/anime?page=${currentPage}`
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    router.push({
      pathname: router.pathname,
      query: { page: newPage },
    });
  };

  if (error) {
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
        title="Top Anime Series"
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
};

export default AllAnimeComponent;

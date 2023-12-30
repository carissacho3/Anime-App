import { useRouter } from "next/router";
import useSWR from "swr";
import AnimeDetail from "@/components/AnimeDetail";

const AnimeById = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: anime, error } = useSWR(
    `https://api.jikan.moe/v4/anime/${id}/full`
  );

  if (error) {
    return <div>Error loading</div>;
  }

  if (!anime) {
    return <div>loading</div>;
  }

  return <AnimeDetail detail={anime}></AnimeDetail>;
};
export default AnimeById;

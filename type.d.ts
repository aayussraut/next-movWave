type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string;
  title?: string;
  video: boolean;
  vote_average: number;
  first_air_date?: string;
  name?: string;
};

type MovieReview = {
  author: string;
  author_details: {
    name: string | null;
    username: string;
    avatar_path: string | null;
    rating: number | null;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
};

type MediaDetail = {
  adult: boolean;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  origin_country: string[];
  original_language: string;
  overview: string;
  popularity: number;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
};

type MovieDetail = MediaDetail & {
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  release_date: string;
  revenue: number;
  runtime: number;
  title: string;
  video: boolean;
  imdb_id: string;
  poster_path: string;
  name?: string;
  first_air_date?: string;
};

type Creator = {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path: string | null;
};

type Episode = {
  id: number;
  overview: string;
  name: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string | null;
};

type Genre = {
  id: number;
  name: string;
};

type Network = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type ProductionCompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type Season = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
};

type Language = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

type TvDetail = MediaDetail & {
  backdrop_path: string | null;
  created_by: Creator[];
  episode_run_time: number[];
  first_air_date: string;
  last_air_date: string;
  last_episode_to_air: Episode;
  next_episode_to_air: Episode | null;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  original_name: string;
  poster_path: string | null;
  seasons: Season[];
  type: string;
  name: string;
  title?: string;
  release_date?: string;
};

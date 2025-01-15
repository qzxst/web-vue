type home_type = {
  imgPc: string;
  imgMb: string;
  name: string;
  shiling: string;
};
type swiper_games_type = {
  imgPc: string;
  imgMb: string;
  name: string;
  shiling: string;
};
type topic_games_type = {
  imgPc: string;
  imgMb: string;
  name: string;
  shiling: string;
};
type topic_news_type = {
  imgPc: string;
  imgMb: string;
  name: string;
  shiling: string;
};
type home_config = {
  autoplay: {
    delay: number;
    disableOnInteraction: boolean;
  };
  loop: boolean;
  slidesPerView: number;
  spaceBetween: number;
  pagination: {
    el: string;
    clickable: boolean;
  };
};

export type {
  home_type,
  home_config,
  swiper_games_type,
  topic_games_type,
  topic_news_type,
};

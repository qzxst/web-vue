import { Mock, type Params, type ResultData } from "@/api/base";
Mock.mock("/v1/api/home", "post", (options: Params) => {
  const imageNamePrefix = "banner_";
  const images = ["jdtf", "nslm"];
  const shiling = [12, 16];
  const baseUrl = "/images/";
  const url = new URL(baseUrl, import.meta.url).href;
  const gameImagePrefix = "game_";

  const data = Mock.mock({
    "banner|2": [
      {
        "id|+1": 0,
        title: "@ctitle",
        add_time: "@date(yyyy-MM-dd)",
        imgPc: function (): string {
          //@ts-ignore
          return `${url}${imageNamePrefix}${images[this.id]}_pc.png`;
        },
        imgMb: function (): string {
          //@ts-ignore
          return `${url}${imageNamePrefix}${images[this.id]}_mb.png`;
        },
        shiling: function (): string {
          //@ts-ignore
          return `${url}${shiling[this.id]}.png`;
        },
      },
    ],
    "games|2": [
      {
        "id|+1": 0,
        title: "@ctitle",
        content: "@cparagraph",
        add_time: "@date(yyyy-MM-dd)",
        img: function (): string {
          //@ts-ignore
          return `${url}${gameImagePrefix}${images[this.id]}.png`;
        },
        bg: function (): string {
          //@ts-ignore
          return `${url}${gameImagePrefix}${images[this.id]}.png`;
        },
      },
    ],
    "news|3": [
      {
        "id|+1": 1,
        title: "@ctitle",
        content: "@cparagraph",
        add_time: "@date(yyyy-MM-dd)",
        img: function (): string {
          //@ts-ignore
          return `${url}news${this.id}.png`;
        },
      },
    ],
  });
  const resultData: ResultData = {
    code: 0,
    data,
    msg: "success",
  };
  return resultData;
});

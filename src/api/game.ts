import { Mock, type Params, type ResultData } from "@/api/base";

Mock.mock("/v1/api/game", "post", (options: Params) => {
  const data = Mock.mock({
    "games|3-5": [
      {
        id: "@increment(1)",
        title: "@ctitle",
        content: "@cparagraph",
        add_time: "@date(yyyy-MM-dd)",
        icon: "@image(50x50,@color, @color, png, @cword)",
        bg: "@image(343x493,@color, @color, png, @cword)",
        "tags|1-3": [
          {
            name: "@cword",
          },
        ],
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

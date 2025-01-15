import { Mock, type Params, type ResultData } from "@/api/base";

Mock.mock("/v1/api/about", "post", (options: Params) => {
  const data = Mock.mock({
    "news|5-10": [
      {
        id: "@increment(1)",
        title: "@ctitle",
        content: "@cparagraph",
        add_time: "@date(yyyy-MM-dd)",
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

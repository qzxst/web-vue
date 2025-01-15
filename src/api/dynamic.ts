import { Mock, type Params, type ResultData } from "@/api/base";

interface DynamicParams extends Params {
  // 查询参数
  title?: string;
  content?: string;
  add_time?: string;
}
Mock.mock("/v1/api/dynamic", "post", (options: DynamicParams) => {
  const data = Mock.mock({
    "dynamics|3-5": [
      {
        id: "@increment(1)",
        title: "@ctitle",
        content: "@cparagraph",
        add_time: "@date(yyyy-MM-dd)",
        img: "@image(455x266,@color, @color, png, @cword)",
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

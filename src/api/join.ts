import { Mock, type Params, type ResultData } from "@/api/base";

Mock.mock("/v1/api/join", "post", (options: Params) => {
    const data = Mock.mock({
        "jobs|5-10": [
            {
                id: "@increment(1)",
                link: "",
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
        msg: "success"
    }
    return resultData
})

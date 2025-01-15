import Mock from "mockjs";

const data = Mock.mock({
    "list|20-60": [
        {
            id: "@increment(1)",
            title: "@ctitle",
            content: "@cparagraph",
            add_time: "@date(yyyy-MM-dd)",
            img: "@image(50x50,@color, @color, png, @cword)",
        },
    ],
});

Mock.mock("/api/get/footer", "post", (options: any) => {
    const a = Mock.mock({
        footer: {
            Copyright: "Copyright © 深圳市顺晨网络科技有限公司",
            address: "地址: 深圳市南山区桃源街道桃园路南西海明珠花园F座11楼B01-200",
            tel: "电 话: 0755-23012661",
            email: "邮箱: shunchen@shunchenkj.com",
            icp: "粤ICP备17113096号",
            record: "粤ICP备17113096号",
            logo: "../assets/images/web_logo.png",
            qrcode: "../assets/images/web_logo.png",
            notice: `游戏健康忠告:`,
            notice1: `抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。`,
            notice2: `适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。`,
        },
    });
    return {
        code: 200,
        message: "获取列表成功",
        data: a.footer,
    };
});

// 新闻列表
Mock.mock("/api/get/games", "get", (options: any) => {
    const a = Mock.mock({
        "data|10": [
            {
                "id|+1": 1,
                title: "@ctitle(5,10)",
                content: "@cparagraph(10,20)",
                add_time: "@date(yyyy-MM-dd)",
            },
        ],
        "images|10": [
            {
                "id|+1": 1,
                imgUrl: "../assets/images/@cword(3,6).png",
            },
        ],
    });
    // 获取文件夹中的全部文件
    return {
        code: 200,
        message: "获取列表成功",
        data: a.data,
        images: a.images,
    };
});
// 登录验证
Mock.mock("/api/login", "post", (options: any) => {
    let body = JSON.parse(options.body);
    if (body.username === "admin" && body.password === "123456") {
        return {
            code: 200,
            message: "登录成功",
        };
    }
});

// 删除
Mock.mock("/api/delete/news", "post", (options: any) => {
    let body = JSON.parse(options.body);
    const index = data.list.findIndex((item: any) => item.id === body.id);
    data.list.splice(index, 1);
    return {
        code: 200,
        message: "删除成功",
        list: data.list,
    };
});

// 添加
Mock.mock("/api/add/news", "post", (options: any) => {
    let body = JSON.parse(options.body);

    data.list.push(
        Mock.mock({
            id: "@increment(1)",
            title: body.title,
            content: body.content,
            add_time: "@date(yyyy-MM-dd hh:mm:ss)",
        })
    );

    return {
        code: 200,
        message: "添加成功",
        list: data.list,
    };
});

//更新


// 含有分页的数据列表,有需要接受的参数要使用正则匹配
// /api/get/news?pagenum=1&pagesize=10
Mock.mock(/\/api\/get\/news/, "get", (options: any) => {
    // 获取传递的参数pageindex
    const pagenum = getQuery(options.url, "pagenum");
    // 获取传递的参数pagesize
    const pagesize = getQuery(options.url, "pagesize");
    // 截取数据的起始位置
    const start = (pagenum - 1) * pagesize;
    // 截取数据的终点位置
    const end = pagenum * pagesize;
    // 计算总页数
    const totalPage = Math.ceil(data.list.length / pagesize);
    // 数据的起始位置：(pageindex-1)*pagesize  数据的结束位置：pageindex*pagesize
    const list = pagenum > totalPage ? [] : data.list.slice(start, end);

    return {
        code: 200,
        message: "获取新闻列表成功",
        list: list,
        total: data.list.length,
    };
});

const getQuery = (url: any, name: string) => {
    const index = url.indexOf("?");
    if (index !== -1) {
        const queryStrArr = url.substring(index + 1).split("&");
        for (var i = 0; i < queryStrArr.length; i++) {
            const itemArr = queryStrArr[i].split("=");
            if (itemArr[0] === name) {
                return itemArr[1];
            }
        }
    }
    return null;
};

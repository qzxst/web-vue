import Mock from "mockjs";

interface ResultData {
  code: number;
  data: any;
  msg: string;
}

interface Params {
  page?: number;
  pageSize: number;
}

Mock.setup({
  timeout: 2000,
});
export { Mock, type ResultData, type Params };

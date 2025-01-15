import { defineStore } from "pinia";

import { staticRoutes } from "@/router";

/**
 * Use meta.moduleName to determine if the current user has permission
 * @param module
 * @param route
 */
function hasPermission(module: any, route: any) {
  const title = route.meta?.title;

  return title ? module.includes(title) : true;
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes dynamicRoutes
 * @param module
 */
export function filterDynamicRoutes(routes: any, module: any) {
  const res: any = [];

  routes.forEach((router:any) => {
    const tmp = { ...routes };

    if (hasPermission(module, tmp)) {
      if (tmp.children) {
        tmp.children = filterDynamicRoutes(tmp.children, module);
      }

      res.push(tmp);
    }
  });

  return res;
}

type routesType = {
    path :string,
    name:string,
    component:string,
    meta?:any,
    children?:routesType[]
}
export const usePermissionStore = defineStore("permission", {
  state: () => {
    return {
      isGetUserInfo: false, // get userInfo
      routes: [], //将过滤后的动态路由和静态路由集合
      dynamicRoutes: [], //过滤后的动态路由
    };
  },

  /***
   *封装处理数据的函数（业务逻辑)：修改数据
   */
  actions: {
    M_ROUTES(route:any) {
      this.$patch((state) => {
        state.dynamicRoutes = route;
        // state.routes = staticRoutes.concat(route);
      });
    },
    M_IS_GET_USER_INFO(data:any) {
      this.isGetUserInfo = data;
    },
    generateRoutes(module:any) {
      return filterDynamicRoutes(staticRoutes, module);
    },
  },
});

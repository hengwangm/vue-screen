import axios from 'axios';
import {
  Message
} from 'element-ui';

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // request timeout
});

// request interceptor
/* service.interceptors.request.use(config => {
  // Do something before request is sent
  if (store.getters.token) {
    // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    config.headers['X-Token'] = getToken();
  }
  return config;
}, error => {
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
}); */

// respone interceptor
service.interceptors.response.use(
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过xmlhttprequest来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    const res = response.data;
    if (!res.success) {
      Message({
        message: res.message || '接口异常',
        type: 'error',
        duration: 5 * 1000
      });
      return Promise.reject('error');
    } else {
      return res.data;
    }
  },
  error => {
    console.log('err' + error); // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error);
  });

export default service;

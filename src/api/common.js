import request from '@/untils/request.js';

// 使用
export function getInfo(params) {
  return request({
    url: '/user/info',
    method: 'get',
    params
  });
}

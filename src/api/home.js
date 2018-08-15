import request from '@/utils/request.js';

// 获取天气
export function getWeatherData(cityCode = '420111') {
  const params = {
    cityCode: cityCode
  };
  return request({
    url: '/gather/getWeatherData',
    method: 'get',
    params
  });
}

// 获取运营统计数据
export function getOperatingStatistics(parkNo = '04201110001CYTD') {
  const params = {
    parkNo: parkNo
  };
  return request({
    url: '/gather/getOperatingStatistics',
    method: 'get',
    params
  });
}
// 获取运营实时数据
export function getOperatingRealTimeData(parkNo = '04201110001CYTD') {
  const params = {
    parkNo: parkNo
  };
  return request({
    url: '/gather/getOperatingRealTimeData',
    method: 'get',
    params
  });
}

// 获取产业数据
export function getIndustryData(parkNo = '04201110001CYTD') {
  const params = {
    parkNo: parkNo
  };
  return request({
    url: '/gather/getIndustryData',
    method: 'get',
    params
  });
}
// 获取空间数据
export function getSpaceData(parkNo = '04201110001CYTD') {
  const params = {
    parkNo: parkNo
  };
  return request({
    url: '/gather/getSpaceData',
    method: 'get',
    params
  });
}
// 获取设备设施数据
export function getFacilityData(parkNo = '04201110001CYTD') {
  const params = {
    parkNo: parkNo
  };
  return request({
    url: '/gather/getFacilityData',
    method: 'get',
    params
  });
}
// 获取能耗数据
export function getEnergyConsumptionData(parkNo = '04201110001CYTD') {
  const params = {
    parkNo: parkNo
  };
  return request({
    url: '/gather/getEnergyConsumptionData',
    method: 'get',
    params
  });
}
// 企业服务数据,生活配套数据
export function getEnterpriseServiceData(parkNo = '04201110001CYTD') {
  const params = {
    parkNo: parkNo
  };
  return request({
    url: '/gather/getEnterpriseServiceData',
    method: 'get',
    params
  });
}

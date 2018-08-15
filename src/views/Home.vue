<template>
  <div class="hello">
    <header>
      <!-- <img class="top-title-bg" src="../assets/top_title_bg.png" alt=""> -->
      <el-row type="flex" align="bottom">
        <el-col :span="8">
            <el-row class="header-left-time">
              <el-col :span="6" :offset="6">{{date}}</el-col>
              <el-col :span="6">{{time}}</el-col>
            </el-row>
        </el-col>
        <el-col :span="8">
          <h1>创意天地智慧园区运营中心</h1>
        </el-col>
        <el-col :span="8">
            <el-row class="header-right-info">
                <el-col :span="6" :offset="6">
                  温度 :
                  <span>{{weatherData.temperature}}</span>
                </el-col>
                <el-col :span="6">
                  湿度 :
                  <span>{{weatherData.humidity}}</span>
                </el-col>
                <el-col :span="6">
                  PM2.5 :
                   <span>{{weatherData.pm}}</span>
                </el-col>
            </el-row>
        </el-col>
      </el-row>
    </header>
    <section>
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="card">
                <header class="card-title">
                  运营统计数据
                  <span class="card-title-arro">
                  </span>
                  <span class="card-title-arro card-arro-shadow"></span>
                </header>
                  <el-row type="flex" align="middle" justify="center" class="card-content">
                      <div class="flex-item">
                          <div class="data font-color1">9</div>
                          <div class="name">产业类型</div>
                      </div>
                      <div class="flex-item">
                          <div class="data font-color2">35%</div>
                          <div class="name">产业聚集度</div>
                      </div>
                      <div class="flex-item">
                          <div class="data font-color3">314</div>
                          <div class="name">入住企业</div>
                      </div>
                      <div class="flex-item">
                          <div class="data font-color4">113</div>
                          <div class="name">双创企业</div>
                      </div>
                      <div class="flex-item">
                          <div class="data font-color5">9</div>
                          <div class="name">上市企业</div>
                      </div>
                      <div class="flex-item font-color6">
                          <div class="data">100</div>
                          <div class="name">注册落户企业</div>
                      </div>
                      <div class="flex-item">
                          <div class="data font-color7">950</div>
                          <div class="name">员工</div>
                      </div>
                  </el-row>
            </div>
          </el-col>
          <el-col :span="12">
               <div class="card">
                <header class="card-title">
                  运营实时数据
                  <span class="card-title-arro">
                  </span>
                  <span class="card-title-arro card-arro-shadow"></span>
                </header>
                  <el-row type="flex" align="middle" justify="center" class="card-content">
                      <div class="flex-item">
                      </div>
                      <div class="flex-item">
                          <div class="data font-color1">100</div>
                          <div class="name">到访认识/人</div>
                      </div>
                      <div class="flex-item">
                          <div class="data font-color2">50</div>
                          <div class="name">入园车辆</div>
                      </div>
                      <div class="flex-item">
                          <div class="data font-color3">113</div>
                          <div class="name">出园车辆</div>
                      </div>
                      <div class="flex-item">
                          <div class="data font-color4">9</div>
                          <div class="name">设备状态预警</div>
                      </div>
                      <div class="flex-item font-color5 flex-last">
                          <div class="data">1</div>
                          <div class="name">资产安全预警</div>
                      </div>
                      <div class="flex-item">
                      </div>
                  </el-row>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="9">
            <div class="card m-b">
                <header class="card-title font-white">
                  产业数据
                  <span class="card-title-arro">
                  </span>
                  <span class="card-title-arro card-arro-shadow"></span>
                </header>
                  <!-- 产业数据 -->
                <div class="card-property">
                    <div class="card m-b-md">
                        <div class="card-property-title">
                          产业变动
                        </div>
                        <div class="card-property-info">
                          <span>本月入住企业 : 10</span>
                          <span>入住创客量 : 10</span>
                          <span>自有企业 : 6</span>
                          <span>租赁企业 : 5</span>
                        </div>
                        <div class="card-property-title">
                          人员变动
                        </div>
                        <div class="card-property-info">
                          <span>本月迁出企业 : 10</span>
                          <span>迁出创客量 : 10</span>
                          <span>本月入驻人数 : 6</span>
                          <span>入驻创客量 : 5</span>
                        </div>
                    </div>
                    <el-table
                      :data="tableData"
                      height="145"
                      stripe
                      style="width: 100%">
                      <el-table-column
                          type="index">
                      </el-table-column>
                      <el-table-column
                        prop="type"
                        label="产业类型">
                      </el-table-column>
                      <el-table-column
                        prop="num"
                        label="家">
                      </el-table-column>
                      <el-table-column
                        prop="value"
                        label="注册资本(万)">
                      </el-table-column>
                      <el-table-column
                        prop="revenue"
                        label="税收(万)">
                      </el-table-column>
                    </el-table>
                </div>
            </div>
            <div class="card">
                <header class="card-title font-white">
                  空间数据
                  <span class="card-title-arro">
                  </span>
                  <span class="card-title-arro card-arro-shadow"></span>
                </header>
                <!-- 空间数据 -->
                <div class="card-space">
                    <div class="unit m-t-sm m-b-sm text-right m-r">单位 : 万<sup>2</sup></div>
                    <el-row :gutter="20" type="flex" align="middle" class="m-b">
                      <el-col :span="5">
                        <span class="rent font-white2">租赁面积</span><span class="rent-arro"></span>
                      </el-col>
                      <el-col :span="6">
                        <span class="count">总租赁 :</span>
                        <span class="info">1.65</span>
                      </el-col>
                      <el-col :span="13">
                        <div class="card text-center m-r">
                             <el-row type="flex" align="middle">
                               <el-col :span="12" class="has-rent">
                                  <span class="font-white2">已租赁 :</span>
                                  <span class="info">1.65</span>
                                  <span ></span>
                              </el-col>
                              <el-col  class="has-rent-arro" :span="2">
                              </el-col>
                               <el-col :span="10">
                                 <span class=" font-white2">待租赁 :</span>
                                  <span class="info">1.65</span>
                              </el-col>
                             </el-row>
                        </div>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20" type="flex" align="middle">
                      <el-col :span="5">
                        <span class="sell font-white2">销售办公面积</span><span class="sell-arro"></span>
                      </el-col>
                      <el-col :span="6">
                        <span class="count">总销售 :</span>
                        <span class="info">1.65</span>
                      </el-col>
                      <el-col :span="13">
                        <div class="card text-center m-r">
                             <el-row type="flex" align="middle">
                               <el-col :span="12" class="has-sell">
                                  <span class="font-white2">已销售 :</span>
                                  <span class="font-white2">1.65</span>
                                  <span ></span>
                              </el-col>
                              <el-col  class="has-sell-arro" :span="2">
                              </el-col>
                               <el-col :span="10">
                                 <span class=" font-white2">待销售 :</span>
                                  <span class="info">1.65</span>
                              </el-col>
                             </el-row>
                        </div>
                      </el-col>
                    </el-row>
                    <ve-histogram
                      height="200px"
                      :data="chartData"
                      :extend="spaceChartExtend">
                    </ve-histogram>
                </div>
            </div>
          </el-col>
          <el-col :span="15">
            <div class="card m-b">
                <header class="card-title font-white">
                  设施设备数据
                  <span class="card-title-arro">
                  </span>
                  <span class="card-title-arro card-arro-shadow"></span>
                </header>
                <div class="card-sensor">
                  <el-row :gutter="20" type="flex" align="middle">
                      <el-col :span="7">
                        <el-table
                          :data="tableData2"
                          stripe>
                          <el-table-column
                            prop="name"
                            min-width="60px"
                            label="设备名称">
                          </el-table-column>
                          <el-table-column
                            prop="count"
                            min-width="50px"
                            label="总数">
                          </el-table-column>
                          <el-table-column
                            prop="normal"
                            min-width="50px"
                            label="正常">
                          </el-table-column>
                          <el-table-column
                            prop="error"
                            min-width="50px"
                            label="异常">
                          </el-table-column>
                        </el-table>
                      </el-col>
                      <el-col :span="7">
                        <div class="card-sensor-title text-center">工单量</div>
                        <ve-pie
                          height="145px"
                          :extend="workChartExtend"
                          :data="chartData2">
                        </ve-pie>
                      </el-col>
                      <el-col :span="5">
                        <div class="card-sensor-title text-center m-b">停车位</div>
                        <div class="park-card">
                          <div class="title">总数 1761</div>
                          <div class="card m-b card-success">
                             <el-row :gutter="20" type="flex" align="middle">
                               <el-col :span="12">地上 41</el-col>
                               <el-col :span="12">地下 1711</el-col>
                             </el-row>
                          </div>
                          <div class="card">
                             <el-row :gutter="20" type="flex" align="middle" justis>
                               <el-col :span="24" class="text-center">剩余 41</el-col>
                             </el-row>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="5">
                        <div class="card-sensor-title text-center m-b">资产</div>
                        <div class="park-card">
                          <div class="title">资产总数 6541</div>
                          <div class="card m-b card-success">
                             <el-row  type="flex" align="middle">
                               <el-col :span="24" class="text-center">已授权 6024</el-col>
                             </el-row>
                          </div>
                          <div class="card">
                             <el-row  type="flex" align="middle" justis>
                               <el-col :span="24" class="text-center">剩余 17</el-col>
                             </el-row>
                          </div>
                        </div>
                      </el-col>
                  </el-row>
                </div>
            </div>
             <div class="card m-b">
                <header class="card-title font-white">
                  能耗数据
                  <span class="card-title-arro">
                  </span>
                  <span class="card-title-arro card-arro-shadow"></span>
                </header>
                <div class="card-energy">
                  <el-row :gutter="20" type="flex" align="middle">
                      <el-col :span="11">
                        <el-row :gutter="20" type="flex" align="middle">
                           <el-col :span="16">
                              <ve-ring
                              height="190px"
                              :legend-visible="false"
                              :settings="chartData3Set"
                              :data="chartData3">
                            </ve-ring>
                           </el-col>
                           <el-col :span="8">
                             <div class="card m-b">
                               <el-row  type="flex" align="middle">
                                 <el-col :span="12">
                                   同比上月
                                 </el-col>
                                 <el-col :span="12">
                                   <span class="bottom-triangle"></span>
                                   <span class="tongbi-data">20%</span>
                                 </el-col>
                               </el-row>
                             </div>
                             <div class="card">
                              <el-row  type="flex" align="middle">
                                 <el-col :span="12">
                                   环比上月
                                 </el-col>
                                 <el-col :span="12">
                                   <span class="top-triangle"></span>
                                   <span class="huanbi-data">20%</span>
                                 </el-col>
                               </el-row>
                             </div>
                           </el-col>
                        </el-row>
                      </el-col>
                      <el-col :span="13">
                        <ve-histogram
                            height="190px"
                            :data="chartData4"
                            :extend="energyBarChartExtend">
                          </ve-histogram>
                      </el-col>
                  </el-row>
                </div>
             </div>
              <el-row :gutter="10" type="flex" align="middle">
                <el-col :span="8">
                  <div class="card ">
                    <header class="card-title font-white">
                      企业服务数据
                      <span class="card-title-arro">
                      </span>
                      <span class="card-title-arro card-arro-shadow"></span>
                    </header>
                    <div class="card-firm">
                      <div class="card-firm-title text-center">截止5月份累计为企业提供服务</div>
                      <ve-ring
                        height="180px"
                        :legend-visible="false"
                        :settings="chartData3Set"
                        :data="chartData3">
                      </ve-ring>
                    </div>
                  </div>
                </el-col>
                <el-col :span="16">
                  <div class="card">
                    <header class="card-title font-white">
                      生活配套数据
                      <span class="card-title-arro">
                      </span>
                      <span class="card-title-arro card-arro-shadow"></span>
                    </header>
                    <div class="card-life">
                      <el-row :gutter="10" type="flex" align="middle">
                        <el-col :span="8">
                          <div class="card" style="padding:15px;">
                            <div class="card-life-title">
                              <span class="eat-title-name eat-color">食</span>
                              <span class="eat-title-img"></span>
                            </div>
                            <div class="card m-b-sm">
                              <el-row  type="flex" align="middle">
                                 <el-col :span="12">
                                   就餐人数
                                 </el-col>
                                 <el-col :span="12">
                                   <span class="eat-color">765</span>
                                 </el-col>
                               </el-row>
                             </div>
                            <div class="card m-b-sm">
                              <el-row  type="flex" align="middle">
                                 <el-col :span="12">
                                   金额
                                 </el-col>
                                 <el-col :span="12">
                                   <span class="eat-color">765</span>
                                 </el-col>
                               </el-row>
                             </div>
                            <div class="card">
                              <el-row  type="flex" align="middle">
                                 <el-col :span="12">
                                   餐厅数
                                 </el-col>
                                 <el-col :span="12">
                                   <span class="eat-color">17</span>
                                 </el-col>
                               </el-row>
                             </div>
                          </div>
                        </el-col>
                        <el-col :span="8">
                          <div class="card" style="padding:15px;">
                            <div class="card-life-title">
                              <span class="live-title-name live-color">住</span>
                              <span class="live-title-img"></span>
                            </div>
                            <div class="card m-b-sm">
                              <el-row  type="flex" align="middle">
                                 <el-col :span="12">
                                   入住人数
                                 </el-col>
                                 <el-col :span="12">
                                   <span class="live-color">765</span>
                                 </el-col>
                               </el-row>
                             </div>
                            <div class="card m-b-sm">
                              <el-row  type="flex" align="middle">
                                 <el-col :span="12">
                                   入住房间
                                 </el-col>
                                 <el-col :span="12">
                                   <span class="live-color">765</span>
                                 </el-col>
                               </el-row>
                             </div>
                            <div class="card">
                              <el-row  type="flex" align="middle">
                                 <el-col :span="12">
                                   空置房间
                                 </el-col>
                                 <el-col :span="12">
                                   <span class="live-color">17</span>
                                 </el-col>
                               </el-row>
                             </div>
                          </div>
                        </el-col>
                        <el-col :span="8">
                          <div class="card" style="padding:15px;">
                            <div class="card-life-title">
                              <span class="eat-title-name go-color">行</span>
                              <span class="eat-title-img"></span>
                            </div>
                            <div class="card m-b-sm">
                              <el-row  type="flex" align="middle">
                                 <el-col :span="12">
                                   机场人次
                                 </el-col>
                                 <el-col :span="12">
                                   <span class="go-color">765</span>
                                 </el-col>
                               </el-row>
                             </div>
                            <div class="card m-b-sm">
                              <el-row  type="flex" align="middle">
                                 <el-col :span="12">
                                   高铁人次
                                 </el-col>
                                 <el-col :span="12">
                                   <span class="go-color">765</span>
                                 </el-col>
                               </el-row>
                             </div>
                            <div class="card">
                              <el-row  type="flex" align="middle">
                                 <el-col :span="12">
                                   其他
                                 </el-col>
                                 <el-col :span="12">
                                   <span class="go-color">17</span>
                                 </el-col>
                               </el-row>
                             </div>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </el-col>
              </el-row>
          </el-col>
        </el-row>
    </section>
  </div>
</template>

<script>
import { getBarOption, getWorkOption } from '@/utils/homeChartOption.js';
import moment from '@/utils/date.js';
import { getWeatherData } from '@/api/home.js';

export default {
  name: 'Home',
  data() {
    this.date = moment.getDate(); // 获取日期
    this.spaceChartExtend = getBarOption(); // 空间数据的柱状图
    this.energyBarChartExtend = getBarOption('/kwh', true); // 能耗数据的右侧柱状图
    this.workChartExtend = getWorkOption(); // 工单量
    this.chartData3Set = {
      radius: [50, 70],
      offsetY: 85
      /* label: {
        normal: {
          position: 'inside',
          textStyle: {
            fontSize: 14
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      } */
    };
    return {
      time: moment.getTime(), // 小时分钟
      weatherData: {}, // 天气数据
      tableData: [
        {
          type: '金融、泛金融',
          num: '26',
          value: 6.2,
          revenue: 1.2
        },
        {
          type: '商贸、电子商务',
          num: '45',
          value: 13.2,
          revenue: 1.2
        },
        {
          type: '房地产开发',
          num: '19',
          value: 2.8,
          revenue: 1.2
        },
        {
          type: '计算机软件',
          num: '26',
          value: 6.2,
          revenue: 1.2
        },
        {
          type: '教育软件',
          num: '26',
          value: 6.2,
          revenue: 1.2
        },
        {
          type: '其他',
          num: '26',
          value: 6.2,
          revenue: 1.2
        }
      ],
      tableData2: [
        {
          name: '电梯',
          count: '70',
          normal: '70',
          error: '0'
        },
        {
          name: '摄像头',
          count: '70',
          normal: '70',
          error: '0'
        },
        {
          name: '门禁',
          count: '70',
          normal: '70',
          error: '0'
        },
        {
          name: '传感器',
          count: '70',
          normal: '70',
          error: '0'
        },
        {
          name: '设备房',
          count: '70',
          normal: '70',
          error: '0'
        }
      ],
      chartData: {
        columns: ['日期', '销售', '租赁'],
        rows: [
          { 日期: '1月', 销售: 15, 租赁: 12 },
          { 日期: '2月', 销售: 12, 租赁: 25 },
          { 日期: '3月', 销售: 21, 租赁: 10 },
          { 日期: '4月', 销售: 41, 租赁: 32 }
        ]
      },
      chartData2: {
        columns: ['类型', '数量'],
        rows: [
          { 类型: '待派发55条', 数量: 55 },
          { 类型: '已派发55条', 数量: 100 },
          { 类型: '已接单55条', 数量: 200 },
          { 类型: '已执行55条', 数量: 300 },
          { 类型: '已评价55条', 数量: 400 }
        ]
      },
      chartData3: {
        columns: ['楼栋', '能耗'],
        rows: [
          { 楼栋: '1号楼20%', 能耗: 100 },
          { 楼栋: '2号楼10%', 能耗: 50 },
          { 楼栋: '3号楼10%', 能耗: 50 },
          { 楼栋: '4号楼50%', 能耗: 200 }
        ]
      },
      chartData4: {
        columns: ['楼栋', '用水', '用电'],
        rows: [
          { 楼栋: '1号楼', 用水: 15, 用电: 12 },
          { 楼栋: '2号楼', 用水: 12, 用电: 25 },
          { 楼栋: '3号楼', 用水: 21, 用电: 10 }
        ]
      }
    };
  },
  methods: {},
  computed: {},
  async mounted() {
    this.timer = setInterval(() => {
      this.time = moment.getTime();
    }, 60000);
    // 查询天气数据
    this.weatherData = await getWeatherData();
    console.log(this.weatherData);
  },
  beforeDestroy() {
    this.timer && clearInterval(this.timer);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import "../styles/mixin.scss";
.hello {
  min-height: 100%;
  background-image: url(../assets/bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: #121b2c;
  font-family: MicrosoftYaHei;
  color: #77a3f1;
  font-size: 14px;

  .top-title-bg {
    width: 100%;
    top: -43px;
    height: 148px;
    position: fixed;
    z-index: 1;
  }
  & > header {
    background: url(../assets/top_title_bg.png) no-repeat;
    background-size: 100% 135px;
    background-position: 0px -45px;

    h1 {
      position: relative;
      z-index: 10;
      margin: 0;
      padding: 29px 0;
      text-align: center;
      color: #fff;
      font-family: "微软雅黑";
      background-image: -webkit-gradient(
        linear,
        0 0,
        0 bottom,
        from(#a9caf3),
        to(#f5f9ff)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .header-left-time {
      background: url(../assets/header-left-bg.png) no-repeat;
      background-size: 100%;
      padding: 7px;
    }
    .header-right-info {
      background: url(../assets/header-right-bg.png) no-repeat;
      background-size: 100%;
      padding: 7px;
      span {
        color: #ff9b43;
      }
    }
  }

  section {
    padding: 20px;

    .card {
      background: rgba(29, 39, 65, 0.8);
      box-shadow: 1px 0px 10px rgba(14, 153, 251, 0.5) inset;
      border: 1px #296098 solid;

      .card-title {
        padding: 15px;
        border-bottom: 1px solid #304671;
        border-image: linear-gradient(to right, #296098, rgba(68, 70, 74, 0.1))
          1;
        background: linear-gradient(to right, #131b2e, rgba(24, 35, 57, 0.5));
        color: #f5a924;
        font-weight: bold;

        .card-title-arro {
          position: relative;
          width: 0;
          display: inline-block;
          border: 6px solid transparent;
          border-left: 8px solid #4b659e;
          z-index: 30;
        }
        .card-arro-shadow {
          left: -13px;
          border-left: 8px solid rgba(39, 48, 81, 0.8);
        }
      }
      .card-content {
        min-height: 130px;
        text-align: center;

        .flex-item {
          flex: 1;
          border-right: 1px solid rgba(54, 74, 121, 0.5);
          &:last-child {
            border-right: none;
          }
        }
        .flex-last {
          border-right: none;
        }

        .data {
          font-family: Impact;
          font-size: 24px;
          margin-bottom: 10px;
        }
        .name {
          font-size: 14px;
        }
      }

      .card-property {
        padding: 15px;

        & > .card {
          padding: 0 15px 15px 15px;
        }
        .card-property-title {
          margin: 15px 0;
          font-size: 14px;
          color: #ffcb78;
        }
        .card-property-info {
          span {
            background: rgba(39, 54, 89, 1);
            color: #5682e4;
            font-size: 14px;
            padding: 0 12px;
            margin: 0 3px;
            &:first-child {
              margin-left: -2px;
            }
          }
        }
      }

      .card-space {
        font-size: 14px;
        .unit {
          font-size: 14px;
          color: #305cc1;
        }
        .rent {
          background: linear-gradient(to right, #285ac2, #218fce);
          padding: 2px 10px;
        }
        .rent-arro {
          @include triangle(#218fce);
        }
        .sell {
          background: linear-gradient(to right, #c65a12, #dcb52f);
          padding: 2px 10px;
        }
        .sell-arro {
          @include triangle(#dcb52f);
        }
        .count {
          color: #5689ff;
        }
        .info {
          color: #fda32f;
        }
        .card {
          font-size: 12px;
          padding: 3px;
          .has-rent {
            padding: 2px 0;
            background: linear-gradient(
              to right,
              rgba(38, 72, 150, 1),
              rgba(33, 116, 210, 1)
            );
          }
          .has-sell {
            padding: 2px 0;
            background: linear-gradient(to right, #c65a12, #dcb52f);
          }
          .has-rent-arro {
            @include twoTriangle(#2174d2);
          }
          .has-sell-arro {
            @include twoTriangle(#dcb52f);
          }
        }
      }

      .card-sensor {
        padding: 10px;
        .card-sensor-title {
          background: url(../assets/sensor-title.png) no-repeat;
          padding: 5px 0;
          background-position-x: 50%;
          color: #d8e4ff;
        }

        .park-card {
          background: #0f1a2d;
          padding: 15px;
          font-size: 12px;

          .title {
            color: #fe8c27;
            text-align: center;
            margin-bottom: 10px;
          }
          & > .card {
            color: #d8e4ff;
            padding: 8px;

            &.card-success {
              background: linear-gradient(
                to right,
                rgba(29, 82, 203, 0.5),
                rgba(40, 124, 229, 0.5)
              );
            }
          }
        }
      }

      .card-energy {
        font-size: 12px;

        .card {
          text-align: center;

          .bottom-triangle {
            width: 0;
            display: inline-block;
            border: 5px solid transparent;
            border-top: 8px solid #15d770;
            position: relative;
            top: 4px;
          }
          .tongbi-data {
            color: #15d770;
          }
          .top-triangle {
            width: 0;
            display: inline-block;
            border: 5px solid transparent;
            border-bottom: 8px solid #f14c4c;
            position: relative;
            top: -1px;
          }
          .huanbi-data {
            color: #f14c4c;
          }

          .el-col:nth-child(2) {
            padding: 8px;
            background: rgba(42, 62, 101, 1);
          }
        }
      }

      .card-firm {
        .card-firm-title {
          color: #9eed57;
          background: linear-gradient(
            to right,
            rgba(39, 54, 90, 1),
            rgba(28, 46, 88, 1),
            rgba(39, 55, 91, 1)
          );
          padding: 5px 0;
          margin: 5px 30px 0 30px;
        }
      }

      .card-life {
        padding: 15px;

        .card {
          text-align: center;

          .el-col:nth-child(2) {
            padding: 8px;
            background: rgba(42, 62, 101, 1);
          }
          .eat-color {
            color: #ff812d;
          }
          .card-life-title {
            margin-bottom: 10px;
          }
          .live-color {
            color: #17d87b;
          }
          .go-color {
            color: #2dc1ff;
          }
        }
      }
    }
  }
}
.el-row {
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>

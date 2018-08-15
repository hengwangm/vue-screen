<template>
  <div class="ems">
    <header>
      <!-- <img class="top-title-bg" src="../assets/top_title_bg.png" alt=""> -->
      <el-row type="flex" align="bottom">
        <el-col :span="8">
            <el-row class="header-left-time">
              <el-col :span="6" :offset="6">2018年8月18号</el-col>
              <el-col :span="6">13:30</el-col>
            </el-row>
        </el-col>
        <el-col :span="8">
          <h1>丽岛2046运营中心</h1>
        </el-col>
        <el-col :span="8">
            <el-row class="header-right-info">
                <el-col :span="6" :offset="6">
                  温度 :
                  <span>26.5℃</span>
                </el-col>
                <el-col :span="6">
                  湿度 :
                  <span>26.5℃</span>
                </el-col>
                <el-col :span="6">
                  PM2.5 :
                   <span>50</span>
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
                      </div>
                      <div class="flex-item">
                          <div class="data font-color1">9</div>
                          <div class="name">入住户数</div>
                      </div>
                      <div class="flex-item">
                          <div class="data font-color2">35%</div>
                          <div class="name">APP注册数</div>
                      </div>
                      <div class="flex-item">
                          <div class="data font-color3">318</div>
                          <div class="name">物业费收缴率</div>
                      </div>
                      <div class="flex-item">
                          <div class="data font-color4">9</div>
                          <div class="name">EMS工单统计</div>
                      </div>
                      <div class="flex-item flex-last">
                          <div class="data  font-color5 ">1</div>
                          <div class="name">物业出勤率</div>
                      </div>
                      <div class="flex-item">
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
                      <div class="flex-item flex-last">
                          <div class="data  font-color5">1</div>
                          <div class="name">待处理工单</div>
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
                  业主数据
                  <span class="card-title-arro">
                  </span>
                  <span class="card-title-arro card-arro-shadow"></span>
                </header>
                  <!-- 业主数据 -->
                <div class="card-owner">
                    <el-row type="flex" align="middle" justify="center" class="card-content">
                      <div class="flex-item">
                          <div class="data font-color1">9</div>
                          <div class="name">业主总数</div>
                      </div>
                      <div class="flex-item">
                          <div class="data font-color2">35%</div>
                          <div class="name">业主户数</div>
                      </div>
                      <div class="flex-item">
                          <div class="data font-color3">42%</div>
                          <div class="name">入住率</div>
                      </div>
                    </el-row>
                    <el-row type="flex" :gutter="20"  align="middle" justify="center">
                       <el-col :span="3" class="text-right">
                        <span class="">业主投诉</span>
                      </el-col>
                      <el-col :span="5" class="text-right">
                        <span class="card-owner-font complain-color1">1-11月份</span>
                      </el-col>
                       <el-col :span="11">
                         <div class="card text-center ">
                            <el-row type="flex" align="middle">
                                <el-col :span="20" class="card-owner-complain-bar">
                                    <span class="span-padding-1"></span>
                                </el-col>
                                <el-col  class="card-owner-complain-arro" :span="2">
                                </el-col>
                                <el-col :span="2">
                                </el-col>
                            </el-row>
                         </div>
                      </el-col>
                       <el-col :span="5">
                         <div class="card">
                          <span class="card-owner-font complain-color2">82 例</span>
                         </div>
                      </el-col>
                    </el-row>
                    <el-row type="flex" :gutter="20"  align="middle" justify="center">
                       <el-col :span="3" class="text-right">
                        <span class="">业主报事</span>
                      </el-col>
                      <el-col :span="5" class="text-right">
                        <span class="card-owner-font matter-color1">2018-5</span>
                      </el-col>
                       <el-col :span="11">
                          <el-row type="flex" align="middle">
                              <el-col :span="1" class="card-owner-matter-bar"
                                v-for="(item, index) in 24" :key="index"
                                :class="{ 'card-owner-matter-bar-active': index <=11 }">
                                  <span class="span-padding-1"></span>
                              </el-col>
                          </el-row>
                      </el-col>
                       <el-col :span="5">
                         <div class="card">
                          <span class="card-owner-font  matter-color2">212 单</span>
                         </div>
                      </el-col>
                    </el-row>
                    <el-row type="flex" :gutter="20"  align="middle" justify="center">
                       <el-col :span="3" class="text-right">
                        <span class="">邻里情况</span>
                      </el-col>
                      <el-col :span="5" class="text-right">
                        <span class="card-owner-font neighbor-color1">2018-5</span>
                      </el-col>
                       <el-col :span="11">
                          <el-row type="flex" align="middle">
                              <el-col :span="1" class="card-owner-matter-bar"
                                v-for="(item, index) in 24" :key="index"
                                :class="{ 'card-owner-neighbor-bar-active': index <= 20 }">
                                  <span class="span-padding-1"></span>
                              </el-col>
                          </el-row>
                      </el-col>
                       <el-col :span="5">
                         <div class="card">
                          <span class="card-owner-font  neighbor-color2">212 单</span>
                         </div>
                      </el-col>
                    </el-row>
                     <el-row type="flex" :gutter="20"  align="middle" justify="center">
                       <el-col :span="3" class="text-right">
                        <span class="">满意度</span>
                      </el-col>
                      <el-col :span="5" class="text-right">
                        <span class="card-owner-font fine-color1">1、2、3月份</span>
                      </el-col>
                       <el-col :span="11">
                         <div class="card text-center ">
                            <el-row type="flex" align="middle">
                                <el-col :span="20" class="card-owner-fine-bar">
                                    <span class="span-padding-1"></span>
                                </el-col>
                                <el-col  class="card-owner-fine-arro" :span="2">
                                </el-col>
                                <el-col :span="2">
                                </el-col>
                            </el-row>
                         </div>
                      </el-col>
                       <el-col :span="5">
                         <div class="card">
                          <span class="card-owner-font fine-color2">96.67%</span>
                         </div>
                      </el-col>
                    </el-row>
                     <el-row type="flex" :gutter="20"  align="middle" justify="center">
                       <el-col :span="3" class="text-right">
                      </el-col>
                      <el-col :span="5" class="text-right">
                        <span class="card-owner-font fine-color1">4、5、6月份</span>
                      </el-col>
                       <el-col :span="11">
                         <div class="card text-center ">
                            <el-row type="flex" align="middle">
                                <el-col :span="18" class="card-owner-fine-bar">
                                    <span class="span-padding-1"></span>
                                </el-col>
                                <el-col  class="card-owner-fine-arro" :span="2">
                                </el-col>
                                <el-col :span="2">
                                </el-col>
                            </el-row>
                         </div>
                      </el-col>
                       <el-col :span="5">
                         <div class="card">
                          <span class="card-owner-font fine-color2">91.17%</span>
                         </div>
                      </el-col>
                    </el-row>
                     <el-row type="flex" :gutter="20"  align="middle" justify="center">
                       <el-col :span="3" class="text-right">
                      </el-col>
                      <el-col :span="5" class="text-right">
                        <span class="card-owner-font fine-color1">7、8、9月份</span>
                      </el-col>
                       <el-col :span="11">
                         <div class="card text-center ">
                            <el-row type="flex" align="middle">
                                <el-col :span="16" class="card-owner-fine-bar">
                                    <span class="span-padding-1"></span>
                                </el-col>
                                <el-col  class="card-owner-fine-arro" :span="2">
                                </el-col>
                                <el-col :span="2">
                                </el-col>
                            </el-row>
                         </div>
                      </el-col>
                       <el-col :span="5">
                         <div class="card">
                          <span class="card-owner-font fine-color2">90.27%</span>
                         </div>
                      </el-col>
                    </el-row>
                </div>
            </div>
            <div class="card">
                <header class="card-title font-white">
                  人员数据
                  <span class="card-title-arro">
                  </span>
                  <span class="card-title-arro card-arro-shadow"></span>
                </header>
                <!-- 人员数据 -->
                <div class="card-person">
                   <ve-pie
                      height="302px"
                      :extend="personChartExtend"
                      :data="chartData1">
                    </ve-pie>
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
                        <div class="card-sensor-title text-center">设施设备指标</div>
                        <ve-pie
                          height="145px"
                          :extend="sensorChartExtend"
                          :data="chartData2">
                        </ve-pie>
                      </el-col>
                      <el-col :span="5">
                        <div class="card-sensor-title text-center m-b">停车位</div>
                        <div class="park-card">
                          <!-- <div class="title">总数 1761</div> -->
                          <div class="card m-b card-success">
                             <el-row :gutter="20" type="flex" align="middle">
                               <el-col :span="24" class="text-center">总数 280</el-col>
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
                        <div class="card-sensor-title text-center">电梯运行</div>
                        <ve-pie
                          height="145px"
                          :legend-visible="false"
                          :settings="liftChartSettings"
                          :data="chartData3">
                        </ve-pie>
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
                      <el-col :span="12">
                        <ve-line
                            height="190px"
                            :data="chartData4"
                            :extend="energyPowerChartExtend">
                          </ve-line>
                      </el-col>
                      <el-col :span="12">
                        <ve-line
                            height="190px"
                            :data="chartData5"
                            :extend="energyWaterChartExtend">
                          </ve-line>
                      </el-col>
                  </el-row>
                </div>
             </div>
              <el-row :gutter="10" type="flex" align="middle">
                <el-col :span="10">
                  <div class="card ">
                    <header class="card-title font-white">
                      工单完成排名TOP10
                      <span class="card-title-arro">
                      </span>
                      <span class="card-title-arro card-arro-shadow"></span>
                    </header>
                    <div class="card-life">
                      <ve-histogram
                          height="180px"
                          :data="chartData6"
                          :extend="workChartExtend">
                      </ve-histogram>
                    </div>
                  </div>
                </el-col>
                <el-col :span="14">
                  <div class="card">
                    <header class="card-title font-white">
                      各部门工单统计
                      <span class="card-title-arro">
                      </span>
                      <span class="card-title-arro card-arro-shadow"></span>
                    </header>
                    <div class="card-life">
                      <ve-histogram
                          height="180px"
                          :data="deptWorkChartData"
                          :extend="deptWorkChartExtend">
                      </ve-histogram>
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
import {
  getEnergyOption,
  getWorkOption,
  getPersonOption,
  getSensorOption
} from '@/utils/emsChartOption.js';

export default {
  name: 'HelloWorld',
  data() {
    this.personChartExtend = getPersonOption(); // 人员数据饼图的配置项
    this.sensorChartExtend = getSensorOption(); // 设施设备指标
    this.workChartExtend = getWorkOption(null, true); // 工单排名的配置项
    this.deptWorkChartExtend = getWorkOption(); // 部门工单数据的配置项
    /* 能耗用电 */
    this.energyPowerChartExtend = getEnergyOption(
      'rgba(236,55,60,1)',
      'rgba(0,255,255,1)',
      '单位 kwh'
    );
    /* 能耗用水 */
    this.energyWaterChartExtend = getEnergyOption(
      'rgba(235,190,7,1)',
      'rgba(0,99,243,1)',
      '单位 m³'
    );
    /* 电梯图标的设置 */
    this.liftChartSettings = {
      radius: 50,
      offsetY: 85
    };
    return {
      tableData2: [
        {
          name: '配电房',
          count: '70',
          normal: '70',
          error: '0'
        },
        {
          name: '生活水泵房',
          count: '70',
          normal: '70',
          error: '0'
        },
        {
          name: '消防水泵房',
          count: '70',
          normal: '70',
          error: '0'
        },
        {
          name: '电梯机房',
          count: '70',
          normal: '70',
          error: '0'
        },
        {
          name: '监控房',
          count: '70',
          normal: '70',
          error: '0'
        }
      ],
      chartData1: {
        columns: ['部门', '数量'],
        rows: [
          { 部门: '物业部 10', 数量: 10 },
          { 部门: '保洁部 12', 数量: 12 },
          { 部门: '秩序部 16', 数量: 16 },
          { 部门: '保绿部 30', 数量: 30 },
          { 部门: '工程部 20', 数量: 20 }
        ]
      },
      chartData2: {
        columns: ['类型', '数量'],
        rows: [
          { 类型: '弱点 524', 数量: 524 },
          { 类型: '消防 75', 数量: 75 },
          { 类型: '弱电 35', 数量: 35 },
          { 类型: '给排水 7', 数量: 7 },
          { 类型: '暖通 50', 数量: 50 },
          { 类型: '能源 50', 数量: 50 },
          { 类型: '电梯 50', 数量: 50 },
          { 类型: '传感器 50', 数量: 50 },
          { 类型: '厨房餐厅 50', 数量: 50 },
          { 类型: '机械设备 50', 数量: 50 }
        ]
      },
      chartData3: {
        columns: ['设备状态', '数量'],
        rows: [
          { 设备状态: '正常', 数量: 87 },
          { 设备状态: '故障', 数量: 5 },
          { 设备状态: '停用', 数量: 8 }
        ]
      },
      chartData4: {
        columns: ['日期', '照明用电', '消防用电'],
        rows: [
          { 日期: '1月', 照明用电: 0, 消防用电: 0 },
          { 日期: '2月', 照明用电: 3530, 消防用电: 1000 },
          { 日期: '3月', 照明用电: 2923, 消防用电: 855 },
          { 日期: '4月', 照明用电: 1723, 消防用电: 1423 },
          { 日期: '5月', 照明用电: 3792, 消防用电: 2566 },
          { 日期: '6月', 照明用电: 4593, 消防用电: 844 }
        ]
      },
      chartData5: {
        columns: ['日期', '消防用水', '保洁用水'],
        rows: [
          { 日期: '1月', 消防用水: 0, 保洁用水: 0 },
          { 日期: '2月', 消防用水: 3530, 保洁用水: 1000 },
          { 日期: '3月', 消防用水: 2923, 保洁用水: 585 },
          { 日期: '4月', 消防用水: 1723, 保洁用水: 969 },
          { 日期: '5月', 消防用水: 3792, 保洁用水: 255 },
          { 日期: '6月', 消防用水: 4593, 保洁用水: 2566 }
        ]
      },
      chartData6: {
        columns: ['姓名', '工单数'],
        rows: [
          { 姓名: '李木子', 工单数: 222 },
          { 姓名: '张希', 工单数: 3530 },
          { 姓名: '刘一凡', 工单数: 2923 },
          { 姓名: '孙子套', 工单数: 1723 },
          { 姓名: '李浩', 工单数: 3792 },
          { 姓名: '张峰', 工单数: 4593 },
          { 姓名: '李默', 工单数: 4593 },
          { 姓名: '孙永伟', 工单数: 4593 },
          { 姓名: '张立东', 工单数: 4593 }
        ]
      },
      /* 部门工单数据 */
      deptWorkChartData: {
        columns: ['部门', '计划工单', '应急工单'],
        rows: [
          { 部门: '物业部', 计划工单: 888, 应急工单: 999 },
          { 部门: '保洁部', 计划工单: 3530, 应急工单: 1000 },
          { 部门: '工程部', 计划工单: 2923, 应急工单: 855 },
          { 部门: '秩序部', 计划工单: 1723, 应急工单: 1423 },
          { 部门: '第三方', 计划工单: 3792, 应急工单: 2566 }
        ]
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import "../styles/mixin.scss";
.ems {
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

      .card-owner {
        padding: 15px 40px;
        & > .card-content {
          min-height: 70px;
        }

        .span-padding-1 {
          padding: 1px;
        }

        .card {
          font-size: 12px;
          padding: 3px;
          .card-owner-complain-bar {
            padding: 2px 0;
            background: linear-gradient(to right, #65cd1e, #c3fc75);
          }
          .card-owner-complain-arro {
            @include twoTriangle(#c3fc75);
          }
          .card-owner-fine-bar {
            padding: 2px 0;
            background: linear-gradient(to right, #06abf9, #88cae2);
          }
          .card-owner-fine-arro {
            @include twoTriangle(#88cae2);
          }
        }

        .card-owner-matter-bar {
          background-color: #121929;
          margin: 0 3px;
          &:first-child {
            margin: 0 3px 0 0;
          }
          &:last-child {
            margin: 0 0 0 3px;
          }
        }

        .card-owner-matter-bar-active {
          background: linear-gradient(to bottom, #c65a12, #ffd43f);
        }
        .card-owner-neighbor-bar-active {
          background: linear-gradient(to bottom, #0c85af, #01c6ff);
        }

        .card-owner-font {
          font-family: DigifaceWide PingFang SC;
          font-size: 15px;
          padding-left: 10px;
        }
        .complain-color1 {
          color: #65cd1e;
        }
        .complain-color2 {
          color: #c3fc75;
        }
        .matter-color1 {
          color: #c65a12;
        }
        .matter-color2 {
          color: #ffd43f;
        }
        .neighbor-color1 {
          color: #0c85af;
        }
        .neighbor-color2 {
          color: #01c6ff;
        }
        .fine-color1 {
          color: #06abf9;
        }
        .fine-color2 {
          color: #88cae2;
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
          padding: 22.5px;
          font-size: 12px;

          & > .card {
            color: #fe8c27;
            padding: 10px;

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
      .card-life {
        padding: 8.5px;
      }
    }
  }
}
</style>

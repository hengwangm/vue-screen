import echarts from 'echarts';

function getPersonOption() {
  return {
    grid: {
      left: '3%',
      containLabel: true
    },
    legend(v) {
      v.data = v.data.map(da => {
        return {
          name: da,
          icon: 'circle'
        };
      });
      const obj = {
        formatter(name) {
          const names = name.split(' ');
          const arr = ['{a|' + names[0] + '}', '{b|' + names[1] + '}'];
          return arr.join('');
        },
        orient: 'vertical',
        right: 140,
        y: 'center',
        itemWidth: 10,
        textStyle: {
          rich: {
            a: {
              fontSize: 14,
              verticalAlign: 'center',
              align: 'center',
              padding: [0, 0, 0, 5],
              color: '#6289BF'
            },
            b: {
              fontSize: 16,
              align: 'center',
              padding: [0, 0, 0, 10],
              color: '#17D87B',
              lineHeight: 5
            }
          }
        }
      };
      Object.assign(v, obj);
      return v;
    },
    'series.0.center': ['35%', '50%'],
    'series.0.label': false
  };
}

function getSensorOption() {
  return {
    legend(v) {
      v.data = v.data.map(da => {
        return {
          name: da,
          icon: 'circle'
        };
      });
      const obj = {
        orient: 'vertical',
        top: 20,
        right: 10,
        y: 'center',
        itemWidth: 10,
        textStyle: {
          color: '#6289BF'
        }
      };
      Object.assign(v, obj);
      return v;
    },
    'series.0.center': ['25%', '50%'],
    'series.0.radius': '70%',
    'series.0.label': false
  };
}

function getEnergyOption(color1, color2, yAxisName) {
  return {
    series(v) {
      v.forEach((i, n) => {
        // 处理颜色的透明度
        const color =
          n === 0 ? [color1, color1.replace('1)', '0.2)')] : ['#00FFFF', color2.replace('1)', '0.2)')];
        i.areaStyle = {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: color[0]
            },
            {
              offset: 1,
              color: color[1]
            }
            ])
          }
        };
        i.itemStyle = {
          color: n === 0 ? color1 : color2
        };

        i.smooth = false; // 设置连线是否平滑
        i.symbol = 'circle'; // 连线的图为园
        i.symbolSize = '5';
      });
      return v;
    },
    legend: {
      itemHeight: 7,
      textStyle: {
        color: '#6289BF'
      }
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '3%',
      containLabel: true
    },
    yAxis: {
      position: 'left',
      type: 'value',
      name: yAxisName,
      nameTextStyle: {
        color: '#6289BF'
      },
      axisLabel: {
        textStyle: {
          color: '#6289BF'
        }
      },
      splitLine: {
        show: false // 不展示分割线
      },
      axisLine: {
        show: true, // 展示y轴线
        lineStyle: {
          color: '#6289BF'
        }
      }
    },
    xAxis: {
      boundaryGap: false,
      axisLabel: {
        textStyle: {
          color: '#6289BF'
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#6289BF'
        }
      }
    }
  };
}

function getWorkOption(yAxisName = '/条') {
  return {
    series(v) {
      v.forEach((i, n) => {
        i.barWidth = 20;
        const color =
          n === 0 ? ['#0063F8', '#84E6FF'] : ['#C65A12', '#DCB52F'];
        i.itemStyle = {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: color[0]
            },
            {
              offset: 1,
              color: color[1]
            }
            ])
          }
        };
      });
      return v;
    },
    legend: {
      textStyle: {
        color: '#6289BF'
      }
    },
    grid: {
      left: '3%',
      right: '6%',
      bottom: '3%',
      containLabel: true
    },
    yAxis: {
      position: 'left',
      type: 'value',
      name: yAxisName,
      nameTextStyle: {
        color: '#6289BF'
      },
      axisLabel: {
        textStyle: {
          color: '#6289BF'
        }
      },
      splitLine: {
        show: false // 不展示分割线
      },
      axisLine: {
        show: true, // 展示y轴线
        lineStyle: {
          color: '#6289BF'
        }
      }
    },
    xAxis: {
      axisLabel: {
        rotate: 40,
        textStyle: {
          color: '#6289BF',
          fontSize: 12
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#6289BF'
        }
      }
    }
  };
}
export {
  getEnergyOption, // 能耗数据的option
  getWorkOption, // 工单数据的option
  getPersonOption, // 人员数据的option
  getSensorOption // 设施设备指标的option
};

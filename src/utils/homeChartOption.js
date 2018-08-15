import echarts from 'echarts';

/* 柱状图的公共options
isRight是为了使能耗数据的图例在右侧 */
function getBarOption(unit = '/套', isRight) {
  const option = {
    series(v) {
      v.forEach((i, n) => {
        i.barWidth = 20;
        const color =
          n === 0 ? ['#285AC2', '#218FCE'] : ['#C65A12', '#DCB52F'];
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
      right: 50,
      textStyle: {
        color: '#6289BF'
      }
    },
    grid: {
      left: '6%',
      right: isRight ? '20%' : '6%',
      bottom: '6%',
      containLabel: true
    },
    yAxis: {
      position: 'left',
      type: 'value',
      name: unit,
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

  if (isRight) {
    const right = {
      legend: {
        orient: 'vertical',
        right: 50,
        y: 'center',
        textStyle: {
          color: '#6289BF'
        }
      }
    };
    Object.assign(option, right);
  }
  return option;
}

function getWorkOption() {
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
        right: 40,
        y: 'center',
        itemWidth: 10,
        textStyle: {
          color: '#6289BF'
        }
      };
      Object.assign(v, obj);
      return v;
    },
    'series.0.center': ['30%', '50%'],
    'series.0.radius': '70%',
    'series.0.label': false
  };
}
export {
  getBarOption, // 柱状图的option
  getWorkOption // 工单量的options
};

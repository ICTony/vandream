<template>
    <div class="funnel-chart">
        <div :id="chartId" class="chart-style"></div>
    </div>
</template>

<script>
import echarts from "echarts";
export default {
    name: "funnelChart",
    props: {
        data: {
            type: Array,
            default: function() {
                return [];
            }
        },
        color: {
            type: Array,
            default: function() {
                return [];
            }
        },
        chartId: {
            default: String
        }
    },
    created() {},
    mounted() {
        var myChart = echarts.init(document.getElementById(this.chartId));
        var option = {
            //   title: {
            //     text: "堆叠区域图"
            //   },
            areaStyle:{
                opacity:0.2
            },
            tooltip: {
                trigger: "axis",
                // axisPointer: {
                //     type: "line",
                //     label: {
                //         backgroundColor: "red"
                //     }
                // },
                formatter:
                    '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:6px;border:1px solid #63D599 ;height:6px;"></span> {c1} </br><span style="display:inline-block;margin-right:5px;border-radius:10px;width:6px;height:6px;border:1px solid #FF9C64"></span> {c0}',
                textStyle: {
                    fontFamily: "ArialMT",
                    fontSize: 10,
                    color: "#FFFFFF"
                }
            },
            legend: {
                data: ["邮件营销", "联盟广告"],
                left: 0,
                itemWidth: 10,
                itemheight: 10,
                padding: [10, 0, 0, 0],
                // formatter:function(params){
                //     return 'Legend ' + name;
                //     console.log(params)
                // },
                textStyle: {
                    color: "#666",
                    fontFamily: "PingFangSC-Regular",
                    fontSize: 10
                }
            },
            //   toolbox: {
            //     feature: {
            //       saveAsImage: {}
            //     }
            //   },
            grid: {
                left: "3%",
                right: "15%",
                bottom: "3%",
                containLabel: true
            },
            xAxis: [
                {
                    type: "category",
                    boundaryGap: false,
                    data: [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11",
                        "12"
                    ],
                    name: "(月)",
                    //   nameLocation: "end",
                    nameTextStyle: {
                        nameGap: 0,
                        color: "#999",
                        fontFamily: "PingFangSC-Regular;",
                        fontSize: 10,
                        padding: [30, 0, 0, 0]
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#ddd"
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        color: "#999",
                        fontSize: 10
                    }
                }
            ],

            yAxis: [
                {
                    type: "value",
                    axisTick: {
                        show: false
                    },
                    splitNumber: 3,
                    axisLabel: {
                        show: true,
                        color: "#999",
                        fontSize: 10
                    },
                    name: "(万元)",
                    //   nameLocation: "end",
                    nameTextStyle: {
                        nameGap: 0,
                        color: "#999",
                        fontFamily: "PingFangSC-Regular;",
                        fontSize: 10,
                        padding: [0, 45, 0, 0]
                    },
                    splitLine: {
                        show: true,
                        interval: 40,
                        lineStyle: {
                            color: "#ddd",
                            opacity:0.2
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#ddd"
                        }
                    }
                    //   splitArea:{
                    //       interval:2,
                    //       show:true
                    //   }
                }
            ],
            series: [
                {
                    name: "邮件营销",
                    type: "line",
                    stack: "总量",
                    areaStyle: {},
                    data: [
                        220,
                        182,
                        191,
                        234,
                        290,
                        330,
                        310,
                        210,
                        210,
                        210,
                        210,
                        210
                    ],
                    itemStyle: {
                        opacity: 1
                    }
                },
                {
                    name: "联盟广告",
                    type: "line",
                    stack: "总量",
                    areaStyle: {},
                    data: [
                        120,
                        132,
                        101,
                        134,
                        90,
                        230,
                        210,
                        210,
                        210,
                        210,
                        210,
                        200
                    ]
                }
            ],
            color: [ "#FF9C64 ","#63D599"]
        };

        myChart.setOption(option);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.funnel-chart {
    height: 160px;
    background-color: #fff;
    position: relative;
    .chart-style {
        width: 100%;
        height: 200px;
    }
    .data-container {
        position: absolute;
        top: 10%;
        left: 48%;
    }
    .data-container {
        .data-container-item {
            position: relative;
        }
        .chart-data {
            font-family: DINPro-Bold;
            font-size: 11px;
            color: #333;
            line-height: 18px;
            font-weight: 800;
            margin-left: 10px;
        }
        .chart-percent {
            font-family: ArialMT;
            font-size: 10px;
            margin-left: 10px;
            color: #bbbbbb;
        }
        .border-line {
            border-left: 1px solid #eee;
            position: absolute;
            left: 0;
            height: 30px;
        }
        .line-first {
            height: 20px;
            top: 10px;
        }
        .line-last {
            height: 15px;
            top: -5px;
        }
        .border-line::before {
            content: "";
            display: block;
            width: 4px;
            height: 4px;
            border: 1px solid #ccc;
            background: #fff;
            border-radius: 50%;
            position: absolute;
            left: -4px;
            top: 5px;
        }
        .line-first::before {
            top: -5px;
        }
        .line-last::before {
            top: 10px;
        }
    }
}
</style>

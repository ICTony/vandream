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
            top: "20%",
            backgroundColor:'#fff',
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            //   legend: {
            //     orient: "vertical",
            //     x: "left",
            //     data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
            //   },
            series: [
                {
                    name: "访问来源",
                    type: "pie",
                    radius: ["40%", "50%"],
                    minAngle :'10',
                    startAngle:'60',
                    avoidLabelOverlap: true,
                    label: {
                        // formatter:'{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}',
                        // fontSize:'10',
                        // color:'#666666',
                        // fontFamily:'PingFangSC-Regular',
                        normal: {
                            show: true,
                            position: "outside",
                            formatter: "{ber|{b}}\n {cer|{c}}\n {hr|} \n{per|{d}%}  ",
                            fontSize: "12",
                            color: "#666666",
                            fontFamily: "PingFangSC-Regular",
                            rich: {
                                b: {
                                    color: "#999",
                                    lineHeight: 22,
                                    color: "#666",
                                    align: "center"
                                },
                                ber: {
                                    color: "#666",
                                    fontFamily: " PingFangSC-Regular",
                                    lineHeight: 15
                                },
                                // abg: {
                                //     backgroundColor: '#333',
                                //     width: '100%',
                                //     align: 'right',
                                //     height: 22,
                                //     borderRadius: [4, 4, 0, 0]
                                // },
                                hr: {
                                    borderColor: "#ccc",
                                    width: "100%",
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                cer: {
                                    fontFamily: "DINPro-Bold",
                                    fontSize: 10,
                                    fontWeight:800,
                                    color: "#333333",
                                    
                                },
                                b: {
                                    // fontSize: 16,
                                    // lineHeight: 33
                                },
                                per: {
                                     color: "#666666",
                                     fontSize:'13',
                                     fontFamily:'ArialMT'
                                    // backgroundColor: "#334455",
                                    // padding: [2, 4],
                                    // borderRadius: 2
                                }
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: "12"
                                // fontWeight: "bold"
                            }
                        },
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: "outside"
                                }
                            }
                        }
                    },
                    labelLine: {
                        show: true,
                        length: 3,
                        length2: 20,
                        smooth: 0.1,
                        lineStyle: {
                            width: 1,
                            color: "#CCCCCC "
                        }
                    },
                    itemStyle:{
                       borderColor:'#fff',
                        borderWidth:'2',
                    },
                    data: this.data
                }
            ],
            color: this.color
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
      margin-top: 20px;
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

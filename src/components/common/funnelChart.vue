<template>
    <div class="funnel-chart">
        <div id="chart-main">万郡绿建</div>
    </div>
</template>

<script>
import echarts from "echarts";
export default {
    name: "funnelChart",
    props: {
        data: {
            type: Object,
            default: function() {
                return {};
            }
        }
    },
    created() {},
    mounted() {
        var myChart = echarts.init(document.getElementById("chart-main"));
        var option = {
            title: {
                // text: "漏斗图(对比)",
                // subtext: "纯属虚构",
                // left: "left",
                // top: "bottom"
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c}%"
            },
            // toolbox: {
            //     show: true,
            //     orient: "vertical",
            //     top: "center",
            //     feature: {
            //         dataView: { readOnly: true },
            //         restore: {},
            //         saveAsImage: {}
            //     }
            // },
            // legend: {
            //     // orient: "vertical",
            //     // left: "left",
            //     // data: ["产品A", "产品B", "产品C", "产品D", "产品E"]
            // },
            // calculable: true,
            series: [
                {
                    name: "供方",
                    type: "funnel",
                    width: "50%",
                    height: "80%",
                    left: "10px",
                    top: "20%",
                    funnelAlign: "right",
                    label:{
                        show:true,
                        position:'outside',
                        fontSize:12,
                        fontFamily:'PingFangSC-Regular',


                    },
                    labelLine:{
                        show:false,
                        length:1,
                        lineStyle:{
                            color:'rgba(0, 0, 0, 0.5)',
                            width:40
                        }
                    },
                    emphasis:{
                        show:true,
                        color:'#000'
                    },
                    // center: ["5%", "25%"], // for pie
                    data: [
                        { value: 60, name: '邀约客户' },
                        { value: 30, name: "意向客户" },
                        { value: 10, name: "转化客户" },
                        { value: 80, name: "签约客户" }
                    ]
                }
            ]
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
    #chart-main {
        width: 100%;
        height: 160px;
    }
}
</style>

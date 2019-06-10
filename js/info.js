$(function () {
    myCharline();
    myCharpie();
    myCharba();
    $("#dataNums").rollNum({
        deVal:88888
    });

})
var sum = 13000;


//折线图开始
function myCharline(){
    var dom = document.getElementById("infoLineId");
    var myChart = echarts.init(dom);
    // var app = {};
    // option = null;
    // option = {
    //     xAxis: {
    //         type: 'category',
    //         boundaryGap: false,
    //         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    //         axisLabel: {
    //             show: true,
    //             textStyle: {
    //                 color: '#fff',  //更改坐标轴文字颜色
    //                 fontSize : 14      //更改坐标轴文字大小
    //             }
    //         },
    //         axisLine:{
    //             lineStyle:{
    //                 color:'#fff' //更改坐标轴颜色
    //             }
    //         }
    //
    //     },
    //     yAxis: {
    //         type: 'value',
    //         xisLabel: {
    //             show: true,
    //             textStyle: {
    //                 color: '#fff',  //更改坐标轴文字颜色
    //                 fontSize : 14      //更改坐标轴文字大小
    //             }
    //         },
    //         axisLine:{
    //             lineStyle:{
    //                 color:'#fff' //更改坐标轴颜色
    //             }
    //         }
    //     },
    //     series: [{
    //         data: [820, 932, 901, 934, 1290, 1330, 1320],
    //         type: 'line'
    //     }]
    // };
    // ;
    // if (option && typeof option === "object") {
    //     myChart.setOption(option, true);
    // }

    var app = {};
    option = null;
    option = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['0:00', '3:00', '6:00', '9:00', '12:00', '15:00', '18:00','21:00','24:00'],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',  //更改坐标轴文字颜色
                    fontSize: 14      //更改坐标轴文字大小
                }
            }
        },
        yAxis: {
            type: 'value',
            xyisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',  //更改坐标轴文字颜色
                    fontSize : 14      //更改坐标轴文字大小
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#fff' //更改坐标轴颜色
                }
            }
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
        }]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}


//折线图结束
// 饼形图开始
function myCharpie() {
    var Charpie = document.getElementById("charpie");
    var myChart = echarts.init(Charpie);
    var app = {};
    option = null;
    option = {
        title : {
            text: '用户访问来源',
            subtext: '数据',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

}
// 饼形图结束

// 柱形图开始
function myCharba() {
    var dom = document.getElementById("charbar");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',  //更改坐标轴文字颜色
                    fontSize : 14      //更改坐标轴文字大小
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#fff' //更改坐标轴颜色
                }
            }

        },
        yAxis: {
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',  //更改坐标轴文字颜色
                    fontSize : 14      //更改坐标轴文字大小
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#fff' //更改坐标轴颜色
                }
            }
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        }]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

// 柱形图结束

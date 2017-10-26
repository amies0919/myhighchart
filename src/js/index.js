/**
 * Created by shennana on 2017/10/26.
 */
$(document).on('ready', function () {
    var chart = null;
    $(function () {
        $('#container').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                // spacing : [100, 0 , 40, 0]
            },
            title: {
                // floating:true,
                text: ' '
            },
            colors: ['#1d7df4', '#ff3d67', '#ff9500', '#f1c40e', '#9860df'],
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false,
                        // format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        // style: {
                        //     color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        // }
                    },
                    point: {
                        events: {
                            mouseOver: function(e) {  // 鼠标滑过时动态更新标题
                                // // 标题更新函数，API 地址：https://api.hcharts.cn/highcharts#Chart.setTitle
                                // chart.setTitle({
                                //     text: e.target.name+ '\t'+ e.target.y + ' %'
                                // });
                            }
                            //,
                            // click: function(e) { // 同样的可以在点击事件里处理
                            //     chart.setTitle({
                            //         text: e.point.name+ '\t'+ e.point.y + ' %'
                            //     });
                            // }
                        }
                    },
                    borderWidth:0,
                    slicedOffset: 1
                },
                series: {
                    states: {
                        hover: {
                            // enabled: true,
                            brightness:0,
                            lineWidthPlus:30,
                            halo:{
                                size:6,
                                opacity:1
                            }
                        },
                        select:{
                            marker: {

                            }
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                innerSize: '80%',
                name: '市场份额',
                data: [
                    {
                        name:'APP',
                        y:52652,
                        sliced:true,
                        selected: false
                    },
                    ['PC',17025],
                    ['微信', 2393],
                    ['手Q',0],
                    ['M端',598]
                ]
            }]
        }, function(c) {
             chart = c;
             console.log(c);
        });
    });

});

/**
 * Created by shennana on 2017/10/26.
 */
$(document).on('ready', function () {
    var chart = null;
    function showBorder () {
        var point = this,
            series = point.series,
            options = series.options.hoverBorder,
            shapeArgs = point.shapeArgs,
            graphic = point.graphic,
            renderer = graphic.renderer;
        var newShapeArgs = {
            x: shapeArgs.x,
            y: shapeArgs.y,
            r: shapeArgs.r + options.radius,
            innerR: shapeArgs.r - 40,
            start: shapeArgs.start,
            end: shapeArgs.end
        };
        var color = options.color || Highcharts.Color(point.color).setOpacity(options.opacity).get();
        
        if (!this.series.borderGraphic) {
            this.series.borderGraphic = renderer.arc(newShapeArgs)
                .attr({fill: color,stroke: '#FFFFFF', 'stroke-width': 5}).add(graphic.parentGroup);
        }
        else {
            this.series.borderGraphic.attr({fill: color}).attr(newShapeArgs);
        }
    }
    $(function () {
        $('#container').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                szPie: 1
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
                            mouseOver: showBorder
            
                        }
                    },
                    hoverBorder: {
                        radius: 15,
                        opacity: 1,
                        //color: 'black'
                    },
                    borderWidth:5,
                    slicedOffset: 1
                },
                series: {
                    states: {
                        hover: {
                            // enabled: true,
                            brightness:0,
                            lineWidthPlus:30,
                            // halo:{
                                // size:6,
                                // opacity:1
                            // }
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

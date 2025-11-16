(function($){

 "use strict"; // Start of use strict

$(function() {
    "use strict";
    // Just the defaults.
    $("span.pie").peity("pie",{
        width: '80',
        height: '80'
    })

    $('span.donut').peity('donut',{
        width: '50',
        height: '50'
    })


    $(".peity-line").peity("line",{
        width: '100%',
        height: '65',
		fill:['#506EE4']
    })

    $(".bar").peity("bar",{
        width: '100%',
        height: '50'
    })

    $(".bar-colours-1").peity("bar", {
        fill: ["#E8EEFE", "#E8EEFE", "#E8EEFE", "#5777E6", "#E8EEFE"],
        width: '66',
        height: '51'
    })
    $(".bar-colours-2").peity("bar", {
        fill: ["#FFF5ED", "#FFF5ED", "#FFF5ED", "#FFAD6A", "#FFF5ED"],
        width: '66',
        height: '51'
    })
    $(".bar-colours-3").peity("bar", {
        fill: ["#F0ECFF", "#F0ECFF", "#F0ECFF", "#945CFF", "#F0ECFF"],
        width: '66',
        height: '51'
    })
    $(".bar-colours-4").peity("bar", {
        fill: ["#EBF4F2", "#EBF4F2", "#EBF4F2", "#56A89B", "#EBF4F2"],
        width: '66',
        height: '51'
    })
    $(".bar-colours-5").peity("bar", {
        fill: ["#92ACF3", "#92ACF3", "#E8EEFE", "#92ACF3", "#92ACF3", "#E8EEFE", "#E8EEFE", "#E8EEFE", "#E8EEFE", "#E8EEFE"],
        width: '100',
        height: '52'
    })
    $(".bar-colours-6").peity("bar", {
        fill: ["#FFC292", "#FFC292", "#FFD7B7", "#FFD7B7", "#FFC292", "#FFC292", "#F3F4F6"],
        width: '100',
        height: '52'
    })

    $(".pie-colours-1").peity("pie", {
        fill: ["#705ec8", "#fa057a", "#2dce89", "#ff5b51"],
        width: '100',
        height: '100'
    })

    $(".pie-colours-2").peity("pie", {
		fill: ["#705ec8", "#fa057a", "#2dce89", "#ff5b51", "#fcbf09"],
        width: '100',
        height: '100'
    })

    // Using data attributes
    $(".data-attributes span").peity("donut")

    // Evented example.
    $("select").change(function() {
        var text = $(this).val() + "/" + 5
		
        $(this)
            .siblings("span.graph")
            .text(text)
            .change()

        $("#notice").text("Chart updated: " + text)
    }).change()

    $("span.graph").peity("pie")

    // Updating charts.
    var updatingChart = $(".updating-chart").peity("line", { width: "100%",height:65 })

    setInterval(function() {
        var random = Math.round(Math.random() * 20)
        var values = updatingChart.text().split(",")
        values.shift()
        values.push(random)

        updatingChart
            .text(values.join(","))
            .change()
    }, 2500)
})

$(".ticket-chart-1").peity("bar", {
    fill: ["#F26522"],
    width: '100%',
    height: '70'
})

$(".ticket-chart-2").peity("bar", {
    fill: ["#AB47BC"],
    width: '100%',
    height: '70'
})

$(".ticket-chart-3").peity("bar", {
    fill: ["#03C95A"],
    width: '100%',
    height: '70'
})

$(".ticket-chart-4").peity("bar", {
    fill: ["#0DCAF0"],
    width: '100%',
    height: '70'
})
$(".subscription-line-1").peity("line",{
    width: '100%',
    height: '35',
    fill:['#F7A37A'],
    stroke:['#F7A37A']
})
$(".subscription-line-2").peity("line",{
    width: '100%',
    height: '25',
    fill:['#70B1FF'],
    stroke:['#70B1FF']
})
$(".subscription-line-3").peity("line",{
    width: '100%',
    height: '25',
    fill:['#60DD97'],
    stroke:['#60DD97']
})
$(".subscription-line-4").peity("line",{
    width: '100%',
    height: '25',
    fill:['#DE5555'],
    stroke:['#DE5555']
})
$(".country-chart-1").peity("line",{
    width: '90%',
    height: '20',
    fill:['#fe973821'],
    stroke:['#FE9738']
})
$(".country-chart-2").peity("line",{
    width: '90%',
    height: '20',
    fill:['#8000ff26'],
    stroke:['#8000FF']
})
$(".country-chart-3").peity("line",{
    width: '90%',
    height: '20',
    fill:['#3550dc1c'],
    stroke:['#3550DC']
})
$(".country-chart-4").peity("line",{
    width: '90%',
    height: '20',
    fill:['#f301ca21'],
    stroke:['#F301CA']
})


$(".company-bar1").peity("bar", {
    fill: ["#3550DC"],
    width: '36',
    height: '37'
})

$(".company-bar2").peity("bar", {
    fill: ["#01B664"],
    width: '36',
    height: '37'
})

$(".company-bar3").peity("bar", {
    fill: ["#FF0000"],
    width: '36',
    height: '37'
})

$(".company-bar4").peity("bar", {
    fill: ["#FE9738"],
    width: '36',
    height: '37'
})

})(jQuery);


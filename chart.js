anychart.onDocumentReady(function () {
    var dataSet = anychart.data.set([
        { name: 'Planning and organizational skills', Chatrin: 6 },
        { name: 'Flexibility / Adaptability to changes', Chatrin: 7, },
        { name: 'Leadership', Chatrin: 8 },
        { name: 'Commitment and responsibility', Chatrin: 7 },
        { name: 'Communication ', Chatrin: 7 },
        { name: 'Coding', Chatrin: 9 },
        { name: 'Learning and innovation', Chatrin: 8 }
    ]);

    chart = anychart.polar();

    // setup chart appearence settings
    chart.startAngle(-27);
    chart.innerRadius('10%');

    // setup chart scales settings
    chart.yScale().minimum(2).maximum(10);
    chart.xScale('ordinal');
    chart.xScale().names('name');
    chart.sortPointsByX(true);

    // setup chart interactivity and tooltip settings
    chart.interactivity().hoverMode('single');
    chart.tooltip().displayMode('union');
    chart.tooltip().titleFormat("{%name}");

    // setup chart axes and grid settings
    chart.yAxis(false);
    chart.xAxis().labels()
        .padding(7)
        .fontSize(20)
        .hAlign('center')
        .wordWrap('normal');
    chart.xAxis().fill('rgb(246,179,26)')
        .stroke('none');
    chart.xAxis().ticks()
        .length('100%')
        .stroke('#343950');

    // setup chart legend settings
    var legend = chart.legend();
    legend.enabled(true);
    legend.positionMode('outside');
    legend.itemsLayout('vertical');
    legend.position('bottom');
    legend.align('left');
    legend.margin().top(-30);
    legend.itemsSpacing(5);

    // create ploygon series
    var polygonSeries = chart.polygon(dataSet.mapAs({ x: 'x', value: 'Chatrin' }));
    polygonSeries.name('Chatrin');
    polygonSeries.color('#343950');
    polygonSeries.fill('rgba(180, 180, 180, 0.3)');
    polygonSeries.zIndex(31);
    polygonSeries.labels().enabled(true).fontColor('#343950').fontSize(20).fontWeight('bold');
    polygonSeries.legendItem().iconFill('#343950').iconType('line').iconStroke('6 #343950');
    // chart.yScale()
    // .minimum(35)
    // .maximum(65)
    // .ticks({'interval':5});

    // set chart container id
    chart.container('container');
    //font label color
    chart.xAxis().labels().fontColor('#343950');
    //chart bg
    chart.yGrid().palette(["gray 0.1", "gray 0.2"]);
    // initiate chart drawing
    chart.draw();
});
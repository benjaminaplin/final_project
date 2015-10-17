
setTimeout(function(){
  var palette = {
      "lightergray": "#D0D0D0",
      "lightgray": "#819090",
      "gray": "#708284",
      "mediumgray": "#536870",
      "darkgray": "#475B62",
      "darkblue": "#0A2933",
      "darkerblue": "#042029",
      "paleryellow": "#FCF4DC",
      "paleyellow": "#EAE3CB",
      "yellow": "#A57706",
      "orange": "#BD3613",
      "red": "#D11C24",
      "pink": "#C61C6F",
      "purple": "#595AB7",
      "blue": "#2176C7",
      "green": "#259286",
      "yellowgreen": "#738A05"
    }
  //NEED IF USING API
    candidatesArray.forEach(function(e){
     if(e.party == 'D'){
       e.color = 'blue'
      } else {
       e.color = 'red'
      }
    })

    var namesArray = [];
    candidatesArray.forEach(function(e){
      var name = e.name;
      namesArray.push(name);
    })
    // an array of values of receipts only
    receiptsArray = [];
    candidatesArray.forEach(function(e){
      receiptsArray.push(e.total_receipts);
    })
    //an array of names and reciepts only, for pie chart
    receiptsNamesArray = [];
    candidatesArray.forEach(function(e){
      var newObj = {'label': e.name, 'value':e.total_receipts};
      receiptsNamesArray.push(newObj);
    })

    var margin = { top: 35, right: 75, bottom:125, left:115}

    //have to remove the above margins from the size below
    var height = 1000 - margin.top - margin.bottom, 
        width = 700 - margin.left - margin.right, 
        barWidth = 50, 
        barOffset = 5;

    var tempColor;

    var yScale = d3.scale.linear()
    //domain is original set of values we work with
      .domain(d3.range(0, candidatesArray.length))
    //range is how we are going to remap them  
      .range([0, height]) 

    var xScale = d3.scale.ordinal()
      .domain(candidatesArray.map(function(d){
        return d.name;
      }))
      .rangeBands([0, width], 0.15) 

    var tooltip = d3.select('body').append('div')
      .attr('class', 'tooltip')
      .style('position', 'absolute')
      .style('padding', ' 5pxl 10px')
      .style('opacity', 0)   

    //create chart here
    var myChart = d3.select('#chart').append('svg')
      .style('background', palette.lightergray)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate('+ margin.left + ','+ margin.top + ')')
      .selectAll('rect').data(candidatesArray)
      .enter().append('rect')
        .attr('width', xScale.rangeBand())
        .attr('x', function(d,i){
          return xScale(d.name);
        })
        .attr('height', 0)
        .attr('y', height)
        .attr("fill", function(d){
            return d.color;
         })
      .on('mouseover', function(d){
        tooltip.transition()
          .style('opacity', .9)
        tooltip.html(d.name + "<br>raised: " + d.total_receipts.toLocaleString() + "<br>cash on hand: " + d.cash_on_hand.toLocaleString() + "<br>total contributions: " + d.total_contributions.toLocaleString())
          .style('left', (d3.event.pageX - 50) + 'px')
          .style('top', (d3.event.pageY - 100) + 'px')
        tempColor = this.style.fill;
        d3.select(this)
          .style('opacity', .5)
          .style('fill', 'grey')
      })
      .on('mouseout', function(d){
        // tooltip.transition()
        //   .style('opacity', 0)
        d3.select(this)
          .style('opacity', 1)
          .style('fill', tempColor)
      })   


  myChart.transition()
      .attr('height', function(d){
        return d.total_receipts/100000;
      })
      .attr('y', function(d){
        return height - d.total_receipts/100000;
        //height - d positions columns from bottom up
      })
      .delay(function(d,i){
        return i * 10;
        //try easing, exp elastic
      })
      .duration(1000)
      .ease('elastic')

  // console.log('receiptsarray', receiptsArray)
  var vGuideScale = d3.scale.linear()
    .domain([0, d3.max(receiptsArray)+5000000])
    .range([height,0])

  var vAxis = d3.svg.axis()
      .scale(vGuideScale)
      .orient('left')
      .ticks(10)

  var vGuide = d3.select('svg').append('g')
      vAxis(vGuide)
      //translate moves axis 
      //changing the translate command to move with the margins
      vGuide.attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')
      vGuide.selectAll('path')
          .style({ fill: 'none', stroke: "#000"})
      vGuide.selectAll('line')
          .style({ stroke: "#000"}) 

  var hAxis = d3.svg.axis()
      .scale(xScale)
      .orient('bottom')
      .tickValues(namesArray)

  var hGuide = d3.select('svg').append('g')
      hAxis(hGuide)
      hGuide.attr('transform', 'translate(' + margin.left + ', ' + (height + margin.top) + ')')
      hGuide.selectAll('path')
          .style({ fill: 'none', stroke: "#000"})
      hGuide.selectAll('line')
          .style({ stroke: "#000"})

  $('svg g:nth-child(3) g.tick text').attr('class', 'rotate');

  d3.selectAll(".rotate")
      .attr("transform", "rotate(45)")
      .style("text-anchor", "start")

}, 750);      




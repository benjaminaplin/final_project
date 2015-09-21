console.log("d3 chart1.js LINKED");
// console.log("ben says ", ben)
// window.setTimeout(function(){
var candidatesArray = []

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
  // candidatesArray.forEach(function(e){
  //  if(e.commId === 'C00575795'|| e.commId === 'C00578658' || e.commId === 'C00577130'){
  //    e.color = 'blue'
  //   } else {
  //    e.color = 'red'
  //   }
  // })
  // adds names to objects received from API, which does not include names 
  // use switch statement here instead
  // candidatesArray.forEach(function(e){
  //   if(e.commId === 'C00575795'){
  //     e.name = 'Hillary Clinton';
  //   } else if (e.commId === 'C00578658') {
  //     e.name = 'O\'Malley';
  //   } else if (e.commId === 'C00577130') {
  //     e.name = 'Bernie Sanders';
  //   } else if (e.commId === 'C00579458') {
  //     e.name = 'Jeb Bush';
  //   } else if (e.commId === 'C00573519') {
  //     e.name = 'Ben Carson';
  //   } else if (e.commId === 'C00574624') {
  //     e.name = 'Ted Cruz';
  //   } else if (e.commId === 'C00577312') {
  //     e.name = 'Carly Fiorina';
  //   } else if (e.commId === 'C00578757') {
  //     e.name = 'Linsey Graham';
  //   } else if (e.commId === 'C00577981') {
  //     e.name = 'Huckabee';
  //   } else if (e.commId === 'C00580159') {
  //     e.name = 'Bobby Jindal';
  //   } else if (e.commId === 'C00575449') {
  //     e.name = 'Rand Paul';
  //   } else if (e.commId === 'C00458844') {
  //     e.name = 'Marco Rubio';
  //   } else if (e.commId === 'C00578492') {
  //     e.name = 'Rick Santorum'
  //   } else if (e.commId === 'C00580100'){
  //     e.name = 'The Donald'
  //   }
  // })

  var candidatesArray = [
    {'candContr': 0, 'candSpent': 3085615, 'color': palette.blue, 'commId': 'C00577130', 'name': "Bernie Sanders", 'receipts': 15247353},
    {'candContr': 4049, 'candSpent': 1414674, 'color': palette.red, 'commId': 'C00580100', 'name': "The Donald", 'receipts': 1902410},
    {'candContr': 388720, 'candSpent': 3078087, 'color': palette.red, 'commId': 'C00579458', 'name': "Jeb Bush", 'receipts': 11429897}, 
    {'candContr': 0, 'candSpent': 5896929, 'color': palette.red, 'commId': 'C00573519', 'name': "Ben Carson", 'receipts': 10642242},
    {'candContr': 0, 'candSpent': 692768 ,'color': palette.blue, 'commId': 'C00578658', 'name': "Martin O'Malley", 'receipts': 2006904},
    {'candContr': 0, 'candSpent': 2771264, 'color': palette.red, 'commId': 'C00575449', 'name': "Rand Paul", 'receipts': 6932779},
    {'candContr': 0, 'candSpent': 714044 ,'color': palette.red, 'commId': 'C00577312', 'name': "Carly Fiorina", 'receipts': 1704703},
    {'candContr': 278821, 'candSpent': 18699814, 'color': palette.blue, 'commId': 'C00575795', 'name': "Hillary Clinton", 'receipts': 47549949},
    {'candContr': 0, 'candSpent': 5821564, 'color': palette.red, 'commId': 'C00574624', 'name': "Ted Cruz", 'receipts': 14349160},
    {'candContr': 0, 'candSpent': 375598,'color': palette.red, 'commId': 'C00578492', 'name': "Rick Santorum", 'receipts': 607617},
    {'candContr': 0, 'candSpent': 1118991, 'color': palette.red, 'commId': 'C00577981', 'name': "Mike Huckabee", 'receipts': 2004462},
    {'candContr': 0, 'candSpent': 65043, 'color': palette.red, 'commId': 'C00580159', 'name': "Bobby Jindal", 'receipts': 578758},
    {'candContr': 0, 'candSpent': 190536 ,'color': palette.red, 'commId': 'C00458844', 'name': "Marco Rubio", 'receipts': 917946},
    {'candContr': 0, 'candSpent': 1126733, 'color': palette.red, 'commId': 'C00578757', 'name': "Linsey Graham", 'receipts': 3709552}
  ]
  //adding sunlight foundation 'transparency ids' to candidate objects
  candidatesArray.forEach(function(e){
    if(e.commId === 'C00575795'){
      e.sfId = '597e02e7d1b04d83976913da1b8e2998';
    } else if (e.commId === 'C00578658') {
      e.sfId = 'e4355ab3b33140349411de019d9a127c';
    } else if (e.commId === 'C00577130') {
      e.sfId = 'd4c558e3d9a747f6bead48799b279be3';
    } else if (e.commId === 'C00579458') {
      e.sfId = '794d1fc57fd54ee385531309ea6be14e';
    } else if (e.commId === 'C00573519') {
      e.sfId = null;
    } else if (e.commId === 'C00574624') {
      e.sfId = '11b86e4675ad46da80a0c00af4f1f66b';
    } else if (e.commId === 'C00577312') {
      e.sfId = null;
    } else if (e.commId === 'C00578757') {
      e.sfId = '7adf2419ade14af595b4cfa666348e46';
    } else if (e.commId === 'C00577981') {
      e.sfId = '52b697851bfc4a82bacaf70ff3a1f532';
    } else if (e.commId === 'C00580159') {
      e.sfId = '56883c5c0dde46b9b0ee0892d4524773';
    } else if (e.commId === 'C00575449') {
      e.sfId = '1c363e2e6c1d49ab972cb2a084cd92e3';
    } else if (e.commId === 'C00458844') {
      e.sfId = 'adc3347820d14b8e9468880e3eb010f6';
    } else if (e.commId === 'C00578492') {
      e.sfId = 'f99f7d244bbf4325b31312f75643f8da'
    } else if (e.commId === 'C00580100'){
      e.sfId = '4adbdd2658044c73977230f678d4cb47'
    }
  })
  var namesArray = [];
  candidatesArray.forEach(function(e){
    var name = e.name;
    namesArray.push(name);
  })
  // console.log('candidatesArray',  candidatesArray)
  // an array of values of receipts only
  receiptsArray = [];
  candidatesArray.forEach(function(e){
    receiptsArray.push(e.receipts);
  })
  //an array of names and reciepts only, for pie chart
  receiptsNamesArray = [];
  candidatesArray.forEach(function(e){
    var newObj = {'label': e.name, 'value':e.receipts};
    receiptsNamesArray.push(newObj);
  })

  var margin = { top: 40, right: 10, bottom:40, left:115}

  //have to remove the above margins from the size below
  var height = 550 - margin.top - margin.bottom, 
      width = 700 - margin.left - margin.right, 
      barWidth = 50, 
      barOffset = 5;

  var tempColor;
  //for mouseover    

  var yScale = d3.scale.linear()
    .domain(d3.range(0, candidatesArray.length))
    .range([0, height]) 

 // .domain(d3.range(candidatesArray.length))
//     // ["A", "B", "C", "D", "E", "F", "f", "g", "h", "i", "j", "k", "l", "m", "n"]

  var xScale = d3.scale.ordinal()
    .domain(candidatesArray.map(function(d){
      return d.name;
    }))
    .rangeBands([0, width], 0.15) 
  var tooltip = d3.select('body').append('div')
    .attr('class', 'tooltip')
    .style('position', 'absolute')
    .style('padding', ' 0 10px')
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
      tooltip.html(d.name + "<br>" + d.receipts.toLocaleString())
        .style('left', (d3.event.pageX) + 'px')
        .style('top', (d3.event.pageY) + 'px')
      tempColor = this.style.fill;
      d3.select(this)
        .style('opacity', .5)
        .style('fill', 'grey')
    })
    .on('mouseout', function(d){
      d3.select(this)
        .style('opacity', 1)
        .style('fill', tempColor)
    })   

  myChart.transition()
      .attr('height', function(d){
            return d.receipts/100000
          })
      .attr('y', function(d){
        return height - d.receipts/100000;
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
    .domain([0, d3.max(receiptsArray)])
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

// myChart.append("g")
//     .attr("class", "x axis")
//     .attr("transform", "translate(0," + height + ")")
//     .call(hAxis)
//   .selectAll("text")
//     .attr("transform", "rotate(90)")
//     .attr("x", width / 2)
//     .attr("y", margin.bottom - 10)
//     .attr("dy", ".71em")
//     .style("text-anchor", "end")
//     .text("XAxis")

// chart title
// myChart.append("text")
//   .text("Bar Chart")
//   .attr("x", width / 2)
//   .attr("class","title");


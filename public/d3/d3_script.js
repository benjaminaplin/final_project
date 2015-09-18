// console.log("dee three linked");
// // console.log("ben says ", ben)
// window.setTimeout(function(){


// candidatesArray.forEach(function(e){
//  if(e.commId === 'C00575795'|| e.commId === 'C00578658' || e.commId === 'C00577130'){
//    e.color = 'blue'
//   } else {
//    e.color = 'red'
//   }
// })
// // use switch statement here instead
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
  {'candContr': 0, 'candSpent': 3085615, 'color': 'blue', 'commId': 'C00577130', 'name': "Bernie Sanders", 'receipts': 15247353},
  {'candContr': 4049, 'candSpent': 1414674, 'color': 'red', 'commId': 'C00580100', 'name': "The Donald", 'receipts': 1902410},
  {'candContr': 388720, 'candSpent': 3078087, 'color': 'red', 'commId': 'C00579458', 'name': "Jeb Bush", 'receipts': 11429897}, 
  {'candContr': 0, 'candSpent': 5896929, 'color': 'red', 'commId': 'C00573519', 'name': "Ben Carson", 'receipts': 10642242},
  {'candContr': 0, 'candSpent': 692768 ,'color': 'blue', 'commId': 'C00578658', 'name': "O'Malley", 'receipts': 2006904},
  {'candContr': 0, 'candSpent': 2771264, 'color': 'red', 'commId': 'C00575449', 'name': "Rand Paul", 'receipts': 6932779},
  {'candContr': 0, 'candSpent': 714044 ,'color': 'red', 'commId': 'C00577312', 'name': "Carly Fiorina", 'receipts': 1704703},
  {'candContr': 278821, 'candSpent': 18699814, 'color': 'blue', 'commId': 'C00575795', 'name': "Hillary Clinton", 'receipts': 47549949},
  {'candContr': 0, 'candSpent': 5821564, 'color': 'red', 'commId': 'C00574624', 'name': "Ted Cruz", 'receipts': 14349160},
  {'candContr': 0, 'candSpent': 375598,'color': 'red', 'commId': 'C00578492', 'name': "Rick Santorum", 'receipts': 607617},
  {'candContr': 0, 'candSpent': 1118991, 'color': 'red', 'commId': 'C00577981', 'name': "Huckabee", 'receipts': 2004462},
  {'candContr': 0, 'candSpent': 65043, 'color': 'red', 'commId': 'C00580159', 'name': "Bobby Jindal", 'receipts': 578758},
  {'candContr': 0, 'candSpent': 190536 ,'color': 'red', 'commId': 'C00458844', 'name': "Marco Rubio", 'receipts': 917946},
  {'candContr': 0, 'candSpent': 1126733, 'color': 'red', 'commId': 'C00578757', 'name': "Linsey Graham", 'receipts': 3709552}
]

receiptsArray = [];
candidatesArray.forEach(function(e){
  receiptsArray.push(e.receipts);
})

receiptsArray.sort(function compaireNumbers(a,b){
  return a -b;
});

var margin = { top: 40, right: 10, bottom:40, left:115}

//have to remove the above margins from the size below
var height = 550 - margin.top - margin.bottom, 
    width = 600 - margin.left - margin.right, 
    barWidth = 50, 
    barOffset = 5;

var tempColor;
//for mouseover    

var yScale = d3.scale.linear()
  .domain([0, d3.max(receiptsArray)])
  .range([0, height]) 

var xScale = d3.scale.ordinal()
  .domain(d3.range(0, receiptsArray.length))
  //second integer argument is space btw bars
  .rangeBands([0, width], 0.15) 

var tooltip = d3.select('body').append('div')
  .style('position', 'absolute')
  .style('padding', ' 0 10px')
  .style('opacity', 0)      

//creat chart here
var myChart = d3.select('#chart').append('svg')
  .style('background', '#E7E0CB')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate('+ margin.left + ','+ margin.top + ')')
  .selectAll('rect').data(candidatesArray)
  .enter().append('rect')
    .attr('width', xScale.rangeBand())
    .attr('x', function(d,i){
      return xScale(i);
    })
    .attr('height', 0)
    .attr('y', height)
    .attr("fill", function(d){
        return d.color;
     })
    .text(function(d){
        return d.name
    })
//EVENTS    
  .on('mouseover', function(d){

    tooltip.transition()
      .style('opacity', .9)

    tooltip.html(d.receipts, d.name) 
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
//

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
    //scale created on line 78
    .scale(xScale)
    .orient('bottom')
    .tickValues(xScale.domain().filter(function(d, i) {
        return receiptsArray.length;
        // below would place tick every 5 bars
        // return !(i % (candidatesArray.length/5));
    }))

var hGuide = d3.select('svg').append('g')
    hAxis(hGuide)
    hGuide.attr('transform', 'translate(' + margin.left + ', ' + (height + margin.top) + ')')
    hGuide.selectAll('path')
        .style({ fill: 'none', stroke: "#000"})
    hGuide.selectAll('line')
        .style({ stroke: "#000"})

// }, 1500)


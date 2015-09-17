console.log("dee three linked");
// console.log("ben says ", ben)
window.setTimeout(function(){


candidatesArray.forEach(function(e){
 if(e.commId === 'C00575795'|| e.commId === 'C00578658' || e.commId === 'C00577130'){
   e.color = 'blue'
  } else {
   e.color = 'red'
  }
})
// use switch statement here instead
candidatesArray.forEach(function(e){
  if(e.commId === 'C00575795'){
    e.name = 'Hillary Clinton';
  } else if (e.commId === 'C00578658') {
    e.name = 'O\'Malley';
  } else if (e.commId === 'C00577130') {
    e.name = 'Bernie Sanders';
  } else if (e.commId === 'C00579458') {
    e.name = 'Jeb Bush';
  } else if (e.commId === 'C00573519') {
    e.name = 'Ben Carson';
  } else if (e.commId === 'C00574624') {
    e.name = 'Ted Cruz';
  } else if (e.commId === 'C00577312') {
    e.name = 'Carly Fiorina';
  } else if (e.commId === 'C00578757') {
    e.name = 'Linsey Graham';
  } else if (e.commId === 'C00577981') {
    e.name = 'Huckabee';
  } else if (e.commId === 'C00580159') {
    e.name = 'Bobby Jindal';
  } else if (e.commId === 'C00575449') {
    e.name = 'Rand Paul';
  } else if (e.commId === 'C00458844') {
    e.name = 'Marco Rubio';
  } else if (e.commId === 'C00578492') {
    e.name = 'Rick Santorum'
  } else if (e.commId === 'C00580100'){
    e.name = 'The Donald'
  }
})

console.log(candidatesArray)

var height = 500, 
    width = 600, 
    barWidth = 50, 
    barOffset = 5;

var tempColor;
//for mouseover    

var yScale = d3.scale.linear()
  .domain([0, d3.max(candidatesArray)])
  .range([0, height]) 

var xScale = d3.scale.ordinal()
  .domain(d3.range(0, candidatesArray.length))
  .rangeBands([0, width]) 

var tooltip = d3.select('body').append('div')
  .style('position', 'absolute')
  .style('padding', ' 0 10px')
  .style('opacity', 0)      

var myChart = d3.select('#chart').append('svg')
  .attr('width', width)
  .attr('height', height)
  .style('background', '#C9D7D6')
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

    tooltip.html(d.receipts) 
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


}, 1500)







// var candidatesArray = [  
//       {'name':'Clinton', 'color': 'blue', 'candId': 'P00003392', 'commId': 'C00575795','receipts': 47549949, 'candContr': 278821, 'candSpent': 18699814},
//       {'name':'O\'Malley', 'color': 'blue','candId': 'P60007671', 'commId': 'C00578658', 'receipts': 2006904,  'candContr': 0, 'candSpent': 692768},
//       {'name':'Sanders','color': 'blue', 'candId': 'P60007168', 'commId': 'C00577130', 'receipts': 15247353, 'candContr': 0, 'candSpent': 3085615},
//       // {'name':'webb', 'candId': 'P60008885', 'commId': 'C00581215'},
//       {'name':'Bush', 'color': 'red','candId': 'P60008059', 'commId': 'C00579458', 'receipts': 11429897, 'candContr': 388720, 'candSpent': 3078087},
//       {'name':'Carson','color': 'red','candId': 'P60005915', 'commId': 'C00573519','receipts': 10642242, 'candContr': 0, 'candSpent': 5896929},
//       // // {'name':'christie','candId': 'P60008521', 'commId': 'C00580399'},
//       {'name':'Cruz','color': 'red','candId': 'P60006111', 'commId': 'C00574624', 'receipts': 14349160, 'candContr': 0, 'candSpent': 5821564},
//       {'name': 'Fiorina','color': 'red','candId': 'P60007242', 'commId': 'C00577312',  'receipts': 1704703, 'candContr': 0, 'candSpent': 714044},
//       // // {'name':'gilmore': {},
//       {'name':'Graham','color': 'red','candId': 'P60007697', 'commId':'C00578757',  'receipts': 3709552, 'candContr': 0, 'candSpent': 1126733 },
//       {'name':'Huckabee','color': 'red','candId': 'P80003478', 'commId': 'C00577981', 'receipts': 2004462, 'candContr': 0, 'candSpent': 1118991},
//       {'name':'Jindal','color': 'red','candId': 'P60008398', 'commId': 'C00580159', 'receipts': 578758, 'candContr': 0, 'candSpent': 65043},
//       // // {'name':'kasich','candId': 'P60003670', 'commId': 'C00581876'},
//       // // '{'name':'pataki': {},
//       {'name':'Paul','color': 'red','candId': 'P40003576', 'commId': 'C00575449', 'receipts': 6932779, 'candContr': 0, 'candSpent': 2771264},
//       {'name':'Rubio','color': 'red','candId': 'P60006723', 'commId': 'C00458844', 'receipts': 917946, 'candContr': 0, 'candSpent': 190536},
//       {'name':'Santorum','color': 'red','candId': 'P20002721', 'commId': 'C00578492', 'receipts': 607617, 'candContr': 0, 'candSpent': 375598},
//       {'name':'Trump', 'color': 'red', 'candId': 'P80001571', 'commId': 'C00580100', 'receipts': 1902410, 'candContr': 4049, 'candSpent': 1414674},
//       // {'name':'walker','candId': 'P60006046', 'commId': 'C00580480'}
//       ];

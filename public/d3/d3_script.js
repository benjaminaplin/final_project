console.log("dee three linked");
// console.log("ben says ", ben)
// window.setTimeout(function(){

//delete
// candidatesArray.forEach(function(e){
//  if(e.commId === 'C00575795'|| e.commId === 'C00578658' || e.commId === 'C00577130'){
//    e.color = 'blue'
//   } else {
//    e.color = 'red'
//   }
// })
//adds names to objects received from API, which does not include names 
//use switch statement here instead
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
  {'candContr': 0, 'candSpent': 692768 ,'color': 'blue', 'commId': 'C00578658', 'name': "Martin O'Malley", 'receipts': 2006904},
  {'candContr': 0, 'candSpent': 2771264, 'color': 'red', 'commId': 'C00575449', 'name': "Rand Paul", 'receipts': 6932779},
  {'candContr': 0, 'candSpent': 714044 ,'color': 'red', 'commId': 'C00577312', 'name': "Carly Fiorina", 'receipts': 1704703},
  {'candContr': 278821, 'candSpent': 18699814, 'color': 'blue', 'commId': 'C00575795', 'name': "Hillary Clinton", 'receipts': 47549949},
  {'candContr': 0, 'candSpent': 5821564, 'color': 'red', 'commId': 'C00574624', 'name': "Ted Cruz", 'receipts': 14349160},
  {'candContr': 0, 'candSpent': 375598,'color': 'red', 'commId': 'C00578492', 'name': "Rick Santorum", 'receipts': 607617},
  {'candContr': 0, 'candSpent': 1118991, 'color': 'red', 'commId': 'C00577981', 'name': "Mike Huckabee", 'receipts': 2004462},
  {'candContr': 0, 'candSpent': 65043, 'color': 'red', 'commId': 'C00580159', 'name': "Bobby Jindal", 'receipts': 578758},
  {'candContr': 0, 'candSpent': 190536 ,'color': 'red', 'commId': 'C00458844', 'name': "Marco Rubio", 'receipts': 917946},
  {'candContr': 0, 'candSpent': 1126733, 'color': 'red', 'commId': 'C00578757', 'name': "Linsey Graham", 'receipts': 3709552}
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

console.log('candidatesArray',  candidatesArray)
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

    tooltip.html( d.name) 
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

//-----------------PIE CHART--------------------------

var hillaryTopContrIndustry = [
    {
        "label": "Other",
        "count": "205610",
        "value": "97006838.00"
    },
    {
        "label": "Unknown",
        "count": "200919",
        "value": "84649515.00"
    },
    {
        "label": "Lawyers and Lobbyists",
        "count": "40819",
        "value": "28783415.00"
    },
    {
        "label": "Misc. Business",
        "count": "38778",
        "value": "23391887.00"
    },
    {
        "label": "Communications/Electronics",
        "count": "34458",
        "value": "21379619.00"
    },
    {
        "label": "Finance/Insurance/Real Estate",
        "count": "28522",
        "value": "21331726.00"
    },
    {
        "label": "Health",
        "count": "39434",
        "value": "19540572.00"
    },
    {
        "label": "Ideology/Single Issue",
        "count": "12146",
        "value": "6609566.00"
    },
    {
        "label": "Construction",
        "count": "7746",
        "value": "4303721.00"
    },
    {
        "label": "Energy/Natural Resources",
        "count": "4265",
        "value": "2497081.00"
    }
]

// var typesInd = [
//   A: Agribusiness, 
//   B: Communications/Electronics, 
//   C: Construction, 
//   D: Defense
//   E: Energy/Natural Resources, 
//   F: Finance/Insurance/Real Estate, 
//   H: Health, 
//   K: Lawyers and Lobbyists, 
//   M: Transportation, 
//   N: Misc. Business, 
//   Q: Ideology/Single Issue, 
//   P: Labor, 
//   W: Other, 
//   Y: Unknown, 
//   Z: Administrative Use 
// ]

var width = 400,
    height = 400,
    radius = 200,
    //d3 scales below
    colors = d3.scale.ordinal()
      .range(['#595AB7','#A57706','#D11C24','#C61C6F','#BD3613','#2176C7','#259286','#738A05']);
  

pie = d3.layout.pie()
  .value(function(d){
    return d.value;
  })
//defines inner and outer range of pie chart
var arc = d3.svg.arc()
  .outerRadius(radius)

// console.log('receiptsNamesArray',receiptsNamesArray)

var myChart = d3.select('#chart2').append('svg') 
  .attr('width', width)
  .attr('height', height)
  .append('g') 
  //by default, graphics are centered at 0,0 so you need to 
  //transform and translate
  //set it pu to be width of chart minus radius
    .attr('transform', 'translate('+(width-radius)+','+(height-radius)+')')
    //feed it the data here, have to add enter method to make 'path' exist
    .selectAll('path').data(pie(hillaryTopContrIndustry))
    .enter().append('g')
      .attr('class', 'slice')


var slices = d3.selectAll('g.slice')
        .append('path')
        .attr('fill', function(d, i) {
            return colors(i);
        })
      //pass along arc function that creates outer circle
        .attr('d', arc)

var text = d3.selectAll('g.slice')
    .append('text')
    .text(function(d, i) {
        return d.data.label;
    })
    .attr('text-anchor', 'middle')
    .attr( 'x', '90')
    .attr( 'y','0')
    .attr('fill', 'white')
    .attr('transform', function(d) {
        d.innerRadius = 0;
        d.outerRadius = radius;
        return 'translate('+ arc.centroid(d)+')'
    })

// }, 1500)



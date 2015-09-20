// console.log('d3 chart 2 linked')
// //-----------------PIE CHART--------------------------

// var width = 400,
//     height = 400,
//     radius = 200,
//     //d3 scales below
//     colors = d3.scale.ordinal()
//       .range(['#595AB7','#A57706','#D11C24','#C61C6F','#BD3613','#2176C7','#259286','#738A05']);
  

// pie = d3.layout.pie()
//   .value(function(d){
//     return d.value;
//   })
// //defines inner and outer range of pie chart
// var arc = d3.svg.arc()
//   .outerRadius(radius)

// // console.log('receiptsNamesArray',receiptsNamesArray)

// var myChart = d3.select('#chart2').append('svg') 
//   .attr('width', width)
//   .attr('height', height)
//   .append('g') 
//   //by default, graphics are centered at 0,0 so you need to 
//   //transform and translate
//   //set it pu to be width of chart minus radius
//     .attr('transform', 'translate('+(width-radius)+','+(height-radius)+')')
//     //feed it the data here, have to add enter method to make 'path' exist
//     .selectAll('path').data(pie(hillaryTopContrIndustry))
//     .enter().append('g')
//       .attr('class', 'slice')


// var slices = d3.selectAll('g.slice')
//         .append('path')
//         .attr('fill', function(d, i) {
//             return colors(i);
//         })
//       //pass along arc function that creates outer circle
//         .attr('d', arc)

// var text = d3.selectAll('g.slice')
//     .append('text')
//     .text(function(d, i) {
//         return d.data.label;
//     })
//     .attr('text-anchor', 'middle')
//     .attr( 'x', '90')
//     .attr( 'y','0')
//     .attr('fill', 'white')
//     .attr('transform', function(d) {
//         d.innerRadius = 0;
//         d.outerRadius = radius;
//         return 'translate('+ arc.centroid(d)+')'
//     })

// // }, 1500)



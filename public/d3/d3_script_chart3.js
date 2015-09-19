console.log('d3 script chart 3 linked')

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
//all data for node myChart
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

var   w = 600,
      h = 400;

var circleWidth;

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

var nodes = [
      { name: "Hillary Clinton"},
      { name: "other", target: [0]},
      { name: "unknown", target: [0]},
      { name: "lawyers & lobbyists", target: [0]},
      { name: "misc. Business", target: [0]},
      { name: "communications & electronics", target: [0]},
      { name: "finance, insurance & real estate", target: [0]},
      { name: "health", target: [0]},
      { name: "Ideology/Single Issue", target: [0]},
      { name: "construction", target: [0]},
      { name: "energy/natural resources", target: [0]}
];

var links = [];

for (var i = 0; i< nodes.length; i++) {
      if (nodes[i].target !== undefined) {
            for (var x = 0; x< nodes[i].target.length; x++ ) {
                  links.push({
                        source: nodes[i],
                        target: nodes[nodes[i].target[x]]
                  })
            }
      }
}

var myChart = d3.select('#chart2')
  .style('background', palette.lightergray)
    .append('svg')
    .attr('width', w)
    .attr('height', h)

var force = d3.layout.force()
  .nodes(nodes)
  .links([])
  .gravity(0.3)
  .charge(-1000)
  .size([w, h])

var link = myChart.selectAll('line')
  .data(links).enter().append('line')
  .attr('stroke', palette.gray)

var node = myChart.selectAll('circle')
  .data(nodes).enter()
  .append('g')
  .call(force.drag);

node.append('circle')
  .attr('cx', function(d) { return d.x; })
  .attr('cy', function(d) { return d.y; })
  .attr('r', circleWidth )
  .attr('fill', function(d, i) {
    if (i>0) { return palette.pink }
    else { return palette.blue }
  })

node.append('text')
  .text(function(d) { return d.name})
  .attr('font-family', 'Roboto Slab')
  .attr('fill', function(d, i) {
    if (i>0) { return palette.mediumgray}
    else { return palette.yellowgreen}
  })
  .attr('x', function(d, i) {
    if (i>0) { return circleWidth + 4 }
    else { return circleWidth -15 }
  })
  .attr('y', function(d, i) {
    if (i>0) { return circleWidth }
    else { return 8 }
  })
  .attr('text-anchor', function(d, i) {
    if (i>0) { return 'beginning' }
    else { return 'end'}
  })
  .attr('font-size',  function(d, i) {
    if (i>0) { return '1em' }
    else { return '1.8em'}
  })

force.on('tick', function(e) {
  node.attr('transform', function(d, i) {
    return 'translate('+ d.x +', '+ d.y +')';
  })

  link
    .attr('x1', function(d) { return d.source.x })
    .attr('y1', function(d) { return d.source.y })
    .attr('x2', function(d) { return d.target.x })
    .attr('y2', function(d) { return d.target.y })
})


force.start();


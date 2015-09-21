console.log('chart3.js linked')
var palette = {
      "lightergray": "#D0D0D0",
      "lightgray": "#819090",
      "gray": "#708284",
      "mediumgray": "#536870",
      "darkgray": "#475B62",
      "darkblue": "#0A2933",
      "royalblue": "#16174f",
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
d3.json('./js/candidates.json', function(error, json){

    var makeForceChart = function makeForceChart(candName, obj, valueDivisor, nameColor, circleColor){
      if (candName === 'Trump'){
        console.log('aye nothing for ' + candName);
      } else {

        var   w = 700, h = 400;

        var circleWidth;



        var nodes = [
              { name: candName},
              { name: obj[0].label, target: [0]},
              { name: obj[1].label, target: [0]},
              { name: obj[2].label, target: [0]},
              { name: obj[3].label, target: [0]},
              { name: obj[4].label, target: [0]},
              { name: obj[5].label, target: [0]},
              { name: obj[6].label, target: [0]},
              { name: obj[7].label, target: [0]},
              { name: obj[8].label, target: [0]},
              { name: obj[9].label, target: [0]}
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
          .attr('r', function(d,i){
            switch(i){
              case 1:
                return circleWidth = obj[0].value/valueDivisor;
                break;
              case 2: 
                return circleWidth = obj[1].value/valueDivisor;
                break;
              case 3: 
                return circleWidth = obj[2].value/valueDivisor;
                break;
              case 4: 
                return circleWidth = obj[3].value/valueDivisor;
                break;   
              case 5: 
                return circleWidth = obj[4].value/valueDivisor;
                break
              case 6: 
                return circleWidth = obj[5].value/valueDivisor;
                break;
              case 7: 
                return circleWidth = obj[6].value/valueDivisor;
                break;
              case 8: 
                return circleWidth = obj[7].value/valueDivisor;
                break;
              case 9: 
                return circleWidth = obj[8].value/valueDivisor;
                break;
              case 10: 
                return circleWidth = obj[9].value/valueDivisor;
                break;
                }
          })
          .attr('fill', function(d, i) {
            if (i>0) { return circleColor }
            else { return palette.blue }
          })

        node.append('text')
          .text(function(d) { return d.name})
          .attr('font-family', 'Roboto Slab')
          .attr('fill', function(d, i) {
            if (i>0) { return palette.mediumgray}
            else { return nameColor}
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
      } //end if/else  
    }//end make chart function

    var prepChart = function prepChart(name){
          // console.log('you called prepchart w value ' + name)
          $('#chart2').empty()
          $('#candidate-name').text(name)
    }

    $('#candidate-select').on('change', function(e){
        console.log('hey there')
      var val = $( "select option:selected").val();
      switch(val){
        case 'Sanders':
          prepChart(val)
          makeForceChart(val, json.sandersTopContrIndustry, 10000, palette.royalblue, palette.blue);
          break;
        case 'Trump': 
          prepChart(val)
          makeForceChart(val, json.trumpTopContrIndustry, 10000, palette.royalblue, palette.red);
          break;
        case 'Bush': 
          prepChart(val)
          makeForceChart(val, json.bushTopContrIndustry, 10000, palette.royalblue, palette.red);
          break;
        case 'Carson': 
          prepChart(val)
          makeForceChart(val, json.carsonTopContrIndustry, 10000, palette.royalblue, palette.red);
          break;   
        case 'Omalley': 
          prepChart(val)
          makeForceChart(val, json.omalleyTopContrIndustry, 1000, palette.royalblue, palette.blue);
          break;
        case 'Paul': 
          prepChart(val)
          makeForceChart(val, json.paulTopContrIndustry, 1000, palette.royalblue, palette.red);
          break;
        case 'Fiorina': 
          prepChart(val)
          makeForceChart(val, json.fiorinaTopContrIndustry, 10000, palette.royalblue, palette.red);
          break;
        case 'Clinton': 
          prepChart(val)
          makeForceChart(val, json.clintonTopContrIndustry, 2500000, palette.royalblue, palette.blue);
          break;
        case 'Cruz': 
          prepChart(val)
          makeForceChart(val, json.cruzTopContrIndustry, 50000, palette.royalblue, palette.red);
          break;
        case 'Santorum': 
          prepChart(val)
          makeForceChart(val, json.santorumTopContrIndustry, 15000, palette.royalblue, palette.red);
          break;
        case 'Huckabee': 
          prepChart(val)
          makeForceChart(val, json.huckabeeTopContrIndustry, 10000, palette.royalblue, palette.red);
          break;   
        case 'Jindal': 
          prepChart(val)
          makeForceChart(val, json.jindalTopContrIndustry, 5000, palette.royalblue, palette.red);
          break;     
        case 'Rubio': 
          prepChart(val)
          makeForceChart(val, json.rubioTopContrIndustry, 10000, palette.royalblue, palette.red);
          break; 
        case 'Graham': 
          prepChart(val)
          makeForceChart(val, json.grahamTopContrIndustry, 10000, palette.royalblue, palette.red);
          break;         
          }
      })
    
    prepChart('Clinton')
    makeForceChart('Clinton', json.clintonTopContrIndustry, 2500000, palette.royalblue, palette.blue);

});//end pulling in data from candidates.json


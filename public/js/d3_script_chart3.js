console.log('d3 script chart 3 linked')

//all data for node myChart
var clintonTopContrIndustry = [
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

var sandersTopContrIndustry = [
    {
        "count": "1275",
        "value": "426758.00",
        "id": "b21467ae32924f84ada9076535401a91",
        "should_show_entity": false,
        "label": "RETIRED"
    },
    {
        "count": "460",
        "value": "198435.00",
        "id": "4f1efa319be14d63b50ebf17a8f1af71",
        "should_show_entity": true,
        "label": "DEMOCRATIC/LIBERAL"
    },
    {
        "count": "44",
        "value": "101900.00",
        "id": "52e5d4c6c0fa47c3bdb199a28f96d434",
        "should_show_entity": true,
        "label": "PUBLIC SECTOR UNIONS"
    },
    {
        "count": "119",
        "value": "77949.00",
        "id": "f50cf984a2e3477c8167d32e2b14e052",
        "should_show_entity": true,
        "label": "LAWYERS/LAW FIRMS"
    },
    {
        "count": "20",
        "value": "64000.00",
        "id": "9162d091922d4bb0a9e02bf0e42915b8",
        "should_show_entity": true,
        "label": "LEADERSHIP PACS"
    },
    {
        "count": "103",
        "value": "54954.00",
        "id": "a05a0d06f6814b31bece35a81fcb40c7",
        "should_show_entity": true,
        "label": "HEALTH PROFESSIONALS"
    },
    {
        "count": "136",
        "value": "46463.00",
        "id": "31657d3c187e4cecb670d228d7e674d2",
        "should_show_entity": true,
        "label": "EDUCATION"
    },
    {
        "count": "77",
        "value": "46040.00",
        "id": "72c7c89ba4ce406d99152105c08ccedf",
        "should_show_entity": true,
        "label": "ENVIRONMENT"
    },
    {
        "count": "19",
        "value": "45750.00",
        "id": "bcb5ff50850c4e9682b5d4da5d9bf278",
        "should_show_entity": false,
        "label": "MISC UNIONS"
    },
    {
        "count": "75",
        "value": "41401.00",
        "id": "2d8bb4353d464d1bb9ec3a7b92530b68",
        "should_show_entity": true,
        "label": "ABORTION POLICY/PRO-CHOICE"
    }
]

var omalleyTopContrIndustry = [
    {
        "count": "16",
        "value": "16000.00",
        "id": "0b4aba987b6e4cb5931b8060b40a0c7f",
        "should_show_entity": true,
        "label": "HOSPITALS/NURSING HOMES"
    },
    {
        "count": "9",
        "value": "13500.00",
        "id": "7500030dffe24844aa467a75f7aedfd1",
        "should_show_entity": true,
        "label": "REAL ESTATE"
    },
    {
        "count": "10",
        "value": "8600.00",
        "id": "f50cf984a2e3477c8167d32e2b14e052",
        "should_show_entity": true,
        "label": "LAWYERS/LAW FIRMS"
    },
    {
        "count": "4",
        "value": "6000.00",
        "id": "75a85fa019274ab5ae3cc83b5a68972e",
        "should_show_entity": true,
        "label": "CONSTRUCTION SERVICES"
    },
    {
        "count": "3",
        "value": "5121.09",
        "id": "83bece3db3b54ca58b38d3bad679697f",
        "should_show_entity": true,
        "label": "AUTOMOTIVE"
    },
    {
        "count": "4",
        "value": "5000.00",
        "id": "e5175721aac9406795a1f97cae01e01d",
        "should_show_entity": true,
        "label": "BUSINESS SERVICES"
    },
    {
        "count": "3",
        "value": "4150.00",
        "id": "a05a0d06f6814b31bece35a81fcb40c7",
        "should_show_entity": true,
        "label": "HEALTH PROFESSIONALS"
    },
    {
        "count": "1",
        "value": "4000.00",
        "id": "9fbca48b3b2c4840b6f7d5137a0f083c",
        "should_show_entity": true,
        "label": "LODGING/TOURISM"
    },
    {
        "count": "1",
        "value": "4000.00",
        "id": "7b341f706d5a45158006b8c4767db59a",
        "should_show_entity": true,
        "label": "CHEMICAL & RELATED MANUFACTURING"
    },
    {
        "count": "3",
        "value": "4000.00",
        "id": "52e5d4c6c0fa47c3bdb199a28f96d434",
        "should_show_entity": true,
        "label": "PUBLIC SECTOR UNIONS"
    }
]

var paulTopContrIndustry = [
    {
        "count": "19",
        "value": "34716.00",
        "id": "a05a0d06f6814b31bece35a81fcb40c7",
        "should_show_entity": true,
        "label": "HEALTH PROFESSIONALS"
    },
    {
        "count": "8",
        "value": "12500.00",
        "id": "0af3f418f426497e8bbf916bfc074ebc",
        "should_show_entity": true,
        "label": "SECURITIES & INVESTMENT"
    },
    {
        "count": "8",
        "value": "10000.00",
        "id": "05b23aff0dbd4b74b95b3e16074a874c",
        "should_show_entity": false,
        "label": "MISC FINANCE"
    },
    {
        "count": "6",
        "value": "7900.00",
        "id": "767c434bfd1348638bab7f8c12b9282f",
        "should_show_entity": true,
        "label": "REPUBLICAN/CONSERVATIVE"
    },
    {
        "count": "10",
        "value": "5850.00",
        "id": "b21467ae32924f84ada9076535401a91",
        "should_show_entity": false,
        "label": "RETIRED"
    },
    {
        "count": "3",
        "value": "5000.00",
        "id": "ec9907560c0042e4b831ebd7734d7352",
        "should_show_entity": true,
        "label": "BUILDING MATERIALS & EQUIPMENT"
    },
    {
        "count": "2",
        "value": "5000.00",
        "id": "50568b87755e45698637cea681d43c9e",
        "should_show_entity": true,
        "label": "SAVINGS & LOANS"
    },
    {
        "count": "4",
        "value": "4500.00",
        "id": "9162d091922d4bb0a9e02bf0e42915b8",
        "should_show_entity": true,
        "label": "LEADERSHIP PACS"
    },
    {
        "count": "3",
        "value": "4500.00",
        "id": "db81234a46874e7392cb5dfec1f07113",
        "should_show_entity": true,
        "label": "PRINTING & PUBLISHING"
    },
    {
        "count": "4",
        "value": "4500.00",
        "id": "8a6daf50525a4320b994ab1c2724c6db",
        "should_show_entity": true,
        "label": "CREDIT UNIONS"
    }
]

var cruzTopContrIndustry = [
    {
        "count": "1579",
        "value": "1133297.00",
        "id": "767c434bfd1348638bab7f8c12b9282f",
        "should_show_entity": true,
        "label": "REPUBLICAN/CONSERVATIVE"
    },
    {
        "count": "906",
        "value": "814535.00",
        "id": "f50cf984a2e3477c8167d32e2b14e052",
        "should_show_entity": true,
        "label": "LAWYERS/LAW FIRMS"
    },
    {
        "count": "544",
        "value": "747118.00",
        "id": "52766c4910a846f2813a1dda212b7027",
        "should_show_entity": true,
        "label": "OIL & GAS"
    },
    {
        "count": "969",
        "value": "643464.00",
        "id": "b21467ae32924f84ada9076535401a91",
        "should_show_entity": false,
        "label": "RETIRED"
    },
    {
        "count": "396",
        "value": "564299.00",
        "id": "0af3f418f426497e8bbf916bfc074ebc",
        "should_show_entity": true,
        "label": "SECURITIES & INVESTMENT"
    },
    {
        "count": "531",
        "value": "529370.00",
        "id": "9162d091922d4bb0a9e02bf0e42915b8",
        "should_show_entity": true,
        "label": "LEADERSHIP PACS"
    },
    {
        "count": "341",
        "value": "402259.00",
        "id": "7500030dffe24844aa467a75f7aedfd1",
        "should_show_entity": true,
        "label": "REAL ESTATE"
    },
    {
        "count": "273",
        "value": "362939.00",
        "id": "05b23aff0dbd4b74b95b3e16074a874c",
        "should_show_entity": false,
        "label": "MISC FINANCE"
    },
    {
        "count": "332",
        "value": "288679.00",
        "id": "a05a0d06f6814b31bece35a81fcb40c7",
        "should_show_entity": true,
        "label": "HEALTH PROFESSIONALS"
    },
    {
        "count": "253",
        "value": "253624.00",
        "id": "d9c4a26cd671436eac3c501184364fc4",
        "should_show_entity": false,
        "label": "MISC BUSINESS"
    }
]

var makeForceChart = function makeForceChart(candName, obj, valueDivisor, nameColor, circleColor){
  if (candName === 'Trump'){
    console.log('aye nothing for ' + candName);
  } else {

    var   w = 700, h = 400;

    var circleWidth;

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
      console.log('you called prepchart w value ' + name)
      $('#chart2').empty()
      $('#candidate-name').text(name)
}

$('#candidate-select').on('change', function(e){
  var val = $( "select option:selected").val();
  switch(val){
    case 'Sanders':
      prepChart(val)
      makeForceChart(val, sandersTopContrIndustry, 10000, palette.royalblue, palette.blue);
      break;
    case 'Trump': 
      prepChart(val)
      makeForceChart(val, trumpTopContrIndustry, 10000, palette.royalblue, palette.red);
      break;
    case 'Bush': 
      prepChart(val)
      makeForceChart(val, bushTopContrIndustry, 10000, palette.royalblue, palette.red);
      break;
    case 'Carson': 
      prepChart(val)
      makeForceChart(val, carsonTopContrIndustry, 10000, palette.royalblue, palette.red);
      break;   
    case 'Omalley': 
      prepChart(val)
      makeForceChart(val, omalleyTopContrIndustry, 1000, palette.royalblue, palette.blue);
      break;
    case 'Paul': 
      prepChart(val)
      makeForceChart(val, paulTopContrIndustry, 1000, palette.royalblue, palette.red);
      break;
    case 'Fiorina': 
      prepChart(val)
      makeForceChart(val, fiorinaTopContrIndustry, 10000, palette.royalblue, palette.red);
      break;
    case 'Clinton': 
      prepChart(val)
      makeForceChart(val, clintonTopContrIndustry, 2500000, palette.royalblue, palette.blue);
      break;
    case 'Cruz': 
      prepChart(val)
      makeForceChart(val, cruzTopContrIndustry, 50000, palette.royalblue, palette.red);
      break;
    case 'Santorum': 
      prepChart(val)
      makeForceChart(val, santorumTopContrIndustry, 10000, palette.royalblue, palette.red);
      break;
    case 'Huckabee': 
      prepChart(val)
      makeForceChart(val, huckabeeTopContrIndustry, 10000, palette.royalblue, palette.red);
      break;   
    case 'Jindal': 
      prepChart(val)
      makeForceChart(val, jindalTopContrIndustry, 10000, palette.royalblue, palette.red);
      break;     
    case 'Rubio': 
      prepChart(val)
      makeForceChart(val, rubioTopContrIndustry, 10000, palette.royalblue, palette.red);
      break; 
    case 'Graham': 
      makeForceChart(val, grahamTopContrIndustry, 10000, palette.royalblue, palette.red);
      break;         
      }
  })

makeForceChart('Clinton', clintonTopContrIndustry, 2500000, palette.royalblue, palette.blue);



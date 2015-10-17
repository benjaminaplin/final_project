    candidatesArray = [];
  $.ajax({
    url: 'http://api.nytimes.com/svc/elections/us/v3/finances/2016/president/totals.json?api-key=5bc121955c3730823eeb9c741d2494b4:7:48762272',
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      data.results.forEach(function(e){
        candidatesArray.push(e);
      })
    },
    error: function(error) {
      console.log(error);
      console.log('err')
    },
   })

  var ben = 'hell0';

// console.log("ajax js linked");
// var candidatesArray = []
// var CandidateApp = {

// };

// var candidates = [
//   // 'chafee': {},
//   {'name':'Clinton', 'candId': 'P00003392', 'commId': 'C00575795'},
//   {'name':'O\'Malley', 'candId': 'P60007671', 'commId': 'C00578658'},
//   {'name':'Sanders', 'candId': 'P60007168', 'commId': 'C00577130'},
//   // {'name':'webb', 'candId': 'P60008885', 'commId': 'C00581215'},
//   {'name':'Bush', 'candId': 'P60008059', 'commId': 'C00579458'},


//   {'name':'Carson','candId': 'P60005915', 'commId': 'C00573519'},
//   // // {'name':'christie','candId': 'P60008521', 'commId': 'C00580399'},
//   {'name':'Cruz','candId': 'P60006111', 'commId': 'C00574624'},
//   {'name': 'Fiorina','candId': 'P60007242', 'commId': 'C00577312'},
//   // // {'name':'gilmore': {},
//   {'name':'Graham','candId': 'P60007697', 'commId':'C00578757'},
//   {'name':'Huckabee','candId': 'P80003478', 'commId': 'C00577981'},
//   {'name':'Jindal','candId': 'P60008398', 'commId': 'C00580159'},
//   // // {'name':'kasich','candId': 'P60003670', 'commId': 'C00581876'},
//   // // '{'name':'pataki': {},
//   {'name':'Paul','candId': 'P40003576', 'commId': 'C00575449'},
//   {'name':'Rubio','candId': 'P60006723', 'commId': 'C00458844'},
//   {'name':'Santorum','candId': 'P20002721', 'commId': 'C00578492'},
//   {'name':'Trump','candId': 'P80001571', 'commId': 'C00580100' },
//   // {'name':'walker','candId': 'P60006046', 'commId': 'C00580480'}
// ]

candidates.forEach(function(e){
  var commId = e.commId;
  $.ajax({
    url: 'https://api.open.fec.gov/v1/committee/' + commId + '/totals/?api_key=vEAnpDMm3fLd0ZT4eVb2ULbrVlOJ4XvQA50txDkG&page=1&per_page=20&sort_nulls_large=true&sort=-cycle',
    method: 'GET',
    dataType: 'json',
    success: function(data) {

      var Candidate = function Card(receipts, commId, candContr, candSpent){
        receipts = data.results[0].receipts,
        commId = data.results[0].committee_id,
        candContr = data.results[0].candidate_contribution,
        candSpent = data.results[0].disbursements
      }
        
      var newCandidate = new Candidate();

      candidatesArray.push(newCandidate);
    },
    error: function(error) {
      console.log(error);
      console.log('err')
    }
   })//$ajax
})//lop

console.log(candidatesArray);

var ben = "hello"


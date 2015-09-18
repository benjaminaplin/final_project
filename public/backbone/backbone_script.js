// console.log("backbone linked");
// var candidatesArray = []
// var CandidateApp = {
//   Models: {},
//   Collections: {},
//   Views: {},
//   Data: {
//     candidatesArray:[]
//   }
//   //decide what i want to store: global variables, models, views, collecitons
// };
// //------------CANDIDATE-COLLECTION-VIEW------------------------------

// CandidateApp.Models.Candidate = Backbone.Model.extend({
//   url: '/candidates',
// })

// //------------CANDIDATE-COLLECTION------------------------------

// CandidateApp.Collections.CandidateCollection = Backbone.Collection.extend({
//   model: CandidateApp.Models.Candidate,
//   url: '/candidates',
//   apiCall: function(){
//     var that = this;
//     var candidates = [
//       // 'chafee': {},
//       {'name':'Clinton', 'candId': 'P00003392', 'commId': 'C00575795'},
//       {'name':'O\'Malley', 'candId': 'P60007671', 'commId': 'C00578658'},
//       {'name':'Sanders', 'candId': 'P60007168', 'commId': 'C00577130'},
//       // {'name':'webb', 'candId': 'P60008885', 'commId': 'C00581215'},
//       {'name':'Bush', 'candId': 'P60008059', 'commId': 'C00579458'},


//       {'name':'Carson','candId': 'P60005915', 'commId': 'C00573519'},
//       // // {'name':'christie','candId': 'P60008521', 'commId': 'C00580399'},
//       {'name':'Cruz','candId': 'P60006111', 'commId': 'C00574624'},
//       {'name': 'Fiorina','candId': 'P60007242', 'commId': 'C00577312'},
//       // // {'name':'gilmore': {},
//       {'name':'Graham','candId': 'P60007697', 'commId':'C00578757'},
//       {'name':'Huckabee','candId': 'P80003478', 'commId': 'C00577981'},
//       {'name':'Jindal','candId': 'P60008398', 'commId': 'C00580159'},
//       // // {'name':'kasich','candId': 'P60003670', 'commId': 'C00581876'},
//       // // '{'name':'pataki': {},
//       {'name':'Paul','candId': 'P40003576', 'commId': 'C00575449'},
//       {'name':'Rubio','candId': 'P60006723', 'commId': 'C00458844'},
//       {'name':'Santorum','candId': 'P20002721', 'commId': 'C00578492'},
//       {'name':'Trump','candId': 'P80001571', 'commId': 'C00580100' },
//       // {'name':'walker','candId': 'P60006046', 'commId': 'C00580480'}
//   ]
//     candidates.forEach(function(e){
//       var commId = e.commId;
//       $.ajax({
//         url: 'https://api.open.fec.gov/v1/committee/' + commId + '/totals/?api_key=vEAnpDMm3fLd0ZT4eVb2ULbrVlOJ4XvQA50txDkG&page=1&per_page=20&sort_nulls_large=true&sort=-cycle',
//         method: 'GET',
//         dataType: 'json',
//         success: function(data) {
//           //set each attribute that we need 
//           // console.log(data)
//           //create instances of each candidate model and view, render the view
//           var newCandidate = new CandidateApp.Models.Candidate({
//             receipts: data.results[0].receipts,
//             commId: data.results[0].committee_id,
//             candContr: data.results[0].candidate_contribution,
//             candSpent: data.results[0].disbursements
//           });
            
//           var newCandidateView = new CandidateApp.Views.CandidateView({model: newCandidate});

//           that.add(newCandidate);
//         },
//         error: function(error) {
//           console.log(error);
//           console.log('err')
//         }
//        })//$ajax
//     })//end loop
//   }
// });

// //------------CANDIDATE-VIEW------------------------------------
 
// CandidateApp.Views.CandidateView = Backbone.View.extend({
//   initialize: function(){
//     this.listenTo(this.model, "change", this.render);
//   },
//   tagName: 'li', 
//   template: _.template($("#main-template").text()),

//   render: function(){

//     var renderedHTML = this.$el.html(this.template(this.model.attributes));
//     this.$el.html(renderedHTML);

//     $("#candidates").append(this.$el)
//   }
// });

// //------------CANDIDATE-COLLECTION-VIEW------------------------------------

// CandidateApp.Views.CandidateCollectionView = Backbone.View.extend({
//   //render candidate view and append to .this (self) here and append 
//   el: $('#chart'),
//   initialize: function(){
//     this.listenTo(this.collection, 'add', this.populateArray)
//     // this.populateArray()
//   },
//   populateArray: function(model){
//     // debugger
//     candidatesArray.push(model.attributes)
//     // console.log(candidatesArray)
//     console.log("hello")
//   }
// });

// var candidates = new CandidateApp.Collections.CandidateCollection({});
// var candidateCollectionView = new CandidateApp.Views.CandidateCollectionView({collection: candidates})
// candidates.apiCall();

// var ben = "hello"


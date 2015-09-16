console.log("backbone linked");


$(function(){

//------------CANDIDATE-COLLECTION-VIEW------------------------------

var Candidate = Backbone.Model.extend({
  url: '/candidates'
})

//------------CANDIDATE-COLLECTION------------------------------

var CandidateCollection = Backbone.Collection.extend({
  model: Candidate,
  url: '/candidates',
  apiCall: function(){
    var candidates = [
      // 'chafee': {},
      {'name':'Clinton', 'candId': 'P00003392', 'commId': 'C00575795'},
      {'name':'O\'Malley', 'candId': 'P60007671', 'commId': 'C00578658'},
      {'name':'Sanders', 'candId': 'P60007168', 'commId': 'C00577130'},
      // {'name':'webb', 'candId': 'P60008885', 'commId': 'C00581215'},
      {'name':'Bush', 'candId': 'P60008059', 'commId': 'C00579458'},


      {'name':'Carson','candId': 'P60005915', 'commId': 'C00573519'},
      // // {'name':'christie','candId': 'P60008521', 'commId': 'C00580399'},
      {'name':'Cruz','candId': 'P60006111', 'commId': 'C00574624'},
      {'name': 'Fiorina','candId': 'P60007242', 'commId': 'C00577312'},
      // // {'name':'gilmore': {},
      {'name':'Graham','candId': 'P60007697', 'commId':'C00578757'},
      {'name':'Huckabee','candId': 'P80003478', 'commId': 'C00577981'},
      {'name':'Jindal','candId': 'P60008398', 'commId': 'C00580159'},
      // // {'name':'kasich','candId': 'P60003670', 'commId': 'C00581876'},
      // // '{'name':'pataki': {},
      {'name':'Paul','candId': 'P40003576', 'commId': 'C00575449'},
      {'name':'Rubio','candId': 'P60006723', 'commId': 'C00458844'},
      {'name':'Santorum','candId': 'P20002721', 'commId': 'C00578492'},
      {'name':'Trump','candId': 'P80001571', 'commId': 'C00580100' },
      // {'name':'walker','candId': 'P60006046', 'commId': 'C00580480'}
  ]
    console.log('fired api call')

    candidates.forEach(function(e){
      var commId = e.commId;
      $.ajax({
        url: 'https://api.open.fec.gov/v1/committee/' + commId + '/totals/?api_key=w9zQ9pt9PNe6et305JsAtxiNQvhygjQC8yrCMMc8&page=1&per_page=20&sort_nulls_large=true&sort=-cycle',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
          // console.log(data);//set each attribute that we need 
          //create instances of each candidate model and view, render the view
          var newCandidate = new Candidate({
            receipts: data.results[0].receipts,
            commId: data.results[0].committee_id,
            candContr: data.results[0].candidate_contribution,
            candSpent: data.results[0].disbursements
          });
          var newCandidateView = new CandidateView({model: newCandidate});
          console.log(newCandidate)
          newCandidateView.render();
        },
        error: function(error) {
          console.log(error);
          console.log('err')
        }
       })//$ajax
    })//loop
  }
});

//------------CANDIDATE-VIEW------------------------------------
 
var CandidateView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, "change", this.render);
  },
  template: _.template($("#main-template").text()),
  tagName: 'li',
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
//re render the candidate view
//list item 
//
});

//------------CANDIDATE-COLLECTION-VIEW------------------------------------

var CandidateCollectionView = Backbone.View.extend({
  //render candidate view and append to .this (self) here and append 
  el: $('#chart'),
  initialize: function(){
    this.listenTo(this.collection, 'add', this.addOne);
  }
});

var candidates = new CandidateCollection({});
candidates.apiCall();
var candidateCollectionView = new CandidateCollectionView({collection: candidates})






});//page ready load function end
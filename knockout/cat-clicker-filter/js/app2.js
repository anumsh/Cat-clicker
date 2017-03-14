var Model = [
  {
    clickCount: 0,
    name: 'Bella sweet'
  },
  {
    clickCount: 0,
    name: 'Luna kala'

  },
  {
    clickCount: 0,
    name: 'Orea soft'
  },
  {
    clickCount: 0,
    name: 'Shadow eye'
  },
  {
    clickCount: 0,
    name: 'Chloe lee'
  }
];

var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  };


var ViewModel = function(){
  var self = this;
  this.catList = ko.observableArray([]); // cat array
  this.search= ko.observable(''); // search box
  Model.forEach(function(catItem) // adding cat entries in catList
  {
    self.catList.push(new Cat(catItem))
  })
  console.log(this.catList());
  this.filter= ko.computed(function() {
        var filter = this.search().toLowerCase(); // store the search box value in filter variable
        console.log(filter);
        if (!filter) {
            return self.catList(); // f there is no user input, return the self.catList() observableArray
        }
        else
        {
            return ko.utils.arrayFilter(this.catList(), function(item) {
                console.log("the values are " + (item.name().toLowerCase()) + " " + filter +  " " + (item.name().toLowerCase().indexOf(filter) != -1) + " " +  (item.name().toLowerCase().indexOf(filter)) );
                return (item.name().toLowerCase().indexOf(filter) != -1);  
        });
    }
  }, this);

   this.reset = function() {
        this.search("");
    }

}

ko.applyBindings(new ViewModel())
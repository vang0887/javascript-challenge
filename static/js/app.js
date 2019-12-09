// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

var button = d3.select("#filter-btn");

button.on("click", function() {

    var inputDate = d3.select("#datetime");

    var inputValue = inputDate.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filterDate = tableData.filter(date => date.datetime == inputValue);

    console.log(filterDate);

    tbody.html("");

    filterDate.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

});

var button1 = d3.select("#filter-btn1");

    button1.on("click", function() {
        
        var inputCity = d3.select("#city"); 
      
        var inputValue1 = inputCity.property("value")
      
        console.log(inputValue1);
      
        console.log(tableData);
      
        var filterCity = tableData.filter(nameOfCity => nameOfCity.city == inputValue1);
      
        console.log(filterCity);
      
        tbody.html("");
      
        filterCity.forEach((ufo) => {
              var row = tbody.append("tr");
              Object.entries(ufo).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
              });
            });

});


var button2 = d3.select("#filter-btn2");

    button2.on("click", function() {
        
        var inputState = d3.select("#state"); 
      
        var inputValue2 = inputState.property("value")
      
        console.log(inputValue2);
      
        console.log(tableData);
      
        var filterState = tableData.filter(nameOfState => nameOfState.state == inputValue2);
      
        console.log(filterState);
      
        tbody.html("");
      
        filterState.forEach((ufo) => {
              var row = tbody.append("tr");
              Object.entries(ufo).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
              });
            });

});


var button3 = d3.select("#filter-btn3");

    button3.on("click", function() {
        
        var inputCountry = d3.select("#country"); 
      
        var inputValue3 = inputCountry.property("value")
      
        console.log(inputValue3);
      
        console.log(tableData);
      
        var filterCountry = tableData.filter(nameOfCountry => nameOfCountry.country == inputValue3);
      
        console.log(filterCountry);
      
        tbody.html("");
      
        filterCountry.forEach((ufo) => {
              var row = tbody.append("tr");
              Object.entries(ufo).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
              });
            });

});

var button4 = d3.select("#filter-btn4");

    button4.on("click", function() {
        
        var inputShape = d3.select("#shape"); 
      
        var inputValue4 = inputShape.property("value")
      
        console.log(inputValue4);
      
        console.log(tableData);
      
        var filterShape = tableData.filter(ufoShape => ufoShape.shape == inputValue4);
      
        console.log(filterShape);
      
        tbody.html("");
      
        filterShape.forEach((ufo) => {
              var row = tbody.append("tr");
              Object.entries(ufo).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
              });
            });

});
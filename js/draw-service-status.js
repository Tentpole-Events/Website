function draw(data) {

  "use strict";

  d3.select("#demo")
    .append("ul")
    .selectAll("li")
    .data(data)
    .enter()
    .append("li")
    .text(function (d) {
      return d.name + ": " + d.status;
    });

  /*

  d3.select("#demo")
    .append("ul")
    .selectAll("li")
    .data(data)
    .enter()
    .append("li")
    .text(function (d) {
      return d.name + ": " + d.status;
    });

  d3.selectAll("li")
    .style("font-weight", function(d){
      if (d.status == "GOOD SERVICE"){
        return "normal"
      } else {
        return "bold"
      }
    })

  var bodySelection = d3.select("#demo")
    .attr("width", 480)
    .attr("height", 480);

  bodySelection.append("ul")
    .selectAll("li")
    .data(data)
    .enter()
    .append("li")
    .text(function (d) {
      return d.name + ": " + d.status;
    });

  */
}

// d3.json("assets/data/service_status.json", draw);
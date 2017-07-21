function draw(data) {

  "use strict";

  var bodySelection = d3.select("#demo");

  var svgSelection = bodySelection.append("svg")
    .attr("width", 960)
    .attr("height", 960);

  var diameter = 960;

  var g = svgSelection.append("g").attr("transform", "translate(2,2)");

  var format = d3.format(",d");

  var pack = d3.pack()
    .size([diameter - 4, diameter - 4]);

  d3.json(data, function(error, root) {
    if (error) throw error;

    root = d3.hierarchy(root)
      .sum(function(d) { return d.size; })
      .sort(function(a, b) { return b.value - a.value; });

    var node = g.selectAll(".node")
      .data(pack(root).descendants())
      .enter().append("g")
      .attr("class", function(d) { return d.children ? "node" : "leaf node"; })
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

    node.append("title")
      .text(function(d) { return d.data.name + "\n" + format(d.value); });

    node.append("circle")
      .attr("r", function(d) { return d.r; });

    node.filter(function(d) { return !d.children; }).append("text")
      .attr("dy", "0.3em")
      .text(function(d) { return d.data.name.substring(0, d.r / 3); });
  });
}
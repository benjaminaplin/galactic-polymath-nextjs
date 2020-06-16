import React, { useEffect, useState } from "react";
import NavBar from "../../components/layout/navBar"
import * as d3 from "d3";
import $ from "jquery";
import * as $csv from "jquery-csv";
// import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

const JobViz = () => {
  var margin = { top: 0, right: 60, bottom: 0, left: 60 };

  useEffect(() => {
    const width = Math.max(window.innerWidth, 1600) - margin.right - margin.left;
    const height = window.innerHeight - margin.top - margin.bottom;
    initJobVizGraphic(width, height);
    
    const svgs = document.getElementsByTagName("svg");
    return function cleanUp() {
      svgs.length > 0 && svgs[0].remove();
    };
  }, []);

    return (
      <>
      <div className="job-viz-header">
        <NavBar />
      </div>
      {/* <div className="job-viz-body-grid"> */}
        <div className="svg-container" />
        {/* <Parallax
            pages={2}
            ref={(ref) => (this.parallax = ref)}
            style={{ width: "70%" }}
          >
            <ParallaxLayer offset={0} speed={2}>
              <div className="job-viz-grad-background" />
            </ParallaxLayer>
            <ParallaxLayer offset={.4} speed={2}>
              <div className="job-viz-grad-background-2" />
            </ParallaxLayer>
            <ParallaxLayer offset={.75} speed={1}>
              <div className="diagonal-box-2">
                <div className="content" />
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0.20} speed={2}>
              <div className="diagonal-box">
                <div className="content" />
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.1}>
              <img src="https://gdurl.com/4KdN" height="600" />
            </ParallaxLayer>
          </Parallax> */}
      {/* </div> */}
      </>
    );
}

export default JobViz;



var i = 0,
  duration = 750,
  small_root,
  small_stack,
  root;

const initJobVizGraphic = (width, height) => {
  var margin = { top: 0, right: 60, bottom: 0, left: 60 };

  var tree_loaded = false;
  var job_data_loaded = false;

  var tree = d3.layout.tree().size([height, width]);

  var diagonal = d3.svg.diagonal().projection(function (d) {
    return [d.y, d.x];
  });

  var svg = d3
    .select(".svg-container")
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  function setChildrenOff(node) {
    node._children = node.children;
    node.children = null;
    $.each(node._children, function (index, inner_node) {
      setChildrenOff(inner_node);
    });
  }

  $.getJSON("/job_tree_v2.json", function (treeData) {
    console.log("got data");
    tree_loaded = true;
    root = treeData[0];
    small_root = $.extend(true, {}, treeData[0]);
    small_stack = [$.extend(true, {}, treeData[0])];
    root.x0 = height / 2;
    root.y0 = 0;

    // parse through and rename children to _children (start everything closed)
    setChildrenOff(root);

    update(root);

    d3.select(self.frameElement).style("height", "500px");

    loadSmallView();
  }).fail(function () {
    console.log("Error getting data");
  });

  var job_data = null;
  $.ajax({
    url: "/job_data.csv",
  })
    .done(function (data) {
      job_data = $csv.toObjects(data);
      job_data_loaded = true;
      loadSmallView();
    })
    .fail(function () {
      console.log("failed getting job data");
    });

  function loadSmallView() {
    if (job_data_loaded && tree_loaded) {
      // SMALL MODE
      // set the showing current node to root
      showSmallNode(small_root);
    }
  }

  function update(source) {
    // Compute the new tree layout.
    var nodes = tree.nodes(root).reverse(),
      links = tree.links(nodes);

    // Normalize for fixed-depth.
    nodes.forEach(function (d) {
      d.y = d.depth * 300;
    });

    // Update the nodes…
    var node = svg.selectAll("g.node").data(nodes, function (d) {
      return d.id || (d.id = ++i);
    });

    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("data-job-title", function (d) {
        return d.name;
      })
      .attr("transform", function (d) {
        return "translate(" + source.y0 + "," + source.x0 + ")";
      })
      .on("click", click);

    //nodeEnter.append('rect')
    //		.style('fill', '#FFF')
    //		.style('width', '240px').style('height', '16px').style('y', '-8').style('stroke-width', 0.5);

    nodeEnter
      .append("circle")
      .attr("r", 1e-6)
      .style("fill", function (d) {
        return d._children ? "#f0f4ff" : "#6812d1";
      });

    var text = nodeEnter
      .append("text")
      .attr("x", 15)
      .attr("dy", ".35em")
      .attr("text-anchor", "start")
      .text(function (d) {
        return d.name;
      })
      .style("fill-opacity", 1e-6);

    var padding = 2;
    var bbox = text.node();
    if (bbox) {
      bbox = bbox.getBBox();
    } else {
      bbox = { x: 0, y: 0, width: 0, height: 0 };
    }
    nodeEnter
      .insert("rect", "text")
      .attr("x", bbox.x - padding)
      .attr("y", bbox.y - padding)
      .attr("width", function (d) {
        return d.name.length * 9.5 + padding * 2;
      })
      .attr("height", bbox.height + padding * 2)
      .style("fill", "white")
      .style("fill-opacity", 1e-6);

    // Transition nodes to their new position.
    var nodeUpdate = node
      .transition()
      .duration(duration)
      .attr("transform", function (d) {
        return "translate(" + d.y + "," + d.x + ")";
      });

    nodeUpdate
      .select("circle")
      .attr("r", 10)
      .style("fill", function (d) {
        return d._children ? "#f0f4ff" : "#6812d1";
      });

    nodeUpdate.select("rect").style("fill-opacity", 0.7);

    nodeUpdate.select("text").style("fill-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    var nodeExit = node
      .exit()
      .transition()
      .duration(duration)
      .attr("transform", function (d) {
        return "translate(" + source.y + "," + source.x + ")";
      })
      .remove();

    nodeExit.select("circle").attr("r", 1e-6);

    nodeExit.select("rect").style("fill-opacity", 1e-6);

    nodeExit.select("text").style("fill-opacity", 1e-6);

    // Update the links…
    var link = svg.selectAll("path.link").data(links, function (d) {
      return d.target.id;
    });

    // Enter any new links at the parent's previous position.
    link
      .enter()
      .insert("path", "g")
      .attr("class", "link")
      .attr("d", function (d) {
        var o = { x: source.x0, y: source.y0 };
        return diagonal({ source: o, target: o });
      });

    // Transition links to their new position.
    link.transition().duration(duration).attr("d", diagonal);

    // Transition exiting nodes to the parent's new position.
    link
      .exit()
      .transition()
      .duration(duration)
      .attr("d", function (d) {
        var o = { x: source.x, y: source.y };
        return diagonal({ source: o, target: o });
      })
      .remove();

    // Stash the old positions for transition.
    nodes.forEach(function (d) {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }

  // Toggle children on click.
  function click(d) {
    if (d && !d.children && !d._children) {
      showJobData(d);
      showPopUp();
    } else {
      hidePopUp();
    }

    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    update(d);
  }

  function showJobData(node) {
    console.log("NODE", node);
    var data = job_data.filter(function (job, index) {
      return job.title == $(node).name;
    });

    console.log(data);
    var job = data[0];
    if (!job) {
      return;
    }
    $("#selected-job-title").text(job.title);
    $("#salary").text(job["Median.annual.wage..2017.1."]);
    $("#education-needed").text(job["Typical.education.needed.for.entry"]);
    $("#work-experience").text(job["Work.experience.in.a.related.occupation"]);
    $("#on-the-job-training").text(
      job[
        "Typical.on.the.job.training.needed.to.attain.competency.in.the.occupation"
      ]
    );
    $("#2016-employment").text(
      (
        parseFloat(job["Employment.2016"].replace(",", "")) * 1000.0
      ).toLocaleString()
    );
    var addPlus = parseFloat(job["ChgEmploy.2016to26.Perc"]) > 0.0 ? "+" : "";
    $("#2026-employment").text(
      (
        parseFloat(job["Employment.2026"].replace(",", "")) * 1000.0
      ).toLocaleString() +
        " (" +
        addPlus +
        job["ChgEmploy.2016to26.Perc"] +
        "% change)"
    );
  }

  function showPopUp() {
    $(".popup").addClass("show");
  }

  function hidePopUp() {
    $(".popup").removeClass("show");
  }

  function showSmallNode(node) {
    var data = job_data.filter(function (job, index) {
      return job.title == node.name;
    });
    var job = data[0];
    if (!job) {
      return;
    }
    $("#small-job-title-header").text(job.title);
    $("#small-salary").text(job["Median.annual.wage..2017.1."]);
    $("#small-education-needed").text(
      job["Typical.education.needed.for.entry"]
    );
    $("#small-work-experience").text(
      job["Work.experience.in.a.related.occupation"]
    );
    $("#small-on-the-job-training").text(
      job[
        "Typical.on.the.job.training.needed.to.attain.competency.in.the.occupation"
      ]
    );
    $("#small-2016-employment").text(
      (
        parseFloat(job["Employment.2016"].replace(",", "")) * 1000.0
      ).toLocaleString()
    );
    var addPlus = parseFloat(job["ChgEmploy.2016to26.Perc"]) > 0.0 ? "+" : "";
    $("#small-2026-employment").text(
      (
        parseFloat(job["Employment.2026"].replace(",", "")) * 1000.0
      ).toLocaleString() +
        " (" +
        addPlus +
        job["ChgEmploy.2016to26.Perc"] +
        "% change)"
    );

    // show the node
    $("#small-header, #job-details-small").show();

    // hide the other part of hte thing
    $("#small-drill-down").hide();

    // hide right button if it's the bottom
    if (node.children == undefined) {
      $("#small-drill-down-button").hide();
    } else {
      $("#small-drill-down-button").show();
    }

    //hide left button if top
    if (node.name == "Jobs") {
      $("#small-drill-up-button").hide();
    } else {
      $("#small-drill-up-button").show();
    }

    if (node.children) {
      $("#job-details-small").removeClass("show-end-only-data");
    } else {
      $("#job-details-small").addClass("show-end-only-data");
    }
  }

  function showSmallDrillDown(node) {
    // get the children of this, and slap a link in there for each
    var children = node.children;
    $("#small-drill-down-header").text(node.name + " Categories");
    $("#small-drill-down-options").empty();
    for (var i = 0; i < children.length; i++) {
      $("#small-drill-down-options").append(
        '<div class="small-drill-down-option"><a href="#" data-name="' +
          children[i].name +
          '" class="small-drill-down-option">' +
          children[i].name +
          "</a></div>"
      );
    }
    // hide the other part of hte thing
    $("#small-header, #job-details-small").hide();
    // show the drill down
    $("#small-drill-down").show();
    $("#small-drill-down-back").show();
  }

  // $(document).ready(function () {
  $("svg").on("click", ".node", function (clickEvent) {
    $("#data-container").show();

    $(".popup").css("left", clickEvent.pageX + "px");
    $(".popup").css("top", clickEvent.pageY + "px");
  });

  $(".close-popup").on("click", function (clickEvent) {
    clickEvent.preventDefault();
    hidePopUp();
  });

  $("#small-drill-down-back").click(function (clickEvent) {
    showSmallNode(small_stack[small_stack.length - 1]);
  });

  $("#small-drill-down-button").click(function (clickEvent) {
    clickEvent.preventDefault();
    console.log(small_stack);
    showSmallDrillDown(small_stack[small_stack.length - 1]);
  });

  $("#small-drill-up-button").click(function (clickEvent) {
    clickEvent.preventDefault();
    var removed = small_stack.pop();
    showSmallDrillDown(small_stack[small_stack.length - 1]);
  });

  $("#small-drill-down-options").on(
    "click",
    ".small-drill-down-option",
    function (clickEvent) {
      clickEvent.preventDefault();
      // find the node inside the current small node (end of small stack) which has the correct name
      var current_node = small_stack[small_stack.length - 1];
      var result = null;
      for (i = 0; i < current_node.children.length; i++) {
        if (current_node.children[i].name == $(this).attr("data-name")) {
          result = current_node.children[i];
          break;
        }
      }
      // show this node
      showSmallNode(result);
      //add it to the stack
      small_stack.push(result);
    }
  );
};


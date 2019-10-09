function researchPage(m) {
    // m = d3.select("section.maps").select("div")
    m.append("div")
        // .attr("class", "mapview")
        .append("h1").text("Methodology to gather data and visualise our outcomes")

    m.append("p").text("Like always gathering data itself was the biggest challenge, having the right format along with geo coordinates with the premiums was not a ready-made platter. Sourcing from Census data to Crime data followed by Average premium pricings across the industry has been combined to tell our story.")
    m.append("p").text("To find a  true-up value of your vehicle’s premium we have combined all to comprehend Avg Insurance pricing based on your Neighbourhood and the model of most and least affordable vehicles.")

    m.append("br")
    m.append("iframe")
        .attr("title", "Toronto Police Open Data Portal")
        .attr("src", "http://data.torontopolice.on.ca/pages/open-data")
        .attr("width", "100%")
        .attr("height", "500")

    m.append("br")
    m.append("iframe")
        .attr("title", "Toronto Police Open Data Portal")
        .attr("src", "http://data.torontopolice.on.ca/pages/open-data")
        .attr("width", "100%")
        .attr("height", "500")
}
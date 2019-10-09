function homePage(m) {
    // m = d3.select("section.maps").select("div")
    m.append("div")
        // .attr("class", "mapview")
        .append("h1").text("Story of Your Auto Insurance Premium")
    
    m.append("p").text("Auto insurance premiums in Ontario is a delusion for most of us. An insurance premium of the same vehicle varies widely within Toronto itself. Some of us believe it is just our past driving record whereas Insurers have been trying to tell us a different story.")
    m.append("p").text("This story is a never-ending debate which triggers the cost drivers to multiple dimension starting from Fraudulent claims, Model of your Vehicle, Stats of your Neighbourhood, Costs to repair your vehicle and so on. Interestingly there is no benchmark calculating your premium.")
    m.append("h4").text("We have outlined some key driving factors tried to merge multiple databases and depict")

    m.append("ul")
        .append("li").text("Where you live")
        .append("li").text("Criminal activity in your neighbourhood")
        .append("li").text("Previous Insurance claims")
        .append("li").text("Model of your Vehicle")
        .append("li").text("Average Income of your surrounding area")
        .append("li").text("Average Safety ratings of your vehicle")
        .append("li").text("Is it expensive to fix your vehicle?")      

}
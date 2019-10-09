
function createMap(map) {
    // mapID(map) !== "notmap" ? layingtheMap(map): ""
    mapID(map) !== "notmap" ? layingtheMap(map): layPages(map)
}
function layingtheMap(map) {
    h = window.innerHeight - parseInt(d3.select("body").style('height')) + parseInt(d3.select("section").style('margin'))
    m = d3.select("section.maps").select("div")
    m.append("div")
        .attr("id", map)
        .attr("class", "mapview")

    if (map==="theft") {
        theftMap(map)
    }else if (map==="incomelevel") {
        incomeLevelMap(map)
    }else if (map==="accidents") {
        accidentsMap(map)
    }else if (map==="population") {
        createPopulation(map)
    }   
}
function layPages(map){
    if (map==="home"){
        m = d3.select("section.maps").select("div").append("div").attr("class", "mapview")
        homePage(m)}
    else if (map==="research"){
        m = d3.select("section.maps").select("div").append("div").attr("class", "mapview")
        researchPage(m)
    }        
}

function mapID(map){
    switch(map) {
        case "theft": 
            return "mapbox.streets"
        case "incomelevel":
            return "mapbox.high-contrast"
        case "accidents":
            return "mapbox.streets"
        case "population":
            return "mapbox.streets"
        default:
            return "notmap"
    }
}

function openMap(map, elmnt) {
    var i, tablinks;

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    if (document.getElementsByClassName("mapview").length > 0) {
        for (i = 0; i < document.getElementsByClassName("mapview").length; i++)
            document.getElementsByClassName("mapview")[i].hidden = true

        if (document.getElementsByClassName("mapview")[map])
            document.getElementsByClassName("mapview")[map].hidden = false
        else createMap(map)
    } else createMap(map)
}

document.getElementById("defaultOpen").click();
function createMap(map) {
    h = window.innerHeight - parseInt(d3.select("body").style('height')) + parseInt(d3.select("section").style('margin'))
    m = d3.select("section.maps").select("div")
    m.append("iframe")
        .attr("id", map)
        .attr("height", h - 22)
        .attr("src", map + ".html")
        .attr("frameborder", "0")
}

function openMap(map, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    document.getElementById(map).style.display = "block";
    elmnt.style.backgroundColor = color;

    if (document.getElementsByTagName("iframe").length > 0) {
        for (i=0;i<document.getElementsByTagName("iframe").length;i++) 
            document.getElementsByTagName("iframe")[i].hidden = true

        if (document.getElementsByTagName("iframe")[map])
            document.getElementsByTagName("iframe")[map].hidden = false
        else createMap(map)       
    }else createMap(map)    
}

document.getElementById("defaultOpen").click();
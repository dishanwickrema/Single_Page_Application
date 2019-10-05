function createMap(map) {
    if (map == 'IncomeLevel') {
        h = window.innerHeight - parseInt(d3.select("body").style('height')) + parseInt(d3.select("section").style('margin'))
        m = d3.select("section.maps").append("div")
        m.append("iframe")
            .attr("id", "myIframe")
            .attr("height", h - 22)
            .attr("src", "income_level.html")
            .attr("frameborder", "0")
    }
    else{
        d3.select("section.maps").select("div").remove()
    }
}

function openMap(map, elmnt, color) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        console.log(tabcontent[i])
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    document.getElementById(map).style.display = "block";
    elmnt.style.backgroundColor = color;

    createMap(map)
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


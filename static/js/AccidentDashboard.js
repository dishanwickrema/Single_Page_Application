
var link = "https://opendata.arcgis.com/datasets/1b2929dc396d4fd38917fdde37fd22d9_0.geojson";



var years = ["2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018"];
var districts = ['Toronto and East York','Scarborough','North York','Etobicoke York'];



var filterYear = "";
var response = "";




function update(){
    console.log(d3.event.target.value);
    var filterYear = d3.event.target.value;

    filterMap(filterYear);

    
    
}

d3.json(link,function(data){
    
    
    response = data.features;

    createMapw(response);

       
});


function createMapw(response){

    var yearCount = {};
    
    response.forEach( r => {
        if(r.properties.YEAR in yearCount){
            yearCount[r.properties.YEAR] += 1;
        } else {
            yearCount[r.properties.YEAR] = 1;
        }
    })

   
     
        
        var yearCounts = [yearCount[2008],yearCount[2009],yearCount[2010],yearCount[2011],yearCount[2012],yearCount[2013],yearCount[2014],yearCount[2015],yearCount[2016],yearCount[2017],yearCount[2018]];
        
        
        var trace1 = {
            x: yearCounts,
            y: years,
            type:'bar',
            orientation: 'h'
        }

        var data1 = [trace1];


        var layout1 = {
            title: "10 Years Trend (Year-wise)",
            //xaxis: {
                 //title:"Number of Accidents",
            //     range: [years[0],years[9]],
                
           // },
            //yaxis: {title: "Year"}
        }

        Plotly.newPlot("map2",data1,layout1);

        var districtCount = {};


        response.forEach(r=>{
            if (r.properties.District in districtCount){
                districtCount[r.properties.District] += 1;
            } else {
                districtCount[r.properties.District] = 1;
            }
        });

       
        

        var trace2 = {
            labels: ['Etobicoke York','Toronto and East York','North York','Scarborough'],
            values: [districtCount['Etobicoke York'],districtCount['Toronto and East York'],districtCount['North York'],districtCount['Scarborough']],
            type: 'pie'
        }

        var data2 = [trace2]

        var layout2 = {
            title: "10 Years Trend (District-wise)"
        }

        Plotly.newPlot("map1",data2,layout2);
}



d3.selectAll(".btn-outline-secondary").on("click",update);

function filterMap(filterYear){

    var districtCountf = {};


        response.forEach(r=>{
            if(r.properties.YEAR == filterYear){
            if (r.properties.District in districtCountf){
                districtCountf[r.properties.District] += 1;
            } else {
                districtCountf[r.properties.District] = 1;
            }}
        });

      
        

        var trace3 = {
            x: ['Etobicoke York','Toronto and East York','North York','Scarborough'],
            y: [districtCountf['Etobicoke York'],districtCountf['Toronto and East York'],districtCountf['North York'],districtCountf['Scarborough']],
            type: 'bar'
        }

        var data3 = [trace3]

        var layout3 = {
            title: `Year: ${filterYear}`
        }

        Plotly.newPlot("map3",data3,layout3);

        var involveType = {};

        response.forEach(r=>{
            if(r.properties.YEAR == filterYear){
            if (r.properties.INVTYPE in involveType){
                involveType[r.properties.INVTYPE] += 1;
            } else {
                involveType[r.properties.INVTYPE] = 1;
            }}
        });

        

        

        var ctx = document.getElementById('map4').getContext('2d');
        var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
        labels: ['Cyclist','Driver','Motorcycle Driver','Passenger','Pedestrian'] ,
        datasets: [{
            
            data: [involveType['Cyclist'],involveType['Driver'],involveType['Motorcycle Driver'],involveType['Passenger'],involveType['Pedestrian']],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(255, 20, 20, 0.7)',
                'rgba(255, 159, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)'                
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 12062, 235, 0.2)',
                'rgba(255, 159, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                
            ],
            borderWidth: 1
        }]
    },
    options:{
        cutoutPercentage: 40,
        responsive: true,
        maintainAspectRatio : false,
        title: {
            display: true,
            text: 'Fatalities by Involvement Type (Year-wise)',
            position: 'top'       
        }
 
   }
   
});

  


}




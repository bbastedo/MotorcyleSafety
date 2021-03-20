//-------------------------------------------------------------------------------------------------------------------------//
var path = '../../../Cleaned/Master_filtered.json'
d3.json(path).then(function(data){
    
    var drinkRecord = data.filter(d=>["Yes", "No"].indexOf(d.DRINKING) != -1);
    var accident = drinkRecord.map(d=>d.PER_TYP);
    var drink = drinkRecord.map(d=>d.DRINKING)
        console.log(drink)

        var data1 = {
            type: 'bar',
            x: drink,
            y: accident,
            marker:{color: "lightgreen",
            },
            // mode: 'lines+markers',
            transforms: [{
             type: 'aggregate',
             groups: drink,
             aggregations: [
                {target: 'y', func: 'sum', enabled: true},
        ]
      }]
    };
    



    // Define layout
    var layout = {
        
      yaxis: {
      title: {text: "Number of Accidents",
      zerolinecolor:"green",
      font:{
      color: 'green',
      size: 25,
      }
      },

      gridcolor:"lightgreen",
      tickfont: {
      // family: 'Old Standard TT, serif',
      size: 16,
      color: 'green',
        }
      },

      xaxis: {
      // outlinecolor:"green",
      title:{text: "Presence of Alcohol",
      font:{
      color: 'green',
      size: 25,
        }
      },
      tickfont: {
      // family: 'Old Standard TT, serif',
      size: 18,
      color: 'darkgreen',
        }
      },
    plot_bgcolor: "white",
    paper_bgcolor:"white",

};

// End Layout


    
    var traces = [data1]
    Plotly.newPlot("plot", traces, layout);
})
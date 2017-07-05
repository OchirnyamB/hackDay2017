
$(function() {

  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart','treemap']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);
  google.charts.setOnLoadCallback(drawChart2);
  google.charts.setOnLoadCallback(drawChart3);
  google.charts.setOnLoadCallback(drawChart4);
  google.charts.setOnLoadCallback(drawChart5);
  google.charts.setOnLoadCallback(drawChart6);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'],
      ['Global',    null,                 0,                               0],
      ['Music 30.3%',   'Global',             0,                               0],
      ['LifeStyle 35.2%',    'Global',             0,                               0],
      ['Sports 23.3%',      'Global',             0,                               0],
      ['Media 20.4%', 'Global',             0,                               0],
      ['CD\'s 13.4%' ,    'Music 30.3%',            11,                              10],
      ['iTunes 62.4%',       'Music 30.3%',            52,                              31],
      ['Concerts 24.2%',    'Music 30.3%',            24,                              12],
      ['Pottery Classes 38.2%',    'LifeStyle 35.2%',             42,                              -11],
      ['Dance Classes 28.3%',   'LifeStyle 35.2%',             31,                              -2],
      ['Golf 22.3%',    'LifeStyle 35.2%',             22,                              -13],
      ['Gardening 11.2% ',        'LifeStyle 35.2%',             21,                              -5],
      ['Cardinal Tickets 56.2%',     'Sports 23.3%',               36,                              4],
      ['Sports Equipment 43.7%',     'Sports 23.3%',               20,                              -12],
      ['Books 12.2%%',      'Media 20.4%',               4,                               34],
      ['NewsPapers 16.2%',  'Media 20.4%',               1,                               -5],
      ['Netflix 12.2%',    'Media 20.4%',               12,                              24],
      ['Hulu 33.4%',      'Media 20.4%',               18,                              13],
      ['Cinemas 26%',  'Media 20.4%',               15,                              -52]
    ]);
    tree = new google.visualization.TreeMap(document.getElementById('chart_div2'));
    var options = {
      minColor: '#a0cfec',
      midColor: '#3366cc',
      maxColor: '#14a',
      headerHeight: 0,
      fontColor: 'white',
      showTooltips: false,

      showScale: false
    }

    //Listener Does Not Work
    function selectHandler()
    {

      var option = data.getValue(selectedItem.row,0);

    }
    google.visualization.events.addListener(tree, 'select', selectHandler);
    tree.draw(data, options);
  }

  function drawChart2()
  {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Entertainment', 4],
      ['Personal Care', 1],
      ['Medical Expenses', 2],
      ['Travel Expenses', 3],
      ['Withdrawals', 1]
    ]);

    // Set chart options
    var options = {'title':'How Much I Spend',
    'width':1000,
    'height':800,
    'left': 0,
    'pieHole': 0.4,
    chartArea:{left:10,top:20,width:"80%",height:"80%"}};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));

    function selectHandler()
    {
      var selectedItem = chart.getSelection()[0];
      if(selectedItem)
      {
        var option = data.getValue(selectedItem.row,0);
        if(option == 'Entertainment')
        {
          $('html, body').animate({
            scrollTop: $("#grid_1").offset().top
          }, 1000);
        }
        else if(option == 'Personal Care')
        {
          $('html, body').animate({
            scrollTop: $("#grid_2").offset().top
          }, 1000);
        }
        else if(option == 'Medical Expenses')
        {
          $('html, body').animate({
            scrollTop: $("#grid_3").offset().top
          }, 1000);
        }
        else if(option == 'Travel Expenses')
        {
          $('html, body').animate({
            scrollTop: $("#grid_4").offset().top
          }, 1000);
        }
        else if(option == 'Withdrawals')
        {
          $('html, body').animate({
            scrollTop: $("#grid_5").offset().top
          }, 1000);
        }
      }
    }
    google.visualization.events.addListener(chart, 'select', selectHandler);
    chart.draw(data, options);
  }

  function drawChart3() {

    var data = google.visualization.arrayToDataTable([
      ['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'],
      ['Global',    null,                 0,                               0],
      ['Gym Membership 24.3%',   'Global',             0,                               0],
      ['Beauty 25.1%',    'Global',             0,                               0],
      ['Health Supplements 50.5%',      'Global',             0,                               0],
      ['Gold\'s Gym',    'Gym Membership 24.3%',            11,                              10],
      ['Four Seasons',       'Gym Membership 24.3%',            52,                              31],
      ['Cosmetics',    'Beauty 25.1%',             42,                              -11],
      ['Hair Cuts',   'Beauty 25.1%',             31,                              -2],
      ['Protien Shakes',     'Health Supplements 50.5%',               36,                              4],
      ['Vitamins',     'Health Supplements 50.5%',               20,                              -12],
      ['Test1',     'Health Supplements 50.5%',               40,                              63],
      ['Test2',      'Health Supplements 50.5%',               4,                               34],
      ['Test3',  'Health Supplements 50.5%',               1,                               -5],
      ['Test4',    'Health Supplements 50.5%',               12,                              24],
      ['Test5',      'Health Supplements 50.5%',               18,                              13],
      ['Test6',  'Health Supplements 50.5%',               11,                              -52]
    ]);

    tree = new google.visualization.TreeMap(document.getElementById('chart_div3'));
    var options = {
      minColor: '#f9966b',
      midColor: '#dc3912',
      maxColor: '#a00',
      headerHeight: 0,
      fontColor: 'white',
      showTooltips: false,

      showScale: false
    }

    tree.draw(data, options);
  }

  function drawChart4() {

   var data = google.visualization.arrayToDataTable([
      ['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'],
      ['Global',    null,                 0,                               0],
      ['Health Care 34.2%',   'Global',             0,                               0],
      ['Dental Care 24.5%',    'Global',             0,                               0],
      ['Pediatrics 20.4',      'Global',             0,                               0],
      ['Perscription Drugs 9.2%', 'Global',             0,                               0],
      ['Walk-In Clinic 11.7%',    'Global',            0,                              0],
      ['Four Seasons',       'Health Care 34.2%',            52,                              31],
      ['Cosmetics',    'Health Care 34.2%',             42,                              -11],
      ['Hair Cuts',   'Dental Care 24.5%',             31,                              -2],
      ['Protien Shakes',     'Dental Care 24.5%',               36,                              4],
      ['Vitamins',     'Perscription Drugs 9.2%',               20,                              -12],
      ['Test',     'Perscription Drugs 9.2%',               40,                              63],
      ['Test1',      'Perscription Drugs 9.2%',               4,                               34],
      ['Test2',  'Perscription Drugs 9.2%',               1,                               -5],
      ['Test3',    'Walk-In Clinic 11.7%',               12,                              24],
      ['Test4',      'Walk-In Clinic 11.7%',               18,                              13],
      ['Test5',  'Walk-In Clinic 11.7%',               11,                              -52]
    ]);

    tree = new google.visualization.TreeMap(document.getElementById('chart_div4'));
    var options = {
      minColor: '#fdd017',
      midColor: '#f90',
      maxColor: '#a40',
      headerHeight: 0,
      fontColor: 'white',
      showTooltips: false,

      showScale: false
    }

    tree.draw(data, options);
  }

  function drawChart5() {

    var data = google.visualization.arrayToDataTable([
      ['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'],
      ['Global',    null,                 0,                               0],
      ['Flights 22.2%',   'Global',             0,                               0],
      ['Rental Cars 24.2%',    'Global',             0,                               0],
      ['Gas 25.2%',      'Global',             0,                               0],
      ['Uber 15.2%', 'Global',             0,                               0],
      ['Taxi 13.2%',    'Global',             0,                               0],
      ['Brazil',    'Flights 22.2%',            11,                              10],
      ['USA',       'Flights 22.2%',            52,                              31],
      ['Mexico',    'Flights 22.2%',            24,                              12],
      ['Canada',    'Flights 22.2%',            16,                              -23],
      ['France',    'Rental Cars 24.2%',             42,                              -11],
      ['Germany',   'Rental Cars 24.2%',             31,                              -2],
      ['Sweden',    'Rental Cars 24.2%',             22,                              -13],
      ['Italy',     'Rental Cars 24.2%',             17,                              4],
      ['UK',        'Rental Cars 24.2%',             21,                              -5],
      ['China',     'Gas 25.2%',               36,                              4],
      ['Japan',     'Gas 25.2%',               20,                              -12],
      ['India',     'Gas 25.2%',               40,                              63],
      ['Laos',      'Gas 25.2%',               4,                               34],
      ['Mongolia',  'Gas 25.2%',               1,                               -5],
      ['Israel',    'Gas 25.2%',               12,                              24],
      ['Iran',      'Taxi 13.2%',               18,                              13],
      ['Pakistan',  'Gas 25.2%',               11,                              -52],
      ['Egypt',     'Uber 15.2%',             21,                              0],
      ['S. Africa', 'Uber 15.2%',             30,                              43],
      ['Sudan',     'Uber 15.2%',             12,                              2],
      ['Congo',     'Taxi 13.2%',             10,                              12],
      ['Zaire',     'Taxi 13.2%',             8,                               10]
    ]);

    tree = new google.visualization.TreeMap(document.getElementById('chart_div5'));
    var options = {
      minColor: '#98ff98',
      midColor: '#109618',
      maxColor: '#050',
      headerHeight: 0,
      fontColor: 'white',
      showTooltips: false,

      showScale: false
    }

    tree.draw(data, options);
  }

  function drawChart6() {

    var data = google.visualization.arrayToDataTable([
      ['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'],
      ['Global',    null,                 0,                               0],
      ['ATM 35.5%',   'Global',             0,                               0],
      ['Cashier Check 57.2%',    'Global',             0,                               0],
      ['Check 7.3%',      'Global',             0,                               0],
      ['Australia', 'Global',             0,                               0],
      ['Africa',    'Global',             0,                               0],
      ['Brazil',    'ATM 35.5%',            11,                              10],
      ['USA',       'ATM 35.5%',            52,                              31],
      ['Mexico',    'ATM 35.5%',            24,                              12],
      ['Canada',    'ATM 35.5%',            16,                              -23],
      ['France',    'ATM 35.5%',             42,                              -11],
      ['Germany',   'Cashier Check 57.2%',             31,                              -2],
      ['Sweden',    'Cashier Check 57.2%',             22,                              -13],
      ['Italy',     'Cashier Check 57.2%',             17,                              4],
      ['UK',        'Cashier Check 57.2%',             21,                              -5],
      ['China',     'Cashier Check 57.2%',               36,                              4],
      ['Japan',     'Cashier Check 57.2%',               20,                              -12],
      ['India',     'Cashier Check 57.2%',               40,                              63],
      ['Laos',      'Cashier Check 57.2%',               4,                               34],
      ['Mongolia',  'Cashier Check 57.2%',               1,                               -5],
      ['Israel',    'Check 7.3%',               35,                              24],
    
    ]);

    tree = new google.visualization.TreeMap(document.getElementById('chart_div6'));
    var options = {
      minColor: '#D462ff',
      midColor: '#990099',
      maxColor: '#606',
      headerHeight: 0,
      fontColor: 'white',
      showTooltips: false,

      showScale: false
    }

    tree.draw(data, options);
  }
});

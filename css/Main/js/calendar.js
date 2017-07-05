$(function() {
  function createCalendarRow(date, time, cost, desc) {
    var calRow = document.createElement("TR")

    var calDate = document.createElement("TD")

    calDate.setAttribute("class", "agenda-date")
    //calDate.setAttribute("class", "active")
    calDate.setAttribute("rowspan", "1")

    var dayM = document.createElement("DIV")
    var dayW = document.createElement("DIV")
    var dayT = document.createElement("DIV")

    dayM.setAttribute("class", "dayofmonth")
    dayM.appendChild(document.createTextNode(date.dayM))

    dayW.setAttribute("class", "dayofweek")
    dayW.appendChild(document.createTextNode(date.dayW))

    dayT.setAttribute("class", "shortdate text-muted")
    dayT.appendChild(document.createTextNode(date.dayT))

    calDate.appendChild(dayM)
    calDate.appendChild(dayW)
    calDate.appendChild(dayT)

    var calTime = document.createElement("TD")

    calTime.setAttribute("class", "agenda-time")
    calTime.appendChild(document.createTextNode(time))

    var calCost = document.createElement("TD")

    calCost.setAttribute("class", "agenda-time")
    calCost.appendChild(document.createTextNode(cost))

    var calDesc = document.createElement("TD")

    calDesc.setAttribute("class", "agenda-events")
    calDesc.appendChild(document.createTextNode(desc))

    calRow.appendChild(calDate)
    calRow.appendChild(calTime)
    calRow.appendChild(calCost)
    calRow.appendChild(calDesc)

    return calRow;
  }

  var body = document.getElementById("calendartable")

  var d = [];

  // d.dayM = "27"
  // d.dayW = "Sunday"
  // d.dayT = "July, 2014"
  //
  // t = "7:30 AM"
  //
  // dsc = "Personal Care"
  //
  // body.appendChild(createCalendarRow({dayM:"23", dayW:"Wednesday", dayT:"July, 2014"}, "8:00 AM", 500, "Entertainment"))
  // body.appendChild(createCalendarRow(d, t, 500, dsc))
  // body.appendChild(createCalendarRow(d, "12:00 PM", 500, "Withdrawals"))
  // body.appendChild(createCalendarRow(d, "4:00 PM", 500, "Entertainment"))

  var text = '{"categories":[' +
  '{"Amount":"$303.96 ","Date":"6/15/2017","Time":"9:01 PM","Company":"Browsedrive","Location":"204 Cardinal Road","Tag":""},' +
  '{"Amount":"$436.50 ","Date":"6/15/2017","Time":"4:50 PM","Company":"Jaxnation","Location":"9 Fairfield Plaza","Tag":""},' +
  '{"Amount":"$80.39 ","Date":"6/15/2017","Time":"1:26 PM","Company":"Gabtype","Location":"5 Hermina Parkway","Tag":""},' +
  '{"Amount":"$239.40 ","Date":"6/13/2017","Time":"10:35 AM","Company":"Twiyo","Location":"129 Dakota Parkway","Tag":"Games"},' +
  '{"Amount":"$499.42 ","Date":"6/12/2017","Time":"1:35 AM","Company":"Midel","Location":"21 Debs Parkway","Tag":"Shoes"},' +
  '{"Amount":"$173.05 ","Date":"6/11/2017","Time":"5:20 PM","Company":"Thoughtworks","Location":"3 Jenna Point","Tag":"Baby"},' +
  '{"Amount":"$149.44 ","Date":"6/10/2017","Time":"12:08 PM","Company":"Tazzy","Location":"4 Montana Drive","Tag":"Music"},' +
  '{"Amount":"$467.32 ","Date":"6/6/2017","Time":"2:04 PM","Company":"Madari","Location":"13 Wallaby Way","Tag":"Books"},' +
  '{"Amount":"$479.51 ","Date":"6/5/2017","Time":"10:58 AM","Company":"Ozu","Location":"3 Dapin Way","Tag":"Home"},' +
  '{"Amount":"$7.38 ","Date":"6/4/2017","Time":"10:18 PM","Company":"Eadel","Location":"7830 Manufacturers Park","Tag":"Games"},' +
  '{"Amount":"$286.67 ","Date":"6/4/2017","Time":"3:47 AM","Company":"Meejo","Location":"40978 Jay Street","Tag":"Games"},' +
  '{"Amount":"$445.42 ","Date":"6/3/2017","Time":"5:12 AM","Company":"Kwimbee","Location":"86438 Weeping Birch Lane","Tag":"Jewelery"},' +
  '{"Amount":"$228.80 ","Date":"6/3/2017","Time":"3:04 PM","Company":"Buzzster","Location":"4 Killdeer Alley","Tag":"Automotive"},' +
  '{"Amount":"$168.47 ","Date":"6/3/2017","Time":"5:23 AM","Company":"Eire","Location":"86722 Hansons Drive","Tag":"Electronics"},' +
  '{"Amount":"$91.96 ","Date":"6/2/2017","Time":"1:27 PM","Company":"Photobug","Location":"5137 Rowland Hill","Tag":"Sports"},' +
  '{"Amount":"$343.19 ","Date":"5/31/2017","Time":"7:33 AM","Company":"Gigashots","Location":"9 Melrose Point","Tag":"Kids"},' +
  '{"Amount":"$195.84 ","Date":"5/31/2017","Time":"1:22 AM","Company":"Babbleblab","Location":"0167 Rowland Avenue","Tag":"Home"},' +
  '{"Amount":"$346.08 ","Date":"5/30/2017","Time":"5:53 PM","Company":"Centidel","Location":"17 Charing Cross Hill","Tag":"Sports"},' +
  '{"Amount":"$12.51 ","Date":"5/30/2017","Time":"4:49 PM","Company":"Zoomzone","Location":"6160 Crest Line Road","Tag":"Kids"},' +
  '{"Amount":"$156.33 ","Date":"5/30/2017","Time":"8:36 AM","Company":"Yadel","Location":"87993 Dakota Crossing","Tag":"Health"},' +
  '{"Amount":"$344.42 ","Date":"5/30/2017","Time":"5:02 AM","Company":"Pixoboo","Location":"3 Thierer Parkway","Tag":"Sports"},' +
  '{"Amount":"$34.52 ","Date":"5/29/2017","Time":"1:02 PM","Company":"Meetz","Location":"255 Vermont Lane","Tag":"Games"},' +
  '{"Amount":"$161.48 ","Date":"5/27/2017","Time":"10:18 PM","Company":"Dablist","Location":"325 Bluejay Road","Tag":"Grocery"},' +
  '{"Amount":"$195.07 ","Date":"5/25/2017","Time":"9:28 AM","Company":"Myworks","Location":"1 John Wall Pass","Tag":"Outdoors"},' +
  '{"Amount":"$280.90 ","Date":"5/25/2017","Time":"10:39 PM","Company":"Quimba","Location":"0 Everett Lane","Tag":"Industrial"},' +
  '{"Amount":"$270.36 ","Date":"5/23/2017","Time":"8:54 PM","Company":"Buzzdog","Location":"45 Lighthouse Bay Junction","Tag":"Health"},' +
  '{"Amount":"$361.85 ","Date":"5/23/2017","Time":"9:24 AM","Company":"Gigazoom","Location":"97 Laurel Parkway","Tag":"Jewelery"},' +
  '{"Amount":"$17.49 ","Date":"5/23/2017","Time":"7:58 PM","Company":"Skynoodle","Location":"1361 Orin Circle","Tag":"Industrial"},' +
  '{"Amount":"$63.11 ","Date":"5/22/2017","Time":"9:16 AM","Company":"Twitterworks","Location":"2776 Cottonwood Lane","Tag":"Sports"},' +
  '{"Amount":"$462.50 ","Date":"5/22/2017","Time":"5:14 AM","Company":"Viva","Location":"2 8th Alley","Tag":"Garden"},' +
  '{"Amount":"$100.07 ","Date":"5/21/2017","Time":"11:26 PM","Company":"Linkbuzz","Location":"002 Crest Line Road","Tag":"Music"},' +
  '{"Amount":"$490.13 ","Date":"5/20/2017","Time":"9:48 AM","Company":"Brainbox","Location":"7449 Loftsgordon Drive","Tag":"Music"},' +
  '{"Amount":"$344.79 ","Date":"5/18/2017","Time":"6:48 AM","Company":"Voonte","Location":"19 Burning Wood Street","Tag":"Baby"},' +
  '{"Amount":"$251.84 ","Date":"5/18/2017","Time":"10:41 AM","Company":"Abata","Location":"47155 Roxbury Park","Tag":"Outdoors"},' +
  '{"Amount":"$263.51 ","Date":"5/17/2017","Time":"8:58 PM","Company":"Aimbu","Location":"871 Badeau Court","Tag":"Clothing"},' +
  '{"Amount":"$296.54 ","Date":"5/17/2017","Time":"4:12 PM","Company":"Voonyx","Location":"1481 Oxford Trail","Tag":"Books"},' +
  '{"Amount":"$228.90 ","Date":"5/17/2017","Time":"5:34 PM","Company":"Thoughtblab","Location":"1 Arkansas Parkway","Tag":"Outdoors"},' +
  '{"Amount":"$118.56 ","Date":"5/16/2017","Time":"10:48 AM","Company":"Meemm","Location":"6062 Leroy Pass","Tag":"Sports"},' +
  '{"Amount":"$392.71 ","Date":"5/15/2017","Time":"9:19 PM","Company":"Katz","Location":"496 Continental Park","Tag":"Music"},' +
  '{"Amount":"$474.06 ","Date":"5/14/2017","Time":"5:37 AM","Company":"Zoovu","Location":"438 Nova Point","Tag":"Clothing"},' +
  '{"Amount":"$97.47 ","Date":"5/13/2017","Time":"4:08 AM","Company":"Edgetag","Location":"57385 Morrow Park","Tag":"Kids"},' +
  '{"Amount":"$398.12 ","Date":"5/13/2017","Time":"9:21 PM","Company":"Avaveo","Location":"451 Nobel Center","Tag":"Automotive"},' +
  '{"Amount":"$49.56 ","Date":"5/13/2017","Time":"8:44 PM","Company":"Zooxo","Location":"7462 Bluejay Junction","Tag":"Industrial"},' +
  '{"Amount":"$435.01 ","Date":"5/10/2017","Time":"6:11 PM","Company":"Cogidoo","Location":"4 Marquette Point","Tag":"Kids"},' +
  '{"Amount":"$149.01 ","Date":"5/9/2017","Time":"9:02 AM","Company":"Topicblab","Location":"8 Manitowish Drive","Tag":"Tools"},' +
  '{"Amount":"$350.72 ","Date":"5/5/2017","Time":"3:53 AM","Company":"Divape","Location":"1 Calypso Parkway","Tag":"Baby"},' +
  '{"Amount":"$62.16 ","Date":"5/5/2017","Time":"5:05 PM","Company":"Camido","Location":"11917 West Way","Tag":"Jewelery"},' +
  '{"Amount":"$438.56 ","Date":"5/4/2017","Time":"2:50 PM","Company":"Myworks","Location":"05154 Bluestem Place","Tag":"Electronics"},' +
  '{"Amount":"$50.90 ","Date":"5/2/2017","Time":"12:23 AM","Company":"Dablist","Location":"47 Swallow Plaza","Tag":"Games"},' +
  '{"Amount":"$106.63 ","Date":"5/1/2017","Time":"6:02 PM","Company":"Mycat","Location":"82 Steensland Junction","Tag":"Jewelery"},' +
  '{"Amount":"$236.56 ","Date":"5/1/2017","Time":"12:51 PM","Company":"Skivee","Location":"1150 Stone Corner Point","Tag":"Baby"}]}';

  obj = JSON.parse(text);

  for (i=0; i< 50; i++) {
    body.appendChild(createCalendarRow({dayM:"", dayW:obj.categories[i].Date, dayT:""}, obj.categories[i].Time, obj.categories[i].Amount, obj.categories[i].Company))
  }

});

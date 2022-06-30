function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6VbNOpu0HrU":
        Script1();
        break;
      case "5a0bnwLU2Oe":
        Script2();
        break;
      case "67pQyuTKsbU":
        Script3();
        break;
      case "5k63ahLKgId":
        Script4();
        break;
      case "6HSyEWcz37o":
        Script5();
        break;
      case "69EJjbOmLiC":
        Script6();
        break;
      case "6WovZoMwtZM":
        Script7();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script6()
{
  $("#tab-customlink").show();
}

function Script7()
{
  window.print();
}


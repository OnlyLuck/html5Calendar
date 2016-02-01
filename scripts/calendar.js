var now = new Date();
var clickedDateObject = null;
var missingTime = 8;

FillCalendar();

//SetDate(now);


	
$('.clickDay').click(function()
{
    //var clickedID = this.text;
	//window.alert("You clicked " + clickedID);
	ClearSelected();
	clickedDateObject = this.parentNode;
	var clickedDate = new Date(now.getFullYear(), now.getMonth(), this.text);
	SetDate(clickedDate);
	
	clickedDateObject.style.backgroundColor = "#7777FF";	
	
});

function ClearSelected()
{
	if(clickedDateObject !== null)
	{
		
		clickedDateObject.style.backgroundColor = "#FFFFFF";
	}
}

function SetDate(date)
{
	document.getElementById("current-date").innerHTML = GetDayText(date.getDay()) + ', ' + GetMonthText(date.getMonth()) 
	+ ' ' + date.getDate() + ', ' + date.getFullYear();
}

function GetDayText(day)
{
	switch(day)
	{
		case 0:
			day = 'Sunday';
			break;
		case 1:
			day = 'Monday';
			break;
		case 2:
			day = 'Tuesday';
			break;
		case 3:
			day = 'Wednesday';
			break;
		case 4:
			day = 'Thursday';
			break;
		case 5:
			day = 'Friday';
			break;
		case 6:
			day = 'Saturday';
			break;
	}
	
	return day;
}

function GetMonthText(mon)
{
	switch(mon)	
	{	
		case 0:
			mon = 'January';
			break;
		case 1:
			mon = 'February';
			break;
		case 2:
			mon = 'March';
			break;
		case 3:
			mon = 'April';
			break;
		case 4:
			mon = 'May';
			break;
		case 5:
			mon = 'June';
			break;
		case 6:
			mon = 'July';
			break;
		case 7:
			mon = 'August';
			break;
		case 8:
			mon = 'September';
			break;
		case 9:
			mon = 'October';
			break;
		case 10:
			mon = 'November';
			break;
		case 11:
			mon = 'December';
			break;
	}
	
	return mon;
}

function GetMonthYearText(mon, year)
{
	return GetMonthText(mon) + " " + year;
}



function FillCalendar()
{
	ClearSelected();
	var title = document.getElementById("title");
	title.innerHTML = GetMonthYearText(now.getMonth(), now.getFullYear());
	var day1 = new Date(now.getFullYear(), now.getMonth(), 1);	
	var c1 = day1.getDay();	
	var d = c1 * -1;
	//console.log("Days in " + GetMonthText(now.getMonth(), now.getFullYear()) + " is " + getDaysInMonth(now.getFullYear(), now.getMonth()));
	var daysInMonth = getDaysInMonth(now.getYear(), now.getMonth()) -1;  // -1 to account for the date starting at 0
	for(r = 0; r < 6; r++)
	{	
		for(c = 0; c < 7; c++)
		{
			var idName = 'r'+ r + 'c'+ c;
			//console.log(idName);
			var var1 = document.getElementById(idName);
			if(d < 0 || d >  daysInMonth)
				var1.text = "";				
			else
			{
				var realD = d + 1;
				var1.text = "" + (realD);
				
				if(realD == missingTime)
				{
					var1.style.color = "#FF0000";				
				}
				else
					var1.style.color = "#000000";
					
							
			}
				
			d++;
			
		}
	}
}

function prevMonth()
{
	now.setMonth(now.getMonth() - 1);
	FillCalendar();
}

function nextMonth()
{
	now.setMonth(now.getMonth() + 1);
	FillCalendar();
}

function getDaysInMonth(y, m) {
	console.log(y, m);
   return /8|3|5|10/.test(m)?30:m==1?(!(y%4)&&y%100)||!(y%400)?29:28:31;
}




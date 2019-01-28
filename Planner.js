// JavaScript Document
var LocationX=0;
var LocationY=0;
var MouseLocationX=0;
var MouseLocationY=0;
var SelectingObject=null;
var VisualSpace=Array();
var Objects = Array();
Create_Moving_Object();
Create_Object_Following_Mouse();
document.body.addEventListener("mouseup",Clear_SelectingObject);

function Object(ID,Name,Color,Width,Height,Price)
{
	this.ID = ID;
	this.Name = Name;
	this.Color = Color;
	this.Width = Width;
	this.Height = Height;
	this.Price = Price;
}

//var Objects = ReadData();
//document.getElementById("Emulator").innerHTML = Objects[1].Name;
/*

//create data at location,place pic & Calculate Using Space
function AddObjectToPlannerEmulator()
{
	
}
//Calculate Object Using How Many Space
function Calculate_Using_Place()
{
	
}
*/
//create a Simulation Planner Place,5CM = 5px = 1block.
function Planner_Emulator(object)
{
	//document.getElementById("Item_Bar").innerHTML = "123";
	var div = document.getElementById("Emulator");
	div.innerHTML="";
	
	var Width=document.getElementById("Width").value
	var Height=document.getElementById("Height").value;
	
	CreateEmtryElement(Height,Width);
}
//create empty space in Emulator
function CreateEmtryElement(Height,Width) 
{
	var Emulator = document.getElementById("Emulator");
	var i=0,j=0;
	var NumberOfBox = Height*Width;
	var str="";
	str += "<table>";
	for(i=0;i<Height/5;i++)
	{
		str += "<tr>";
		for(j=0;j<Width/5;j++)
		{
			str += "<td style='box-sizing: border-box;border:1px solid black;width:" + Emulator.clientWidth + "px;height:" + parseFloat(Emulator.clientHeight/parseFloat(Height/5)) + "px;' onmouseover='mouseon(this,"+(j+1)+","+(i+1)+")' onmouseout='mouseout(this)' >" + "" + "</td>";
		}
		str += "<tr>";
	}
	str += "</table>";
	document.getElementById("Emulator").innerHTML = str;
}
//Geting Data
function ReadData()
{
	Objects[0] = new Object(0,'table','0','100','100','0');
}
//function used by Item_Bar if mousedown add Object Data to SelectingObject
function Create_Moving_Object()
{
	ReadData();
	var str = "<img src='Object/" + Objects[0].Name + ".jpg' name='" + Objects[0].ID + "' width=50% height=20% ondragstart='return false;' onMouseDown='Object_Selecting(this)'></img>";
	document.getElementById("Item_Bar").innerHTML = str;
}


//if mouse on ,select the location
function mouseon(location,Locx,Locy)
{
	location.style.background = 'black';
	LocationX = Locx;
	LocationY = Locy;
}
//if mouse out ,cencel select
function mouseout(location)
{
	location.style.background = 'white';
	LocationX = 0;
	LocationY = 0;
}

function Create_Object_Following_Mouse()
{
	var Position_Now = document.getElementById("Moving_Object");
	Position_Now.style='position:absolute;pointer-events: none;float:bottom;';
}
//mouse location now
function mouse_position()
{	
	var posX = LocationX;
	var posY = LocationY;
	
	document.getElementById("Position").innerHTML = posX + "," + posY;
}
//create a div to Empty prepare for Object Selected
function Object_Following_Mouse()
{
	var e = window.event;
	MouseLocationX = e.clientX;
	MouseLocationY = e.clientY;
	if(SelectingObject == null){document.getElementById("MousePosition").innerHTML = MouseLocationX + "," + MouseLocationY;}
	var Position_Now = document.getElementById("Moving_Object");
	Position_Now.style.top = MouseLocationY-SelectingObject.Height + "px";
	Position_Now.style.left = MouseLocationX + "px";
}
//Select Object
function Object_Selecting(Object)
{
	SelectingObject = Objects[Object.name];
	document.getElementById("MousePosition").innerHTML = SelectingObject.Name;
	var Position_Now = document.getElementById("Moving_Object");
	Position_Now.style.visibility = "visible";
	Position_Now.src = "Object/" + SelectingObject.Name + ".jpg";
	Position_Now.height = SelectingObject.Height;
	Position_Now.width = SelectingObject.Width;
	Object_Following_Mouse();
}
//clear Object in SlectingObject
function Clear_SelectingObject()
{
	SelectingObject = null;
	var Position_Now = document.getElementById("Moving_Object");
	Position_Now.style.visibility = "hidden";
}
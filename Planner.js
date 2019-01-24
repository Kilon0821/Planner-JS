// JavaScript Document
var LocationX=0;
var LocationY=0;
var LocatingObject=null;
var VisualSpace=Array();

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
//insert Color for ,Geting Data from FromDataBase.txt
function ReadData()
{
	var Objects = Array();
	Objects[0] = new Object(0,'0','0','0','0','0');
	Objects[1] = new Object(1,'1','1','1','1','1');
	return Objects;
}

//function used by Item_Bar if mousedown add Object Data to Object_Follow_Mouse()
function Create_Moving_Object()
{
	
}
//create a div to save Data Selected,if mouseup add Object ID & Location To AddObjectToPlannerEmulator()
function Object_Follow_Mouse()
{
	var Object = {ID:1,Name:"1",Color:"1",Width:"1",Height:"1",Price:"1"};
}
//create data at location,place pic & Calculate Using Space
function AddObjectToPlannerEmulator()
{
	
}
//Calculate Object Using How Many Space
function Calculate_Using_Place()
{
	
}
*/
//create a Simulation Planner Place,5CM = 5px.
function Planner_Emulator(object)
{
	//document.getElementById("Item_Bar").innerHTML = "123";
	var div = document.getElementById("Emulator");
	div.innerHTML="";
	
	var Width=document.getElementById("Width").value
	var Height=document.getElementById("Height").value;
	
	document.getElementById("Item_Bar").innerHTML = Width + "<br>" + Height;
	CreateEmtryElement(Height,Width);
}

function CreateEmtryElement(Height,Width) 
{
	var i=0,j=0;
	var NumberOfBox = Height*Width;
	var str="";
	str += "<table>";
	for(i=0;i<Height;i++)
	{
		str += "<tr>";
		for(j=0;j<Width;j++)
		{
			str += "<td style='border:1px solid black;width:5px;height:5px;' onmouseover='mouseon(this,"+(j+1)+","+(i+1)+")' onmouseout='mouseout(this)' >" + "" + "</td>";
		}
		str += "<tr>";
	}
	str += "</table>";
	document.getElementById("Emulator").innerHTML = str;
}

function mouseon(location,Locx,Locy)
{
	location.style.background = 'black';
	LocationX = Locx;
	LocationY = Locy;
}

function mouseout(location)
{
	location.style.background = 'white';
	LocationX = 0;
	LocationY = 0;
}

function mouse_position()
{	
	var posX = LocationX;
	var posY = LocationY;
	
	document.getElementById("Position").innerHTML = posX + "," + posY;
}
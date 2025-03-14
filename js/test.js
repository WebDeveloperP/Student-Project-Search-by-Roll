

document.write("<div class='list-part'>");

document.write("<input type='text' name='input' id='input'>");
document.write("<input type='submit' name='submit' id='submit' onclick='checkdata()'>");

document.write("<table class='list-table' border='2' cellpadding='50'>");

	document.write("<tr>");

		document.write("<th> Roll </th>");
		document.write("<th> Reg. No. </th>");
		document.write("<th> Name </th>");
		document.write("<th> Batch </th>");
		document.write("<th> Department </th>");

	document.write("</tr>");

		document.write("<tr>");

			document.write("<td id='roll'></td>");
			document.write("<td id='reg'></td>");
			document.write("<td id='name'></td>");
			document.write("<td id='batch'></td>");
			document.write("<td id='dept'></td>");

		document.write("</tr>");

document.write("</table>");

document.write("</div>");


function checkdata(){
	var value = document.getElementById("input").value;
	if(value == 1){
		document.getElementById("roll").innerHTML='1';
		document.getElementById("reg").innerHTML='FIT WDD 1301';
		document.getElementById("name").innerHTML='Arif Billah';
		document.getElementById("batch").innerHTML='WDD ~ 13';
		document.getElementById("dept").innerHTML='WDD';
	}else if(value == 2){
		document.getElementById("roll").innerHTML='2';
		document.getElementById("reg").innerHTML='FIT WDD 1302';
		document.getElementById("name").innerHTML='Bibhas Samaddar';
		document.getElementById("batch").innerHTML='WDD ~ 13';
		document.getElementById("dept").innerHTML='WDD';
	}else if(value == 3){
		document.getElementById("roll").innerHTML='3';
		document.getElementById("reg").innerHTML='FIT WDD 1303';
		document.getElementById("name").innerHTML='Saful Islam';
		document.getElementById("batch").innerHTML='WDD ~ 13';
		document.getElementById("dept").innerHTML='WDD';
	}else if(value == 4){
		document.getElementById("roll").innerHTML='4';
		document.getElementById("reg").innerHTML='FIT WDD 1304';
		document.getElementById("name").innerHTML='Zohurul Haque';
		document.getElementById("batch").innerHTML='WDD ~ 13';
		document.getElementById("dept").innerHTML='WDD';
	}else if(value == 5){
		document.getElementById("roll").innerHTML='5';
		document.getElementById("reg").innerHTML='FIT WDD 1305';
		document.getElementById("name").innerHTML='Jakir Hossain';
		document.getElementById("batch").innerHTML='WDD ~ 13';
		document.getElementById("dept").innerHTML='WDD';
	}else if(value == 6){
		document.getElementById("roll").innerHTML='6';
		document.getElementById("reg").innerHTML='FIT WDD 1306';
		document.getElementById("name").innerHTML='Sobuz Islam';
		document.getElementById("batch").innerHTML='WDD ~ 13';
		document.getElementById("dept").innerHTML='WDD';
	}else{
		alert("Wrong Input")
	}
}	
function load() {
	if (GBrowserIsCompatible()) {

	}
}

function autocomplet()  {
	var xmlhttp;    
var keyword=document.getElementById('q').value;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("country_list_id").innerHTML=xmlhttp.responseText;
    document.getElementById("country_list_id").style.display="block";
    }
  }
xmlhttp.open("GET","/ajax_search.php?keyword="+keyword,true);
xmlhttp.send();
}

function set_item(item) {
	// change input value
	document.getElementById("q").value=item;
	// hide proposition list
	document.getElementById("country_list_id").style.display="none";
}


function goSearch() {
document.getElementById('s2').value=document.getElementById('q').value+" "+document.getElementById('loc').value;

	searchstop=2;
	if ($('q').value=='' || $('q').value==null || $('q').value=='search here...') {
		$('q').value='';
	} else {
		$('q').style.border='1px solid #c1c1c1';
	}
	
	if ($('loc').value=='' || $('loc').value=='city, state OR zipcode') {
		$('loc').style.border='1px solid red';
		$('smsg').innerHTML='<img src="/images/cross.png" align="absmiddle" style="margin-right: 5px;" /> City and state, or zip code is required';
		searchstop=1;
	} else {
		$('loc').style.border='1px solid #c1c1c1';
	}

	var formcontent=$('loc').value;
	var length=formcontent.length;
	formcontent=formcontent.split(" ")

	if (formcontent.length>1 || length==5) { } else {
		$('loc').style.border='1px solid red';
		$('smsg').innerHTML='City and State, or Zip Code is Required';
		searchstop=1;
	}
	
	if (searchstop==1) { 
		$('smsg').style.display='block';
	} else {
		
		document.searchform.submit();
	}
	
}
function goSearch1()
{
	
	if ($('adv_state').value=='1' ) 
	{
		alert('please select a state');
		return false;
	} 
	else if(($('keyword').value=='' || $('keyword').value=='Business or Keyword') && ($('phone').value=='Phone' || $('phone').value=='')   )
	{
	alert('please enter business name or keyword or phone number');
		return false;	
	}
	else 
	{
		return true;
	}
	
}

//document.searchform.submit();


<!--
<!-- Begin
function popUp(URL) {
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=600,height=600,right = 362,top = 234');");
}
// End -->

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
//-->

function PopupCenter(pageURL, title,w,h) {
var left = (screen.width/2)-(w/2);
var top = (screen.height/2)-(h/2);
var targetWin = window.open (pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
}


function resethours()
{
document.getElementById('mon_start').disabled = false; document.getElementById('mon_start').selectedIndex = '09:00 AM'; document.getElementById('mon_check').checked=false;
		document.getElementById('mon_end').disabled = false; document.getElementById('mon_end').selectedIndex = '05:00 PM';
		document.getElementById('tue_start').disabled = false; document.getElementById('tue_start').selectedIndex = '09:00 AM';document.getElementById('tue_check').checked=false;
		document.getElementById('tue_end').disabled = false; document.getElementById('tue_end').selectedIndex = '05:00 PM';
		document.getElementById('wed_start').disabled = false; document.getElementById('wed_start').selectedIndex = '09:00 AM';document.getElementById('wed_check').checked=false;
		document.getElementById('wed_end').disabled = false;document.getElementById('wed_end').selectedIndex = '05:00 PM';
		document.getElementById('thu_start').disabled = false; document.getElementById('thu_start').selectedIndex = '09:00 AM';document.getElementById('thu_check').checked=false;
		document.getElementById('thu_end').disabled = false;document.getElementById('thu_end').selectedIndex = '05:00 PM';
		document.getElementById('fri_start').disabled = false; document.getElementById('fri_start').selectedIndex = '09:00 AM';document.getElementById('fri_check').checked=false;
		document.getElementById('fri_end').disabled = false;document.getElementById('fri_end').selectedIndex = '05:00 PM';
		document.getElementById('sat_start').disabled = false; document.getElementById('sat_start').selectedIndex = '09:00 AM';document.getElementById('sat_check').checked=false;
		document.getElementById('sat_end').disabled = false;document.getElementById('sat_end').selectedIndex = '05:00 PM';
		document.getElementById('sun_start').disabled = false; document.getElementById('sun_start').selectedIndex = '09:00 AM';document.getElementById('sun_check').checked=false;
		document.getElementById('sun_end').disabled = false; document.getElementById('sun_end').selectedIndex = '05:00 PM';


}
 function hours_show(){
 
 	if (document.getElementById('check3').checked) {
		document.getElementById('business_hours').style.display = 'block';
		//resethours();
	}
	else {
		document.getElementById('business_hours').style.display = 'none';
		
	}
	
 }
 
  function check_box(box1,box2, id){
  	if(document.getElementById(id).checked) {
 		document.getElementById(box1).disabled = true;
		document.getElementById(box2).disabled = true;
		document.getElementById(box1).value = '09:00 AM';
		document.getElementById(box2).value = '05:00 PM';
	}
	else {
		document.getElementById(box1).disabled = false;
		document.getElementById(box2).disabled = false;
	}
 }
function twopen(box1,box2){
	if(document.getElementById(box1).value=="Open 24 Hours" ||document.getElementById(box2).value=="Open 24 Hours" )
  	document.getElementById(box2).value = document.getElementById(box1).value;
 }

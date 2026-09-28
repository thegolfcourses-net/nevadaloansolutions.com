function getCheckedValue(radioObj) {
	if(!radioObj)
		return "";
	var radioLength = radioObj.length;
	if(radioLength == undefined)
		if(radioObj.checked)
			return radioObj.value;
		else
			return "";
	for(var i = 0; i < radioLength; i++) {
		if(radioObj[i].checked) {
			return radioObj[i].value;
		}
	}
	return "";
}
    function vote()
	{
	var xmlhttp;
	var poll=getCheckedValue(document.userpoll.poll);
	if(poll=="")
	{
	alert("Please select a version first");
	return false;
	}
	//var content;
	//content=document.share_link_frm.scroll_comments.value;

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
		
    		document.getElementById("vote").innerHTML=xmlhttp.responseText;
			
    		}
			
			
  		}
		xmlhttp.open("GET",window.site_url+"/get_vote.php?poll="+poll,true);
		xmlhttp.send();
		
	
}

function result()
	{
	var xmlhttp;
	
	
	//var content;
	//content=document.share_link_frm.scroll_comments.value;

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
		
    		document.getElementById("vote_block").innerHTML=xmlhttp.responseText;
			
    		}
			
			
  		}
		xmlhttp.open("GET",window.site_url+"/get_vote_result.php",true);
		xmlhttp.send();
		
	
}
function vote_now()
	{
	var xmlhttp;
	
	
	//var content;
	//content=document.share_link_frm.scroll_comments.value;

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
		
    		document.getElementById("vote_block").innerHTML=xmlhttp.responseText;
			
    		}
			
			
  		}
		xmlhttp.open("GET",window.site_url+"/get_vote_form.php",true);
		xmlhttp.send();
		
	
}
function addElem (src, elemId, appendTo){
	$.get(src, function(data){
		var div = document.createElement("div");
		div.innerHTML = data;
		
		var foundElem = $(div).find("#" + elemId);
		
		if (foundElem != undefined)
			$("#" + appendTo).append(foundElem);
		else
			console.log(elemId + " did not found in " + pageName);
	});
};
var defaultHeight = 16;
var defaultWidth = 16;
$(document).ready(function() {
    initalizeGrid();
});

function initalizeGrid(){
	var grid = $("#grid");
	var cell = "<div class='cell'></div>";
	for(var y =0;y<defaultHeight;y++){
		var row="<div class='row'>";
		for(var x=0;x<defaultWidth;x++){
			row+=cell;
		}
		row+="<\div>";
		grid.append(row);
		//alert("added: "+row);
	}
	
	
	$(".cell").on('mouseenter', function(){
		
		//$(this).css('background-color', 'black');
		$(this).toggleClass('highlighted');
		//alert("mouse enter triggered!");
	});
//	alert("Grid Ready!")
}
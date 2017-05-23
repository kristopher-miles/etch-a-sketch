var defaultSize = 100;
var gridPixels = 600;
var maxSize = 100;

function buildGrid(dimentions) {
	$('#grid').children().remove();
	var grid = $("#grid");
	var cell = "<div class='cell'></div>";
	var row="";
	for (var y =0;y<dimentions;y++){
		for(var x=0;x<dimentions;x++){
			row+=cell;
		}
		
	}
	grid.append(row);
	//Now we need to set the cell dimentions.

	var cellSize = gridPixels/dimentions;
	cellSize+="px";

	$(".cell").css('height',cellSize);
	$(".cell").css('width',cellSize);
	$(".cell").on('mouseenter', function(){	
		$(this).addClass('highlighted');
	});
	
	refreshGrid();
}

function refreshGrid(){
	$(".highlighted").removeClass('highlighted');
}

function initalizeGrid () {
	buildGrid(defaultSize);
	
	$('#refresh').on('click',function(){
		refreshGrid();
	});
	
	$('#size').on('click',function (){
		var worked = prompt("Enter Grid Size, 0 - 100 squares.", "100");
		var value = +worked;
		if(value>0&&value<=maxSize){
			buildGrid(value);
		}
		else{
			alert("Invalid grid size. Returning to default.");
			buildGrid(defaultSize);
		}
		
	});

}

$(document).ready(function () {
    initalizeGrid();
});
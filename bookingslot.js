jQuery.fn.Bookingslot = function (option) {
    _bs_init(this,option);
};
function _bs_init(canvas) {
    var table = $("<table />");
    
    var row = $(table[0].insertRow(-1));
    for (var i = 0; i < 10; i++) {
        var headerCell = $("<th />");
        headerCell.html(i);
        row.append(headerCell);
    }
    $(canvas).html(table);
}
/*
 table[0].border = "1";
 
 //Get the count of columns.
 var columnCount = slots[0].length;
 
 //Add the header row.
 var row = $(table[0].insertRow(-1));
 for (var i = 0; i < columnCount; i++) {
 var headerCell = $("<th />");
 headerCell.html(slots[0][i]);
 row.append(headerCell);
 }
 
 //Add the data rows.
 for (var i = 1; i < slots.length; i++) {
 row = $(table[0].insertRow(-1));
 for (var j = 0; j < columnCount; j++) {
 var cell = $("<td />");
 cell.html(slots[i][j]);
 row.append(cell);
 }
 }
 
 var dvTable = $("#dvTable");
 canvas.html("");
 canvas.append(table);
 */
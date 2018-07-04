// //Code by: Ataki Stanley Diki
// User selects color input
// User selects size input
// When size is submitted by the user, call makeGrid()
makeGrid();
// After making the grid, enable pixelArt
drawPixelArt();

//makeGrid function declaration
function makeGrid(){
    $("form").submit(function(event){
        // Store grid size (height and width)
        const gridHeight = $("#input-height").val();
        const gridWidth = $("#input-width").val();
        // Clear grid
        $("table tr").remove();
        // Nested loop to create grid using table
        let i=0;
        while(i<gridHeight){
             //creates a row each loop turn
            $("table").append("<tr></tr>");

            for(let j=0; j<gridWidth; j++){
                //creates columns for current row
                $("tr:last").append("<td></td>");
            }
        i=i+1;
        }
    // To ensures submit button does not try to submit values to the server
    event.preventDefault();
    })
};
//drawPixelArt function declaration
function drawPixelArt(){
    // Cell Print: Select cell based on the click mouse event
    $(document).on("click","tr td", function(event) {
        // Store selected color value
        const colorValue = $("#color-picker").val();
        // Applies color to selected cell as background color
        $(this).css("background-color", colorValue);
    })
    // Erases Cell: Select cell based on the double click mouse event
    $(document).on("dblclick","tr td", function(event) {
        //change selected td background colours to white
        $(this).css("background-color", "#fff");
    })
    // Extra Feature (clearGrid button event listener)
    $(document).on("click",".erase-grid", function(event) {
        //change all td background colours to white
        $("td").css("background-color", "#fff");
    })
};

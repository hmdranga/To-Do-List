
var tableclick = true;
$(document).on("mouseenter", "#tableList", function () {
    console.log("tbody");
    tableclick = false;
});
$(document).on("mouseleave", "#tableList", function () {
    console.log("tbody leave");
    tableclick = true;
});
$(document).on("click", function (eventData) {

    if (eventData.clientX < 700) {
        console.log(eventData.clientX);
        console.log(eventData);

        if (tableclick) {
            console.log("l");

            // var tabletodo='<table id="tableList" class="table col-12"><thead><tr><th contenteditable="true" scope="col">Title</th></tr></thead><tbody id="list"></tbody><tfoot><tr><td id="listItem"><i class="fas fa-plus-circle"></i>&nbsp&nbsp&nbspList item</td></tr><tr><td><p id="close">CLOSE</p></td></tr></tfoot></table>'

            var tabletodo = '<table id="tableList" class="table col-12"><thead><tr><th contenteditable="true" scope="col">Title</th></tr></thead><tbody id="list"></tbody><tfoot><tr><td id="listItem"><i class="fas fa-plus-circle"></i>&nbsp&nbsp&nbspList item</td></tr><tr><td><p id="close">CLOSE</p></td></tr></tfoot></table>'

            $("#firstcol").append(tabletodo);
        }
    }




    if (eventData.clientX > 700 && eventData.clientX < 1100) {
        console.log(eventData.clientX);
        console.log(eventData);

        if (tableclick) {
            console.log("t");

            // var tabletodo='<table id="tableList" class="table col-12"><thead><tr><th contenteditable="true" scope="col">Title</th></tr></thead><tbody id="list"></tbody><tfoot><tr><td id="listItem"><i class="fas fa-plus-circle"></i>&nbsp&nbsp&nbspList item</td></tr><tr><td><p id="close">CLOSE</p></td></tr></tfoot></table>'

            var tabletodo = '<table id="tableList" class="table col-12"><thead><tr><th contenteditable="true" scope="col">Title</th></tr></thead><tbody id="list"></tbody><tfoot><tr><td id="listItem"><i class="fas fa-plus-circle"></i>&nbsp&nbsp&nbspList item</td></tr><tr><td><p id="close">CLOSE</p></td></tr></tfoot></table>'



            $("#seccol").append(tabletodo);
        }
    }


    if (eventData.clientX > 1100) {
        console.log(eventData.clientX);
        console.log(eventData);

        if (tableclick) {
            console.log(444);

         /*   <table id="tableList" class="table col-12"><thead><tr><th contenteditable="true" scope="col">Title</th></tr></thead><tbody id="list"></tbody><tfoot><tr><td id="listItem"><i class="fas fa-plus-circle"></i>&nbsp&nbsp&nbspList item</td></tr><tr><td><p id="close">CLOSE</p></td></tr></tfoot></table>*/
            var tabletodo = '<table id="tableList" class="table col-12"><thead><tr><th contenteditable="true" scope="col">Title</th></tr></thead><tbody id="list"></tbody><tfoot><tr><td id="listItem"><i class="fas fa-plus-circle"></i>&nbsp&nbsp&nbspList item</td></tr><tr><td><p id="close">CLOSE</p></td></tr></tfoot></table>'


            $("#thcol").append(tabletodo);
        }
    }


});


$(document).on("click", "#tableList tfoot tr td p", function () {
    console.log("close"+ 111111);
    $(this).parents("#tableList").remove();
    // tableclick=true;
});




$(document).on("click", "#tableList tfoot tr:first-child()", function () {
    var trval = '<tr><td ><input id="tic" type="checkbox">&nbsp&nbsp&nbsp<span contenteditable="true">write here</span></td></tr>'
    //$("#listtb").append(trval);
    $(this).parents("#tableList").append(trval);


});

$(document).on("mouseenter", "#tableList tfoot tr:first-child()", function () {
    $(this).addClass("listItem");

});




$(document).click(function () {

    //tableclick=true;
});

$(document).on("click", "#tableList tbody tr td #tic", function () {
    //console.log("tic"+$("#tic").val());
    if ($(this).is(":checked")) {
        // it is checked
        console.log(123);
        $(this).parents("td").addClass("cross");

    } else {
        $(this).parents("td").removeClass("cross");
    }

});


$(document).on("click", "#firstcol", function () {
    // $(this).css("position","static");
});
$(document).on("click", "#tableList tbody tr td ", function () {
    console.log("txt");
    
    if ($(this).length > 40) {
        confirm("aaaaa");
    }

    
});
$(function() {

    const header = $("#header"),
          introH = $("#intro").innerHeight();
          scrollOffset = $(window).scrollTop();


    // Fixed Header
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
        
    });

    function checkScroll() {
        if(scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Accordion
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        const $this = $(this),
            blockId = $this.data("collapse");

        
        $this.parent().toggleClass("active");
        
    });

    // Menu nav toggle
    $("#nav-toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active")
        $("#nav").toggleClass("active");
    })

});
$("button.bank-button:contains('Withdraw')").on('click', function(){

    $("body").fadeOut("slow", function(){

        // redirect page to new one
        var page = "/withdrawAccount.html";
        var url = location.href;
        var base = url.substring(0, url.lastIndexOf("/"));
        window.location = base + page;

    });

});

$("button.bank-button:contains('Deposit')").on('click', function(){

    $("body").fadeOut("slow", function(){

        // redirect page to new one
        var page = "/depositAccount.html";
        var url = location.href;
        var base = url.substring(0, url.lastIndexOf("/"));
        window.location = base + page;

    });

});

$("button.bank-button:contains('Transfer')").on('click', function(){

    $("body").fadeOut("slow", function(){

        // redirect page to new one
        var page = "/transfer.html";
        var url = location.href;
        var base = url.substring(0, url.lastIndexOf("/"));
        window.location = base + page;

    });

});

$("button.bank-button:contains('Balance')").on('click', function(){

    $("body").fadeOut("slow", function(){

        // redirect page to new one
        var page = "/balance.html";
        var url = location.href;
        var base = url.substring(0, url.lastIndexOf("/"));
        window.location = base + page;

    });

});

$("button.bank-button:contains('Logout')").on('click', function(){

    $("body").fadeOut("slow", function(){

        // redirect page to new one
        var page = "/index.html";
        var url = location.href;
        var base = url.substring(0, url.lastIndexOf("/"));
        window.location = base + page;

    });

});

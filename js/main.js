$("title").html(`毕业作品 - ${HOMEWORK_NAME}`);

$(document).ready(() => {
    $("img.banner").attr("src", BANNER);
    $("#displayNone").text("Ciallo～(∠・ω< )⌒☆");

    for (k in LINKS) {
        $("span#links").append(`<a href="${LINKS[k]}" style="margin-right: 25px;" target="_blank">${k}</a>`);
    }

    for (k in IMGS) {
        $("div.img").append(`<span><img src="${IMGS[k]}" alt=""><p>${k}</p></span>`);
    }

    for (k in BELOW_BAR) {
        console.log(k);
        $("div.below-bar").append(`<span class="item"><h4><a href="${BELOW_BAR[k]}">${k}</a></h4></span>`);
    }
});
$(document).ready(function () {
    let myiicon = document.getElementById("myiicon")
    $("#maicon").click(function () {
        let width = $(".innercontent").outerWidth()
        let left = $(".sidenav").css("left")
        if (left == "0px") {
            $(".sidenav").animate({ left: `-${width}px` }, 500)
            myiicon.classList.remove("fa-solid", "fa-x")
            myiicon.classList.add("fa-solid", "fa-bars")
            for (let i = 0; i < 5; i++) {
                $(".listy li").eq(i).animate({
                    top: 0
                }, (i + 5) * 100)
            }
        }
        else {
            $(".sidenav").animate({ left: "0px" }, 500)
            myiicon.classList.remove("fa-solid", "fa-bars")
            myiicon.classList.add("fa-solid", "fa-x")
            $(".listy li").animate({
                top: 300
            }, 500)
        }   
    }
    )
    $(".loading").fadeOut(2500)
})

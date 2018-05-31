

$(document).ready(function () {
    $("a[id=submit-user]").click(function (e) {
        var name = $("#username").val();
        var tel = $("#usertel").val();
        var car = 0;
        var region = $("#userregion").val();
        var auth = "teacher";

        if (name == '') {
            e.preventDefault();
            alert("이름을 입력하세요");
        } else if (tel == '') {
            e.preventDefault();
            alert("전화번호를 입력하세요");
        } else if (region == '') {
            e.preventDefault();
            alert("지역을 선택하세요");
        } else {
            var json = new Object();
            json.kakaoid = kakaoid;
            json.name = name;
            json.tel = tel;
            json.car = car;
            json.region = region;
            json.auth = auth;

            var formData = JSON.stringify(json);

            $.ajax({
                type: "POST",
                url: "https://busyawrite.azurewebsites.net/api/userinfo/insert",
                data: formData,
                success: function () { },
                dataType: "json",
                contentType: "application/json"
            });
        }


    });
});

$(document).ready(function () {
    $("a[id=submit-driver]").click(function (e) {        
        var name = $("#name").val();
        var tel = $("#tel").val();
        var car = $("#car").val();
        var region = $("#region").val();
        var auth = "driver";

        if (name == '') {
            e.preventDefault();
            alert("이름을 입력하세요");
        } else if (tel == '') {
            e.preventDefault();
            alert("전화번호를 입력하세요");
        } else if (car == '') {
            e.preventDefault();
            alert("차량을 선택하세요");
        } else if (region == '') {
            e.preventDefault();
            alert("지역을 선택하세요");
        } else {
            var json = new Object();
            json.kakaoid = kakaoid;
            json.name = name;
            json.tel = tel;
            json.car = car;
            json.region = region;
            json.auth = auth;

            var formData = JSON.stringify(json);

            $.ajax({
                type: "POST",
                url: "https://busyawrite.azurewebsites.net/api/userinfo/insert",
                data: formData,
                success: function () { },
                dataType: "json",
                contentType: "application/json"
            });
        }
    });
});

$(document).ready(function () {
    $("a[id=submit-short]").click(function (e) {
        var name = $("#name").val();
        var date = $("#date").val();
        var time = $("#time").val();
        var car = $("#car").val();
        var dest = $("#dest").val();
        var price = $("#price").val();;

        if (name == '') {
            e.preventDefault();
            alert("이름을 입력하세요");
        } else if (car == '') {
            e.preventDefault();
            alert("차량을 선택하세요");
        } else if (dest == '') {
            e.preventDefault();
            alert("목적지를 입력하세요");
        } else if (date == '') {
            e.preventDefault();
            alert("일시를 선택하세요");
        } else if (time == '') {
            e.preventDefault();
            alert("시간을 선택하세요");
        } else if (price == '') {
            e.preventDefault();
            alert("보수를 입력하세요");
        } else {
            var json = new Object();
            json.kakaoid = kakaoid;
            json.name = name;
            json.dest = dest;
            json.car = car;
            json.date = date + " " + time;
            alert(json.date);
            json.price = price;

            var formData = JSON.stringify(json);

            $.ajax({
                type: "POST",
                url: "https://busyawrite.azurewebsites.net/api/short/insert",
                data: formData,
                success: function () { },
                dataType: "json",
                contentType: "application/json"
            });
        }
    });
});
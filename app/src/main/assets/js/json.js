$(document).ready(function () {
    $("#getBusBoard").click(function () {
        $.ajax({
            contentType: "application/json",
            type: "POST",
            dataType: "json",
            url: "https://busyawrite.azurewebsites.net/api/select?num=5379",
            success: function (data) {
                $.each(JSON.parse(data), function (index, item) {
                    console.log(index + ":" + item);
                    // alert(data['num'] + ":" + data['name']);
                })
            }
        });
    })
})
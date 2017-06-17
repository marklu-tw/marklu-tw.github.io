$("#cal").on("click", function() {
    var i = $("#i").val()
    var s = $("#s").val()
    var a = $("#a").val()
    var e = $("#e").val()

    i = Number(i)
    s = Number(s)
    a = Number(a)
    e = Number(e)

    pm = i / s
    at = s / a
    aer = a / e
    roe = i / e

    $('#pm').val(pm)
    $('#at').val(at)
    $('#aer').val(aer)
    $('#roe').val(roe)
})
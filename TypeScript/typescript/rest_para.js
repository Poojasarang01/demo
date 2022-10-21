function namelist(city) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log("city name :-" + city);
    for (var i = 0; i < names.length; i++)
        console.log(names[i]);
}
namelist("indore", "abhay", "akshay", "avikant", "nitin");

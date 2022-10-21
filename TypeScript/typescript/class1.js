var emp = /** @class */ (function () {
    function emp(id, name, sal) {
        this.empid = id;
        this.empname = name;
        this.salary = sal;
    }
    emp.prototype.show = function () {
        console.log("emp id:-" + this.empid);
        console.log("emp name:-" + this.empname);
        console.log("emp salary:-" + this.salary);
    };
    return emp;
}());
var obj = new emp(123, "sunil kumar", 34567);
obj.show();
obj.empid = 23;
obj.empname = "ajay kumar";
obj.salary = 56789;
obj.show();

var student = /** @class */ (function () {
    function student(name, address, pid) {
        this.show = function () {
            console.log("Arrow function in class");
        };
        this.name = name;
        this.address = address;
        this.pid = pid;
    }
    student.prototype.print_detail = function () {
        console.log("id:- " + this.pid);
        console.log("name:- " + this.name);
        console.log("address:- " + this.address);
    };
    return student;
}());
var obj = new student("sunil sharma", "vijay nagar indore", 123);
obj.print_detail();
obj.show();

class Caller {
    constructor(
        name,
        gender,
        age = 0,
        martial_status = '',
        call_counter = 0,
        plan_involment = 0,
        volonteer
    ) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.martial_status = martial_status;
        this.call_counter = call_counter;
        this.plan_involment = plan_involment;
        this.volonteer = volonteer;
    }
}

exports.Caller = Caller;

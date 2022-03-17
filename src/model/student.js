export class Student {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.speeches = [];
    }

    speech() {
        this.speeches.push(new Date());
    }
}
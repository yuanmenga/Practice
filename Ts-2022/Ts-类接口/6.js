"use strict";
{
    class User {
        // public name: string; //在Ts中可以将这一步骤省略
        //public age: number
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.name = this.(name);
            this.age = age;
        }
    }
}

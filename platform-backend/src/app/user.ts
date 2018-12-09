export class User {
    constructor(
        public id: number,
        public name: string,
        public gender: string,
        public age: number,
        public email: string,
        public password: string) {

    }

    static createFromResult(result: any): User {
        try {
            let user = new User(
                result.id,
                result.name,
                result.gender,
                result.age,
                result.email,
                result.password
            );

            return user;
        }
        catch (ex) {
            return null;
        }
    }
}

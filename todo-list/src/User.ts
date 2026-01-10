export class User {
    id: number | undefined;
    name: string | undefined;
    email?: string | undefined;

    constructor(id: number, name: string, email?: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

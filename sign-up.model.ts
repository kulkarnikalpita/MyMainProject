export class SignUpDetail {
    constructor(
        public id: string,
        public username: string,
        public email: string,
        public password: string,
        public first_name: string,
        public last_name: string,
        public contact_no: string,
        public role: string,
        public address: string,
        public city: string,
        public state: string,
        public pincode: number
     ) {}
}

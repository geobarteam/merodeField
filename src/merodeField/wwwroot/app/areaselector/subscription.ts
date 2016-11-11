import { Area } from './field';

export class Subscription {
    constructor(
        public id: string,
        public nickName: string,
        public email: string,
        public firstName: string,
        public lastName: string,
        public areas: Area[]
    ){
    }


}
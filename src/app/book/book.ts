export class Book {
    constructor(
        public title: string,
        public category: string[],
        public author: string[],
        public bookCover: any,
        public id: number
    ) { }
}

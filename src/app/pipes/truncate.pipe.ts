import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
    transform(value: string) {
        const limit = value.substr(0, 50).lastIndexOf(' ');
        const ellipsis = '...';
        return `${value.substr(0, limit)}${ellipsis}`;

    } 
}

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
    const bookService = jasmine.createSpyObj('BookService', ['initSearch']);
    const component = new SearchComponent(bookService);


    it('should call the bookService in the doSearch method', () => {
        component.doSearch();

        expect(bookService.initSearch).toHaveBeenCalled();
    });
});
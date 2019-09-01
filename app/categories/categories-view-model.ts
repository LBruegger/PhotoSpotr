import { Observable } from 'tns-core-modules/data/observable';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import * as appSettings from "tns-core-modules/application-settings";
import { Page } from "tns-core-modules/ui/page";
import { ListView } from "tns-core-modules/ui/list-view";

export class CategoriesViewModel extends Observable {
    searchQueries: {category: string}[] = [{category: "Business"}, {category: "Wallpaper"}, {category: "Money"}, {category: "Summer"}, {category: "School"}, {category: "Office"}, {category: "Beach"}, {category: "Computer"}, {category: "Family"}, {category: "Technology"}, {category: "People"}, {category: "Love"}];    

    constructor() {
        super();

    };
    
    onItemTap(args): void{
        const category:string = this.searchQueries[args.index].category.toString();
        appSettings.setString("search", category)
        appSettings.setString("title", category);
        let listView:ListView = <ListView>args.object;
        const page: Page = listView.page;
        page.frame.navigate("photoList/list-page");
    }
}
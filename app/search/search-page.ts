/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { SearchViewModel } from "./search-view-model";
import { Button } from "tns-core-modules/ui/button";
import { ListView } from "tns-core-modules/ui/list-view";

// Event handler for Page "pageLoaded" event attached in home-page.xml
export function pageLoaded(args: EventData) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    let page = <Page>args.object;
    page.bindingContext = new SearchViewModel();
}

import { Observable } from 'tns-core-modules/data/observable';
import { ObservableProperty } from "../observable-property-decorator";
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { SearchBar } from "tns-core-modules/ui/search-bar";
import * as appSettings from "tns-core-modules/application-settings";
import { Page } from "tns-core-modules/ui/page";
import { ListView } from "tns-core-modules/ui/list-view";
import { displayedEvent, exitEvent, launchEvent, lowMemoryEvent, 
    orientationChangedEvent, resumeEvent, suspendEvent, uncaughtErrorEvent, 
    ApplicationEventData, LaunchEventData, OrientationChangedEventData, UnhandledErrorEventData,
    on as applicationOn, run as applicationRun } from "tns-core-modules/application";


export class SearchViewModel extends Observable {

    onItemTap(args): void {
        let listView:ListView = <ListView>args.object;
        const page: Page = listView.page;
        appSettings.setString("title", this.queryArray[args.index]);
        page.frame.navigate("photoList/list-page");
    }

    @ObservableProperty() searchPhrase: string;

    onSearchSubmit(args): void {
        let searchBar = <SearchBar>args.object;
        if(searchBar.text.length > 20){
            dialogs.alert({
                title: "Input too long",
                message: "No images for this topic.",
                okButtonText: "Ok"
            }).then(() => {
                console.log("Dialog closed!");
            });
            searchBar.text = "";
        }else{
            this.searchQueries.push({ query: searchBar.text});
        const page: Page = searchBar.page;
        this.queryArray.push(searchBar.text)
        appSettings.setString("queries", JSON.stringify(this.queryArray))
        appSettings.setString("title", searchBar.text);
        page.frame.navigate("photoList/list-page");}
    }
    
    searchQueries = new ObservableArray();    
    queryArray : string[] = ["Cars", "Events", "Rivers", "Mountains"];
        
    
    constructor() {
        super();
        
        if(appSettings.hasKey("queries")){
            this.queryArray.splice(0);
            for(let element of JSON.parse(appSettings.getString("queries"))){
                this.searchQueries.push({query: element});
                this.queryArray.push(element);
            }   
        }else{
            for(let element of this.queryArray){
            this.searchQueries.push({query: element})
            }
            appSettings.setString("queries", JSON.stringify(this.queryArray));
        }
    }

    removeItemFromList(args){
        this.searchQueries.splice(0);
        this.queryArray.splice(0);
        appSettings.setString("queries", JSON.stringify(this.queryArray))     
    }   
}
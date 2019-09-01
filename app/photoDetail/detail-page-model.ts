import { Observable } from 'tns-core-modules/data/observable';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import * as appSettings from "tns-core-modules/application-settings";



export class DetailPageModel extends Observable {

    allData;

    imgResource = new Observable()

    constructor() {
        super();
        
        this.imgResource = JSON.parse(appSettings.getString("url"))
        
        this.allData = new ObservableArray({ name: "Likes", value: JSON.parse(appSettings.getString("likes"))},
        { name: "Views:", value: JSON.parse(appSettings.getString("views"))},
        { name: "Type:", value: JSON.parse(appSettings.getString("type")) },
        { name: "Favorites:", value: JSON.parse(appSettings.getString("favorites")) },
        { name: "Tags:", value: JSON.parse(appSettings.getString("tags")) },
        { name: "User:", value: JSON.parse(appSettings.getString("user")) });
    }

}
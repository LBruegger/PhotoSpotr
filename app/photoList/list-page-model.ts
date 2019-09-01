import { Observable } from 'tns-core-modules/data/observable';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import * as appSettings from "tns-core-modules/application-settings";
import { Page } from "tns-core-modules/ui/page";
import { ListView } from 'tns-core-modules/ui/list-view/list-view';

export class ListPageModel extends Observable {

    onItemTap(args): void {
        appSettings.setString("url", JSON.stringify(this.urls.getItem(args.index)))
        appSettings.setString("likes", JSON.stringify(this.likes.getItem(args.index)))
        appSettings.setString("views", JSON.stringify(this.views.getItem(args.index)))
        appSettings.setString("type", JSON.stringify(this.type.getItem(args.index)))
        appSettings.setString("favorites", JSON.stringify(this.favorites.getItem(args.index)))
        appSettings.setString("tags", JSON.stringify(this.tags.getItem(args.index)))
        appSettings.setString("user", JSON.stringify(this.user.getItem(args.index)))
        appSettings.setString("webUrl", JSON.stringify(this.weburl.getItem(args.index)));
        appSettings.setString("imgUrl", JSON.stringify(this.imgUrl.getItem(args.index)));
        let listView:ListView = <ListView>args.object;
        const page: Page = listView.page;

        page.frame.navigate("photoDetail/detail-page");
    }

    title: string= appSettings.getString("title");

    locations; 


    urls= new ObservableArray();
    likes= new ObservableArray();
    views= new ObservableArray();
    type= new ObservableArray();
    favorites= new ObservableArray();
    tags= new ObservableArray();
    user= new ObservableArray();
    weburl= new ObservableArray();
    imgUrl= new ObservableArray();

    constructor() {
        super();
        this.locations = new ObservableArray();
        let search:string = appSettings.getString("title").replace(" ", "+");
        this.locations.splice(0)
        fetch("https://pixabay.com/api/?key=13010481-59d33f095f3fa3c3977d73128&pretty=true&q=" + search +"&per_page=200")
            .then((response) => response.json())
            .then((r) => {
                this.locations.shift();
                r.hits.forEach(element => {
                    let user: string = element["user"]
                    let url:string = element["webformatURL"];
                    this.locations.push({city: user, imageSrc: url});
                    this.urls.push(url)
                    this.user.push(user)
                    this.likes.push(new String(element["likes"]))
                    this.views.push(new String(element["views"]))
                    this.type.push(new String(element["type"]))
                    this.favorites.push(new String(element["favorites"]))
                    this.tags.push(new String(element["tags"]))
                    this.weburl.push(new String(element["pageURL"]))
                    this.imgUrl.push(new String(element["largeImageURL"]))

                });
                if(this.locations.length<3){
                this.locations.push({city: "No images found - try again", imageSrc: ""});
                
                }
            }).catch((err) => {
                console.log(err)
                dialogs.alert("The Images couldn't get loaded, try to reload the Application");
        });

        
    }
}
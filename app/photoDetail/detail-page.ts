/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { Button } from "tns-core-modules/ui/button";
import { DetailPageModel } from "./detail-page-model";
import { ListView } from "tns-core-modules/ui/list-view";
import * as utils from "tns-core-modules/utils/utils";
import * as appSettings from "tns-core-modules/application-settings";
import * as camera from "nativescript-camera";
import * as imageSource from "tns-core-modules/image-source";
import { ImageAsset } from "tns-core-modules/image-asset/image-asset";
import * as fs from "tns-core-modules/file-system";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { ios, android } from 'tns-core-modules/application/application';
declare var NSObject,interop,UIImage,NSError,UIImageWriteToSavedPhotosAlbum,PHPhotoLibrary, UIColor, PHAuthorizationStatus:any
import { PhotoViewer, PhotoViewerOptions, PaletteType, NYTPhotoItem } from "nativescript-photoviewer";
var photoViewer: PhotoViewer; 


// Event handler for Page "pageLoaded" event attached in home-page.xml
export function pageLoaded(args: EventData) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
   photoViewer = new PhotoViewer();
   let page = <Page>args.object;
   page.bindingContext = new DetailPageModel();

   PHPhotoLibrary.requestAuthorization((result)=> {
    if (result === PHAuthorizationStatus.Authorized){
        
    } else {
        console.log("not authorized")
        dialogs.alert({
            title: "Warning!",
            message: "To save the image, we need the permission to save it in your gallery. Please change them in the settings of your device.",
            okButtonText: "Ok"
        }).then(() => {
            console.log("Dialog closed!");
        });
    }
});
}

export function openInBrowser(){
    utils.openUrl(JSON.parse(appSettings.getString("webUrl")))
}

export function openGallery(args: EventData, path){
    let image1 = JSON.parse(appSettings.getString("imgUrl"));

    let myImages = [image1];

	
    photoViewer.showGallery(myImages);
}

export function saveImage(){
    
}

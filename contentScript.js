var share = document.getElementsByClassName("docs-titlebar-buttons");
var lastEdit = document.getElementsByClassName("docs-title-save-label");
var material = document.getElementsByClassName("docs-material");            //Used for topbar, outline, etc.  
var toolbar = document.getElementById("docs-toolbar-wrapper");
var titleBar = document.getElementsByClassName("docs-title-outer");
var pageBackground = document.getElementsByClassName("kix-appview-editor");
var pageMid = document.getElementsByClassName("kix-page-column");           
var headersFooters = document.getElementsByClassName("kix-print-block");    
var menuButton = document.getElementsByClassName("menu-button");            
var menuItem = document.getElementsByClassName("goog-menuitem");            
var blockButtons = document.getElementsByClassName("goog-inline-block");    //Used for undo, redo, and other menubar buttons //CHANGE CAUSE IT GETS STUFF YA DONT WANT
var docTitle = document.getElementsByClassName("docs-title-input");
var ruler = document.getElementsByClassName("docs-ruler");
var rulerInner = document.getElementsByClassName("docs-ruler-face");



var foregroundColor = "#4d4d4d";
var backgroundColor = "#333333";

var background = [pageBackground, share, lastEdit, material, toolbar, titleBar, menuItem];
var foreground = [pageMid, headersFooters, menuButton, blockButtons, docTitle, ruler, rulerInner];


function colors(input, setColor) {
    for (i = 0; i < input.length; i++) {
        if (input[i].length == undefined) {
            input[i].style.backgroundColor = setColor;
            input[i].style.color = "White"
        } else {
            for (j = 0; j < input[i].length; j++) {

                input[i][j].style.backgroundColor = setColor;
                input[i][j].style.color = "White";
            }
        }
    }

    return true;
}

window.onmousemove() = function () { colors(foreground, foregroundColor); }
window.onmousemove() = function () { colors(background, backgroundColor); }

colors(foreground, foregroundColor);
colors(background, backgroundColor);




//
// TODO:
//  - constant check current page count v last page count
//  - after check, run colors func again
//  - get a frickin graphic designer
//  - ???
//  - profit
//  





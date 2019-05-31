
var share = document.getElementsByClassName("docs-titlebar-buttons");
var lastEdit = document.getElementsByClassName("docs-title-save-label");
var material = document.getElementsByClassName("docs-material"); //used for topbar, outline, etc.  AN ARRAY
var toolbar = document.getElementById("docs-toolbar-wrapper");
var titleBar = document.getElementsByClassName("docs-title-outer");
var pageBackground = document.getElementsByClassName("kix-appview-editor");
var pageMid = document.getElementsByClassName("kix-page-column"); // AN ARRAY
var headersFooters = document.getElementsByClassName("kix-print-block"); // AN ARRAY
var menuButton = document.getElementsByClassName("menu-button"); // AN ARRAY
var menuItem = document.getElementsByClassName("goog-menuitem"); // AN ARRAY
var foregroundColor = "#4d4d4d";
var backgroundColor = "#333333";

var background = [pageBackground, share, lastEdit, material, toolbar, titleBar, menuItem];
var foreground = [pageMid, headersFooters, menuButton];


function colors(input, setColor) {
    for (i = 0; i < input.length; i++) {
        for (j = 0; j < input[i].length; j++) {
            console.log(i + ":   " + j);

            input[i][j].style.backgroundColor = setColor;
            input[i][j].style.color = "White";

        }
    }

    return true;
}




colors(foreground, foregroundColor);
colors(background, backgroundColor);






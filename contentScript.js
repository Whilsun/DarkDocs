//IDs
var toolbar = document.getElementById("docs-toolbar-wrapper");
var undo = document.getElementById("undoButton");
var redo = document.getElementById("redoButton");
var printButton = document.getElementById("printButton");
var checkSpelling = document.getElementById("spellGrammarCheckButton");
var formatPainter = document.getElementById("formatPainterButton");
var bold = document.getElementById("boldButton");
var italics = document.getElementById("italicButton");
var underline = document.getElementById("underlineButton");
var textColor = document.getElementById("textColorButton");
var highlight = document.getElementById("bgColorButton");
var link = document.getElementById("insertLinkButton");
var addComment = document.getElementById("insertCommentButton");
var image = document.getElementById("insertImageButton");
var align = document.getElementById("alignButton");
var more = document.getElementById("moreButton");
var modes = document.getElementById("docs-toolbar-mode-switcher");
var toggleTopbar = document.getElementById("viewModeButton");
var zoomSelect = document.getElementById("zoomSelect");
var heading = document.getElementById("headingStyleSelect");
var font = document.getElementById("docs-font-family");
var fontSize = document.getElementById("fontSizeSelect");
var alignLeft = document.getElementById("alignLeftButton");
var alignCenter = document.getElementById("alignCenterButton");
var alignRight = document.getElementById("alignRightButton");
var alignJustify = document.getElementById("alignJustifyButton");
var lineSpacing = document.getElementById("lineSpacingMenuButton");
var bullet = document.getElementById("addBulletButton");
var bulletDropdown = document.getElementById("bulletedListPresetMenuButton");
var list = document.getElementById("addNumberedBulletButton");
var listDropdown = document.getElementById("numberedListPresetMenuButton");
var outdent = document.getElementById("outdentButton");
var indent = document.getElementById("indentButton");
var clearFormat = document.getElementById("clearFormattingButton");


//Classes
var share = document.getElementsByClassName("docs-titlebar-buttons");
var lastEdit = document.getElementsByClassName("docs-title-save-label");
var material = document.getElementsByClassName("docs-material");            //Used for topbar, outline, etc.  
var titleBar = document.getElementsByClassName("docs-title-outer");
var pageBackground = document.getElementsByClassName("kix-appview-editor");
var pageMid = document.getElementsByClassName("kix-page-column");
var headersFooters = document.getElementsByClassName("kix-print-block");
var menuButton = document.getElementsByClassName("menu-button");
var menuItem = document.getElementsByClassName("goog-menuitem");
var menuItemContent = document.getElementsByClassName("goog-menuitem-content");
var outlineItems = document.getElementsByClassName("navigation-item-content");
var outlineTitle = document.getElementsByClassName("navigation-widget-hat-title");
var docTitle = document.getElementsByClassName("docs-title-input");
var ruler = document.getElementsByClassName("docs-ruler");
var rulerInner = document.getElementsByClassName("docs-ruler-face");
var linkBubbles = document.getElementsByClassName("docs-bubble");
var comment = document.getElementsByClassName("docos-anchoredreplyview");
var commentTextBody = document.getElementsByClassName("docos-replyview-body");
var commentText = document.getElementsByClassName("docos-replyview-comment");
var commentSides = document.getElementsByClassName("docos-docoview-replycontainer");
var commentShowMore = document.getElementsByClassName("docos-show-more");
var commentReply = document.getElementsByClassName("docos-input");
var commentReplyTextField = document.getElementsByClassName("docos-input-textarea");









var background = [pageBackground, share, lastEdit, material, toolbar, titleBar, menuItem, menuItemContent, outlineItems, outlineTitle, linkBubbles, comment, commentText, commentShowMore, commentTextBody, commentSides, commentReply];
var foreground = [pageMid, headersFooters, menuButton, docTitle, ruler, rulerInner, undo, redo, printButton, formatPainter, checkSpelling, zoomSelect, heading, font, fontSize, bold, italics, underline, textColor, highlight, link, addComment, image, align, more, modes, toggleTopbar, alignRight, alignCenter, alignLeft, alignJustify, lineSpacing, bullet, bulletDropdown, indent, outdent, clearFormat, list, listDropdown, commentReplyTextField];

var foregroundColor = "#4d4d4d";
var backgroundColor = "#333333";


function colors(input, setColor) {
    for (i = 0; i < input.length; i++) {
        if (input[i].length == undefined) {
            input[i].style.backgroundColor = setColor;
            input[i].style.color = "White";
        } else {
            for (j = 0; j < input[i].length; j++) {

                input[i][j].style.backgroundColor = setColor;
                input[i][j].style.color = "White";
            }
        }
    }

    return true;
}

colors(foreground, foregroundColor);
colors(background, backgroundColor);


document.body.addEventListener("mousemove", function () {
    colors(background, backgroundColor);
    colors(foreground, foregroundColor);
});

document.body.addEventListener("click", function () {
    colors(background, backgroundColor);
    colors(foreground, foregroundColor);
});
document.body.addEventListener("wheel", function () {
    colors(background, backgroundColor);
    colors(foreground, foregroundColor);
});


function onTabUpdate(tab) {
    chrome.tabs.query({ currentWindow: true, lastFocusedWindow: true, active:true }, function (tabs) {
        var url;
		try {
			url = new URL(tabs[0].url);
		} catch {
			url = "";
        }
        
        if (url == "") {
            return;
        }
        
        if (url.hostname == "docs.google.com") {
            chrome.tabs.insertCSS({
                file: "docsgoogle.css",
                runAt: "document_start",
                cssOrigin: "user"
            });
            console.log(url.hostname)

        }
        else {
            console.log(url.hostname)
        }
    });
}

chrome.tabs.onUpdated.addListener(onTabUpdate);
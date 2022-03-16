chrome.webRequest.onBeforeRequest.addlistner(
    function(details) { return { cancel: true }; }, { urls: ["*://*.zedo.com/*"] }, ["blocking"]
);
console.log("🔥 Hello from background (src/background/index.ts)");

const welcomeURL = chrome.runtime.getURL("src/pages/welcome/index.html");

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({ url: welcomeURL });
  }
});

export {};

let thirdPartyCount = 0;

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    let url = new URL(details.url);
    if (!url.hostname.includes("yourdomain.com")) {
      thirdPartyCount++;
    }
  },
  {urls: ["<all_urls>"]},
  []
);

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "report") {
    chrome.storage.local.set({
      paranoiaData: {
        cookies: msg.data.cookies,
        fingerprinting: msg.data.fingerprinting,
        thirdParty: thirdPartyCount
      }
    });
  }
});

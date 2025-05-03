let trackerCount = 0;
let cookieCount = document.cookie.split(";").length;

if (navigator.storage && navigator.storage.estimate) {
  navigator.storage.estimate().then(estimate => {
    chrome.storage.local.set({storageUsed: estimate.usage});
  });
}

// Check for fingerprinting scripts
const suspiciousCalls = ['canvas', 'AudioContext', 'getBoundingClientRect'];
let suspiciousFound = 0;

suspiciousCalls.forEach(call => {
  if (document.body.innerHTML.includes(call)) {
    suspiciousFound++;
  }
});

chrome.runtime.sendMessage({
  type: "report",
  data: {
    cookies: cookieCount,
    fingerprinting: suspiciousFound
  }
});

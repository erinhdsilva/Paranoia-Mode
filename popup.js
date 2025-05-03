chrome.storage.local.get("paranoiaData", function(result) {
  let data = result.paranoiaData || {cookies: 0, thirdParty: 0, fingerprinting: 0};
  document.getElementById("cookies").textContent = `🍪 Cookies: ${data.cookies}`;
  document.getElementById("trackers").textContent = `👀 Third-party Trackers: ${data.thirdParty}`;
  document.getElementById("fingerprinting").textContent = `🧠 Fingerprinting Attempts: ${data.fingerprinting}`;
});

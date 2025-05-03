# 🕵️ Paranoia Mode - Real-Time Privacy Visualizer

**Paranoia Mode** is a Chrome extension that shows you how much of your data is being tracked—**in real-time**—as you browse the web. Inspired by horror game UIs, it visualizes cookies, fingerprinting attempts, and third-party trackers for each website you visit.


---

## 🚨 Features

- **🍪 Cookie Tracking**: Counts and displays cookies set by websites.
- **👀 Third-Party Trackers**: Detects third-party domains attempting to collect data.
- **🧠 Fingerprinting Attempts**: Monitors JavaScript behavior for fingerprinting.
- **Live Dashboard**: Realtime updates displayed through a browser popup.

---

## 🎮 Why “Paranoia Mode”?

Because the web is **watching you**—and you should see how. This extension brings visibility to hidden tracking mechanisms in an immersive, game-like way.

---

## 🔧 How It Works

- Uses `chrome.webRequest` API to monitor outgoing and incoming requests.
- Stores tracking stats in `chrome.storage.local`.
- Displays info in a popup with dynamic icons and live counters.

---

## 📦 Tech Stack

- HTML + CSS + JavaScript
- Chrome Extensions API
- `chrome.storage`, `chrome.webRequest`, `manifest.json v3`

---

## 📥 Installation

1. Clone or download this repository.
2. Go to `chrome://extensions/` in Chrome.
3. Enable **Developer Mode**.
4. Click **Load unpacked** and select the project folder.

---



## 🙋‍♂️ Contributing

Pull requests are welcome! If you find a bug or want a feature, open an issue first to discuss.

---


## 👤 Author

Made with paranoia by [@erinhdsilva](https://github.com/erinhdsilva)

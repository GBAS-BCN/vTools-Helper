# IEEE vTools Event Autofill Assistant

An intuitive Browser Extension designed for IEEE Student Branches, Chapters, and Organizational Units to streamline and automate event creation on [IEEE vTools Events](https://events.vtools.ieee.org/).

## 🚀 Features

* **⚡ One-Click Redirect & Quick Fill:**

  * Clicking the toolbar icon instantly redirects you to the IEEE vTools event creation page (`https://events.vtools.ieee.org/tego_/event/create`).

  * If you are already on the creation page, clicking the toolbar icon (or the floating on-screen button) opens the interactive autofill modal.

* **📝 Interactive Event Modal:**

  * Enter essential details like Title, Start/End times, Description, Speaker bios, and Attendance numbers in a clean pop-up interface.

  * **Rich Text Editors:** Built-in formatting tools (Bold, Italic, Lists) for event descriptions and speaker biographies.

  * Automatic time calculation (defaults to 2-hour duration).

* **⚙️ Fully Configurable Default Preferences:**

  * Right-click the extension icon and select **Options** to configure your default settings.

  * Save default Host OU, Contact Email, Cosponsors, Location details (Country & State), Timezone, and Default Tags (`#Uni`, `#SB`, etc.).

  * Toggle options for Survey URLs, Registration Types (External, Standard, None), and custom registration questions.

* **🤖 Smart Form Manipulation:**

  * Automatically handles dynamic asynchronous dependencies on vTools (such as fetching states based on country selection, subcategories based on categories, and dynamic speaker fields).

  * Inject custom registration questions (Text or Multiple Choice options) automatically.

## 📥 Installation Guide

Since this extension is distributed via source code, follow these steps to install it in Google Chrome, Brave, Edge, or any Chromium-based browser:

1. **Clone or Download this Repository:**

   ```bash
   git clone https://github.com/your-username/vtools-autofill-assistant.git
   ```

   *(Or download and extract the ZIP archive).*

2. **Open Extensions Page:**

   * Open Chrome and navigate to `chrome://extensions/`.

3. **Enable Developer Mode:**

   * Toggle the **Developer mode** switch in the top-right corner.

4. **Load Unpacked Extension:**

   * Click **Load unpacked** in the top-left menu.

   * Select the directory containing this project (`manifest.json` folder).

## 🛠️ Usage

1. **Configure Your Preferences:**

   * Right-click the extension toolbar icon and choose **Options** (or click details on `chrome://extensions`).

   * Enter your default IEEE Organizational Unit details, address, timezone, and registration preferences, then click **Save Settings**.

2. **Creating an Event:**

   * **Step 1:** Click the extension icon in your browser toolbar to automatically open `https://events.vtools.ieee.org/tego_/event/create`.

   * **Step 2:** Click the floating **⚡ Fill Event Form** button on the bottom right of the vTools creation page.

3. **Autofilling:**

   * Fill out the quick popup modal with your specific event details (title, dates, speakers).

   * Click **Autofill Form** — the extension will populate all standard and custom fields on the page.

## 📁 Repository Structure

```
.
├── manifest.json      # Extension Manifest V3 configuration
├── background.js      # Service worker for handling action clicks & tab events
├── content.js         # Content script executing modal & form population logic
├── options.html       # Extension preferences options page UI
├── options.js         # Preferences storage & logic handling
├── styles.css         # Styling for floating button, modals, and RTE controls
└── LICENSE            # GNU General Public License v3.0
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/GBAS-BCN/vTools-Helper/issues) if you want to contribute.

## 📜 License

Distributed under the GNU General Public License v3.0 (`GPL-3.0`). See `LICENSE` for details.

# 365 Launcher

Responsive and customizable launcher designed for Microsoft 365 apps and admin portals, designed to minimise the number of open tabs.

## Features

- 🧇 **Quick Access**: Access Microsoft 365 apps and admin portals directly from a single launcher.
- 🌐 **Tab mode**: Minimises the number of open by finding existing open tabs, choose between three tab modes.
- 🎨 **Customizable**: Toggle between Apps and Admin panels.
- 🌗 **Dark Mode**: Adapts to the browser's dark mode setting.
- 📁 **Compact Design**: A responsive grid interface tailored for seamless user experience.
- 🔒 **Secure**: Settings are synced and stored securely using `chrome.storage`.

## Installation

1. Clone or download the repository:
   ```bash
   git clone https://github.com/yourusername/365-launcher.git
   cd 365-launcher
   ```
2. Compress the extension files into a `.zip` file if needed.
3. Open Chrome and go to `chrome://extensions/`.
4. Enable **Developer mode** (toggle in the top-right corner).
5. Click **Load unpacked** and select the directory containing the extension files.

## Usage

- Click on the 365 Launcher icon in the Chrome toolbar.
- Use the **Apps/Admin** toggle to switch between app shortcuts and admin portals.
- The launcher is responsive and adapts to your current browser theme (light or dark mode).

## Available Shortcuts

### **Apps**
- **OneDrive**: [onedrive.office.com](https://onedrive.office.com)
- **Teams**: [teams.microsoft.com](https://teams.microsoft.com)
- **Power BI**: [powerbi.com](https://app.powerbi.com)
- ...and more!

### **Admin**
- **365 Admin**: [admin.microsoft.com](https://admin.microsoft.com)
- **Entra Admin**: [entra.microsoft.com](https://entra.microsoft.com)
- **Azure Portal**: [portal.azure.com](https://portal.azure.com)
- ...and more!

## Customization

All settings are saved using the Chrome `storage.sync` API, allowing users to retain their preferred configurations even after closing the browser.

## Development

If you'd like to contribute or make improvements:
1. Fork the repository.
2. Make your changes in a new branch:
   ```bash
   git checkout -b feature/my-new-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add my new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/my-new-feature
   ```
5. Create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

Special thanks to the developers of Microsoft 365 for their incredible suite of tools and services.

---

Feel free to modify this to fit your project's details and repository structure. Let me know if you'd like additional sections or edits! 🚀
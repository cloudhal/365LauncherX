class IconItem {
    constructor(image, link, text) {
      this.image = image;
      this.link = link;
      this.text = text;
    }
  }

  // app icons
  const appIcons = [
    new IconItem("icons/Bookings_50x50.png", "https://outlook.office.com/bookings/", "Bookings"),
    new IconItem("icons/Excel_50x50.png", "https://www.office.com/launch/excel/", "Excel"),
    new IconItem("icons/Delve_50x50.png", "https://delve.office.com/", "Delve"),
    new IconItem("icons/Fabric_50x50.png", "https://app.fabric.microsoft.com/", "Fabric"),
    new IconItem("icons/Forms_50x50.png", "https://www.office.com/launch/forms/", "Forms"),
    new IconItem("icons/Kaizala_50x50.png", "https://manage.kaiza.la/Home/Index?source=1/", "Kaizala"),
    new IconItem("icons/Lists_50x50.png", "https://www.office.com/launch/lists/", "Lists"),
    new IconItem("icons/Microsoft_Teams_50x50.png", "https://aka.ms/mstfw/", "Teams"),
    new IconItem("icons/Office_50x50.png", "https://www.office.com/", "Office"),
    new IconItem("icons/OneDrive_50x50.png", "https://www.office.com/launch/onedrive/", "OneDrive"),
    new IconItem("icons/OneNote_50x50.png", "https://www.office.com/launch/onenote/", "OneNote"),
    new IconItem("icons/Outlook_50x50.png", "https://outlook.office.com/", "Outlook"),
    new IconItem("icons/Planner_50x50.png", "https://tasks.office.com/", "Planner"),
    new IconItem("icons/Power_Apps_50x50.png", "https://make.powerapps.com/", "Power Apps"),
    new IconItem("icons/Power_Automate_50x50.png", "https://flow.microsoft.com/", "Power Automate"),
    new IconItem("icons/Copilot_Studio_50x50.png", "https://copilotstudio.microsoft.com/", "Copilot Studio"),
    new IconItem("icons/PowerPoint_50x50.png", "https://www.office.com/launch/powerpoint/", "Power Point"),
    new IconItem("icons/Power_BI_50x50.png", "https://app.powerbi.com/", "Power BI"),
    new IconItem("icons/Project_50x50.png", "https://project.microsoft.com/", "Project"),
    new IconItem("icons/SharePoint_50x50.png", "https://www.office.com/launch/sharepoint/", "SharePoint"),
    new IconItem("icons/To_Do_50x50.png", "https://to-do.office.com/", "To Do"),
    new IconItem("icons/Microsoft-Stream_50x50.png", "https://web.microsoftstream.com/", "Stream Classic"),
    new IconItem("icons/Word_50x50.png", "https://www.office.com/launch/word/", "Word"),
    new IconItem("icons/Yammer_50x50.png", "https://www.yammer.com/office365/", "Yammer")
  ];

  // Sort the list of appIcons
    appIcons.sort((a, b) => a.text.localeCompare(b.text));

// admin icons
const adminIcons = [
    new IconItem("icons/Microsoft365.png", "https://admin.microsoft.com/", "365 Admin"),
    new IconItem("icons/EntraID_50x50.png", "https://entra.microsoft.com/", "Entra"),
    new IconItem("icons/Azure_50x50.png", "https://portal.azure.com/", "Azure"),
    new IconItem("icons/Defender_50x50.png", "https://purview.microsoft.com/", "Purview"),
    new IconItem("icons/Intune_50x50.png", "https://endpoint.microsoft.com/", "Intune"),
    new IconItem("icons/Exchange_50x50.png", "https://admin.exchange.microsoft.com/", "Exchange"),
    new IconItem("icons/PowerPlatform_50x50.png", "https://admin.powerplatform.microsoft.com/", "Power Platform"),
    new IconItem("icons/Fabric_50x50.png", "https://app.fabric.microsoft.com/admin-portal/tenantSettings?experience=fabric-developer/", "Fabric"),
    new IconItem("icons/Defender_50x50.png", "https://security.microsoft.com/", "Defender"),
    new IconItem("icons/Lighthouse_50x50.png", "https://lighthouse.microsoft.com/", "Lighthouse"),
    new IconItem("icons/SharePoint_50x50.png", "https://admin.microsoft.com/sharepoint/", "SharePoint"),
    new IconItem("icons/Microsoft_Teams_50x50.png", "https://admin.teams.microsoft.com/dashboard/", "Teams"),
    new IconItem("icons/Yammer_50x50.png", "https://www.yammer.com/office365/admin/", "Viva"),
    new IconItem("icons/AzureDevops_50x50.png", "https://dev.azure.com/", "DevOps"),
    new IconItem("icons/MicrosoftGraph_50x50.png", "https://developer.microsoft.com/en-us/graph/graph-explorer/", "Graph"),
    new IconItem("icons/Office_50x50.png", "https://config.office.com/", "Office"),
    ];

      // Sort the list of adminIcons
      adminIcons.sort((a, b) => a.text.localeCompare(b.text));

  document.addEventListener('DOMContentLoaded', () => {
    const appsPage = document.getElementById('apps-page');
    appIcons.forEach(icon => {
      const iconHTML = `
        <div class="icon-item text-center">
          <a href="${icon.link}" target="_blank" class="text-decoration-none">
            <img src="${icon.image}" alt="${icon.text}" class="img-fluid">
            <p class="text-body">${icon.text}</p>
          </a>
        </div>
      `;
      appsPage.innerHTML += iconHTML;
    });

    const adminPage = document.getElementById('admin-page');
    adminIcons.forEach(icon => {
      const iconHTML = `
        <div class="icon-item text-center">
          <a href="${icon.link}" target="_blank" class="text-decoration-none">
            <img src="${icon.image}" alt="${icon.text}" class="img-fluid">
            <p class="">${icon.text}</p>
          </a>
        </div>
      `;
      adminPage.innerHTML += iconHTML;
    });

  });

// dark mode support
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'light');
  }

// Toggle button to switch between Apps and Admin pages
  document.addEventListener('DOMContentLoaded', () => {
    const switchButton = document.getElementById('switch-btn');
    const switchLabel = document.querySelector('label[for="switch-btn"]');
    const appsPage = document.getElementById('apps-page');
    const adminPage = document.getElementById('admin-page');

    switchButton.addEventListener('click', () => {
        if (switchButton.checked) {
          // When the switch is enabled
          switchLabel.textContent = 'Admin';
                  // Show Admin page
        appsPage.classList.add('hidden');
        adminPage.classList.remove('hidden');
        } else {
          // When the switch is disabled
          switchLabel.textContent = 'Apps';
                  // Show Apps page
        appsPage.classList.remove('hidden');
        adminPage.classList.add('hidden');
        }
      });
  });

  // Save the switch state in chrome.storage
  document.addEventListener('DOMContentLoaded', () => {
    const switchButton = document.getElementById('switch-btn');
    const switchLabel = document.querySelector('label[for="switch-btn"]');
    const appsPage = document.getElementById('apps-page');
    const adminPage = document.getElementById('admin-page');
  
    // Load the switch state from chrome.storage
    chrome.storage.sync.get(['switchState'], (result) => {
      const switchState = result.switchState || false; // Default to false if not set
      switchButton.checked = switchState;
      updatePages(switchState); // Update pages based on state
    });
  
    // Update pages based on the switch state
    const updatePages = (isAdmin) => {
      if (isAdmin) {
        appsPage.classList.add('hidden');
        adminPage.classList.remove('hidden');
        switchLabel.textContent = 'Admin';
      } else {
        adminPage.classList.add('hidden');
        appsPage.classList.remove('hidden');
        switchLabel.textContent = 'Apps';
      }
    };
  
    // Save switch state when toggled
    switchButton.addEventListener('change', () => {
      const isAdmin = switchButton.checked;
      chrome.storage.sync.set({ switchState: isAdmin }, () => {
        console.log(`Switch state saved: ${isAdmin}`);
      });
      updatePages(isAdmin);
    });
  });
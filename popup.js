class IconItem {
    constructor(image, link, text, matchType, alternativeLinks = []) {
      this.image = image;
      this.link = link;
      this.text = text;
      this.matchType = matchType; // 'exact', 'startsWith', or 'pattern'
      this.alternativeLinks = alternativeLinks; // Array of alternative URLs, blank if none
    }
  }

  // app icons
  const appIcons = [
    new IconItem("icons/Bookings_50x50.png", "https://outlook.office.com/bookings/", "Bookings", "startsWith"),
    new IconItem("icons/Excel_50x50.png", "https://m365.cloud.microsoft/launch/excel/", "Excel", "startsWith"),
    new IconItem("icons/Copilot_50x50.png", "https://m365.cloud.microsoft/chat", "Copilot", "pattern", ["https://copilot.cloud.microsoft/*"]),
    new IconItem("icons/Fabric_50x50.png", "https://app.fabric.microsoft.com/", "Fabric", "startsWith"),
    new IconItem("icons/Forms_50x50.png", "https://forms.office.com/", "Forms", "startsWith"),
    new IconItem("icons/Lists_50x50.png", "https://www.office.com/launch/lists/", "Lists", "startsWith"),
    new IconItem("icons/Microsoft_Teams_50x50.png", "https://aka.ms/mstfw/", "Teams", "startsWith"),
    new IconItem("icons/Microsoft365_50x50.png", "https://m365.cloud.microsoft/?auth=2", "Office", "exact"),
    new IconItem("icons/OneDrive_50x50.png", "https://www.office.com/launch/onedrive/", "OneDrive", "pattern", ["https://*-my.sharepoint.com/*"]),
    new IconItem("icons/OneNote_50x50.png", "https://m365.cloud.microsoft/launch/onenote", "OneNote", "startsWith"),
    new IconItem("icons/Outlook_50x50.png", "https://outlook.office.com/", "Outlook", "startsWith"),
    new IconItem("icons/Planner_50x50.png", "https://planner.cloud.microsoft/", "Planner", "startsWith"),
    new IconItem("icons/Power_Apps_50x50.png", "https://make.powerapps.com/", "Power Apps", "startsWith"),
    new IconItem("icons/Power_Automate_50x50.png", "https://flow.microsoft.com/", "Power Automate", "startsWith"),
    new IconItem("icons/Copilot_Studio_50x50.png", "https://copilotstudio.microsoft.com/", "Copilot Studio", "startsWith"),
    new IconItem("icons/PowerPoint_50x50.png", "https://www.office.com/launch/powerpoint/", "PowerPoint", "startsWith"),
    new IconItem("icons/Power_BI_50x50.png", "https://app.powerbi.com/", "Power BI", "startsWith"),
    new IconItem("icons/Project_50x50.png", "https://project.microsoft.com/", "Project", "startsWith"),
    new IconItem("icons/SharePoint_50x50.png", "https://www.office.com/launch/sharepoint/", "SharePoint", "pattern", ["https://[^.-]+\\.sharepoint\\.com/.*"]),
    new IconItem("icons/To_Do_50x50.png", "https://to-do.office.com/", "To Do", "startsWith"),
    new IconItem("icons/Microsoft-Stream_50x50.png", "https://m365.cloud.microsoft/launch/stream", "Stream", "startsWith"),
    new IconItem("icons/Word_50x50.png", "https://m365.cloud.microsoft/launch/word/", "Word", "startsWith"),
    new IconItem("icons/Engage_50x50.png", "https://engage.cloud.microsoft/", "Engage", "startsWith"),
    new IconItem("icons/Loop_50x50.png", "https://loop.cloud.microsoft/", "Loop", "startsWith")
  ];

  // Sort the list of appIcons
    appIcons.sort((a, b) => a.text.localeCompare(b.text));

// admin icons
const adminIcons = [
    new IconItem("icons/Microsoft365_50x50.png", "https://admin.microsoft.com/", "365 Admin", "startsWith"),
    new IconItem("icons/EntraID_50x50.png", "https://entra.microsoft.com/", "Entra", "startsWith"),
    new IconItem("icons/Azure_50x50.png", "https://portal.azure.com/", "Azure", "startsWith"),
    new IconItem("icons/Purview_50x50.png", "https://purview.microsoft.com/", "Purview", "startsWith"),
    new IconItem("icons/Intune_50x50.png", "https://intune.microsoft.com/", "Intune", "startsWith"),
    new IconItem("icons/Exchange_50x50.png", "https://admin.exchange.microsoft.com/", "Exchange", "startsWith"),
    new IconItem("icons/PowerPlatform_50x50.png", "https://admin.powerplatform.microsoft.com/", "Power Platform", "startsWith"),
    new IconItem("icons/Fabric_50x50.png", "https://app.fabric.microsoft.com/admin-portal/tenantSettings?experience=fabric-developer/", "Fabric", "startsWith"),
    new IconItem("icons/Defender_50x50.png", "https://security.microsoft.com/", "Defender", "startsWith"),
    new IconItem("icons/Lighthouse_50x50.png", "https://lighthouse.microsoft.com/", "Lighthouse", "startsWith"),
    new IconItem("icons/SharePoint_50x50.png", "https://admin.microsoft.com/sharepoint", "SharePoint", "pattern", ["https://*-admin.sharepoint.com/*"]),
    new IconItem("icons/Microsoft_Teams_50x50.png", "https://admin.teams.microsoft.com/dashboard/", "Teams", "startsWith"),
    new IconItem("icons/Engage_50x50.png", "https://engage.cloud.microsoft/main/admin", "Engage", "startsWith"),
    new IconItem("icons/AzureDevops_50x50.png", "https://dev.azure.com/", "DevOps", "startsWith"),
    new IconItem("icons/MicrosoftGraph_50x50.png", "https://developer.microsoft.com/en-us/graph/graph-explorer/", "Graph", "startsWith"),
    new IconItem("icons/Office_50x50.png", "https://config.office.com/", "365 Apps", "startsWith"),
    ];

      // Sort the list of adminIcons
      adminIcons.sort((a, b) => a.text.localeCompare(b.text));

      // Display app or admin icons in the popup
  document.addEventListener('DOMContentLoaded', () => {
    const appsPage = document.getElementById('apps-page');
    appIcons.forEach(icon => {
      const iconHTML = `
      <a href="${icon.link}" target="_blank" class="text-decoration-none">
        <div class="icon-item text-center">
          <img src="${icon.image}" alt="${icon.text}" class="img-fluid">
          <p class="text-body">${icon.text}</p>
        </div>
      </a>
      `;
      appsPage.innerHTML += iconHTML;
    });

    const adminPage = document.getElementById('admin-page');
    adminIcons.forEach(icon => {
      const iconHTML = `
      <a href="${icon.link}" target="_blank" class="text-decoration-none">
        <div class="icon-item text-center">
          <img src="${icon.image}" alt="${icon.text}" class="img-fluid">
          <p class="text-body">${icon.text}</p>
        </div>
      </a>
      `;
      adminPage.innerHTML += iconHTML;
    });

  });

// Tab behaviour
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a');
  const iconItems = [...appIcons, ...adminIcons]; // Combine app and admin icons

  links.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent default behavior
          const url = new URL(link.href); // Parse the URL from the link
          const baseUrl = `${url.origin}${url.pathname}`; // Extract base URL (domain and path)
          
          // Save the clicked URL in chrome.storage for debugging
          chrome.storage.local.set({ ClickedURL: url.href });
          chrome.storage.local.set({ baseUrl: baseUrl });

          chrome.tabs.query({}, (tabs) => {
              // Check if the clicked link matches any icon item
              iconItems.forEach(item => {
                  if (item.link === link.href) { // found matching icon item
                        openOrFocusTab(item.link, tabs, item); // Open or focus the tab
                  } else  { //no match found, in theory should not happen

                  }
              });


          });
      });
  });
});

// Function to open or focus an existing tab
function openOrFocusTab(url, tabs, item) {

  if (item.matchType === 'exact') {
    // Check if the URL matches exactly
    const existingTab = tabs.find(tab => tab.url === url);
    if (existingTab) {
      chrome.storage.local.set({ message: "Found matching tab using exact match" });
      chrome.tabs.update(existingTab.id, { active: true });
    } else {
      chrome.tabs.create({ url: url });
    }
  }
  else if (item.matchType === 'startsWith') {
    // Check if the URL starts with the specified link
    const existingTab = tabs.find(tab => tab.url.startsWith(item.link));
    if (existingTab) {
      chrome.storage.local.set({ message: "Found matching tab using startsWith" });
      chrome.tabs.update(existingTab.id, { active: true });
    } else {
      chrome.tabs.create({ url: item.link });
    }
  } else if (item.matchType === 'pattern') {
    // Check if the URL matches the pattern
    const existingTab = tabs.find(tab => matchPattern(item.link, tab.url, item.alternativeLinks));
    if (existingTab) {
      chrome.storage.local.set({ message: "Found matching tab using pattern match" });
      chrome.tabs.update(existingTab.id, { active: true });
    } else {
      chrome.storage.local.set({ message: "Didn't find matching tab" });
      chrome.tabs.create({ url: item.link });
    }
  }
}

// Function to match wildcard patterns
function matchPattern(pattern, url, alternativeLinks = []) {
  // Convert wildcard (*) in the domain portion into a regex-friendly format
  let regexPattern = pattern
      .replace(/\*/g, '.*') // Replace '*' with '.*', allowing any subdomain
      .replace(/\//g, '\\/');  // Escape forward slashes for regex
  const regex = new RegExp(`^${regexPattern}$`);
  // Check primary pattern match
  if (regex.test(url)) return true;

  // Check alternative links
  return alternativeLinks.some(alternative => {
    chrome.storage.local.set({ alternative: alternative }); // Save alternative link for debugging
      let altRegexPattern = alternative
          .replace(/\*/g, '.*') // Allow any subdomain
          .replace(/\//g, '\\/');  // Escape forward slashes
          chrome.storage.local.set({ url: url }); // Save alternative regex pattern for debugging
          chrome.storage.local.set({ altRegexPattern: altRegexPattern }); // Save alternative regex pattern for debugging
      // Check if the alternative link matches the URL
      return new RegExp(`^${altRegexPattern}$`).test(url);
  });
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

// Settings modal
  document.addEventListener('DOMContentLoaded', () => {
    const settingsIcon = document.getElementById('settings-icon');
    const settingsModal = new bootstrap.Modal(document.getElementById('settings-modal'));
    const saveSettings = document.getElementById('save-settings');
    const themeSelect = document.getElementById('theme');
    const debugModeToggle = document.getElementById('debug-mode');

   // Show settings modal on click
   settingsIcon.addEventListener('click', () => {
    settingsModal.show();
});


    // Save settings to Chrome storage
    saveSettings.addEventListener('click', () => {
        const theme = themeSelect.value;
        const debugMode = debugModeToggle.checked;

        chrome.storage.sync.set({ theme, debugMode }, () => {
            console.log("✅ Settings saved:", { theme, debugMode });
            settingsModal.style.display = 'none';
        });
    });

    // Load settings on startup
    chrome.storage.sync.get(["theme", "debugMode"], (data) => {
      applyTheme(data.theme || "system"); // Default to "system" if not set
        debugModeToggle.checked = data.debugMode || false;
    });

    function applyTheme(theme) {
      if (theme === "system") {
          // Detect system theme preference
          if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
              document.documentElement.setAttribute('data-bs-theme', 'dark');
          } else {
              document.documentElement.setAttribute('data-bs-theme', 'light');
          }
      } else {
          // Apply user-selected theme
          document.documentElement.setAttribute('data-bs-theme', theme);
      }
  
      console.log(`🌗 Applied theme: ${theme}`);
  }

    // Debug Mode: Log events if enabled
    debugModeToggle.addEventListener('change', () => {
        chrome.storage.sync.get(["debugMode"], (data) => {
            if (data.debugMode) {
                console.log("🛠 Debug mode enabled! Logging events...");
            }
        });
    });
});
const watchSites = [
  'https://www.youtube.com/shorts',
  'https://www.instagram.com',
];

chrome.tabs.onActivated.addListener(async ({ tabId }) => {
  let currentTab = await chrome.tabs.get(tabId);
  logNewTab(currentTab);
});
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  logNewTab(tab);
});

function logNewTab(tab) {
  const url = tab.url;
  let toWatch = false;

  watchSites.forEach((site) => {
    if (url.startsWith(site)) toWatch = true;
  });

  if (toWatch) console.log('nnonono');
}

/**
 * Project Name
 * https://github.com/GBAS-BCN/vTools-Helper
 *
 * @file      background.js
 * @author    Gil Ben Ami
 * @date      2026-10-09
 * @license   GPL-3.0
 */

chrome.action.onClicked.addListener((tab) => {
  const targetUrl = "https://events.vtools.ieee.org/tego_/event/create";

  if (tab?.url && tab.url.includes("events.vtools.ieee.org/tego_/event/create")) {
    // If already on vTools, open the assistant modal
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        document.dispatchEvent(new CustomEvent("vtools-open-modal"));
      }
    });
  } else {
    // If on any other tab/site, open the event creation page
    chrome.tabs.create({ url: targetUrl });
  }
});
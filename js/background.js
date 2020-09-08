

const URLs = {
  EXTENSIONS: "chrome://extensions"
};

chrome.runtime.onMessageExternal.addListener((request, _, response) => {
  if (request.type === "action spec") {
    response({
      name: actionSpec.name,
      actions: Object.entries(actionSpec.actions).map(
        ([name, { displayName }]) => {
          return { name, displayName };
        }
      )
    });
  } else if (request.type === "execute action") {
    const action = actionSpec.actions[request.action.name];
    if (action !== undefined) action.f();
  }
});

const actionSpec = {
  name: "Chrome Special URLs",
  actions: {
    EXTENSIONS: {
      f: openURL(URLs[Extensions])
    }
  }
};

function openURL() {
    
}
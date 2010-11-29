var Options = {

  // Save an option given the key name and element to get the value from
  save : function(elementName) {
    var element = document.getElementById(elementName);
    if (!element) {
      return;
    }

    localStorage[elementName] = element.value;

    // Update status to let user know options were saved.
    var status = document.getElementById("status");
    status.style.display = "block";
    setTimeout(function() {
      status.style.display = "none";
    }, 1000);
  },

  // Restore the given key name to the supplied element
  restore : function(elementName) {
    var configValue = localStorage[elementName];
    if (!configValue) {
      return;
    }

    // Set the textbox value
    var element = document.getElementById(elementName);
    element.value = configValue;
  }
};
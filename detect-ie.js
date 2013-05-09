var IE = (function () {
    "use strict";
    
    var isTheBrowser = false,
        actualVersion, currentVersion,
        jscriptMap, jscriptVersion;
    
    jscriptMap = {
        "5.5": "5.5",
        "5.6": "6",
        "5.7": "7",
        "5.8": "8",
        "9": "9",
        "10": "10"
    };
    jscriptVersion = Function("/*@cc_on return @_jscript_version; @*/")();
    if (typeof jscriptVersion !== "undefined") {
        isTheBrowser = true;
        actualVersion = jscriptMap[jscriptVersion];
        currentVersion = "" + document.documentMode;
    }
    
    return {
        isTheBrowser: isTheBrowser,
        actualVersion: actualVersion,
        currentVersion: currentVersion
    };
})();

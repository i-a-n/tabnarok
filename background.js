var rightNow = new Date().getTime() / 1000;
localStorage.tabnarok = JSON.stringify({ 'loadedOn': rightNow });

chrome.tabs.onCreated.addListener(function(tab) { 
        var retrievedObject = JSON.parse( localStorage.getItem('tabnarok') );
        retrievedObject[tab.id] = { "createdOn" : new Date().getTime() / 1000 };
        localStorage.setItem('tabnarok', JSON.stringify(retrievedObject));
    });
chrome.tabs.onHighlighted.addListener(function(tab) { 
        //var retrievedObject = JSON.parse( localStorage.getItem('tabnarok') );
        //jQuery.extend( retrievedObject[tab.id], { "lastActivatedOn" : new Date().getTime() / 1000 } );
        //localStorage.setItem('tabnarok', JSON.stringify(retrievedObject));
    });

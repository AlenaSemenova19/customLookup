({
	displaySearchResult : function(component, event, helper) {
		var getInputKeyWord = component.get("v.SearchKeyWord");
        if (getInputKeyWord.length > 0 ) {
             var forOpen = component.find("searchResult");
             $A.util.addClass(forOpen, 'slds-is-open');
             $A.util.removeClass(forOpen, 'slds-is-close');
             helper.searchHelper(component, event, getInputKeyWord);
        } else {
            component.set("v.listOfSearchRecords", null);
            var forClose = component.find("searchResult");
            $A.util.addClass(forClose, 'slds-is-close');
            $A.util.removeClass(forClose, 'slds-is-open');
        }
	},

    clear : function (component,event,helper) {
        var pillTarget = component.find("lookup-pill");
        var lookUpTarget = component.find("lookupField");
        var searchIcon = component.find("searchIcon");

        $A.util.addClass(pillTarget, 'slds-hide');
        $A.util.removeClass(pillTarget, 'slds-show');

        $A.util.addClass(lookUpTarget, 'slds-show');
        $A.util.removeClass(lookUpTarget, 'slds-hide');

        $A.util.addClass(searchIcon, 'slds-show');
        $A.util.removeClass(searchIcon, 'slds-hide');

        component.set("v.SearchKeyWord", null);
        component.set("v.listOfSearchRecords", null );
    },

    handleComponentEvent : function(component, event, helper) {
        var selectedContactGetFromEvent = event.getParam("resultOfContacts");
        component.set("v.selectedRecord" , selectedContactGetFromEvent);

        var forClose = component.find("lookup-pill");
           $A.util.addClass(forClose, 'slds-show');
           $A.util.removeClass(forClose, 'slds-hide');

        var searchRes = component.find("searchResult");
           $A.util.addClass(searchRes, 'slds-is-close');
           $A.util.removeClass(searchRes, 'slds-is-open');

        var lookUpTarget = component.find("lookupField");
            $A.util.addClass(lookUpTarget, 'slds-hide');
            $A.util.removeClass(lookUpTarget, 'slds-show');

        var searchIcon = component.find("searchIcon");
            $A.util.addClass(searchIcon, 'slds-hide');
            $A.util.removeClass(searchIcon, 'slds-show');

	},

    hideSpinner : function (component, event, helper) {
        var spinner = component.find('spinner');
        var evt = spinner.get("e.toggle");
        evt.setParams({
            isVisible : false
        });
        evt.fire();
    },

    showSpinner : function (component, event, helper) {
        var spinner = component.find('spinner');
        var evt = spinner.get("e.toggle");
        evt.setParams({
            isVisible : true
        });
        evt.fire();
    }
})
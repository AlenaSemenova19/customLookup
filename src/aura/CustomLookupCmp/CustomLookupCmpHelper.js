({
	searchHelper : function(component, event, getInputKeyWord) {
        var action = component.get("c.fetchContact");
        action.setParams({
            "searchKeyWord": getInputKeyWord
        });
        action.setCallback(this, function(response) {
           var state = response.getState();
           if (state === "SUCCESS") {
               var storeResponse = response.getReturnValue();
               if (storeResponse.length == 0) {
                   component.set("v.Message", "No Result Found...");
               } else {
                   component.set("v.Message", "Search Result: ");
               }
               component.set("v.listOfSearchRecords", storeResponse);
           }
        });

        $A.enqueueAction(action);
	}
})
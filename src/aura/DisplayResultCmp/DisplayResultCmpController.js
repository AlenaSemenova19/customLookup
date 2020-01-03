({
    selectedContact : function(component, event, helper) {
      var getSelectContact = component.get("v.allContacts");
      var myEvent = component.getEvent("selectedContEvent");
         myEvent.setParams({
             "resultOfContacts" : getSelectContact
         });
         myEvent.fire();
    }
});
public with sharing class CustomLookupController {
    @AuraEnabled
    public static List<Contact> fetchContact(String searchKeyWord) {
        String searchKey = '%' + searchKeyWord + '%';
        List<Contact> resultList = new List<Contact>();
        List<Contact> resultOfContacts = [SELECT Id, FirstName, LastName FROM Contact WHERE FirstName LIKE: searchKey OR LastName LIKE: searchKey];

        for (Contact cont: resultOfContacts) {
            resultList.add(cont);
        }
        return resultList;
    }
}
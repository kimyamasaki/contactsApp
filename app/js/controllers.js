var module = angular.module('contactsApp', []);

module.service('ContactService', function () {
    //to create unique contact id
    var uid = 22;
    
    //contacts array to hold list of all contacts
    
    var contacts = [
    {
        id: 0,
        'name': 'Ari Loreno',
        'email': 'kari.loreno@gmail.com',
        'phone': '604-345-4321',
    },
    {
        id: 1,
        'name': 'Baily Brana',
        'email': 'baily@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 2,
        'name': 'Bjruson Bard',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 3,
        'name': 'Bob Marley',
        'email': 'bob.marley@gmail.com',
        'phone': '653-235-4321',
    },
    {
        id: 4,
        'name': 'Diana Manny',
        'email': 'diana@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 5,
        'name': 'Frank Sinatra',
        'email': 'frankieg@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 6,
        'name': 'Freddie Mercury',
        'email': 'freddie.mercury@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 7,
        'name': 'Kirra',
        'email': 'kir@gmail.com',
        'phone': '253-235-4321',
    },
    {
        id: 8,
        'name': 'Korna Stuart',
        'email': 'korn@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 9,
        'name': 'Larry Little',
        'email': 'little@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 10,
        'name': 'Lassie Thedog',
        'email': 'lassie@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 11,
        'name': 'Loco Roco',
        'email': 'lr@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 12,
        'name': 'Sandy',
        'email': 'sandy@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 13,
        'name': 'Sanna Bailey',
        'email': 'sanna@gmail.com',
        'phone': '233-653-4321',
    },
   
    {
        id: 14,
        'name': 'Sherri Bailey',
        'email': 'sherri@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 15,
        'name': 'Tany Ta',
        'email': 'tand@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 16,
        'name': 'Teo Lorus',
        'email': 'teonlor@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 17,
        'name': 'Takavlov Dog',
        'email': 'dog@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 19,
        'name': 'Vael Aina',
        'email': 'aina@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 20,
        'name': 'Wann Bard',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 21,
        'name': 'Waldo Maslo',
        'email': 'wl@gmail.com',
        'phone': '233-653-4321',
    }
    ];
    


    //save method create a new contact if not already exists
    //else update the existing object
    this.save = function (contact) {
        if (contact.id == null) {
            //if this is new contact, add it in contacts array
            contact.id = uid++;
            contacts.push(contact);
        } else {
            //for existing contact, find this contact using id
            //and update it.
            for (i in contacts) {
                if (contacts[i].id == contact.id) {
                    contacts[i] = contact;
                }
            }
        }

    }

    //simply search contacts list for given id
    //and returns the contact object if found
    this.get = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                return contacts[i];
            }
        }

    }
    
    //iterate through contacts list and delete 
    //contact if found
    this.delete = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                contacts.splice(i, 1);
            }
        }
    }

    //simply returns the contacts list
    this.list = function () {
        return contacts;
    }
});


var pubMethods = {};
//console.log("is pubmethods declared working");


module.controller('ContactController', function ($scope, $filter, ContactService) {

    // var orderBy = $filter('orderBy');
    // $scope.order = function(predicate, reverse) {
    //   $scope.contacts = orderBy($scope.contacts, predicate, reverse);
    //   //$scope.apply();
    // };

    // $scope.order('-name', false);

    $scope.hideShow = false;
    $scope.contacts = ContactService.list();


    pubMethods.saveContact = $scope.saveContact = function () {
        ContactService.save($scope.newcontact);
        $scope.newcontact = {};
        //$scope.$apply();
        //console.log("saveContact is being called!");
    }


    pubMethods.deleteContacts = $scope.delete = function (id) {

        ContactService.delete(id);
        if ($scope.newcontact.id == id) $scope.newcontact = {};
    }


    $scope.edit = function (id) {
        $scope.newcontact = angular.copy(ContactService.get(id));
    }
})
var module = angular.module('contactsApp', []);

module.service('ContactService', function () {
    //to create unique contact id
    var uid = 22;
    
    //contacts array to hold list of all contacts
    var contacts = [{
        id: 0,
        'photo': '../img/contact1.png',
        'name': 'Ari Loreno',
        'email': 'kari.loreno@gmail.com',
        'phone': '604-345-4321',
    },
    {
        id: 1,
        'photo': '../img/contact2.png',
        'name': 'Zaily Brana',
        'email': 'baily@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 2,
        'photo': '../img/contact3.png',
        'name': 'Bjruson Bard',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 3,
        'photo': 'photoR.png',
        'name': 'Bob Marley',
        'email': 'bob.marley@gmail.com',
        'phone': '653-235-4321',
    },
    {
        id: 4,
        'photo': 'photoG.png',
        'name': 'Diana Manny',
        'email': 'diana@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 5,
        'photo': 'photoR.png',
        'name': 'Frank Sinatra',
        'email': 'frankieg@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 6,
        'photo': 'photoR.png',
        'name': 'Freddie Mercury',
        'email': 'freddie.mercury@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 7,
        'photo': 'photoG.png',
        'name': 'Kirra',
        'email': 'kir@gmail.com',
        'phone': '253-235-4321',
    },
    {
        id: 8,
        'photo': 'photoG.png',
        'name': 'Korna Stuart',
        'email': 'korn@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 9,
        'photo': 'photoB.png',
        'name': 'Larry Little',
        'email': 'little@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 10,
        'photo': 'photoG.png',
        'name': 'Lassie Thedog',
        'email': 'lassie@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 11,
        'photo': 'photoB.png',
        'name': 'Loco Roco',
        'email': 'lr@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 12,
        'photo': 'photoB.png',
        'name': 'Sandy',
        'email': 'sandy@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 13,
        'photo': 'photoG.png',
        'name': 'Sanna Bailey',
        'email': 'sanna@gmail.com',
        'phone': '233-653-4321',
    },
   
    {
        id: 14,
        'photo': 'photoB.png',
        'name': 'Sherri Bailey',
        'email': 'sherri@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 15,
        'photo': 'photoB.png',
        'name': 'Tany Ta',
        'email': 'tand@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 16,
        'photo': 'photoG.png',
        'name': 'Teo Lorus',
        'email': 'teonlor@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 17,
        'photo': 'photoR.png',
        'name': 'Takavlov Dog',
        'email': 'dog@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 19,
        'photo': 'photoB.png',
        'name': 'Vael Aina',
        'email': 'aina@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 20,
        'photo': 'photoR.png',
        'name': 'Wann Bard',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 21,
        'photo': 'photoG.png',
        'name': 'Waldo Maslo',
        'email': 'wl@gmail.com',
        'phone': '233-653-4321',
    }

    ];
    

    //console.log(contacts[0]);

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

module.controller('ContactController', function ($scope, ContactService) {
    $scope.hideShow = false;
    $scope.contactsHideShow = true;
    // $scope.hs = false;
    $scope.contacts = ContactService.list();

    $scope.cancel = function () {
        $scope.hideShow = false;
        $scope.contactsHideShow = true;
    }

    $scope.saveContact = function () {
        // var a = {photo : "photoR.png"};
        // //console.log(genericPhoto); 
        // var b = $scope.newcontact;
        // //console.log(newContactList);
        // var c = $.merge(a, b);
        // console.log(c);
      
        ContactService.save($scope.newcontact);

        console.log($scope.newcontact);
        $scope.newcontact = {};

        $scope.hideShow = false;
        $scope.contactsHideShow = true;
    }


    $scope.delete = function (id) {

        ContactService.delete(id);
        if ($scope.newcontact.id == id) $scope.newcontact = {};
    }


    $scope.edit = function (id) {
        document.getElementById("name").readOnly = false;
        document.getElementById("email").readOnly = false;
        document.getElementById("phone").readOnly = false;

    }

    $scope.details = function (id) {
        $scope.newcontact = angular.copy(ContactService.get(id));
        //document.getElementById("photo").checked = true;
        document.getElementById("name").readOnly = true;
        document.getElementById("email").readOnly = true;
        document.getElementById("phone").readOnly = true;
        $scope.hideShow = true;
        $scope.contactsHideShow = false; 
    }

})
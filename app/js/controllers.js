var module = angular.module('contactsApp', []);

module.service('ContactService', function () {
    //to create unique contact id
    var uid = 30;

    //contacts array to hold list of all contacts
    var contacts = [{
        id: 0,
        'alphabet': 'A',
        'photo': 'photoG.png',
        'name': 'Aaron Loreno',
        'email': 'ari.loreno@gmail.com',
        'phone': '604-345-4321',

    },
    {
        id: 1,
        'alphabet': 'Z',
        'photo': 'photoR.png',
        'name': 'Zaily Brana',
        'email': 'baily@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 2,
        'alphabet': 'B',
        'photo': 'photoB.png',
        'name': 'Bab Bard',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 3,
        'alphabet': 'B',
        'photo': 'photoR.png',
        'name': 'Bob Marley',
        'email': 'bob.marley@gmail.com',
        'phone': '653-235-4321',
    },
    {
        id: 4,
        'alphabet': 'D',
        'photo': 'photoG.png',
        'name': 'Danny Manny',
        'email': 'diana@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 5,
        'alphabet': 'F',
        'photo': 'photoR.png',
        'name': 'Frank Sinatra',
        'email': 'frankieg@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 6,
        'alphabet': 'F',
        'photo': 'photoR.png',
        'name': 'Freddie Mercury',
        'email': 'freddie.mercury@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 7,
        'alphabet': 'K',
        'photo': 'photoG.png',
        'name': 'Kirra',
        'email': 'kir@gmail.com',
        'phone': '253-235-4321',
    },
    {
        id: 8,
        'alphabet': 'K',
        'photo': 'photoG.png',
        'name': 'Korna Stuart',
        'email': 'korn@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 9,
        'alphabet': 'L',
        'photo': 'photoB.png',
        'name': 'Larry Little',
        'email': 'little@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 10,
        'alphabet': 'L',
        'photo': 'photoG.png',
        'name': 'Lassie Thedog',
        'email': 'lassie@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 11,
        'alphabet': 'L',
        'photo': 'photoB.png',
        'name': 'Loco Roco',
        'email': 'lr@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 12,
        'alphabet': 'S',
        'photo': 'photoB.png',
        'name': 'Saedy Soona',
        'email': 'sandy@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 13,
        'alphabet': 'S',
        'photo': 'photoG.png',
        'name': 'Sanna Bailey',
        'email': 'sanna@gmail.com',
        'phone': '233-653-4321',
    },
   
    {
        id: 14,
        'alphabet': 'S',
        'photo': 'photoB.png',
        'name': 'Sherri Bailey',
        'email': 'sherri@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 15,
        'alphabet': 'T',
        'photo': 'photoB.png',
        'name': 'Tany Ta',
        'email': 'tand@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 16,
        'alphabet': 'T',
        'photo': 'photoG.png',
        'name': 'Teo Lorus',
        'email': 'teonlor@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 17,
        'alphabet': 'T',
        'photo': 'photoR.png',
        'name': 'Takavlov Dog',
        'email': 'dog@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 19,
        'alphabet': 'V',
        'photo': 'photoB.png',
        'name': 'Vael Aina',
        'email': 'aina@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 20,
        'alphabet': 'W',
        'photo': 'photoR.png',
        'name': 'Wann Rard',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 21,
        'alphabet': 'W',
        'photo': 'photoG.png',
        'name': 'Waldo Maslo',
        'email': 'wl@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 22,
        'alphabet': 'C',
        'photo': 'photoR.png',
        'name': 'Cael Leonard',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 23,
        'alphabet': 'F',
        'photo': 'photoR.png',
        'name': 'Faelise Leonard',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 23,
        'alphabet': 'G',
        'photo': 'photoR.png',
        'name': 'Gark Goober',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 24,
        'alphabet': 'H',
        'photo': 'photoR.png',
        'name': 'Gark Goober',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 25,
        'alphabet': 'I',
        'photo': 'photoR.png',
        'name': 'Ibby Arkensaw',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 26,
        'alphabet': 'J',
        'photo': 'photoR.png',
        'name': 'Jaden Lader',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 27,
        'alphabet': 'M',
        'photo': 'photoR.png',
        'name': 'Mao Lader',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 27,
        'alphabet': 'P',
        'photo': 'photoR.png',
        'name': 'Paacko Pony',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 28,
        'alphabet': 'R',
        'photo': 'photoR.png',
        'name': 'Ranaldo Marupeo',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 28,
        'alphabet': 'U',
        'photo': 'photoR.png',
        'name': 'Uno Kersi',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 29,
        'alphabet': 'X',
        'photo': 'photoR.png',
        'name': 'Xavier Ksi',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    }

    ];
    






    //$scope.groups = [];
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


    var alphabet = null;
    
    $scope.GetSeparator = function(contact) {
        if (alphabet !== contact.alphabet) {
            alphabet = contact.alphabet;
            return true;
        }
        
        return false;
    };



    $scope.add = function (id) {
        $scope.hideShow = !$scope.hideShow;
        $scope.contactsHideShow = !$scope.contactsHideShow;
        document.getElementById("name").readOnly = false;
        document.getElementById("email").readOnly = false;
        document.getElementById("phone").readOnly = false;
        $scope.editHideShow = false;
    }

    $scope.cancel = function () {
        $scope.hideShow = false;
        $scope.contactsHideShow = true;
        $scope.newcontact = {};
    }

    $scope.saveContact = function () {



        var a = {photo : "photoR.png"};
        //console.log(genericPhoto); 
        var b = $scope.newcontact;
        //console.log($scope.newcontact);
        
        var copyNewContact = $scope.newcontact;
        
        var firstLetter = copyNewContact.name[0];
        var capitalized = firstLetter[0].toUpperCase() + firstLetter.substring(1);
        console.log(capitalized);

        var c = {alphabet: ''};

        c.alphabet = capitalized;
        
        console.log(c);



        // Merge object2 into object1
        $.extend( a, b, c );

        


        //console.log(a);
        $scope.newcontact = a;
        console.log($scope.newcontact);
        $scope.GetSeparator = true;
      
        ContactService.save($scope.newcontact);

        //console.log($scope.newcontact);
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
        
        document.getElementById("name").readOnly = true;
        document.getElementById("email").readOnly = true;
        document.getElementById("phone").readOnly = true;

        $scope.hideShow = true;
        $scope.contactsHideShow = false; 
        $scope.editHideShow = true;
    }

})
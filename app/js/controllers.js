var module = angular.module('contactsApp', []);

module.service('ContactService', function () {
    //to create unique contact id
    var uid = 28;

    //contacts array to hold list of all contacts
    var contacts = [{
        id: 0,
        'alphabet': 'A',
        'photo': '../img/contacticon/c_portrait_2.png',
        'bigPhoto': '../img/contactdetails/portrait_2.png',
        'name': 'Ana Loreno',
        'email': 'ari.loreno@gmail.com',
        'phone': '604-345-4321',

    },
    {
        id: 1,
        'alphabet': 'Z',
        'photo': '../img/contacticon/c_portrait_1.png',
        'bigPhoto': '../img/contactdetails/portrait_1.png',
        'name': 'Zaily Brana',
        'email': 'baily@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 2,
        'alphabet': 'B',
        'photo': '../img/contacticon/c_portrait_3.png',
        'bigPhoto': '../img/contactdetails/portrait_3.png',
        'name': 'Bab Bard',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 3,
        'alphabet': 'B',
        'photo': '../img/contacticon/c_portrait_4.png',
        'bigPhoto': '../img/contactdetails/portrait_4.png',
        'name': 'Bob Marley',
        'email': 'bob.marley@gmail.com',
        'phone': '653-235-4321',
    },
    {
        id: 4,
        'alphabet': 'D',
        'photo': '../img/contacticon/c_portrait_5.png',
        'bigPhoto': '../img/contactdetails/portrait_5.png',
        'name': 'Danny Manny',
        'email': 'diana@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 5,
        'alphabet': 'F',
        'photo': '../img/contacticon/c_portrait_6.png',
        'bigPhoto': '../img/contactdetails/portrait_6.png',
        'name': 'Frank Sinatra',
        'email': 'frankieg@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 6,
        'alphabet': 'F',
        'photo': '../img/contacticon/c_portrait_7.png',
        'bigPhoto': '../img/contactdetails/portrait_7.png',
        'name': 'Freddie Mercury',
        'email': 'freddie.mercury@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 7,
        'alphabet': 'K',
        'photo': '../img/contacticon/c_portrait_8.png',
        'bigPhoto': '../img/contactdetails/portrait_8.png',
        'name': 'Kirra',
        'email': 'kir@gmail.com',
        'phone': '253-235-4321',
    },
    {
        id: 8,
        'alphabet': 'K',
        'photo': '../img/contacticon/c_portrait_9.png',
        'bigPhoto': '../img/contactdetails/portrait_9.png',
        'name': 'Korna Stuart',
        'email': 'korn@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 9,
        'alphabet': 'L',
        'photo': '../img/contacticon/c_portrait_10.png',
        'bigPhoto': '../img/contactdetails/portrait_10.png',
        'name': 'Larry Little',
        'email': 'little@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 10,
        'alphabet': 'L',
        'photo': '../img/contacticon/c_portrait_11.png',
        'bigPhoto': '../img/contactdetails/portrait_11.png',
        'name': 'Lassie Thedog',
        'email': 'lassie@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 11,
        'alphabet': 'L',
        'photo': '../img/contacticon/c_portrait_12.png',
        'bigPhoto': '../img/contactdetails/portrait_12.png',
        'name': 'Loco Roco',
        'email': 'lr@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 12,
        'alphabet': 'S',
        'photo': '../img/contacticon/c_portrait_13.png',
        'bigPhoto': '../img/contactdetails/portrait_13.png',
        'name': 'Saedy Soona',
        'email': 'sandy@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 13,
        'alphabet': 'S',
        'photo': '../img/contacticon/c_portrait_14.png',
        'bigPhoto': '../img/contactdetails/portrait_14.png',
        'name': 'Sanna Bailey',
        'email': 'sanna@gmail.com',
        'phone': '233-653-4321',
    },
   
    {
        id: 14,
        'alphabet': 'S',
        'photo': '../img/contacticon/c_portrait_15.png',
        'bigPhoto': '../img/contactdetails/portrait_15.png',
        'name': 'Sherri Bailey',
        'email': 'sherri@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 15,
        'alphabet': 'T',
        'photo': '../img/contacticon/c_portrait_16.png',
        'bigPhoto': '../img/contactdetails/portrait_16.png',
        'name': 'Tany Ta',
        'email': 'tand@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 16,
        'alphabet': 'T',
        'photo': '../img/contacticon/c_portrait_17.png',
        'bigPhoto': '../img/contactdetails/portrait_17.png',
        'name': 'Teo Lorus',
        'email': 'teonlor@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 17,
        'alphabet': 'T',
        'photo': '../img/contacticon/c_portrait_18.png',
        'bigPhoto': '../img/contactdetails/portrait_18.png',
        'name': 'Takavlov Dog',
        'email': 'dog@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 19,
        'alphabet': 'V',
        'photo': '../img/contacticon/c_portrait_19.png',
        'bigPhoto': '../img/contactdetails/portrait_19.png',
        'name': 'Vael Aina',
        'email': 'aina@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 20,
        'alphabet': 'W',
        'photo': '../img/contacticon/c_portrait_20.png',
        'bigPhoto': '../img/contactdetails/portrait_20.png',
        'name': 'Wann Rard',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 21,
        'alphabet': 'W',
        'photo': '../img/contacticon/c_portrait_21.png',
        'bigPhoto': '../img/contactdetails/portrait_21.png',
        'name': 'Waldo Maslo',
        'email': 'wl@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 22,
        'alphabet': 'C',
        'photo': '../img/contacticon/c_portrait_22.png',
        'bigPhoto': '../img/contactdetails/portrait_22.png',
        'name': 'Cael Leonard',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 23,
        'alphabet': 'F',
        'photo': '../img/contacticon/c_portrait_23.png',
        'bigPhoto': '../img/contactdetails/portrait_23.png',
        'name': 'Faelise Leonard',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 23,
        'alphabet': 'G',
        'photo': '../img/contacticon/c_portrait_24.png',
        'bigPhoto': '../img/contactdetails/portrait_24.png',
        'name': 'Gark Goober',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 24,
        'alphabet': 'A',
        'photo': '../img/contacticon/c_portrait_25.png',
        'bigPhoto': '../img/contactdetails/portrait_25.png',
        'name': 'Alison Goober',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 25,
        'alphabet': 'I',
        'photo': '../img/contacticon/c_portrait_26.png',
        'bigPhoto': '../img/contactdetails/portrait_26.png',
        'name': 'Ibby Arkensaw',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 26,
        'alphabet': 'J',
        'photo': '../img/contacticon/c_portrait_27.png',
        'bigPhoto': '../img/contactdetails/portrait_27.png',
        'name': 'Jaden Lader',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },
    {
        id: 27,
        'alphabet': 'A',
        'photo': '../img/contacticon/c_portrait_28.png',
        'bigPhoto': '../img/contactdetails/portrait_28.png',
        'name': 'Anthony Park',
        'email': 'bb345@gmail.com',
        'phone': '233-653-4321',
    },

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

        $('#addButton').fadeOut();
        $('header').css({'top':-120 +'px'});
        $('#main').css({'top':0 +'px'});
        $('#saveButton, #cancelButton').css({'display':'block'});
        $('#name, #phone, #email').removeClass('clearForm');
        $('#name').removeClass('titleName');
        $('.nameSub').css({'display':'block'});
    }

    $scope.cancel = function () {
        $scope.hideShow = false;
        $scope.contactsHideShow = true;
        $scope.newcontact = {};

        $('header').css({'top':0 +'px'});
        $('#main').css({'top':110 +'px'});

        $('#addButton').fadeIn();
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


        $('header').css({'top':0 +'px'});
        $('#main').css({'top':110 +'px'});

    }


    $scope.delete = function (id) {

        ContactService.delete(id);
        if ($scope.newcontact.id == id) $scope.newcontact = {};
    }


    $scope.edit = function (id) {
        document.getElementById("name").readOnly = false;
        document.getElementById("email").readOnly = false;
        document.getElementById("phone").readOnly = false;

        $('#editButton').fadeOut();

        $('#saveButton, #cancelButton').css({'display':'block'});
        $('#name, #phone, #email').removeClass('clearForm');
        $('#name').removeClass('titleName');
        $('.nameSub').css({'display':'block'});
    }

    $scope.details = function (id) {
        $scope.newcontact = angular.copy(ContactService.get(id));
        
        document.getElementById("name").readOnly = true;
        document.getElementById("email").readOnly = true;
        document.getElementById("phone").readOnly = true;

        $scope.hideShow = true;
        $scope.contactsHideShow = false; 
        $scope.editHideShow = true;

        $('header').css({'top':-120 +'px'});
        // $('header').css('background-image','transparent');
        $('#main').css({'top':0 +'px'});

        $('#editButton').fadeIn();

        $('#scrollknob, .gradient').fadeOut();
        $('#saveButton, #cancelButton').css({'display':'none'});

        $('#name, #phone, #email').addClass('clearForm');
        $('#name').addClass('titleName');
        $('.nameSub').css({'display':'none'});
    }

})
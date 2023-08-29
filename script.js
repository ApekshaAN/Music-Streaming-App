$(".album-poster").on('click', function (e) {
    var dataSwitchId = $(this).attr('data-switch');
    ap.list.switch(dataSwitchId);
    ap.play();
    $("#aplayer").addClass('showPlayer');
});

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [
        {
            name: 'Guli mata',
            artist: 'Sad Lamjarred, Shreya Ghoshal',
            url: 'Songs\Guli Mata.mp3',
            cover: 'Images\Guli mata.jpg'
        }, {
            name: 'Kesariya',
            artist: 'Arijit Singh',
            url: 'Songs\Kesariya.mp3',
            cover: 'Images\Kesariya.jpg'
        }, {
            name: 'Raataan Lambiyaan',
            artist: 'Tanishk Bagchi',
            url: 'Songs\Raataan Lambiyan.mp3',
            cover: 'Images\Raatan lambiyaan.jpg'
        }, {
            name: 'Chaleya',
            artist: 'Arijit Singh, Shilpa Rao',
            url: 'Songs\Chaleya.mp3',
            cover: 'Images\Chaleya.jpg'
        }, {
            name: 'Jagave neenu',
            artist: 'Sid Sriram',
            url: 'Songs\Jagave-Neenu.mp3',
            cover: 'Images\Jagave neenu.jpg'
        }, {
            name: 'Singara Siriye',
            artist: 'Vijay Prakash',
            url: 'Songs\Singara-Siriye.mp3',
            cover: 'Images\Singara siriye.jpg'
        }, {
            name: 'Belakina Kavithe',
            artist: 'Sanjith Hegde, Sangeetha Ravindranath',
            url: 'Songs\Belakina-Kavithe.mp3',
            cover: 'Images\Belakina Kavithe.jpg'
        }, {
            name: 'Usire nanna usire',
            artist: 'Vasuki Vaibhav',
            url: 'Songs\Usire-Nanna-Usire.mp3',
            cover: 'Images\Usire nanna usire.jpg'
        }, {
            name: 'Sleepless nights',
            artist: 'Armaan Malik',
            url: 'Songs\Sleepless Nights.mp3',
            cover: 'Images\sleepless nights.jpg'
        }, {
            name: 'Love me again',
            artist: 'V-Layover',
            url: 'Songs\Love-Me-Again.mp3',
            cover: 'Images\Love me again.jpg'
        }, {
            name: 'Naatu Naatu',
            artist: 'Rahul Sipligunj and Kaala Bhairava',
            url: 'Songs\Naatu-Naatu.mp3',
            cover: 'Images\naatu naatu.jpg'
        }, {
            name: 'Kaavala',
            artist: 'Shilpa Rao, Anirudh Ravichander',
            url: 'Songs\Kaavala.mp3',
            cover: 'Images\Kaavala.jpg'
        }, ]
});
[
  '{{repeat(5, 500)}}',
  {
    id: '{{index()}}',
    oid: '{{objectId()}}',
    guid: '{{guid()}}',
    isActive: '{{bool()}}',
    price: '{{floating(0, 200, 2, "$0,0.00")}}',
    picture: 'http://placehold.it/32x32',
    availability: '{{integer(0, 50)}}',
    name: '{{lorem(1, "words")}}',
    manufacture: '{{company()}}',
    about: '{{lorem(1, "paragraphs")}}',
    registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}'
  }
]


NEW Generator
[
  {
    'repeat(5, 100)': 
    [
      {
        _id: '{{objectId()}}',
        index: '{{index()}}',
        guid: '{{guid()}}',
        isActive: '{{bool()}}',
        price: '{{floating(0, 200, 2, "$0,0.00")}}',
        picture: 'http://placehold.it/32x32',
        availability: '{{integer(0, 50)}}',
        name: '{{lorem(1, "words")}}',
        manufacture: '{{company()}}',
        about: '{{lorem(1, "paragraphs")}}',
        registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}'
      }
    ]
  }
]




//JSON
{
  "results": [
  {
    "_id": "5ad20fe349cef3945b896aa3",
    "index": 0,
    "guid": "de2784e5-4f5d-466c-942f-be3a7869e9fb",
    "isActive": false,
    "price": "$76.19",
    "picture": "http://placehold.it/32x32",
    "availability": 12,
    "name": "eu",
    "manufacture": "Xumonk",
    "about": "Eu tempor sit tempor quis duis veniam pariatur nulla enim cupidatat velit incididunt. Officia pariatur minim et do irure consequat voluptate aliqua quis amet qui. Quis eu consectetur amet nulla consectetur deserunt eiusmod ex dolor magna. Excepteur commodo est excepteur enim occaecat sunt. Veniam proident esse et consectetur ex dolor minim velit nostrud est pariatur enim quis aute.",
    "registered": "Mon Mar 05 2018 20:36:49 GMT+0000 (UTC)"
  },
  {
    "_id": "5ad20fe30cf67b1753a1cc38",
    "index": 1,
    "guid": "ff16d689-7e20-48df-b0ca-4f36f39b0565",
    "isActive": false,
    "price": "$177.28",
    "picture": "http://placehold.it/32x32",
    "availability": 49,
    "name": "in",
    "manufacture": "Perkle",
    "about": "Consectetur ut non dolor sint eu eiusmod adipisicing eu exercitation nostrud irure ad. Laborum et cupidatat esse officia adipisicing anim eu nulla aute mollit labore laborum irure mollit. Sit consequat mollit minim minim ea laboris nulla excepteur mollit laboris.",
    "registered": "Tue Sep 06 2016 23:05:16 GMT+0000 (UTC)"
  },
  {
    "_id": "5ad20fe3b4b6609c6e95b695",
    "index": 2,
    "guid": "5e6c2df6-383f-470b-b106-b985f6bd346e",
    "isActive": false,
    "price": "$33.08",
    "picture": "http://placehold.it/32x32",
    "availability": 2,
    "name": "ex",
    "manufacture": "Digitalus",
    "about": "Tempor aliquip qui quis elit magna sint aute qui. Tempor nisi labore proident eu incididunt ea laborum. Veniam nisi Lorem eiusmod aliqua sint. Aliqua qui anim cupidatat anim voluptate pariatur culpa cillum consequat tempor cillum occaecat velit nostrud.",
    "registered": "Tue Jan 06 2015 06:05:58 GMT+0000 (UTC)"
  },
  {
    "_id": "5ad20fe38120a3317892a2b0",
    "index": 3,
    "guid": "a9cf42b9-8959-4db3-9d55-b03a6571d2ea",
    "isActive": false,
    "price": "$190.81",
    "picture": "http://placehold.it/32x32",
    "availability": 37,
    "name": "magna",
    "manufacture": "Callflex",
    "about": "Sint culpa Lorem occaecat dolor aliqua est voluptate minim nostrud sint irure qui proident est. Incididunt ut veniam laboris aliqua laboris occaecat do id ut dolore mollit eu ut exercitation. Sunt aute irure consequat do deserunt aliquip veniam pariatur elit in dolor qui.",
    "registered": "Fri Sep 23 2016 06:06:17 GMT+0000 (UTC)"
  },
  {
    "_id": "5ad20fe3f6c8f9d252c1ba25",
    "index": 4,
    "guid": "5f43eba4-43ab-4dcb-93cf-07495813eef6",
    "isActive": true,
    "price": "$7.24",
    "picture": "http://placehold.it/32x32",
    "availability": 3,
    "name": "consequat",
    "manufacture": "Phormula",
    "about": "Laboris aliqua magna nostrud proident id eiusmod magna ut consequat. Adipisicing pariatur qui eiusmod consectetur eu pariatur excepteur quis ad commodo incididunt id. Tempor duis eu voluptate in ad sit magna eu qui id. Nisi exercitation commodo dolor laboris consequat excepteur.",
    "registered": "Mon Jul 24 2017 04:07:06 GMT+0000 (UTC)"
  },
  {
    "_id": "5ad20fe38404b9bdd44503e5",
    "index": 5,
    "guid": "c6f76a45-d83b-474c-9551-cf03102cec75",
    "isActive": true,
    "price": "$51.66",
    "picture": "http://placehold.it/32x32",
    "availability": 30,
    "name": "anim",
    "manufacture": "Comvey",
    "about": "Nulla culpa ullamco non magna aute esse enim officia do amet. Anim eu quis eu id commodo fugiat magna magna pariatur sint sunt ad adipisicing esse. Aliquip esse aliqua magna eu laborum incididunt proident commodo elit sit ut ea duis reprehenderit. Aliqua aliquip sint dolor tempor elit non proident. Aute veniam deserunt ut eu id magna consectetur ex. Incididunt laboris commodo esse amet aute quis duis aliqua enim enim velit. Labore elit velit ullamco dolore et dolor sit voluptate anim incididunt duis ea sunt duis.",
    "registered": "Sun Dec 11 2016 21:04:51 GMT+0000 (UTC)"
  },
  {
    "_id": "5ad20fe36a2fea0f07493810",
    "index": 6,
    "guid": "ae41332f-0569-470c-9c0d-920bc1a84adc",
    "isActive": false,
    "price": "$25.39",
    "picture": "http://placehold.it/32x32",
    "availability": 19,
    "name": "amet",
    "manufacture": "Rodemco",
    "about": "Est aliquip id cupidatat enim laborum aliqua duis consectetur nulla irure irure. Incididunt nisi velit quis voluptate consectetur quis pariatur anim. Consectetur nulla elit do nulla eiusmod anim aliquip dolore. Mollit labore ullamco adipisicing cillum officia cillum. Incididunt et aute magna consectetur in cupidatat voluptate sit aliqua. Ad id quis qui non Lorem magna. Duis quis id Lorem nisi duis et.",
    "registered": "Wed Jan 14 2015 04:08:45 GMT+0000 (UTC)"
  },
  {
    "_id": "5ad20fe3dc663b780a2deb8a",
    "index": 7,
    "guid": "37d820e8-1e18-45d6-8aea-795ffac212b9",
    "isActive": false,
    "price": "$93.32",
    "picture": "http://placehold.it/32x32",
    "availability": 8,
    "name": "laboris",
    "manufacture": "Matrixity",
    "about": "Ex adipisicing labore veniam velit proident minim officia ullamco aliqua dolore eiusmod tempor. Ullamco excepteur laboris irure cupidatat pariatur eiusmod sit nulla. Non ullamco irure non minim sunt labore. Aute culpa elit cupidatat eiusmod do ut culpa officia esse eiusmod dolore labore esse. Eu nisi voluptate proident aute Lorem nisi ea id esse ipsum. Eu excepteur et aute voluptate excepteur nostrud nisi.",
    "registered": "Tue May 05 2015 08:33:00 GMT+0000 (UTC)"
  },
  {
    "_id": "5ad20fe3271bcff399b1361a",
    "index": 8,
    "guid": "ac5da290-acae-4f4a-b7fd-dd45b00a8ed2",
    "isActive": true,
    "price": "$113.62",
    "picture": "http://placehold.it/32x32",
    "availability": 2,
    "name": "est",
    "manufacture": "Scenty",
    "about": "Cupidatat amet reprehenderit aute culpa consectetur excepteur sint dolor proident voluptate et do. Sit veniam veniam reprehenderit enim occaecat qui laborum reprehenderit qui duis qui dolor enim. Officia aute sunt labore nulla consectetur pariatur ea adipisicing adipisicing.",
    "registered": "Thu Mar 05 2015 13:34:56 GMT+0000 (UTC)"
  },
  {
    "_id": "5ad20fe39496cf749fb71bb9",
    "index": 9,
    "guid": "55f5c639-69bb-4276-977f-b6bbd51cf003",
    "isActive": false,
    "price": "$137.17",
    "picture": "http://placehold.it/32x32",
    "availability": 21,
    "name": "mollit",
    "manufacture": "Imkan",
    "about": "Amet dolor consectetur enim non exercitation ex velit culpa ad fugiat elit eu id. Culpa sint consequat est dolor do. Ipsum ipsum sint fugiat eu tempor amet sit sit sint quis ipsum ullamco ipsum sit. Sit aliqua Lorem eiusmod reprehenderit labore id non ullamco sint irure et nostrud. Esse Lorem velit amet pariatur officia. Ut fugiat eu duis dolor magna voluptate. Veniam eu ea duis irure fugiat anim est cillum labore aute.",
    "registered": "Sat Jul 23 2016 16:52:56 GMT+0000 (UTC)"
  },
  {
    "_id": "5ad20fe3c827bf8e6d76afa8",
    "index": 10,
    "guid": "0b4dc1cd-56b5-415d-9b60-88da665d82fd",
    "isActive": true,
    "price": "$193.44",
    "picture": "http://placehold.it/32x32",
    "availability": 8,
    "name": "aliqua",
    "manufacture": "Prosure",
    "about": "Minim laborum qui nostrud excepteur nisi veniam esse sunt nisi. Nulla cupidatat irure eu veniam aute nostrud sint est minim ipsum ut qui. Aliquip incididunt nulla aute do non nostrud do. Occaecat irure duis magna non. Dolore commodo anim in nulla deserunt fugiat minim. Aute proident ex fugiat et nisi fugiat consectetur laboris excepteur mollit sunt mollit duis occaecat. Dolor nulla aliqua tempor excepteur reprehenderit laborum irure adipisicing ut mollit.",
    "registered": "Mon Apr 21 2014 03:43:45 GMT+0000 (UTC)"
  },
  {
    "_id": "5ad20fe31be18f0e7fa71601",
    "index": 11,
    "guid": "a0202093-1181-44a1-a5c2-e05345be8196",
    "isActive": false,
    "price": "$74.03",
    "picture": "http://placehold.it/32x32",
    "availability": 45,
    "name": "incididunt",
    "manufacture": "Parcoe",
    "about": "Et culpa magna eiusmod incididunt velit aliquip veniam id elit. Excepteur amet esse laboris dolore consequat consequat irure dolore incididunt adipisicing minim. Pariatur consequat in occaecat anim irure qui ipsum officia non occaecat exercitation reprehenderit nisi tempor. Velit eu adipisicing officia consequat duis incididunt eu dolor do eu incididunt nisi ipsum ea. Ipsum velit veniam et dolore magna mollit quis elit sunt do veniam duis nulla.",
    "registered": "Tue Nov 07 2017 21:18:53 GMT+0000 (UTC)"
  }
]
}




import {womenFashion,kidsFashion,menInKurta,menFashion,shoe, iphone, samsungGalaxy, onepPlusPhone, motorolaPhone, poco, xiaomiPhone} from './../assets'

export const categoryList: {
  categoryName: string;
  imageLink: string;
  searchQueryName: "";
}[] = [
  {
    categoryName: "Top offer",
    imageLink:
      "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/698ba0cebe456aaf.jpg?q=100",
    searchQueryName: "",
  },
  {
    categoryName: "Mobiles & Tablets",
    imageLink:
      "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/44e10b16e649b691.jpg?q=100",
    searchQueryName: "",
  },
  {
    categoryName: "TV & Applliances",
    imageLink:
      "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/717b5077a5e25324.jpg?q=100",
    searchQueryName: "",
  },
  {
    categoryName: "Electronics",
    imageLink:
      "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/4da1d0d19350cc84.jpg?q=100",
    searchQueryName: "",
  },
  {
    categoryName: "Fashion",
    imageLink:
      "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/9d4e9c605fc1d2d3.jpg?q=100",
    searchQueryName: "",
  },
  {
    categoryName: "Beauty",
    imageLink:
      "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/9d4e9c605fc1d2d3.jpg?q=100",
    searchQueryName: "",
  },
  {
    categoryName: "Home & Kitchen",
    imageLink:
      "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5b813b64a3179898.jpg?q=100",
    searchQueryName: "",
  },
  {
    categoryName: "Furniture",
    imageLink:
      "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/7a5e96c10ada8a56.jpg?q=100",
    searchQueryName: "",
  },
  {
    categoryName: "Grocery",
    imageLink:
      "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/25f400c36bc3487d.jpg?q=100",
    searchQueryName: "",
  },
];

export const items: {
  heading: string;
  itemsList: {
    itemName: string;
    itemsImage: string;
    priceDetail: string;
    itemsPrice: string;
    routeLink: string;
  }[];
}[] = [
  {
    heading: "Top mobiles",
    itemsList: [
      {
        itemName: "I phone 15 max Pro",
        itemsImage:iphone,
        priceDetail: "Starting from",
        itemsPrice: "1,000,00",
        routeLink: "",
      },
      {
        itemName: "Samasung galaxy S24 ultra",
        itemsImage:samsungGalaxy,        priceDetail: "Starting from",
        itemsPrice: "1,20,000",
        routeLink: "",
      },
      {
        itemName: "Oneplus 12 pro",
        itemsImage:onepPlusPhone,
        priceDetail: "Starts from",
        itemsPrice: "40,000",
        routeLink: "",
      },
      {
        itemName: "Motorola edge 50 pro",
        itemsImage:motorolaPhone,
        priceDetail: "Starting from",
        itemsPrice: "34,000",
        routeLink: "",
      },
      {
        itemName: "Xiaomi Phones",
        itemsImage:xiaomiPhone,
        priceDetail: "Starting from",
        itemsPrice: "10,100",
        routeLink: "",
      },
      {
        itemName: "Poco",
        itemsImage:poco,
        priceDetail: "Starting from ",
        itemsPrice: "14,000",
        routeLink: "",
      },
    ],
  },
  {
    heading: "Trending Fashion",
    itemsList: [
      {
        itemName: "Kurtas",
        itemsImage:menInKurta,
        itemsPrice: "1000",
        priceDetail: "Starting from",
        routeLink: "",
      },
      {
        itemName: "Women",
        itemsImage:womenFashion,
        itemsPrice: "1200",
        priceDetail: "Starting from",
        routeLink: "",
      },
      {
        itemName: "Kids",
        itemsImage:kidsFashion,
        itemsPrice: "800",
        priceDetail: "Starting from",
        routeLink: "",
      },
      {
        itemName: "Mens",
        itemsImage:menFashion,       
        itemsPrice: "1400",
        priceDetail: "Starting from",
        routeLink: "",
      },
      {
        itemName: "Shoe",
        itemsImage:shoe,
        itemsPrice: "399",
        priceDetail: "Starting from",
        routeLink: "",
      },
    ],
  },
];

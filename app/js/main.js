/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/filter.js":
/*!**************************!*\
  !*** ./src/js/filter.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accordionFilter": () => (/* binding */ accordionFilter),
/* harmony export */   "showFilter": () => (/* binding */ showFilter)
/* harmony export */ });
function accordionFilter() {
  const accordionBtns = document.querySelectorAll(".filter-title");
  accordionBtns.forEach(accordion => {
    accordion.onclick = function () {
      this.classList.toggle("is-open");
      let content = this.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    };
  });
}
function showFilter() {
  const filterBtn = document.querySelector(".goods-search_filter");
  const filterAside = document.querySelector(".goods-filter");
  const showItems = document.querySelectorAll(".goods-item");
  filterBtn.addEventListener('click', e => {
    if (filterBtn.classList.contains("filter-hide")) {
      filterBtn.classList.remove("filter-hide");
      filterAside.classList.remove("hide");
      filterAside.classList.add("show");

      for (let i = 0, length = showItems.length; i < length; i++) {
        showItems[i].style.width = "48%";
      }
    } else {
      filterBtn.classList.add("filter-hide");
      filterAside.classList.add("hide");
      filterAside.classList.remove("show");

      for (let i = 0, length = showItems.length; i < length; i++) {
        showItems[i].style.width = "30%";
      }
    }
  });
}

/***/ }),

/***/ "./src/js/items.js":
/*!*************************!*\
  !*** ./src/js/items.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "items": () => (/* binding */ items)
/* harmony export */ });
const items = [{
  id: 1,
  category: "mac",
  imgUrl: "items/macbook-air.png",
  name: "MacBook Air",
  display: 13.3,
  // дюймы
  color: ["Gold", "Silver", "Space Grey"],
  price: 999,
  // доллары
  chip: {
    name: "M1",
    cores: 8
  },
  ram: 8,
  // Гб
  storage: 256,
  // Гб
  touchId: true,
  faceId: false,
  wireless: ["Wi-Fi", "Bluetooth 5.0"],
  camera: {
    front: "720p FaceTime HD camera",
    back: null
  },
  audio: {
    microphone: "Three-mic array with directional beamforming",
    speakers: "Stereo speakers"
  },
  size: {
    height: "1.61",
    // cm
    width: "30.41",
    // cm
    depth: "21.24",
    // cm
    weight: "1.29" // Кг

  },
  os: "macOS",
  InTheBox: ["MacBook Air", "30W USB-C Power Adapter", "USB-C Charge Cable (2 m)"],
  orderInfo: {
    inStock: 435,
    // кол-во едениц товара в наличии
    reviews: 77,
    // процент положительных отзывов
    orders: 527 // количество заказов

  }
}, {
  id: 2,
  category: "mac",
  imgUrl: "items/macbook-air.png",
  name: "MacBook Air",
  display: 13.3,
  // дюймы
  color: ["Gold", "Silver", "Space Grey"],
  price: 1249,
  // доллары
  chip: {
    name: "M1",
    cores: 8
  },
  ram: 16,
  // Гб
  storage: 512,
  // Гб
  touchId: true,
  faceId: false,
  wireless: ["Wi-Fi", "Bluetooth 5.0"],
  camera: {
    front: "720p FaceTime HD camera",
    back: null
  },
  audio: {
    microphone: "Three-mic array with directional beamforming",
    speakers: "Stereo speakers"
  },
  size: {
    height: "1.61",
    // cm
    width: "30.41",
    // cm
    depth: "21.24",
    // cm
    weight: "1.29" // Кг

  },
  os: "macOS",
  InTheBox: ["MacBook Air", "30W USB-C Power Adapter", "USB-C Charge Cable (2 m)"],
  orderInfo: {
    inStock: 0,
    // кол-во едениц товара в наличии
    reviews: 84,
    // процент положительных отзывов
    orders: 292 // количество заказов

  }
}, {
  id: 3,
  category: "mac",
  imgUrl: "items/macbook-pro13.png",
  name: "MacBook Pro 13",
  display: 13.3,
  // дюймы
  color: ["Silver", "Space Grey"],
  price: 1299,
  // доллары
  chip: {
    name: "Intel Core i5",
    cores: 8
  },
  ram: 8,
  // Гб
  storage: 512,
  // Гб
  touchId: true,
  faceId: false,
  wireless: ["Wi-Fi", "Bluetooth 5.0"],
  camera: {
    front: "720p FaceTime HD camera",
    back: null
  },
  audio: {
    microphone: "Studio-quality three-mic array with high signal-to-noise ratio and directional‑beamforming",
    speakers: "Stereo speakers"
  },
  size: {
    height: "1.56",
    // cm
    width: "30.41",
    // cm
    depth: "21.24",
    // cm
    weight: "1.4" // Кг

  },
  os: "macOS",
  InTheBox: ["MacBook pro 13", "61W USB-C Power Adapter", "USB-C Charge Cable (2 m)"],
  orderInfo: {
    inStock: 25,
    // кол-во едениц товара в наличии
    reviews: 85,
    // процент положительных отзывов
    orders: 392 // количество заказов

  }
}, {
  id: 4,
  category: "mac",
  imgUrl: "items/macbook-pro13.png",
  name: "MacBook Pro 13",
  display: 13.3,
  // дюймы
  color: ["Silver", "Space Grey"],
  price: 1499,
  // доллары
  chip: {
    name: "M1",
    cores: 8
  },
  ram: 16,
  // Гб
  storage: 1024,
  // TB
  touchId: true,
  faceId: false,
  wireless: ["Wi-Fi", "Bluetooth 5.0"],
  camera: {
    front: "720p FaceTime HD camera",
    back: null
  },
  audio: {
    microphone: "Studio-quality three-mic array with high signal-to-noise ratio and directional‑beamforming",
    speakers: "Stereo speakers"
  },
  size: {
    height: "1.56",
    // cm
    width: "30.41",
    // cm
    depth: "21.24",
    // cm
    weight: "1.4" // Кг

  },
  os: "macOS",
  InTheBox: ["MacBook pro 13", "61W USB-C Power Adapter", "USB-C Charge Cable (2 m)"],
  orderInfo: {
    inStock: 256,
    // кол-во едениц товара в наличии
    reviews: 80,
    // процент положительных отзывов
    orders: 498 // количество заказов

  }
}, {
  id: 5,
  category: "mac",
  imgUrl: "items/macbook-pro16.png",
  name: "MacBook Pro 16",
  display: 16,
  // дюймы
  color: ["Silver", "Space Grey"],
  price: 2399,
  // доллары
  chip: {
    name: " Intel Core i7",
    cores: 6
  },
  ram: 16,
  // Гб
  storage: 1024,
  // TB
  touchId: true,
  faceId: false,
  wireless: ["Wi-Fi", "Bluetooth 5.0"],
  camera: {
    front: "720p FaceTime HD camera",
    back: null
  },
  audio: {
    microphone: "Studio‑quality three-mic array with high signal-to-noise ratio and directional beamforming",
    speakers: "Stereo speakers"
  },
  size: {
    height: "1.62",
    // cm
    width: "35.79",
    // cm
    depth: "24.59",
    // cm
    weight: "2" // Кг

  },
  os: "macOS",
  InTheBox: ["MacBook pro 16", "96W USB-C Power Adapter", "USB-C Charge Cable (2 m)"],
  orderInfo: {
    inStock: 124,
    // кол-во едениц товара в наличии
    reviews: 91,
    // процент положительных отзывов
    orders: 139 // количество заказов

  }
}, {
  id: 6,
  category: "mac",
  imgUrl: "items/macbook-pro16.png",
  name: "MacBook Pro 16",
  display: 16,
  // дюймы
  color: ["Silver", "Space Grey"],
  price: 2799,
  // доллары
  chip: {
    name: " Intel Core i9",
    cores: 8
  },
  ram: 32,
  // Гб
  storage: 2048,
  // TB
  touchId: true,
  faceId: false,
  wireless: ["Wi-Fi", "Bluetooth 5.0"],
  camera: {
    front: "720p FaceTime HD camera",
    back: null
  },
  audio: {
    microphone: "Studio‑quality three-mic array with high signal-to-noise ratio and directional beamforming",
    speakers: "Stereo speakers"
  },
  size: {
    height: "1.62",
    // cm
    width: "35.79",
    // cm
    depth: "24.59",
    // cm
    weight: "2" // Кг

  },
  os: "macOS",
  InTheBox: ["MacBook pro 16", "96W USB-C Power Adapter", "USB-C Charge Cable (2 m)"],
  orderInfo: {
    inStock: 69,
    // кол-во едениц товара в наличии
    reviews: 90,
    // процент положительных отзывов
    orders: 189 // количество заказов

  }
}, {
  id: 7,
  category: "mac",
  imgUrl: "items/imac.png",
  name: "IMac",
  display: 21.5,
  // дюймы
  color: ["Space Grey"],
  price: 1099,
  // доллары
  chip: {
    name: "Intel Core i5,",
    cores: "6" //dual‑core

  },
  ram: 8,
  // Гб
  storage: 256,
  touchId: false,
  faceId: false,
  wireless: ["Wi-Fi", "Bluetooth 4.2 "],
  camera: {
    front: "720p FaceTime HD camera",
    back: null
  },
  audio: {
    microphone: "Microphone",
    speakers: "Stereo speakers"
  },
  size: {
    height: "45",
    // cm
    width: "52.8",
    // cm
    depth: "17.5",
    // cm
    weight: "5.44" // Кг

  },
  os: "macOS",
  InTheBox: ["iMac ", "Magic Keyboard", "Magic Mouse 2", "Power cord", "Lightning to USB Cable", "Polishing cloth"],
  orderInfo: {
    inStock: 742,
    // кол-во едениц товара в наличии
    reviews: 75,
    // процент положительных отзывов
    orders: 256 // количество заказов

  }
}, {
  id: 8,
  category: "mac",
  imgUrl: "items/imac.png",
  name: "IMac",
  display: 27,
  // дюймы
  color: ["Space Grey"],
  price: 1799,
  // доллары
  chip: {
    name: "Intel Core i5,",
    cores: "6" //dual‑core

  },
  ram: 8,
  // Гб
  storage: 256,
  touchId: false,
  faceId: false,
  wireless: ["Wi-Fi", "Bluetooth 5.0 "],
  camera: {
    front: "720p FaceTime HD camera",
    back: null
  },
  audio: {
    microphone: "Microphone",
    speakers: "Stereo speakers"
  },
  size: {
    height: "51.6",
    // cm
    width: "65",
    // cm
    depth: "20.3",
    // cm
    weight: "8.92" // Кг

  },
  os: "macOS",
  InTheBox: ["iMac with Retina 5K display ", "Magic Keyboard", "Magic Mouse 2", "Power cord", "Lightning to USB Cable", "Polishing cloth"],
  orderInfo: {
    inStock: 0,
    // кол-во едениц товара в наличии
    reviews: 99,
    // процент положительных отзывов
    orders: 578 // количество заказов

  }
}, {
  id: 9,
  category: "mac",
  imgUrl: "items/mac_pro.png",
  name: "Mac Pro",
  display: null,
  // дюймы
  color: ["Space Grey"],
  price: 2499,
  // доллары
  chip: {
    name: "Intel Xeon W",
    cores: "16" //dual‑core

  },
  ram: 64,
  // Гб
  storage: 1024,
  //
  touchId: false,
  faceId: false,
  wireless: ["Wi-Fi", "Bluetooth 5.0 "],
  camera: {
    front: null,
    back: null
  },
  audio: {
    microphone: "Microphone",
    speakers: "Stereo speakers"
  },
  size: {
    height: "50",
    // cm
    width: "30",
    // cm
    depth: "60",
    // cm
    weight: "18" // Кг

  },
  os: "macOS",
  InTheBox: ["Mac Pro", "Magic Keyboard with Numeric Keypad", "Magic Mouse 2", "USB-C to Lightning Cable (1 m)", "Power cord (2 m)"],
  orderInfo: {
    inStock: 587,
    // кол-во едениц товара в наличии
    reviews: 56,
    // процент положительных отзывов
    orders: 485 // количество заказов

  }
}, {
  id: 10,
  category: "ipad",
  imgUrl: "items/ipad-pro.jpeg",
  name: "IPad Pro ",
  display: 11,
  // дюймы
  color: ["Silver", "Space Grey"],
  price: 750,
  // доллары
  chip: {
    name: "A12Z Bionic",
    cores: null
  },
  ram: null,
  // Гб
  storage: 128,
  // TB
  touchId: false,
  faceId: true,
  wireless: ["Wi-Fi", "Bluetooth 5.0"],
  camera: {
    front: "720p FaceTime HD camera",
    back: "Ultra Wide: 10MP"
  },
  audio: {
    microphone: "Studio‑quality three-mic array with high signal-to-noise ratio and directional beamforming",
    speakers: "Stereo speakers"
  },
  size: {
    height: "24.7",
    // cm
    width: "17.8",
    // cm
    depth: "0.6",
    // cm
    weight: "0.470" // Кг

  },
  os: "macOS",
  InTheBox: ["iPad Pro", "USB-C Charge Cable (1 meter)", "18W USB-C Power Adapter"],
  orderInfo: {
    inStock: 32,
    // кол-во едениц товара в наличии
    reviews: 99,
    // процент положительных отзывов
    orders: 379 // количество заказов

  }
}, {
  id: 34,
  category: "ipad",
  imgUrl: "items/ipad-air.png",
  name: "IPad Air",
  display: 10.9,
  // дюймы
  color: ["Silver", "Space Grey", "Rose Gold", "Green", "Sky Blue"],
  price: 549,
  // доллары
  chip: {
    name: "A14 Bionic ",
    cores: null
  },
  ram: null,
  // Гб
  storage: 64,
  // TB
  touchId: true,
  faceId: false,
  wireless: ["Wi-Fi", "Bluetooth 5.0"],
  camera: {
    front: "720p FaceTime HD camera",
    back: "Ultra Wide: 10MP"
  },
  audio: {
    microphone: "Dual microphones for calls, video recording, and audio recording",
    speakers: "Stereo speakers"
  },
  size: {
    height: "24.7",
    // cm
    width: "17.8",
    // cm
    depth: "0.6",
    // cm
    weight: "0.458" // Кг

  },
  os: "macOS",
  InTheBox: ["iPad Air", "USB-C Charge Cable (1 meter)", "20W USB-C Power Adapter"],
  orderInfo: {
    inStock: 97,
    // кол-во едениц товара в наличии
    reviews: 97,
    // процент положительных отзывов
    orders: 415 // количество заказов

  }
}, {
  id: 11,
  category: "ipad",
  imgUrl: "items/ipad.png",
  name: "IPad",
  display: 10.2,
  // дюймы
  color: ["Silver", "Space Grey", "Gold"],
  price: 309,
  // доллары
  chip: {
    name: "A12 Bionic  ",
    cores: null
  },
  ram: null,
  // Гб
  storage: 32,
  // TB
  touchId: true,
  faceId: false,
  wireless: ["Wi-Fi", "Bluetooth 5.0"],
  camera: {
    front: "720p FaceTime HD camera",
    back: "Ultra Wide: 10MP"
  },
  audio: {
    microphone: "Dual microphones for calls, video recording, and audio recording",
    speakers: "Stereo speakers"
  },
  size: {
    height: "25.7",
    // cm
    width: "17.4",
    // cm
    depth: "0.6",
    // cm
    weight: "0.490" // Кг

  },
  os: "macOS",
  InTheBox: ["iPad", "USB-C Power Adapter", "Lightning to USB-C Cable"],
  orderInfo: {
    inStock: 90,
    // кол-во едениц товара в наличии
    reviews: 0,
    // процент положительных отзывов
    orders: 468 // количество заказов

  }
}, {
  id: 12,
  category: "ipad",
  imgUrl: "items/ipad-mini.png",
  name: "IPad mini",
  display: 7.9,
  // дюймы
  color: ["Silver", "Space Grey", "Gold"],
  price: 309,
  // доллары
  chip: {
    name: "A12 Bionic  ",
    cores: null
  },
  ram: null,
  // Гб
  storage: 64,
  // TB
  touchId: true,
  faceId: false,
  wireless: ["Wi-Fi", "Bluetooth 5.0"],
  camera: {
    front: "720p FaceTime HD camera",
    back: "Ultra Wide: 10MP"
  },
  audio: {
    microphone: "Dual microphones for calls, video recording, and audio recording",
    speakers: "Stereo speakers"
  },
  size: {
    height: "20.3",
    // cm
    width: "13.4",
    // cm
    depth: "0.6",
    // cm
    weight: "0.300" // Кг

  },
  os: "macOS",
  InTheBox: ["iPad mini", "USB-C Power Adapter", "Lightning to USB-C Cable"],
  orderInfo: {
    inStock: 77,
    // кол-во едениц товара в наличии
    reviews: 85,
    // процент положительных отзывов
    orders: 142 // количество заказов

  }
}, {
  id: 13,
  category: "Watch",
  imgUrl: "items/apple-watch-series-6.png",
  name: "Apple Watch Series 6",
  display: 1.73228,
  // дюймы
  color: ["Silver", "Space Grey", "Gold", "Blue", "Graphite"],
  price: 399,
  // доллары
  chip: {
    name: "S6 SiP   ",
    cores: null
  },
  ram: null,
  // Гб
  storage: 32,
  // TB
  touchId: false,
  faceId: false,
  wireless: ["Wi-Fi", "Bluetooth 5.0"],
  camera: {
    front: null,
    back: null
  },
  audio: {
    microphone: "Dual microphones for calls, video recording, and audio recording",
    speakers: "Stereo speakers"
  },
  size: {
    height: "4,4",
    // cm
    width: "3.8",
    // cm
    depth: "0.6",
    // cm
    weight: "1.07" // Кг

  },
  os: "macOS",
  InTheBox: ["Case", "Solo Loop", "1m Magnetic Charging Cable"],
  orderInfo: {
    inStock: 90,
    // кол-во едениц товара в наличии
    reviews: 458,
    // процент положительных отзывов
    orders: 521 // количество заказов

  }
}, {
  id: 14,
  category: "Watch",
  imgUrl: "items/apple-watch-se.jpg",
  name: "Apple Watch Series SE",
  display: 1.73228,
  // дюймы
  color: ["Silver", "Space Grey", "Gold", "Blue", "Graphite"],
  price: 309,
  // доллары
  chip: {
    name: "S5 SiP   ",
    cores: null
  },
  ram: null,
  // Гб
  storage: 22.1654,
  // TB
  touchId: false,
  faceId: false,
  wireless: ["Wi-Fi", "Bluetooth 5.0"],
  camera: {
    front: null,
    back: null
  },
  audio: {
    microphone: "Dual microphones for calls, video recording, and audio recording",
    speakers: "Stereo speakers"
  },
  size: {
    height: "4,4",
    // cm
    width: "3.8",
    // cm
    depth: "0.6",
    // cm
    weight: "1.07" // Кг

  },
  os: "macOS",
  InTheBox: ["Case", "Band (can be configured for either S/M or M/L length)", "1m Magnetic Charging Cable"],
  orderInfo: {
    inStock: 79,
    // кол-во едениц товара в наличии
    reviews: 69,
    // процент положительных отзывов
    orders: 398 // количество заказов

  }
}, {
  id: 15,
  category: "Watch",
  imgUrl: "items/apple-watch3.jpg",
  name: "Apple Watch Series 3",
  display: 22.1654,
  // дюймы
  color: ["Silver", "Space Grey", "Gold", "Blue", "Graphite"],
  price: 309,
  // доллары
  chip: {
    name: "S5 SiP   ",
    cores: null
  },
  ram: null,
  // Гб
  storage: 8,
  // TB
  touchId: false,
  faceId: false,
  wireless: ["Wi-Fi", "Bluetooth 5.0"],
  camera: {
    front: null,
    back: null
  },
  audio: {
    microphone: "Dual microphones for calls, video recording, and audio recording",
    speakers: "Stereo speakers"
  },
  size: {
    height: "4,2",
    // cm
    width: "3.3",
    // cm
    depth: "0.6",
    // cm
    weight: "1.07" // Кг

  },
  os: "macOS",
  InTheBox: ["Case", "Band (can be configured for either S/M or M/L length)", "1m Magnetic Charging Cable"],
  orderInfo: {
    inStock: 47,
    // кол-во едениц товара в наличии
    reviews: 93,
    // процент положительных отзывов
    orders: 372 // количество заказов

  }
}, {
  id: 16,
  category: "iphone",
  imgUrl: "items/iphone_12.jpg",
  name: "IPhone 12",
  display: 6.1,
  // дюймы
  color: ["Black", "White", "Green", "Blue", "Red"],
  price: 799,
  // доллары
  chip: {
    name: "A14",
    cores: null
  },
  ram: null,
  // Гб
  storage: 128,
  // Гб
  touchId: false,
  faceId: true,
  wireless: ["Wi-Fi", "Bluetooth 5.0", "5G GSM/EDGE"],
  camera: {
    front: "720p FaceTime HD camera",
    back: "Dual 12MP camera system"
  },
  audio: {
    microphone: "Three-mic array with directional beamforming",
    speakers: "Stereo speakers"
  },
  size: {
    height: "14.6",
    // cm
    width: "7.1",
    // cm
    depth: "0.7",
    // cm
    weight: "0.164" // Кг

  },
  os: "IOS",
  InTheBox: ["iPhone with iOS 14", "USB-C to Lightning Cable", "Documentation"],
  orderInfo: {
    inStock: 73,
    // кол-во едениц товара в наличии
    reviews: 12,
    // процент положительных отзывов
    orders: 192 // количество заказов

  }
}, {
  id: 17,
  category: "iphone",
  imgUrl: "items/iphone_12.jpg",
  name: "IPhone 12",
  display: 6.1,
  // дюймы
  color: ["Black", "White", "Green", "Blue", "Red"],
  price: 899,
  // доллары
  chip: {
    name: "A14",
    cores: null
  },
  ram: null,
  // Гб
  storage: 256,
  // Гб
  touchId: false,
  faceId: true,
  wireless: ["Wi-Fi", "Bluetooth 5.0", "5G GSM/EDGE"],
  camera: {
    front: "720p FaceTime HD camera",
    back: "Dual 12MP camera system"
  },
  audio: {
    microphone: "Three-mic array with directional beamforming",
    speakers: "Stereo speakers"
  },
  size: {
    height: "14.6",
    // cm
    width: "7.1",
    // cm
    depth: "0.7",
    // cm
    weight: "0.164" // Кг

  },
  os: "IOS",
  InTheBox: ["iPhone with iOS 14", "USB-C to Lightning Cable", "Documentation"],
  orderInfo: {
    inStock: 0,
    // кол-во едениц товара в наличии
    reviews: 73,
    // процент положительных отзывов
    orders: 233 // количество заказов

  }
}, {
  id: 18,
  category: "iphone",
  imgUrl: "items/iphone_12.jpg",
  name: "IPhone 12 Mini",
  display: 5.4,
  // дюймы
  color: ["Black", "White", "Green", "Blue", "Red"],
  price: 669,
  // доллары
  chip: {
    name: "A14",
    cores: null
  },
  ram: null,
  // Гб
  storage: 128,
  // Гб
  touchId: false,
  faceId: true,
  wireless: ["Wi-Fi", "Bluetooth 5.0", "5G GSM/EDGE"],
  camera: {
    front: "720p FaceTime HD camera",
    back: "Dual 12MP camera system"
  },
  audio: {
    microphone: "Three-mic array with directional beamforming",
    speakers: "Stereo speakers"
  },
  size: {
    height: "13.1",
    // cm
    width: "6.41",
    // cm
    depth: "0.7",
    // cm
    weight: "0.135" // Кг

  },
  os: "IOS",
  InTheBox: ["iPhone with iOS 14", "USB-C to Lightning Cable", "Documentation"],
  orderInfo: {
    inStock: 43,
    // кол-во едениц товара в наличии
    reviews: 100,
    // процент положительных отзывов
    orders: 267 // количество заказов

  }
}, {
  id: 19,
  category: "iphone",
  imgUrl: "items/iphone-12-pro.jpeg",
  name: "IPhone 12 Pro",
  display: 6.1,
  // дюймы
  color: ["Silver", "Graphite", "Gold", "Pacific Blue"],
  price: 999,
  // доллары
  chip: {
    name: "A14",
    cores: null
  },
  ram: null,
  // Гб
  storage: 256,
  // Гб
  touchId: false,
  faceId: true,
  wireless: ["Wi-Fi", "Bluetooth 5.0", "5G GSM/EDGE"],
  camera: {
    front: "720p FaceTime HD camera",
    back: "Pro 12MP camera system"
  },
  audio: {
    microphone: "Three-mic array with directional beamforming",
    speakers: "Stereo speakers"
  },
  size: {
    height: "14.6",
    // cm
    width: "7.1",
    // cm
    depth: "0.7",
    // cm
    weight: "0.164" // Кг

  },
  os: "IOS",
  InTheBox: ["iPhone with iOS 14", "USB-C to Lightning Cable", "Documentation"],
  orderInfo: {
    inStock: 84,
    // кол-во едениц товара в наличии
    reviews: 99,
    // процент положительных отзывов
    orders: 401 // количество заказов

  }
}, {
  id: 20,
  category: "iphone",
  imgUrl: "items/iphone-12-pro.jpeg",
  name: "IPhone 12 Pro",
  display: 6.1,
  // дюймы
  color: ["Silver", "Graphite", "Gold", "Pacific Blue"],
  price: 1099,
  // доллары
  chip: {
    name: "A14",
    cores: null
  },
  ram: null,
  // Гб
  storage: 512,
  // Гб
  touchId: false,
  faceId: true,
  wireless: ["Wi-Fi", "Bluetooth 5.0", "5G GSM/EDGE"],
  camera: {
    front: "720p FaceTime HD camera",
    back: "Pro 12MP camera system"
  },
  audio: {
    microphone: "Three-mic array with directional beamforming",
    speakers: "Stereo speakers"
  },
  size: {
    height: "14.6",
    // cm
    width: "7.1",
    // cm
    depth: "0.7",
    // cm
    weight: "0.164" // Кг

  },
  os: "IOS",
  InTheBox: ["iPhone with iOS 14", "USB-C to Lightning Cable", "Documentation"],
  orderInfo: {
    inStock: 2,
    // кол-во едениц товара в наличии
    reviews: 99,
    // процент положительных отзывов
    orders: 315 // количество заказов

  }
}, {
  id: 21,
  category: "iphone",
  imgUrl: "items/iphone-12-pro.jpeg",
  name: "IPhone 12 Pro Max",
  display: 6.7,
  // дюймы
  color: ["Silver", "Graphite", "Gold", "Pacific Blue"],
  price: 1099,
  // доллары
  chip: {
    name: "A14",
    cores: null
  },
  ram: null,
  // Гб
  storage: 256,
  // Гб
  touchId: false,
  faceId: true,
  wireless: ["Wi-Fi", "Bluetooth 5.0", "5G GSM/EDGE"],
  camera: {
    front: "720p FaceTime HD camera",
    back: "Pro 12MP camera system"
  },
  audio: {
    microphone: "Three-mic array with directional beamforming",
    speakers: "Stereo speakers"
  },
  size: {
    height: "16.0",
    // cm
    width: "7.8",
    // cm
    depth: "0.7",
    // cm
    weight: "0.228" // Кг

  },
  os: "IOS",
  InTheBox: ["iPhone with iOS 14", "USB-C to Lightning Cable", "Documentation"],
  orderInfo: {
    inStock: 5,
    // кол-во едениц товара в наличии
    reviews: 100,
    // процент положительных отзывов
    orders: 375 // количество заказов

  }
}, {
  id: 22,
  category: "iphone",
  imgUrl: "items/iphone-se.jpeg",
  name: "IPhone SE",
  display: 4.7,
  // дюймы
  color: ["Black", "White", "Red"],
  price: 1099,
  // доллары
  chip: {
    name: "A13",
    cores: null
  },
  ram: null,
  // Гб
  storage: 128,
  // Гб
  touchId: false,
  faceId: true,
  wireless: ["Wi-Fi", "Bluetooth 5.0", "5G GSM/EDGE"],
  camera: {
    front: "720p FaceTime HD camera",
    back: "12MP Wide camera"
  },
  audio: {
    microphone: "Three-mic array with directional beamforming",
    speakers: "Stereo speakers"
  },
  size: {
    height: "13.8",
    // cm
    width: "7.7",
    // cm
    depth: "0.7",
    // cm
    weight: "0.148" // Кг

  },
  os: "IOS",
  InTheBox: ["iPhone with iOS 14", "USB-C to Lightning Cable", "Documentation"],
  orderInfo: {
    inStock: 81,
    // кол-во едениц товара в наличии
    reviews: 73,
    // процент положительных отзывов
    orders: 515 // количество заказов

  }
}, {
  id: 23,
  category: "iphone",
  imgUrl: "items/iphone11.jpeg",
  name: "IPhone 11",
  display: 6.1,
  // дюймы
  color: ["Black", "Green", "Yellow", "Purple", "White", "Red"],
  price: 899,
  // доллары
  chip: {
    name: "A13",
    cores: null
  },
  ram: null,
  // Гб
  storage: 256,
  // Гб
  touchId: false,
  faceId: true,
  wireless: ["Wi-Fi", "Bluetooth 5.0", "5G GSM/EDGE"],
  camera: {
    front: "720p FaceTime HD camera",
    back: "Dual 12MP Ultra Wide and Wide cameras"
  },
  audio: {
    microphone: "Three-mic array with directional beamforming",
    speakers: "Stereo speakers"
  },
  size: {
    height: "15.0",
    // cm
    width: "7.5",
    // cm
    depth: "0.8",
    // cm
    weight: "0.194" // Кг

  },
  os: "IOS",
  InTheBox: ["iPhone with iOS 14", "USB-C to Lightning Cable", "Documentation"],
  orderInfo: {
    inStock: 98,
    // кол-во едениц товара в наличии
    reviews: 100,
    // процент положительных отзывов
    orders: 632 // количество заказов

  }
}, {
  id: 24,
  category: "iphone",
  imgUrl: "items/iphone11.jpeg",
  name: "IPhone 11",
  display: 6.1,
  // дюймы
  color: ["Black", "Green", "Yellow", "Purple", "White", "Red"],
  price: 999,
  // доллары
  chip: {
    name: "A13",
    cores: null
  },
  ram: null,
  // Гб
  storage: 512,
  // Гб
  touchId: false,
  faceId: true,
  wireless: ["Wi-Fi", "Bluetooth 5.0", "5G GSM/EDGE"],
  camera: {
    front: "720p FaceTime HD camera",
    back: "Triple 12MP Ultra Wide and Wide cameras"
  },
  audio: {
    microphone: "Three-mic array with directional beamforming",
    speakers: "Stereo speakers"
  },
  size: {
    height: "15.0",
    // cm
    width: "7.5",
    // cm
    depth: "0.8",
    // cm
    weight: "0.194" // Кг

  },
  os: "IOS",
  InTheBox: ["iPhone with iOS 14", "USB-C to Lightning Cable", "Documentation"],
  orderInfo: {
    inStock: 115,
    // кол-во едениц товара в наличии
    reviews: 100,
    // процент положительных отзывов
    orders: 89 // количество заказов

  }
}, {
  id: 25,
  category: "iphone",
  imgUrl: "items/iphone11.jpeg",
  name: "IPhone 11",
  display: 6.1,
  // дюймы
  color: ["Black", "Green", "Yellow", "Purple", "White", "Red"],
  price: 899,
  // доллары
  chip: {
    name: "A13",
    cores: null
  },
  ram: null,
  // Гб
  storage: 256,
  // Гб
  touchId: false,
  faceId: true,
  wireless: ["Wi-Fi", "Bluetooth 5.0", "5G GSM/EDGE"],
  camera: {
    front: "720p FaceTime HD camera",
    back: "Triple 12MP Ultra Wide and Wide cameras"
  },
  audio: {
    microphone: "Three-mic array with directional beamforming",
    speakers: "Stereo speakers"
  },
  size: {
    height: "15.0",
    // cm
    width: "7.5",
    // cm
    depth: "0.8",
    // cm
    weight: "0.194" // Кг

  },
  os: "IOS",
  InTheBox: ["iPhone with iOS 14", "USB-C to Lightning Cable", "Documentation"],
  orderInfo: {
    inStock: 0,
    // кол-во едениц товара в наличии
    reviews: 100,
    // процент положительных отзывов
    orders: 187 // количество заказов

  }
}, {
  id: 26,
  category: "iphone",
  imgUrl: "items/iphone-xr.jpg",
  name: "IPhone XR",
  display: 6.1,
  // дюймы
  color: ["Black", "Coral", "Yellow", "Blue", "White", "Red"],
  price: 699,
  // доллары
  chip: {
    name: "A12",
    cores: null
  },
  ram: null,
  // Гб
  storage: 64,
  // Гб
  touchId: false,
  faceId: true,
  wireless: ["Wi-Fi", "Bluetooth 5.0", "FDD‑LTE GSM/EDGE"],
  camera: {
    front: "720p FaceTime HD camera",
    back: "12MP Wide camera"
  },
  audio: {
    microphone: "Three-mic array with directional beamforming",
    speakers: "Stereo speakers"
  },
  size: {
    height: "15.0",
    // cm
    width: "7.5",
    // cm
    depth: "0.8",
    // cm
    weight: "0.194" // Кг

  },
  os: "IOS",
  InTheBox: ["iPhone with iOS 14", "USB-C to Lightning Cable", "Documentation"],
  orderInfo: {
    inStock: 23,
    // кол-во едениц товара в наличии
    reviews: 86,
    // процент положительных отзывов
    orders: 365 // количество заказов

  }
}, {
  id: 27,
  category: "iphone",
  imgUrl: "items/iphone-xs.jpg",
  name: "IPhone XS",
  display: 5.8,
  // дюймы
  color: ["White", "Rose Gold", "Space Grey"],
  price: 699,
  // доллары
  chip: {
    name: "A12",
    cores: null
  },
  ram: null,
  // Гб
  storage: 128,
  // Гб
  touchId: false,
  faceId: true,
  wireless: ["Wi-Fi", "Bluetooth 5.0", "FDD‑LTE GSM/EDGE"],
  camera: {
    front: "720p FaceTime HD camera",
    back: "12MP Wide camera"
  },
  audio: {
    microphone: "Three-mic array with directional beamforming",
    speakers: "Stereo speakers"
  },
  size: {
    height: "14.3",
    // cm
    width: "7.0",
    // cm
    depth: "0.7",
    // cm
    weight: "0.177" // Кг

  },
  os: "IOS",
  InTheBox: ["iPhone with iOS 12", "USB-A to Lightning Cable", "Documentation"],
  orderInfo: {
    inStock: 34,
    // кол-во едениц товара в наличии
    reviews: 94,
    // процент положительных отзывов
    orders: 476 // количество заказов

  }
}, {
  id: 28,
  category: "iphone",
  imgUrl: "items/iphone-xs.jpg",
  name: "IPhone XS",
  display: 5.8,
  // дюймы
  color: ["White", "Rose Gold", "Space Grey"],
  price: 799,
  // доллары
  chip: {
    name: "A12",
    cores: null
  },
  ram: null,
  // Гб
  storage: 256,
  // Гб
  touchId: false,
  faceId: true,
  wireless: ["Wi-Fi", "Bluetooth 5.0", "FDD‑LTE GSM/EDGE"],
  camera: {
    front: "720p FaceTime HD camera",
    back: "12MP Wide camera"
  },
  audio: {
    microphone: "Three-mic array with directional beamforming",
    speakers: "Stereo speakers"
  },
  size: {
    height: "14.3",
    // cm
    width: "7.0",
    // cm
    depth: "0.7",
    // cm
    weight: "0.177" // Кг

  },
  os: "IOS",
  InTheBox: ["iPhone with iOS 12", "USB-A to Lightning Cable", "Documentation"],
  orderInfo: {
    inStock: 0,
    // кол-во едениц товара в наличии
    reviews: 94,
    // процент положительных отзывов
    orders: 448 // количество заказов

  }
}, {
  id: 29,
  category: "tv",
  imgUrl: "items/apple-tv.jpeg",
  name: "Apple TV 4K",
  display: null,
  // дюймы
  color: ["Black"],
  price: 179,
  // доллары
  chip: {
    name: "A10X",
    cores: null
  },
  ram: null,
  // Гб
  storage: 32,
  // Гб
  touchId: false,
  faceId: false,
  wireless: ["Wi-Fi", "Bluetooth 5.0"],
  camera: null,
  audio: null,
  size: {
    height: "3.5",
    // cm
    width: "9.8",
    // cm
    depth: "3.5",
    // cm
    weight: "0.425" // Кг

  },
  os: "tvOS",
  InTheBox: ["Apple TV 4K", "Siri Remote", "Power cord", "Lightning to USB cable", "Documentation"],
  orderInfo: {
    inStock: 2,
    // кол-во едениц товара в наличии
    reviews: 99,
    // процент положительных отзывов
    orders: 287 // количество заказов

  }
}, {
  id: 30,
  category: "tv",
  imgUrl: "items/apple-tv.jpeg",
  name: "Apple TV 4K",
  display: null,
  // дюймы
  color: ["Black"],
  price: 199,
  // доллары
  chip: {
    name: "A10X",
    cores: null
  },
  ram: null,
  // Гб
  storage: 64,
  // Гб
  touchId: false,
  faceId: false,
  wireless: ["Wi-Fi", "Bluetooth 5.0"],
  camera: null,
  audio: null,
  size: {
    height: "3.5",
    // cm
    width: "9.8",
    // cm
    depth: "3.5",
    // cm
    weight: "0.425" // Кг

  },
  os: "tvOS",
  InTheBox: ["Apple TV 4K", "Siri Remote", "Power cord", "Lightning to USB cable", "Documentation"],
  orderInfo: {
    inStock: 1,
    // кол-во едениц товара в наличии
    reviews: 100,
    // процент положительных отзывов
    orders: 403 // количество заказов

  }
}, {
  id: 31,
  category: "airpods",
  imgUrl: "items/airpods.jpg",
  name: "AirPods",
  display: null,
  // дюймы
  color: ["White"],
  price: 199,
  // доллары
  chip: {
    name: "H!",
    cores: null
  },
  ram: null,
  // Гб
  storage: null,
  // Гб
  touchId: false,
  faceId: false,
  wireless: ["Bluetooth 5.0"],
  camera: null,
  audio: {
    microphone: "Three-mic array with directional beamforming",
    speakers: "Stereo speakers"
  },
  size: {
    height: "5.3",
    // cm
    width: "4.4",
    // cm
    depth: "0.2",
    // cm
    weight: "0.04" // Кг

  },
  os: null,
  InTheBox: ["AirPods", "Wireless Charging Case", "Lightning to USB-A Cable", "Documentation"],
  orderInfo: {
    inStock: 23,
    // кол-во едениц товара в наличии
    reviews: 100,
    // процент положительных отзывов
    orders: 336 // количество заказов

  }
}, {
  id: 32,
  category: "airpods",
  imgUrl: "items/airpods_pro.jpg",
  name: "AirPods Pro",
  display: null,
  // дюймы
  color: ["White"],
  price: 299,
  // доллары
  chip: {
    name: "H!",
    cores: null
  },
  ram: null,
  // Гб
  storage: null,
  // Гб
  touchId: false,
  faceId: false,
  wireless: ["Bluetooth 5.0"],
  camera: null,
  audio: {
    microphone: "Three-mic array with directional beamforming",
    speakers: "Stereo speakers"
  },
  size: {
    height: "4.5",
    // cm
    width: "6.0",
    // cm
    depth: "0.21",
    // cm
    weight: "0.04" // Кг

  },
  os: null,
  InTheBox: ["AirPods Pro", "Wireless Charging Case", "Lightning to USB-C Cable", "Documentation", "Silicone ear tips (three sizes)"],
  orderInfo: {
    inStock: 29,
    // кол-во едениц товара в наличии
    reviews: 94,
    // процент положительных отзывов
    orders: 165 // количество заказов

  }
}, {
  id: 33,
  category: "airpods",
  imgUrl: "items/airpods-max.jpg",
  name: "AirPods Max",
  display: null,
  // дюймы
  color: ["White"],
  price: 599,
  // доллары
  chip: {
    name: "H!",
    cores: null
  },
  ram: null,
  // Гб
  storage: null,
  // Гб
  touchId: false,
  faceId: false,
  wireless: ["Bluetooth 5.0"],
  camera: null,
  audio: {
    microphone: "Three-mic array with directional beamforming",
    speakers: "Stereo speakers"
  },
  size: {
    height: "18.7",
    // cm
    width: "16.8",
    // cm
    depth: "8.3",
    // cm
    weight: "0.38" // Кг

  },
  os: null,
  InTheBox: ["AirPods MAx", "Smart Case", "Lightning to USB-C Cable", "Documentation"],
  orderInfo: {
    inStock: 0,
    // кол-во едениц товара в наличии
    reviews: 5,
    // процент положительных отзывов
    orders: 32 // количество заказов

  }
}];

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDetails": () => (/* binding */ getDetails),
/* harmony export */   "modalSwitcher": () => (/* binding */ modalSwitcher)
/* harmony export */ });
function modalSwitcher() {
  const modalTrigger = document.querySelectorAll('.top-item_img'),
        modal = document.querySelector('.modal'); // const modalTrigger = document.querySelectorAll('[data-modal]'),

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('show');
      modal.classList.remove('hide');
      document.body.style.overflow = 'hidden';
    });
  });
  document.addEventListener('keydown', e => {
    if (e.code === "Escape") {
      closeModal();
    }
  });
  modal.addEventListener('click', e => {
    if (e.target === modal && modal.classList.contains('show')) {
      closeModal();
    }
  });
}

function closeModal() {
  const modal = document.querySelector('.modal');
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

function showDetails(imgUrl, name, reviews, orders, color, os, chip, height, width, depth, weight, price, inStock) {
  return "\n    <div class=\"modal-content fade\">\n      <div class=\"modal-content_left\">\n        <div class=\"modal-content_img\">\n          <img src=\"./img/".concat(imgUrl, "\" alt=\"item img\">\n        </div>\n      </div>\n\n      <div class=\"modal-content_center\">\n        <div class=\"modal-content_descr\">\n          <h2 class=\"descr-title title_fz24\">").concat(name, "</h2>\n          <div class=\"descr-item bottom-item\">\n            <img class=\"descr-item_filledlike bottom-item_filledlike\" loading=\"lazy\"\n              src=\"img/svg/like_filled_red.svg\" alt=\"icon like filled\">\n            <div class=\"descr-item_reviews bottom-item_reviews\">\n              <span class=\"descr-item_percent reviews-percent\"><span>").concat(reviews, "%</span>Positive reviews</span>\n              <span class=\"descr-item_above reviews-above\">Above avarage</span>\n            </div>\n            <div class=\"descr-item_order bottom-item_order\">\n              <span class=\"descr-item_quantity order-quantity\">").concat(orders, "</span>orders\n            </div>\n          </div>\n\n          <ul class=\"descr-list\">\n            <li class=\"descr-list_item\">Color: <span>").concat(color.join(', '), "</span></li>\n            <li class=\"descr-list_item\">Operating System: <span>").concat(os, "</span></li>\n            <li class=\"descr-list_item\">Chip: <span>").concat(chip, "</span></li>\n            <li class=\"descr-list_item\">Height: <span>").concat(height, "</span> cm</li>\n            <li class=\"descr-list_item\">Width: <span>").concat(width, "</span> cm</li>\n            <li class=\"descr-list_item\">Depth: <span>").concat(depth, "</span> cm</li>\n            <li class=\"descr-list_item\">Weight: <span>").concat(weight * 1000, "</span> g</li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"modal-content_right\">\n        <span class=\"modal-content_price price-sum\">$ ").concat(price, "</span>\n        <span class=\"modal-content_quantity status-quantity\">Stock: <span>").concat(inStock, "</span> pcs.</span>\n        <button class=\"modal-content_btn btn\">Add to cart</button>\n      </div>\n    </div>");
}

function generateModal(imgUrl, name, reviews, orders, color, os, chip, height, width, depth, weight, price, inStock) {
  const modal = document.querySelector('.modal-container');
  modal.insertAdjacentHTML('beforeend', showDetails(imgUrl, name, reviews, orders, color, os, chip, height, width, depth, weight, price, inStock));
}

function getDetails(items) {
  items.forEach((el, index) => {
    // if(index !== items[index].imgUrl) {
    generateModal(items[index].imgUrl, items[index].name, items[index].orderInfo.reviews, items[index].orderInfo.orders, items[index].color, items[index].os, items[index].chip.name, items[index].size.height, items[index].size.width, items[index].size.depth, items[index].size.weight, items[index].price, items[index].orderInfo.inStock); // }
  });
}

/***/ }),

/***/ "./src/js/search.js":
/*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startSearch": () => (/* binding */ startSearch)
/* harmony export */ });
let input = document.querySelector('.goods-search_input'),
    searchBtn = document.querySelector('.goods-search_icon'),
    searchItems = document.querySelectorAll('.goods-item');

function searchFunc() {
  input.addEventListener('input', ev => {
    let searchValue = ev.target.value.trim();
    let search = new RegExp(searchValue, '/' + input + '/g');

    if (searchValue.length < 3) {
      searchItems.forEach(el => {
        el.classList.remove('hide');
      });
      return;
    }

    searchItems.forEach(el => {
      const searchCard = el.querySelector('.top_item');
      const cardText = searchCard.textContent;
      const isContainSearch = search.test(cardText);

      if (!isContainSearch) {
        el.classList.add('hide');
      } else {
        el.classList.remove('hide');
      }
    });
  });
}

function startSearch() {
  searchBtn.addEventListener('click', e => {
    searchFunc();
  });
} // let localeHTML;
// export function saveBody() {
//   const localeHtml = document.body.innerHTML;
// }
// function FindOnPageBack() {
//   document.body.innerHTML = localeHTML;
// }
// function findOnPageGo() {
//   let search = '/'+input+'/g';
//   let pr = document.body.innerHTML;
//   let result = pr.match(/>(.*?)</g);
//   let resultArr = [];
//   let warning = true;
//   for(let i = 0; i < result.length; i++) {
//     if(result[i].match(eval(search))!=null) {
//       warning = false;
//     }
//   }
//   if(warning == true) {
//     alert('Не найдено ни одного совпадения');
//   }
//   for(let i=0; i<result.length; i++) {
//     resultArr[i] = result[i].replace(eval(search), console.log(input));
//   }
//   for(let i=0; i<result.length;i++) {
//     pr = pr.replace(result[i],resultArr[i]);
//     console.log(pr);
//   }
//   document.body.innerHTML = pr;
// }
// function searchItems(name, status) {
//   if(input.length < 3 && status == true) {
// 		alert('Для поиска вы должны ввести три или более символов');
// 		FindOnPageBack ();
// 	}
//   if(input.lenght >= 3) {
//     findOnPageGo();
//   }
//   //FindOnPageBack();
//   if(status) {
//     //FindOnPageBack();
//     FindOnPageGo();
//   }
// 	if(!status) {
//     //FindOnPageBack();
//   }
// }
// export function startSearch() {
//   searchBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     searchItems(input);
//   });
// }

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plusSlides": () => (/* binding */ plusSlides),
/* harmony export */   "showSlides": () => (/* binding */ showSlides)
/* harmony export */ });
const slides = document.querySelectorAll(".offer_slide"),
      sliderTitle = document.querySelectorAll(".header-bottom_title"),
      sliderBtn = document.querySelectorAll(".header-bottom_btn"),
      prev = document.querySelector(".offer-slider_prev"),
      next = document.querySelector(".offer-slider_next");
let slideIndex = 1;
function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach(item => item.style.display = 'none');
  slides[slideIndex - 1].style.display = 'block';
  slides[slideIndex - 1].classList.add('fade');

  if (slideIndex == 2 || slideIndex == 3 || slideIndex == 5) {
    sliderTitle[slideIndex - 1].classList.add('title-modify');
  }

  if (slideIndex == 3) {
    sliderTitle[slideIndex - 1].style.top = "25%";
    sliderTitle[slideIndex - 1].style.left = "18%";
    sliderBtn[slideIndex - 1].style.top = "40%";
    sliderBtn[slideIndex - 1].style.left = "18%";
  }

  if (slideIndex == 5) {
    sliderTitle[slideIndex - 1].style.top = "17%";
    sliderBtn[slideIndex - 1].style.top = "45%";
  }

  if (slideIndex == 7) {
    sliderTitle[slideIndex - 1].style.top = "40%";
    sliderTitle[slideIndex - 1].style.left = "30%";
    sliderBtn[slideIndex - 1].style.top = "50%";
    sliderBtn[slideIndex - 1].style.left = "30%";
  }
}
function plusSlides(n) {
  showSlides(slideIndex += n);
}
prev.addEventListener('click', () => {
  plusSlides(-1);
});
next.addEventListener('click', () => {
  plusSlides(+1);
});

/***/ }),

/***/ "./src/js/tabs.js":
/*!************************!*\
  !*** ./src/js/tabs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTab": () => (/* binding */ createTab),
/* harmony export */   "generateTabs": () => (/* binding */ generateTabs),
/* harmony export */   "getTabs": () => (/* binding */ getTabs),
/* harmony export */   "toFavorite": () => (/* binding */ toFavorite)
/* harmony export */ });
function getTabs(url, fn) {
  let data = url;
  data.forEach((el, index) => {
    generateTabs(data[index].imgUrl, data[index].name, data[index].orderInfo.inStock, data[index].price, data[index].orderInfo.reviews, data[index].orderInfo.orders);
  }); // fn();
}
function createTab(imgUrl, name, inStock, price, reviews, orders) {
  return "\n    <div data-modal class=\"goods-item\">\n      <div class=\"top-item\">\n        <img class=\"top-item_like double\" loading=\"lazy\" src=\"img/svg/like_empty.svg\" alt=\"like icon\">\n        <img class=\"top-item_img\" loading=\"lazy\" src=\"./img/".concat(imgUrl, "\" alt=\"item image\">\n        <h2 class=\"top-item_title title title_fz24\">").concat(name, "</h2>\n        <div class=\"top-item_status\">\n          <img class=\"status-img\" src=").concat(inStockSwitcher(inStock), " loading=\"lazy\" alt=\"in stock icon\">\n          <span class=\"status-quantity\">").concat(inStock, "</span>left in stock\n        </div>\n        <div class=\"top-item_price\">\n          <span class =\"price-text\">Price:</span>\n          <span class=\"price-sum\">").concat(price, " $</span>\n        </div>\n        <button class=\"btn top-item_btn\">Add to cart</button>\n      </div>\n      <div class=\"bottom-item\">\n        <img class=\"bottom-item_filledlike\" loading=\"lazy\" src=\"img/svg/like_filled_red.svg\" alt=\"icon like filled\">\n        <div class=\"bottom-item_reviews\">\n          <span class=\"reviews-percent\"><span>").concat(reviews, "%</span>Positive reviews</span>\n          <span class=\"reviews-above\">Above avarage</span>\n        </div>\n        <div class=\"bottom-item_order\">\n          <span class=\"order-quantity\">").concat(orders, "</span>orders\n        </div>\n      </div>\n    </div>");
}
function generateTabs(imgUrl, name, inStock, price, reviews, orders) {
  const store = document.querySelector('.goods-store');
  store.insertAdjacentHTML('beforeend', createTab(imgUrl, name, inStock, price, reviews, orders));
}
function toFavorite() {
  document.querySelectorAll('.top-item_like').forEach(el => {
    el.addEventListener('click', e => {
      if (el.classList.contains('double')) {
        el.src = "img/svg/like_filled.svg";
        el.classList.remove('double');
      } else {
        el.src = "img/svg/like_empty.svg";
        el.classList.add('double');
      }
    });
  });
}

function inStockSwitcher(inStock) {
  if (inStock > 0) {
    return "img/svg/check.svg";
  } else {
    return "img/svg/check_zero.svg";
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _items_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items.js */ "./src/js/items.js");
/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.js */ "./src/js/tabs.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.js */ "./src/js/filter.js");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.js */ "./src/js/modal.js");
/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider.js */ "./src/js/slider.js");
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.js */ "./src/js/search.js");






document.addEventListener('DOMContentLoaded', function () {
  (0,_tabs_js__WEBPACK_IMPORTED_MODULE_1__.getTabs)(_items_js__WEBPACK_IMPORTED_MODULE_0__.items, _tabs_js__WEBPACK_IMPORTED_MODULE_1__.toFavorite);
  setTimeout(_tabs_js__WEBPACK_IMPORTED_MODULE_1__.toFavorite, _filter_js__WEBPACK_IMPORTED_MODULE_2__.showFilter, _modal_js__WEBPACK_IMPORTED_MODULE_3__.modalSwitcher, _modal_js__WEBPACK_IMPORTED_MODULE_3__.getDetails, _slider_js__WEBPACK_IMPORTED_MODULE_4__.showSlides, _search_js__WEBPACK_IMPORTED_MODULE_5__.startSearch, 1000);
  (0,_filter_js__WEBPACK_IMPORTED_MODULE_2__.accordionFilter)();
  (0,_filter_js__WEBPACK_IMPORTED_MODULE_2__.showFilter)();
  (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.modalSwitcher)();
  (0,_slider_js__WEBPACK_IMPORTED_MODULE_4__.showSlides)(_slider_js__WEBPACK_IMPORTED_MODULE_4__.slideIndex);
  (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.getDetails)(_items_js__WEBPACK_IMPORTED_MODULE_0__.items);
  (0,_search_js__WEBPACK_IMPORTED_MODULE_5__.startSearch)();
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map
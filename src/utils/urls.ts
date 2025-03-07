const SN_URL = {
  home: "/",
  contact: "/contact",
  product: {
    shutter: { root: "/product/shutter" },
    curtains: {
      root: "/product/curtains",
      fabric: "/product/curtains/fabric",
      sheerCurtains: "/product/curtains/sheer-curtains",
      curtainHeadings: "/product/curtains/curtain-headings",
    },
    blinds: {
      root: "/product/blinds",
      rollerBlinds: "/product/blinds/roller-blinds",
      venetianBlinds: "/product/blinds/venetian-blinds",
      romanBlinds: "/product/blinds/roman-blinds",
      verticalBlinds: "/product/blinds/vertical-blinds",
      zebraBlinds: "/product/blinds/zebra-blinds",
      shangriLaBlinds: "/product/blinds/shangri-la-blinds",
    },
  },
} as const;

export default SN_URL;

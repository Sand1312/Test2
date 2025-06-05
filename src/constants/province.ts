const PROVINCE = [
  {
    id: 1,
    name: "HA NOI CITY",
    name_vn: "Thành phố Hà Nội",
  },
  {
    id: 2,
    name: "HA GIANG",
    name_vn: "Tỉnh Hà Giang",
  },
  {
    id: 4,
    name: "CAO BANG",
    name_vn: "Tỉnh Cao Bằng",
  },
  {
    id: 6,
    name: "BAC KAN",
    name_vn: "Tỉnh Bắc Kạn",
  },
  {
    id: 8,
    name: "TUYEN QUANG",
    name_vn: "Tỉnh Tuyên Quang",
  },
  {
    id: 10,
    name: "LAO CAI",
    name_vn: "Tỉnh Lào Cai",
  },
  {
    id: 11,
    name: "DIEN BIEN",
    name_vn: "Tỉnh Điện Biên",
  },
  {
    id: 12,
    name: "LAI CHAU",
    name_vn: "Tỉnh Lai Châu",
  },
  {
    id: 14,
    name: "SON LA",
    name_vn: "Tỉnh Sơn La",
  },
  {
    id: 15,
    name: "YEN BAI",
    name_vn: "Tỉnh Yên Bái",
  },
  {
    id: 17,
    name: "HOA BINH",
    name_vn: "Tỉnh Hoà Bình",
  },
  {
    id: 19,
    name: "THAI NGUYEN",
    name_vn: "Tỉnh Thái Nguyên",
  },
  {
    id: 20,
    name: "LANG SON",
    name_vn: "Tỉnh Lạng Sơn",
  },
  {
    id: 22,
    name: "QUANG NINH",
    name_vn: "Tỉnh Quảng Ninh",
  },
  {
    id: 24,
    name: "BAC GIANG",
    name_vn: "Tỉnh Bắc Giang",
  },
  {
    id: 25,
    name: "PHU THO",
    name_vn: "Tỉnh Phú Thọ",
  },
  {
    id: 26,
    name: "VINH PHUC",
    name_vn: "Tỉnh Vĩnh Phúc",
  },
  {
    id: 27,
    name: "BAC NINH",
    name_vn: "Tỉnh Bắc Ninh",
  },
  {
    id: 30,
    name: "HAI DUONG",
    name_vn: "Tỉnh Hải Dương",
  },
  {
    id: 31,
    name: "HAI PHONG CITY",
    name_vn: "Thành phố Hải Phòng",
  },
  {
    id: 33,
    name: "HUNG YEN CITY",
    name_vn: "Tỉnh Hưng Yên",
  },
  {
    id: 34,
    name: "THAI BINH",
    name_vn: "Tỉnh Thái Bình",
  },
  {
    id: 35,
    name: "HA NAM",
    name_vn: "Tỉnh Hà Nam",
  },
  {
    id: 36,
    name: "NAM DINH",
    name_vn: "Tỉnh Nam Định",
  },
  {
    id: 37,
    name: "NINH BINH",
    name_vn: "Tỉnh Ninh Bình",
  },
  {
    id: 38,
    name: "THANH HOA",
    name_vn: "Tỉnh Thanh Hóa",
  },
  {
    id: 40,
    name: "NGHE AN",
    name_vn: "Tỉnh Nghệ An",
  },
  {
    id: 42,
    name: "HA TINH",
    name_vn: "Tỉnh Hà Tĩnh",
  },
  {
    id: 44,
    name: "QUANG BINH",
    name_vn: "Tỉnh Quảng Bình",
  },
  {
    id: 45,
    name: "QUANG TRI",
    name_vn: "Tỉnh Quảng Trị",
  },
  {
    id: 46,
    name: "THUA THIEN HUE",
    name_vn: "Tỉnh Thừa Thiên Huế",
  },
  {
    id: 48,
    name: "DA NANG CITY",
    name_vn: "Thành phố Đà Nẵng",
  },
  {
    id: 49,
    name: "QUANG NAM",
    name_vn: "Tỉnh Quảng Nam",
  },
  {
    id: 51,
    name: "QUANG NGAI",
    name_vn: "Tỉnh Quảng Ngãi",
  },
  {
    id: 52,
    name: "BINH DINH",
    name_vn: "Tỉnh Bình Định",
  },
  {
    id: 54,
    name: "PHU YEN",
    name_vn: "Tỉnh Phú Yên",
  },
  {
    id: 56,
    name: "KHANH HOA",
    name_vn: "Tỉnh Khánh Hòa",
  },
  {
    id: 58,
    name: "NINH THUAN",
    name_vn: "Tỉnh Ninh Thuận",
  },
  {
    id: 60,
    name: "BINH THUAN",
    name_vn: "Tỉnh Bình Thuận",
  },
  {
    id: 62,
    name: "KON TUM",
    name_vn: "Tỉnh Kon Tum",
  },
  {
    id: 64,
    name: "GIA LAI",
    name_vn: "Tỉnh Gia Lai",
  },
  {
    id: 66,
    name: "DAK LAK",
    name_vn: "Tỉnh Đắk Lắk",
  },
  {
    id: 67,
    name: "DAK NONG",
    name_vn: "Tỉnh Đắk Nông",
  },
  {
    id: 68,
    name: "LAM DONG",
    name_vn: "Tỉnh Lâm Đồng",
  },
  {
    id: 70,
    name: "BINH PHUOC",
    name_vn: "Tỉnh Bình Phước",
  },
  {
    id: 72,
    name: "TAY NINH",
    name_vn: "Tỉnh Tây Ninh",
  },
  {
    id: 74,
    name: "BINH DUONG",
    name_vn: "Tỉnh Bình Dương",
  },
  {
    id: 75,
    name: "DONG NAI",
    name_vn: "Tỉnh Đồng Nai",
  },
  {
    id: 77,
    name: "BA RIA - VUNG TAU",
    name_vn: "Tỉnh Bà Rịa - Vũng Tàu",
  },
  {
    id: 79,
    name: "HO CHI MINH CITY",
    name_vn: "Thành phố Hồ Chí Minh",
  },
  {
    id: 80,
    name: "LONG AN",
    name_vn: "Tỉnh Long An",
  },
  {
    id: 82,
    name: "TIEN GIANG",
    name_vn: "Tỉnh Tiền Giang",
  },
  {
    id: 83,
    name: "BEN TRE",
    name_vn: "Tỉnh Bến Tre",
  },
  {
    id: 84,
    name: "TRA VINH",
    name_vn: "Tỉnh Trà Vinh",
  },
  {
    id: 86,
    name: "VINH LONG",
    name_vn: "Tỉnh Vĩnh Long",
  },
  {
    id: 87,
    name: "DONG THAP",
    name_vn: "Tỉnh Đồng Tháp",
  },
  {
    id: 89,
    name: "AN GIANG",
    name_vn: "Tỉnh An Giang",
  },
  {
    id: 91,
    name: "KIEN GIANG",
    name_vn: "Tỉnh Kiên Giang",
  },
  {
    id: 92,
    name: "CAN THO CITY",
    name_vn: "Thành phố Cần Thơ",
  },
  {
    id: 93,
    name: "HAU GIANG",
    name_vn: "Tỉnh Hậu Giang",
  },
  {
    id: 94,
    name: "SOC TRANG",
    name_vn: "Tỉnh Sóc Trăng",
  },
  {
    id: 95,
    name: "BAC LIEU",
    name_vn: "Tỉnh Bạc Liêu",
  },
  {
    id: 96,
    name: "CA MAU",
    name_vn: "Tỉnh Cà Mau",
  },
];

export { PROVINCE };


export const API_BASE = 'https://api.kongricsstudio.com/api';


export const DIRECTION_ROOM = {
  East: 1, // Hướng Đông
  West: 2, // Hướng Tây
  South: 3, // Hướng Nam
  North: 4, // Hướng Bắc
  Southeast: 5, // Hướng Đông Nam
  Southwest: 6, // Hướng Tây Nam
  Northeast: 7, // Hướng Đông Bắc
  Northwest: 8, // Hướng Tây Bắc
} as const


export const DIRECTION_ROOM_OPTIONS = [
  { label: 'Hướng Đông', value: DIRECTION_ROOM.East },
  { label: 'Hướng Tây', value: DIRECTION_ROOM.West },
  { label: 'Hướng Nam', value: DIRECTION_ROOM.South },
  { label: 'Hướng Bắc', value: DIRECTION_ROOM.North },
  { label: 'Hướng Đông Nam', value: DIRECTION_ROOM.Southeast },
  { label: 'Hướng Tây Nam', value: DIRECTION_ROOM.Southwest },
  { label: 'Hướng Đông Bắc', value: DIRECTION_ROOM.Northeast },
  { label: 'Hướng Tây Bắc', value: DIRECTION_ROOM.Northwest },
]


export const SET_TEXT_DIRECTION_ROOM  = (viewRoom: number) => {
    switch (viewRoom) {
        case DIRECTION_ROOM.East:
            return "Hướng Đông";
        case DIRECTION_ROOM.West:
            return "Hướng Tây";
        case DIRECTION_ROOM.South:
            return "Hướng Nam";
        case DIRECTION_ROOM.North:
            return "Hướng Bắc";
        case DIRECTION_ROOM.Southeast:
            return "Hướng Đông Nam";
        case DIRECTION_ROOM.Southwest:
            return "Hướng Tây Nam";
        case DIRECTION_ROOM.Northeast:
            return "Hướng Đông Bắc";
        case DIRECTION_ROOM.Northwest:
            return "Hướng Tây Bắc";
        default:
            break;
    }
};

export const FACILITY_ROOM = {
  NearMarket: 1, // Gần chợ
  NearSchool: 2, /// Gần trường học
  NearHospital: 3, // Gần bệnh viện
  NearBusStation: 4, // Gần bến xe/bus
  NearIndustrialPark: 5, // Gần khu công nghiệp
  NearResidentialArea: 6, // Khu dân cư an ninh
  NearPeopleCommittee: 7, // Gần ủy ban nhân dân
  NearGasStation: 8, // Gần trạm xăng
  NearGreenGrocery: 9, // Gần bách hóa xanh
  NearConvenienceStore: 10, // Gần cửa hàng tiện lợi
  NearSupermarket: 11, // Gần siêu thị
  NearPark: 12, // Gần công viên
  NearGym: 13, // Gần Phòng gym
  NearCafe: 14, // Gần quán cà phê
  NearRestaurant: 15, // Gần nhà hàng
  NearCinema: 16, // Gần rạp chiếu phim
  NearShoppingMall: 17, // Gần trung tâm thương mại
  NearAirport: 18, // Gần sân bay
  NearTrainStation: 19, // Gần ga tàu
} as const


export const SET_TEXT_FACILITY_ROOM = [
  { label: 'Chợ', value: FACILITY_ROOM.NearMarket },
  { label: 'Trường học', value: FACILITY_ROOM.NearSchool },
  { label: 'Bệnh viện', value: FACILITY_ROOM.NearHospital },
  { label: 'Bến xe/bus', value: FACILITY_ROOM.NearBusStation },
  { label: 'Khu công nghiệp', value: FACILITY_ROOM.NearIndustrialPark },
  { label: 'Khu dân cư an ninh', value: FACILITY_ROOM.NearResidentialArea },
  { label: 'Ủy ban nhân dân', value: FACILITY_ROOM.NearPeopleCommittee },
  { label: 'Trạm xăng', value: FACILITY_ROOM.NearGasStation },
  { label: 'Bách hóa xanh', value: FACILITY_ROOM.NearGreenGrocery },
  { label: 'Cửa hàng tiện lợi', value: FACILITY_ROOM.NearConvenienceStore },
  { label: 'Siêu thị', value: FACILITY_ROOM.NearSupermarket },
  { label: 'Công viên', value: FACILITY_ROOM.NearPark },
  { label: 'Phòng gym', value: FACILITY_ROOM.NearGym },
  { label: 'Quán cà phê', value: FACILITY_ROOM.NearCafe },
  { label: 'Nhà hàng', value: FACILITY_ROOM.NearRestaurant },
  { label: 'Rạp chiếu phim', value: FACILITY_ROOM.NearCinema },
  { label: 'Trung tâm thương mại', value: FACILITY_ROOM.NearShoppingMall },
  { label: 'Sân bay', value: FACILITY_ROOM.NearAirport },
  { label: 'Ga tàu', value: FACILITY_ROOM.NearTrainStation },
]

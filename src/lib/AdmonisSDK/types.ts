export interface Product {}

export interface Order {}
export enum VolumeUnit {
  g = 'g',
  L = 'L',
  ml = 'ml',
  cu = 'cu'
}

export enum Category {
  KitchenAccessories = 407,
  HomeAccessories = 402,
  CellularAccessories = 57,
  AharoniRusolim = 540,
  OrenStores = 418,
  HomeStorage = 93,
  Storage = 409,
  Electronics = 96,
  Bath = 106,
  Pools = 164,
  Gadgets = 37,
  GaziboAndAwnings = 163,
  GrillsAndSmokers = 105,
  Clothing = 4,
  Footwear = 61,
  Pets = 10,
  Electricity = 55,
  SmallElectricity = 32,
  Tablets = 92,
  Textiles = 36,
  Children = 56,
  Tools = 95,
  SuitcasesAndBags = 8,
  Food = 60,
  Computers = 54,
  Dishwashers = 33,
  WashingMachines = 112,
  ElectricalAppliances = 514,
  ComputerMonitors = 99,
  DecorationAndJudaica = 408,
  Sukkot = 115,
  SuperFoodAndSupplements = 47,
  Knives = 415,
  Cellular = 91,
  Sports = 48,
  HomeDesign = 58,
  Pharmacy = 34,
  ComputerPeripherals = 98,
  Cosmetics = 7,
  CampingAndDisposable = 507,
  CampingAndHiking = 35,
  GardenFurniture = 94,
  Furniture = 9,
  OfficeFurniture = 151,
  LightFurniture = 59,
  Cars = 97,
  Maintenance = 102,
  Jewelry = 104
}

export const reverseCategory = Object.entries(Category).reduce(
  (map, [key, value]) => map.set(value as number, key as unknown as Category),
  new Map<number, Category>()
)

export enum DeliveryMethod {
  EPost = 110,
  EPostSiteDistributor = 184,
  HFDSiteDistributor = 160,
  HFDHomeCourier = 111,
  UPSPickups = 23,
  UPSHomeCourier = 114,
  YDMHomeCourier = 219,
  SelfPickup = 153,
  Boxite = 62,
  BoxSiteDistributor = 31,
  RegularMail = 21,
  RegisteredMail = 20,
  CourierMail = 107,
  MovingService = 69,
  MovingAssembly = 187,
  ExternalMovingAssemblyPayment = 158,
  ExternalMovingPayment = 150,
  SpecialMoving = 186,
  MovingWithAssembly = 29,
  Zigzag = 113,
  YanshufHomeCourier = 103,
  KatzHomeCourier = 218,
  PickupPointsSusnaCostPerVoucher = 554,
  PickupPointsSusna = 200,
  SusnaHomeCourier = 199,
  FedexHomeCourier = 90,
  ChitaBox = 152,
  ChitaHeightCargo = 168,
  ChitaIrregularCargo = 170,
  ChitaVolumeCargo = 169,
  ChitaShops = 24,
  ChitaHomeCourier = 108,
  Courier = 390,
  HomeCourier = 19,
  OtherCourier = 167
}

export const reverseDeliveryMethod = Object.entries(DeliveryMethod).reduce(
  (map, [key, value]) => map.set(value as number, key as unknown as DeliveryMethod),
  new Map<number, DeliveryMethod>()
)

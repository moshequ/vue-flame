import type { Product } from '@/lib/AdmonisSDK/index'

export interface IDeleviry {
  ID: number
  Name: string
  Days: number
  Cost: number
}

export interface IDeliveries {
  Deleviry: IDeleviry[]
}

export interface IOptionItem {
  ID: number
  Name: string
  Makat: string | number
  Model?: string | number
  UPC?: string | number
  InStock: number
  Picture?: string
  Price_Cost: number
  Price_Market?: number
  Price_Publish?: number
  Currency: string
}

export interface IProduct {
  ProductID: number
  PlatformID: number
  PLATFORM_CATEGORY: number
  PLATFORM_CATEGORY_ID: number
  CustomerName: string
  CustomerID: number
  CustomerIDNumber: number
  Name: string
  Name_Eng: string
  Description: string
  DescriptionLong: string
  ResponsibilityPeriod: string
  ResponsibilityBy: string
  Makat: string | number
  Model: string | number
  UPC: string | number
  Brand: string
  Volume: string | number
  VolumeType: string
  PublishStartDate: string
  PublishEndDate: string
  Price_Cost: number
  Price_Market: number
  Price_Publish: number
  Currency: string
  VideoLink: string
  ClassificationID: number
  ClassificationName: string
  SubClassificationID: number
  SubClassificationName: string
  Pictures: {
    Picture: string | string[]
  }
  Deliveries?: IDeliveries
  Options?: {
    Option: {
      ID: number
      Name: string
      Title: string
      Option: {
        ID: number
        Name: string
        Title: string
        OptionItem: IOptionItem[]
      }[]
    }
  }
}

export const products: Product[] = [
  {
    ProductID: 7433,
    PlatformID: 28,
    PLATFORM_CATEGORY: 0,
    PLATFORM_CATEGORY_ID: 0,
    CustomerName: 'Demo',
    CustomerID: 21,
    CustomerIDNumber: 123456789,
    Name: 'טרנינג לגבר נייק11222222222222',
    Name_Eng: "Nike men's sweaters",
    Description:
      'חליפת טרינינג ספורט Nike DRI-FIT כחולה מהממת לגברים אוורירית קלילה ונושמת בעלת נוחות וחופש תנועה.',
    DescriptionLong: '',
    ResponsibilityPeriod: '',
    ResponsibilityBy: '',
    Makat: 434278,
    Model: '',
    UPC: '',
    Brand: 'NIKE',
    Volume: '',
    VolumeType: '',
    PublishStartDate: '',
    PublishEndDate: '',
    Price_Cost: 780.39,
    Price_Market: 1317,
    Price_Publish: 897,
    Currency: 'ILS',
    VideoLink: '',
    ClassificationID: 4,
    ClassificationName: 'הלבשה',
    SubClassificationID: 0,
    SubClassificationName: '',
    Pictures: {
      Picture: 'https://admonis.com/Main/openfile.aspx?id=5576'
    },
    Deliveries: {
      Deleviry: [
        {
          ID: 19,
          Name: 'שליח עד הבית',
          Days: 7,
          Cost: 50
        },
        {
          ID: 19,
          Name: 'שליח עד הבית',
          Days: 7,
          Cost: 100
        }
      ]
    },
    Options: {
      Option: {
        ID: 7452,
        Name: 'צבע',
        Title: 'צבע',
        Option: {
          ID: 7453,
          Name: 'כחול',
          Title: 'מידה',
          OptionItem: [
            {
              ID: 6406,
              Name: 'בושם לגבר שאנל בלו א.ד.ט 100 מ"ל',
              Makat: 434263,
              Model: 3145891074604,
              UPC: '',
              InStock: 1,
              Picture: 'https://admonis.com/Main/openfile.aspx?id=5575',
              Price_Cost: 435,
              Price_Market: 0,
              Price_Publish: 500,
              Currency: 'ILS5'
            },
            {
              ID: 18851,
              Name: 'מידה S',
              Makat: 628555,
              InStock: 0,
              Price_Cost: 0,
              Currency: 'ILS4'
            },
            {
              ID: 18852,
              Name: 'מידה M',
              Makat: 434280,
              InStock: 0,
              Price_Cost: 0,
              Currency: 'ILS4'
            }
          ]
        }
      }
    }
  },
  {
    ProductID: 7463,
    PlatformID: 28,
    PLATFORM_CATEGORY: 0,
    PLATFORM_CATEGORY_ID: 0,
    CustomerName: 'Demo',
    CustomerID: 21,
    CustomerIDNumber: 123456789,
    Name: 'בושם לאישה אליאן א.ד.פ 60 מ"ל11222222222222',
    Name_Eng: 'ELIAN EDP FOR WOMEN',
    Description: 'בושם לאישה אליאן א.ד.פ 60 מ"ל',
    DescriptionLong: 'בושם מעולה',
    ResponsibilityPeriod: '',
    ResponsibilityBy: '',
    Makat: 11438174,
    Model: 3439602800317,
    UPC: '',
    Brand: 'Thierry Mugler',
    Volume: 60,
    VolumeType: 'מ"ל',
    PublishStartDate: '',
    PublishEndDate: '',
    Price_Cost: 826.5,
    Price_Market: 1000,
    Price_Publish: 950,
    Currency: 'ILS',
    VideoLink: '',
    ClassificationID: 7,
    ClassificationName: 'קוסמטיקה',
    SubClassificationID: 0,
    SubClassificationName: '',
    Pictures: {
      Picture: 'https://admonis.com/Main/openfile.aspx?id=5561'
    },
    Deliveries: {
      Deleviry: {
        ID: 19,
        Name: 'שליח עד הבית',
        Days: 7,
        Cost: 0
      }
    }
  },
  {
    ProductID: 7470,
    PlatformID: 28,
    PLATFORM_CATEGORY: 0,
    Comments: '',
    PLATFORM_CATEGORY_ID: 0,
    CustomerName: 'Demo',
    CustomerID: 21,
    CustomerIDNumber: 123456789,
    Name: 'מסקרה בייבי רול לנפח ועיגול ריסים שחור11222222222222',
    Name_Eng: 'Baby mascara roll for volume and black lashes',
    Description: 'מסקרה המעניקה מראה אופנתי.\nמעניקה מראה ריסים מורמים ומעוגלים במיוחד.',
    DescriptionLong: {
      '#text': 'מסקרה המעניקה מראה אופנתי.מעניקה מראה ריסים מורמים ומעוגלים במיוחד. - תיאור מפורט'
    },
    ResponsibilityPeriod: 10,
    ResponsibilityBy: 'DEMO',
    Makat: 434259,
    Model: 3600523438112,
    UPC: 8294921,
    Brand: 'loreal',
    Volume: 89,
    VolumeType: 'גרם',
    PublishStartDate: '',
    PublishEndDate: '',
    Price_Cost: 101.79,
    Price_Market: 150,
    Price_Publish: 117,
    Currency: 'ILS',
    VideoLink: '',
    ClassificationID: 33,
    ClassificationName: 'מטבח',
    SubClassificationID: 1288,
    SubClassificationName: 'אפייה',
    Pictures: {
      Picture: 'https://admonis.com/Main/openfile.aspx?id=5578'
    },
    Deliveries: {
      Deleviry: [
        {
          ID: 19,
          Name: 'שליח עד הבית',
          Days: 7,
          Cost: 0
        },
        {
          ID: 19,
          Name: 'שליח עד הבית',
          Days: 7,
          Cost: 50
        }
      ]
    }
  },
  {
    ProductID: 7484,
    PlatformID: 28,
    PLATFORM_CATEGORY: 0,
    PLATFORM_CATEGORY_ID: 0,
    CustomerName: 'Demo',
    CustomerID: 21,
    CustomerIDNumber: 123456789,
    Name: 'בושם פאיי לגבר  א.ד.ט 100 מ"ל11222222222222',
    Name_Eng: 'PADI FOR MEN EDT 100 ML',
    Description: 'בושם פאיי לגבר  א.ד.ט 100 מ"ל',
    DescriptionLong: 'בוושם ניסיון שני שטוח',
    ResponsibilityPeriod: '',
    ResponsibilityBy: '',
    Makat: 434262,
    Model: 3274878222568,
    UPC: '',
    Brand: 'GIVENCHY',
    Volume: 100,
    VolumeType: 'מ"ל',
    PublishStartDate: '',
    PublishEndDate: '',
    Price_Cost: 608.13,
    Price_Market: 1000,
    Price_Publish: 699,
    Currency: 'ILS',
    VideoLink: '',
    ClassificationID: 7,
    ClassificationName: 'קוסמטיקה',
    SubClassificationID: 0,
    SubClassificationName: '',
    Pictures: {
      Picture: [
        'https://admonis.com/Main/openfile.aspx?id=5564',
        'https://admonis.com/Main/openfile.aspx?id=28591'
      ]
    },
    Deliveries: {
      Deleviry: {
        ID: 19,
        Name: 'שליח עד הבית',
        Days: 7,
        Cost: 0
      }
    }
  },
  {
    ProductID: 7491,
    PlatformID: 28,
    PLATFORM_CATEGORY: 0,
    PLATFORM_CATEGORY_ID: 0,
    CustomerName: 'Demo',
    CustomerID: 21,
    CustomerIDNumber: 123456789,
    Name: 'בושם לגבר שאנל בלו א.ד.ט 100 מ"ל11222222222222',
    Name_Eng: "Chanel Blue EDT 100 ml men's perfume",
    Description: 'בושם לגבר שאנל בלו א.ד.ט 100 מ"ל',
    DescriptionLong: '',
    ResponsibilityPeriod: '',
    ResponsibilityBy: '',
    Makat: 434263,
    Model: 3145891074604,
    UPC: '',
    Brand: 'Chanel',
    Volume: 100,
    VolumeType: 'מ"ל',
    PublishStartDate: '',
    PublishEndDate: '',
    Price_Cost: 1537.29,
    Price_Market: 1720,
    Price_Publish: 1767,
    Currency: 'ILS',
    VideoLink: '',
    ClassificationID: 7,
    ClassificationName: 'קוסמטיקה',
    SubClassificationID: 0,
    SubClassificationName: '',
    Pictures: {
      Picture: [
        'https://admonis.com/Main/openfile.aspx?id=5575',
        'https://admonis.com/Main/openfile.aspx?id=816022'
      ]
    }
  },
  {
    ProductID: 7498,
    PlatformID: 28,
    PLATFORM_CATEGORY: 0,
    PLATFORM_CATEGORY_ID: 0,
    CustomerName: 'Demo',
    CustomerID: 21,
    CustomerIDNumber: 123456789,
    Name: 'בושם לאישה קוקו מדמוזל שאנל א.ד.פ 100 מ"ל11222222222222',
    Name_Eng: 'KOKO Mademoiselle Chanel EDP 100 ML',
    Description: 'בושם לאישה קוקו מדמוזל 100 מ"ל א.ד.פ\nמבית שאנל',
    DescriptionLong: '',
    ResponsibilityPeriod: '',
    ResponsibilityBy: '',
    Makat: 434264,
    Model: 3145891165203,
    UPC: '',
    Brand: 'Chanel',
    Volume: 100,
    VolumeType: 'גרם',
    PublishStartDate: '',
    PublishEndDate: '',
    Price_Cost: 1739.13,
    Price_Market: 0,
    Price_Publish: 1999,
    Currency: 'ILS',
    VideoLink: '',
    ClassificationID: 10,
    ClassificationName: 'חיות מחמד',
    SubClassificationID: 0,
    SubClassificationName: '',
    Pictures: {
      Picture: [
        'https://admonis.com/Main/openfile.aspx?id=2985878',
        'https://admonis.com/Main/openfile.aspx?id=5565'
      ]
    },
    Deliveries: {
      Deleviry: {
        ID: 158,
        Name: 'הובלה והרכבה חיצונים- תשלום מול בית העסק',
        Days: 7,
        Cost: 0
      }
    }
  },
  {
    ProductID: 7425,
    PlatformID: 28,
    PLATFORM_CATEGORY: 0,
    PLATFORM_CATEGORY_ID: 0,
    CustomerName: 'Demo',
    CustomerID: 21,
    CustomerIDNumber: 123456789,
    Name: 'חולצה CK לגבר11222222222222222',
    Name_Eng: 'CK shirt for men',
    Description: 'חולצה באיכות רמה גבוהה',
    DescriptionLong: 'חולצה CK לגבררררררר',
    ResponsibilityPeriod: 10,
    ResponsibilityBy: '',
    Makat: 'P735991349639',
    Model: '',
    UPC: '',
    Brand: '',
    Volume: '',
    VolumeType: '',
    PublishStartDate: '',
    PublishEndDate: '',
    Price_Cost: 130.5,
    Price_Market: 0,
    Price_Publish: 150,
    Currency: 'ILS',
    VideoLink: '',
    ClassificationID: 4,
    ClassificationName: 'הלבשה',
    SubClassificationID: 0,
    SubClassificationName: '',
    Pictures: {
      Picture: [
        'https://admonis.com/Main/openfile.aspx?id=5523',
        'https://admonis.com/Main/openfile.aspx?id=658986',
        'https://admonis.com/Main/openfile.aspx?id=658987',
        'https://admonis.com/Main/openfile.aspx?id=659002',
        'https://admonis.com/Main/openfile.aspx?id=659003'
      ]
    },
    Options: {
      Option: {
        ID: 7427,
        Name: 'צבע',
        Title: 'צבע',
        Option: [
          {
            ID: 7428,
            Name: 'שחור',
            Title: 'מידה',
            OptionItem: [
              {
                ID: 18813,
                Name: 'מידה MNHSV',
                Makat: 735991349639,
                InStock: 1,
                Picture: 'https://admonis.com/Main/openfile.aspx?id=5524',
                Price_Cost: 0,
                Currency: 'ILS4'
              },
              {
                ID: 18814,
                Name: 'מידה LARGE',
                Makat: 735991349653,
                InStock: 1,
                Price_Cost: 0,
                Currency: 'ILS4'
              },
              {
                ID: 18815,
                Name: 'מידה XL',
                Makat: 735991349677,
                InStock: 1,
                Price_Cost: 0,
                Currency: 'ILS4'
              },
              {
                ID: 52310,
                Makat: 'PACK7777909090',
                Model: 109091,
                UPC: 29011,
                InStock: 1,
                Picture: 'https://admonis.com/Main/openfile.aspx?id=657626',
                Price_Cost: 0,
                Price_Market: 0,
                Price_Publish: 0,
                Currency: 'ILS5'
              },
              {
                ID: 52310,
                Name: 'טסט 222',
                Makat: 'PACK7777909090',
                Model: 109091,
                UPC: 29011,
                InStock: 1,
                Picture: 'https://admonis.com/Main/openfile.aspx?id=657626',
                Price_Cost: 0,
                Price_Market: 0,
                Price_Publish: 0,
                Currency: 'ILS5'
              }
            ]
          },
          {
            ID: 7429,
            Name: 'אפור',
            Title: 'מידה',
            OptionItem: [
              {
                ID: 18816,
                Name: 'מידה M',
                Makat: 735991796518,
                InStock: 1,
                Picture: 'https://admonis.com/Main/openfile.aspx?id=657629',
                Price_Cost: 0,
                Currency: 'ILS4'
              },
              {
                ID: 18817,
                Name: 'מידה L',
                Makat: 735991796532,
                InStock: 1,
                Price_Cost: 0,
                Currency: 'ILS4'
              },
              {
                ID: 18818,
                Name: 'XL',
                Makat: 777321,
                InStock: 0,
                Price_Cost: 0,
                Price_Market: 0,
                Price_Publish: 0,
                Currency: 'ILS4'
              },
              {
                ID: 23255,
                Name: 'טסט חבילה לאישה',
                Makat: 62854,
                Model: '',
                UPC: '',
                InStock: 1,
                Price_Cost: 0,
                Price_Market: 0,
                Price_Publish: 0,
                Currency: 'ILS5'
              }
            ]
          }
        ]
      }
    }
  },
  {
    ProductID: 7531,
    PlatformID: 28,
    PLATFORM_CATEGORY: 0,
    PLATFORM_CATEGORY_ID: 0,
    CustomerName: 'Demo',
    CustomerID: 21,
    CustomerIDNumber: 123456789,
    Name: 'מערכת ישיבה מעוצבת 3+211222222222222',
    Name_Eng: 'Designed seating system 3 + 2',
    Description:
      'סלון 3+2 מבד מרופד בד איכותי.\nשיא העיצוב והנוחות . ישיבה מפנקת.\nבד רך ונעים למגע.\nשילדה מעץ מלא.\nמידות תלת: 185*84 ס”מ, גובה 77 ס”מ.\nמידות דו-מושבית: 135*84 ס”מ, גובה 77 ס”מ.\nגובה מושב 44, גובה רגליים 18, עומק מושב 56 ס”מ\nצבעים לבחירה: כחול, אפור בהיר, אפור כהה.\nהרכבה עמצית פשוטה.',
    DescriptionLong: '',
    ResponsibilityPeriod: '12 חודשים',
    ResponsibilityBy: '',
    Makat: 434220,
    Model: '',
    UPC: '',
    Brand: '',
    Volume: '',
    VolumeType: '',
    PublishStartDate: '',
    PublishEndDate: '',
    Price_Cost: 11135.13,
    Price_Market: 0,
    Price_Publish: 12799,
    Currency: 'ILS',
    VideoLink: '',
    ClassificationID: 9,
    ClassificationName: 'ריהוט לבית',
    SubClassificationID: 0,
    SubClassificationName: '',
    Pictures: {
      Picture: 'https://admonis.com/Main/openfile.aspx?id=5529'
    },
    Options: {
      Option: {
        ID: 7461,
        Name: 'צבע',
        Title: 'צבע',
        OptionItem: [
          {
            ID: 18880,
            Name: 'אפור בהיר',
            Makat: 434221,
            InStock: 1,
            Price_Cost: 0,
            Price_Market: 0,
            Price_Publish: 0,
            Currency: 'ILS1'
          },
          {
            ID: 18881,
            Name: 'כחול',
            Makat: 434222,
            InStock: 1,
            Price_Cost: 0,
            Price_Market: 0,
            Price_Publish: 0,
            Currency: 'ILS1'
          },
          {
            ID: 18882,
            Name: 'אפור',
            Makat: 434223,
            Model: '',
            UPC: '',
            InStock: 1,
            Price_Cost: 0,
            Price_Market: 0,
            Price_Publish: 0,
            Currency: 'ILS1'
          }
        ]
      }
    }
  },
  {
    ProductID: 7536,
    PlatformID: 28,
    PLATFORM_CATEGORY: 0,
    PLATFORM_CATEGORY_ID: 0,
    CustomerName: 'Demo',
    CustomerID: 21,
    CustomerIDNumber: 123456789,
    Name: 'ספסל גינה או מרפסת מעץ מלא11222222222222',
    Name_Eng: 'A garden bench or a solid wooden balcony',
    Description: {
      '#text':
        'ספסל מהודר שישדרג כל גינה,חדר או מרפסת ויהפוך אותה למרעננת וצבעונית בלי מאמץ.עשוי עץ מלא אורן. צבע טבעי.קיימת אפשרות לצביעה של הספסל בכל גוון רצוי שיתאים למיקומו.(לא כולל צבעים באריזה)הספסל ניתן לקיבוע בקלות ליציבות מלאה וחזקה,יפה למראה ומשתלב בכל פינה.מידות: 112*66 ס”מ, גובה 76 ס”מ.מגיע בקרטון אחד, מפורק.הרכבה עצמית פשוטה.'
    },
    DescriptionLong: '',
    ResponsibilityPeriod: '12 חודשים',
    ResponsibilityBy: '',
    Makat: 434237,
    Model: '',
    UPC: '',
    Brand: '',
    Volume: '',
    VolumeType: '',
    PublishStartDate: '',
    PublishEndDate: '',
    Price_Cost: 720.36,
    Price_Market: 0,
    Price_Publish: 828,
    Currency: 'ILS',
    VideoLink: '',
    ClassificationID: 9,
    ClassificationName: 'ריהוט לבית',
    SubClassificationID: 0,
    SubClassificationName: '',
    Pictures: {
      Picture: 'https://admonis.com/Main/openfile.aspx?id=5539'
    }
  },
  {
    ProductID: 7541,
    PlatformID: 28,
    PLATFORM_CATEGORY: 0,
    PLATFORM_CATEGORY_ID: 0,
    CustomerName: 'Demo',
    CustomerID: 21,
    CustomerIDNumber: 123456789,
    Name: 'כסא מנהלים אורטופדי בדיקה11222222222222',
    Name_Eng: 'Orthopedic chair',
    Description:
      'כסא מנהלים, כסא משרדי, מפואר ומאוד נוח.\nמושב רחב, תמיכת גב אוטופדי.\nמשענת גב וראש מתכווננות. בסיס בציפוי ניקל. על גלגלים.\nריפוד בד משי.\nמידות: רוחב 63, עומק 60, גובה כסא 114-122 ס”מ.\nצבעים לבחירה: שחור או כחול.\nהרכבה עצמית פשוטה.',
    DescriptionLong: '',
    ResponsibilityPeriod: '12 חודשים',
    ResponsibilityBy: '',
    Makat: 434238,
    Model: '',
    UPC: '',
    Brand: '',
    Volume: '',
    VolumeType: '',
    PublishStartDate: '',
    PublishEndDate: '',
    Price_Cost: 772.56,
    Price_Market: 0,
    Price_Publish: 888,
    Currency: 'ILS',
    VideoLink: '',
    ClassificationID: 9,
    ClassificationName: 'ריהוט לבית',
    SubClassificationID: 0,
    SubClassificationName: '',
    Pictures: {
      Picture: 'https://admonis.com/Main/openfile.aspx?id=5540'
    },
    Options: {
      Option: {
        ID: 7466,
        Name: 'צבע',
        Title: 'צבע',
        OptionItem: [
          {
            ID: 18892,
            Name: 'שחור',
            Makat: 434239,
            InStock: 0,
            Price_Cost: 0,
            Price_Market: 0,
            Price_Publish: 0,
            Currency: 'ILS1'
          },
          {
            ID: 18893,
            Name: 'כחול',
            Makat: 434240,
            InStock: 0,
            Price_Cost: 0,
            Price_Market: 0,
            Price_Publish: 0,
            Currency: 'ILS1'
          }
        ]
      }
    }
  },
  {
    ProductID: 7551,
    PlatformID: 28,
    PLATFORM_CATEGORY: 0,
    PLATFORM_CATEGORY_ID: 0,
    CustomerName: 'Demo',
    CustomerID: 21,
    CustomerIDNumber: 123456789,
    Name: 'מחבתות כפולות קלאסיקוק 4 ב-111222222222222',
    Name_Eng: 'Klassik 4-in-1 pans',
    Description:
      'מחבת כפולה מתהפכת קלאסיקוק\n4 ב-1 גם מתפרקת ל-2 מחבתות גם מחבת כפולה עם סגירה מגנטית, גם מתקן לאידוי וגם סיר עם מכסה זכוכית מחוסמת\nלבחירה מחבת עגולה או אובלית!!!!',
    DescriptionLong: 'מחבת כפולה ניסיון אחד עם אופציות',
    ResponsibilityPeriod: '12 חודשים',
    ResponsibilityBy: '',
    Makat: 434245,
    Model: '',
    UPC: '',
    Brand: 'CLASSICOOK',
    Volume: '',
    VolumeType: '',
    PublishStartDate: '',
    PublishEndDate: '',
    Price_Cost: 365.4,
    Price_Market: 897,
    Price_Publish: 420,
    Currency: 'ILS',
    VideoLink: '',
    ClassificationID: 33,
    ClassificationName: 'מטבח',
    SubClassificationID: 0,
    SubClassificationName: '',
    Pictures: {
      Picture: 'https://admonis.com/Main/openfile.aspx?id=5530'
    },
    Options: {
      Option: {
        ID: 7476,
        Name: 'בחר סוג',
        Title: '',
        OptionItem: [
          {
            ID: 18912,
            Name: 'מחבת גריל כפולה אובלית',
            Makat: 434246,
            InStock: 1,
            Price_Cost: 174,
            Price_Market: 300,
            Price_Publish: 200,
            Currency: 'ILS1'
          },
          {
            ID: 18913,
            Name: 'מחבת כפולה עגולה',
            Makat: 434247,
            InStock: 1,
            Price_Cost: 0,
            Price_Market: 0,
            Price_Publish: 0,
            Currency: 'ILS1'
          }
        ]
      }
    }
  },
  {
    ProductID: 7593,
    PlatformID: 28,
    PLATFORM_CATEGORY: 0,
    Comments: '',
    PLATFORM_CATEGORY_ID: 0,
    CustomerName: 'Demo',
    CustomerID: 21,
    CustomerIDNumber: 123456789,
    Name: 'תיק גב נגד כייסים Swiss bags11222222222222',
    Name_Eng: 'Pocket backpack',
    Description:
      'תיק נגד גניבה Anti Theft\nמיועד גם למחשב בגודל "15.6\nהתיק שומר על החפצים האישיים שלכם מפני גניבות וכיוסים\nפתרון אידיאלי לטיולים בחו"ל, נסיעות לעבודה ועוד\nלתיק רוכסנים מוסתרים בצמוד לגב של המשתמש\nתא אחסון גבי מוסתר נוסף\nחלל אחסון מתקדם בתוך התיק\nבד עמיד לרטיבות\nאחיזת גב אגרונומית\nשומר על החפצים מפני חבטות\nיציאת USB לחיבור סוללת גיבוי( לא כלולה) לטעינה נוחה של סמארטפון\nקל משקל ונוח לנשיאה',
    DescriptionLong:
      'תיק נגד גניבה Anti Theft גניבה\nמיועד גם למחשב בגודל "15.6\nהתיק שומר על החפצים האישיים שלכם מפני גניבות וכיוסים\nפתרון אידיאלי לטיולים בחו"ל, נסיעות לעבודה ועוד\nלתיק רוכסנים מוסתרים בצמוד לגב של המשתמש\nתא אחסון גבי מוסתר נוסף\nחלל אחסון מתקדם בתוך התיק\nבד עמיד לרטיבות\nאחיזת גב אגרונומית\nשומר על החפצים מפני חבטות\nיציאת USB לחיבור סוללת גיבוי( לא כלולה) לטעינה נוחה של סמארטפון\nקל משקל ונוח לנשיאה',
    ResponsibilityPeriod: '12 חודשים',
    ResponsibilityBy: '',
    Makat: 103149,
    Model: 'SW-COMPBLACK173',
    UPC: '',
    Brand: 'SWISSBAGS',
    Volume: '',
    VolumeType: '',
    PublishStartDate: '',
    PublishEndDate: '',
    Price_Cost: 388.89,
    Price_Market: 597,
    Price_Publish: 447,
    Currency: 'ILS',
    VideoLink: '',
    ClassificationID: 8,
    ClassificationName: 'תיקים ומזוודות',
    SubClassificationID: 0,
    SubClassificationName: '',
    Pictures: {
      Picture: 'https://admonis.com/Main/openfile.aspx?id=5582'
    },
    Deliveries: {
      Deleviry: {
        ID: 19,
        Name: 'שליח עד הבית',
        Days: 7,
        Cost: 0
      }
    }
  },
  {
    ProductID: 7598,
    PlatformID: 28,
    PLATFORM_CATEGORY: 0,
    Comments: '',
    PLATFORM_CATEGORY_ID: 0,
    CustomerName: 'Demo',
    CustomerID: 21,
    CustomerIDNumber: 123456789,
    Name: 'מארז ענק של 24 חבילות מגבונים נשטפים באסלה11222222222222',
    Name_Eng: 'A huge package of 24 packs of wipes are washed in the toilet',
    Description:
      '24 חבילות מגבונים היפואלרגנים, רכים ועבים הנשטפים באסלה (60 יח\' בכל חבילה)\nמגבוני נייר טואלט לחים\nנשטפים באסלה\nעבים ורכים במיוחד\nבבישום עדין\nמועשרים באלוורה\nהיפואלרגנים\nנטול אלכוהול\n24 חבילות, בכל חבילה 60 יחידות, סה"כ 1,440 מגבונים',
    DescriptionLong: '',
    ResponsibilityPeriod: '',
    ResponsibilityBy: '',
    Makat: 10401128,
    Model: 7290106262669,
    UPC: '',
    Brand: 'Best',
    Volume: '',
    VolumeType: '',
    PublishStartDate: '',
    PublishEndDate: '',
    Price_Cost: 0,
    Price_Market: 0,
    Price_Publish: 0,
    Currency: 'ILS',
    VideoLink: '',
    ClassificationID: 34,
    ClassificationName: 'פארם',
    SubClassificationID: 0,
    SubClassificationName: '',
    Pictures: {
      Picture: 'https://admonis.com/Main/openfile.aspx?id=5568'
    },
    Deliveries: {
      Deleviry: {
        ID: 19,
        Name: 'שליח עד הבית',
        Days: 7,
        Cost: 0
      }
    }
  },
  {
    ProductID: 16284,
    PlatformID: 28,
    PLATFORM_CATEGORY: 0,
    PLATFORM_CATEGORY_ID: 0,
    CustomerName: 'Demo',
    CustomerID: 21,
    CustomerIDNumber: 123456789,
    Name: 'סט מזוודות קשיחות במגוון צבעים11222222222222',
    Name_Eng: 'ECHOLAC Hard luggage set 28 ″ 24 ″ 20 ″ CHOCOLATE',
    Description: {
      '#text':
        "חומר פוליקרבונאט קשיח גמיש וקל משקלידית הרמה טלסקופית מאלומיניום עם כפתור בורר גבהים לאחיזה נוחה ושליטה מלאה בתנועת המזוודה בכל מצב.4 גלגלי אנימוטו כיווניים (ספינר-360 מעלות) – שקטים ובולמי זעזועים לנסיעה חלקהידית עליונה וידית צידית לנשיאהמנעול TSA מובנה בגוף המזוודה נגד פריצות וגנבות לראש שקט כשהמזוודה לא איתך.רוכסני ניילון חזקים במיוחדחלוקה פנימית של תאים מרשת מאווררת נגד לחות, התאים הנסתרים מסייעים בארגון מופתי יחד עם רצועות אלסטיות כך התכולה נשמרת במקומה ועומדת בכל טלטלה בדרך.תיק רחצה גדול בעל שני תאים הניתן לניתוקאחריות – 5 שניםגודל\tמשקל\tנפח\tאורך\tרוחב\tעומק20'\t2.8\t45L לפני הרחבה\t55 ס”מ\t37 ס”מ\t24 ס”מ24'\t3.6\t80L לפני הרחבה\t66  ס”מ\t39  ס”מ\t27  ס”מ28'\t4.6\t110L לפני הרחבה\t77  ס”מ\t44  ס”מ\t30  ס”מ"
    },
    DescriptionLong: '',
    ResponsibilityPeriod: '5 שנים',
    ResponsibilityBy: '',
    Makat: 43422884926767,
    Model: 1111,
    UPC: 12345,
    Brand: 'אחר',
    Volume: '',
    VolumeType: '',
    PublishStartDate: '',
    PublishEndDate: '',
    Price_Cost: 4785,
    Price_Market: 0,
    Price_Publish: 5500,
    Currency: 'ILS',
    VideoLink: '',
    ClassificationID: 8,
    ClassificationName: 'תיקים ומזוודות',
    SubClassificationID: 1562,
    SubClassificationName: 'תיקים',
    Pictures: {
      Picture: 'https://admonis.com/Main/openfile.aspx?id=35631'
    },
    Deliveries: {
      Deleviry: {
        ID: 19,
        Name: 'שליח עד הבית',
        Days: 7,
        Cost: 0
      }
    },
    Options: {
      Option: {
        ID: 11333,
        Name: 'סוג',
        Title: 'סוג',
        OptionItem: [
          {
            ID: 6407,
            Name: 'בושם לאישה קוקו מדמוזל שאנל א.ד.פ 100 מ"ל',
            Makat: 434264,
            Model: 3145891165203,
            UPC: '',
            InStock: 0,
            Picture: 'https://admonis.com/Main/openfile.aspx?id=5565',
            Price_Cost: 174,
            Price_Market: 0,
            Price_Publish: 200,
            Currency: 'ILS2'
          },
          {
            ID: 31156,
            Name: 'שחור',
            Makat: 434229,
            InStock: 0,
            Price_Cost: 10.44,
            Price_Market: 14,
            Price_Publish: 12,
            Currency: 'ILS1'
          },
          {
            ID: 31157,
            Name: 'לבן',
            Makat: 434230,
            InStock: 0,
            Price_Cost: 0,
            Price_Market: 0,
            Price_Publish: 0,
            Currency: 'ILS1'
          },
          {
            ID: 31158,
            Name: 'אפור',
            Makat: 434231,
            InStock: 1,
            Price_Cost: 0,
            Price_Market: 0,
            Price_Publish: 0,
            Currency: 'ILS1'
          },
          {
            ID: 31159,
            Name: 'נייבי',
            Makat: 434232,
            InStock: 0,
            Price_Cost: 609,
            Price_Market: 0,
            Price_Publish: 700,
            Currency: 'ILS1'
          },
          {
            ID: 31160,
            Name: 'אדום',
            Makat: 434233,
            Model: 80921,
            UPC: 9029101,
            InStock: 1,
            Price_Cost: 26.1,
            Price_Market: 40,
            Price_Publish: 30,
            Currency: 'ILS1'
          },
          {
            ID: 66625,
            Name: 'ירקרק',
            Makat: 8234,
            Model: '',
            UPC: '',
            InStock: 1,
            Price_Cost: 26.1,
            Price_Market: 0,
            Price_Publish: 30,
            Currency: 'ILS1'
          },
          {
            ID: 66634,
            Name: 'סגלגל',
            Makat: 9987,
            Model: '',
            UPC: '',
            InStock: 1,
            Price_Cost: 0,
            Price_Market: 0,
            Price_Publish: 0,
            Currency: 'ILS1'
          }
        ]
      }
    }
  },
  {
    ProductID: 130579,
    PlatformID: 28,
    PLATFORM_CATEGORY: 0,
    Comments: '',
    PLATFORM_CATEGORY_ID: 0,
    CustomerName: 'Demo',
    CustomerID: 21,
    CustomerIDNumber: 123456789,
    Name: 'סט מצעים במגוון דגמים לבחירה1122222222222',
    Name_Eng: 'A set of bedding in a variety of models to choose from',
    Description: 'סט מצעים 100% כותנה תודן',
    DescriptionLong:
      'אחריות לכל החיים של תודן, בכפוף לתנאים המפורטים בתעודת האחריות של תודן תוצרת כחול-לבן, צפיפות 144 חוטים לאינץ\' ומשקל 120 גרם למטר מרובע, יציבות צבע דרגה 4 (הגבוהה ביותר), עברו תהליך אנטי פילינג (למניעת כידרור), עברו תהליך אנטי-כיווץ ואל-קמט, סט 3 חלקים למיטת יחיד כולל: סדין עם גומי: 200X90 ס"מ, גובה 25 ס"מ, ציפה: 150X200 ס"מ עם סגירת כפתורים, ציפית: 50X70 ס"מ עם קלפה 20 ס"מ, סט 3 חלקים למיטה ברוחב וחצי כולל: סדין עם גומי: 200X120 ס"מ, גובה 25 ס"מ, ציפה: 150X200 ס"מ עם סגירת כפתורים, ציפית: 50X70 ס"מ עם קלפה 20 ס"מ, סט 4 חלקים למיטה זוגית כולל: סדין עם גומי: 200X160 ס"מ, גובה 25 ס"מ, ציפה: 200X220 ס"מ עם סגירת כפתורים, זוג ציפיות: 50X70 ס"מ',
    ResponsibilityPeriod: 'אחריות לכל החיים',
    ResponsibilityBy: 'ניו דיל דיגיטל',
    Makat: 28550,
    Model: '',
    UPC: '',
    Brand: '',
    Volume: '',
    VolumeType: '',
    PublishStartDate: '',
    PublishEndDate: '',
    Price_Cost: 121.8,
    Price_Market: 99,
    Price_Publish: 140,
    Currency: 'ILS',
    VideoLink: '',
    ClassificationID: 36,
    ClassificationName: 'טקסטיל',
    SubClassificationID: 0,
    SubClassificationName: '',
    Deliveries: {
      Deleviry: {
        ID: 19,
        Name: 'שליח עד הבית',
        Days: 7,
        Cost: 0
      }
    },
    Options: {
      Option: {
        ID: 49935,
        Name: 'דגם',
        Title: 'דגם',
        Option: {
          ID: 49936,
          Name: 'דגם',
          Title: 'דגם',
          OptionItem: [
            {
              ID: 137223,
              Name: 'יחיד',
              Makat: 2855,
              Model: '',
              UPC: '',
              InStock: 0,
              Price_Cost: 0,
              Price_Market: 30,
              Price_Publish: 50,
              Currency: 'ILS4'
            },
            {
              ID: 137224,
              Name: 'יחיד וחצי',
              Makat: 2856,
              InStock: 0,
              Price_Cost: 0,
              Price_Market: 50,
              Currency: 'ILS4'
            },
            {
              ID: 137225,
              Name: 'זוגי',
              Makat: 2857,
              InStock: 0,
              Price_Cost: 0,
              Price_Market: 30,
              Currency: 'ILS4'
            },
            {
              ID: 241658,
              Name: 'גרביים',
              Makat: 4408578,
              Model: '',
              UPC: '',
              InStock: 1,
              Price_Cost: 34.8,
              Price_Market: 0,
              Price_Publish: 40,
              Currency: 'ILS5'
            }
          ]
        }
      }
    }
  }
]

export interface OrderShipment {
  ShipmentId: number
  ShipmentCode: string
  Package_Estimated_Quantity: number
  Estimated_Customer_Received_Date: string
  Shipping_Distributor_Receive_Date: string
  Method: number
  MethodName: string
  ShippingPrice: number
  Status: number
  Label_Link_URL: string
  Label_Link_PDF: string
  First_name: string
  Last_name: string
  Email: string
  Phone: string
  Phone2: string
  Company_name: string
  Street: string
  House_no: string
  Apartment_no: string
  Floor_no: string
  Entrance: string
  City: string
  Zipcode: string
  Pob: string
  PickupLocationCode: string
  PickupLocationTitle: string
  PickupLocationAddress: string
  Canceled: number
  CanceledDate: string | null
}
export interface OrderItem {
  ItemID: number
  Makat: string
  Cost_Price: number
  SellingPrice: number
  Description: string
  Model: string
  Quantity: number
  Canceled: number
  CanceledDate: string | null
  ShipmentId: number
}

export interface Order {
  CustomerID: number
  OrderNumber: number
  Comments: string
  CreatedDate: string
  TotalDiscount_CostPrice: number
  TotalDiscount_SellingPrice: number
  PaymentType: string
  PaymentNumber: string
  PaymentName: string
  MoreComments: string
  MoreInfo: string
  OrderItems: OrderItem[]
  OrderShipments: OrderShipment[]
}
export const orders: Order[] = [
  {
    CustomerID: 11,
    OrderNumber: 12345,
    Comments: 'Comments to order',
    CreatedDate: '2019-03-05T13:56:42.342Z',
    TotalDiscount_CostPrice: 50.5,
    TotalDiscount_SellingPrice: 60.5,
    PaymentType: 'Type of payment – e.g credit card',
    PaymentNumber: 'Number of payment – e.g 4567',
    PaymentName: 'Name of payment – e.g visa,mastercard',
    MoreComments: 'More comments',
    MoreInfo: 'More info',
    OrderItems: [
      {
        ItemID: 12345,
        Makat: 'A1983T23',
        Cost_Price: 1234,
        SellingPrice: 1555,
        Description: 'asdfsfsdf',
        Model: 'X280',
        Quantity: 2,
        Canceled: 1,
        CanceledDate: '2019-03-05T13:56:42.342Z',
        ShipmentId: 55667
      },
      {
        ItemID: 12346,
        Makat: 'A1983T23',
        Cost_Price: 1235,
        SellingPrice: 1556,
        Description: 'asd234234asdasd',
        Model: 'X289',
        Quantity: 1,
        Canceled: 0,
        CanceledDate: null,
        ShipmentId: 55667
      }
    ],
    OrderShipments: [
      {
        ShipmentId: 55667,
        ShipmentCode: '4234234',
        Package_Estimated_Quantity: 1,
        Estimated_Customer_Received_Date: '2019-03-05T13:56:42.342Z',
        Shipping_Distributor_Receive_Date: '2019-03-05T13:56:42.342Z',
        Method: 55,
        MethodName: 'Boxit',
        ShippingPrice: 29.5,
        Status: 4,
        Label_Link_URL: '',
        Label_Link_PDF: '',
        First_name: 'oren',
        Last_name: 'nizri',
        Email: 'oren@shaharsoft.com',
        Phone: '052-6833233',
        Phone2: '',
        Company_name: 'ShaharSoft.com',
        Street: 'jericho',
        House_no: '25',
        Apartment_no: '999',
        Floor_no: '1',
        Entrance: '',
        City: 'Holon',
        Zipcode: '1234567',
        Pob: '',
        PickupLocationCode: '',
        PickupLocationTitle: '',
        PickupLocationAddress: '',
        Canceled: 0,
        CanceledDate: null
      }
    ]
  }
]

export interface CreateOrderRes {
  CustomerID: number
  PlatformID: number
  OrderID: number
}

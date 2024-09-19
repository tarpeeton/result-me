"use client";
import { useEffect, useState } from 'react';
import Banner from './Banner';
import Question from './Question';
import ServicesProvided from './ServicesProvided';
import Result from './Result';
import Images from './Images';
import { useParams } from 'next/navigation';
import mrjImagePhoto from '@/public/images/bannerCase/MRJ/mrjImage.png';
import primeMedicalImage from '@/public/images/bannerCase/pmc/primeMedicalImage.png';
import odilAlisherovich from '@/public/images/bannerCase/odilalisherovich/odilAlisherovich.png';

const CaseItemMain = () => {
  const { slug } = useParams();
  const [filteredData, setFilteredData] = useState(null);

  const exampleData = [
    {
      "slug": "intermed",
      "data": {
        "id": 0,
        "banner": {
          "id": 0,
          "title": {
            "uz": "Intermed Innovation",
            "ru": "Intermed Innovation",
            "en": "Intermed Innovation"
          },
          "link": "https://imed.uz/",
          "shortDescription": {
            "uz": "Крупнейший дилер медицинского оборудования в Узбекистане",
            "ru": "Крупнейший дилер медицинского оборудования в Узбекистане",
            "en": "Крупнейший дилер медицинского оборудования в Узбекистане"
          },
          "background": {
            "id": 1,
            "url": "https://ucarecdn.com/d885d0d5-f440-4e8f-8241-12e6e19f0882/-/preview/999x272/"
          },
          "photo": {
            "id": 2,
            "url": "https://ucarecdn.com/50e91c1e-d7c1-4ce8-9087-d2a08922ddee/-/preview/1000x658/"
          },
          // "logo": {
          //   "id": 3,
          //   "url": "https://ucarecdn.com/67fd2b7e-e746-47a8-9f1a-91b8e135119e/-/preview/200x100/"
          // }
        },
        "query": ["string"],
        "providedService": [
          {
            "id": 0,
            "name": {
              "uz": "Услуга на узбекском",
              "ru": "Услуга на русском",
              "en": "Service in English"
            },
            "description": {
              "uz": "Описание услуги на узбекском",
              "ru": "Описание услуги на русском",
              "en": "Service description in English"
            },
            "orderNum": 0,
            "active": true
          }
        ]
      }
    },
    {
      "slug": "mrj-trade",
      "data": {
        "id": 1,
        "banner": {
          "id": 1,
          "title": {
            "uz": "MRJ TRADE",
            "ru": "MRJ TRADE",
            "en": "MRJ TRADE"
          },
          "link": "https://mrj-trade.com",
          "shortDescription": {
            "uz": "Поставщик медицинского оборудования в странах Ближнего Востока и Африки",
            "ru": "Поставщик медицинского оборудования в странах Ближнего Востока и Африки",
            "en": "Поставщик медицинского оборудования в странах Ближнего Востока и Африки"
          },
          "background": {
            "id": 4,
            "url": 'https://ucarecdn.com/8e7c36fa-67f1-4651-bbf8-2037478fa6ef/-/preview/999x272/' // Use imported image
          },
          "photo": {
            "id": 5,
            "url": mrjImagePhoto // Use imported image
          },
          "logo": {
            "id": 6,
            "url": ''
          }
        },
        "query": ["lab equipment", "medical"],
        "providedService": [
          {
            "id": 1,
            "name": {
              "uz": "Лабораторное оборудование",
              "ru": "Лабораторное оборудование",
              "en": "Lab equipment"
            },
            "description": {
              "uz": "Описание лабораторного оборудования на узбекском",
              "ru": "Описание лабораторного оборудования на русском",
              "en": "Lab equipment description in English"
            },
            "orderNum": 1,
            "active": true
          }
        ]
      }
    },
    {
      "slug": "dr-odil-alisherovich",
      "data": {
        "id": 1,
        "banner": {
          "id": 1,
          "title": {
            "uz": "Хужакулов Одил Алишерович",
            "ru": "Хужакулов Одил Алишерович",
            "en": "Хужакулов Одил Алишерович"
          },
          "link": "https://dr-odil.uz/",
          "shortDescription": {
            "uz": "Врач-эксперт в области пренатальной диагностики",
            "ru": "Врач-эксперт в области пренатальной диагностики",
            "en": "Врач-эксперт в области пренатальной диагностики"
          },
          "background": {
            "id": 4,
            "url": 'https://ucarecdn.com/8466b571-1c1b-47f0-86ca-29f54262fcde/-/preview/999x272/' // Use imported image
          },
          "photo": {
            "id": 5,
            "url": odilAlisherovich // Use imported image
          },
          "logo": {
            "id": 6,
            "url": ''
          }
        },
        "query": ["lab equipment", "medical"],
        "providedService": [
          {
            "id": 1,
            "name": {
              "uz": "Лабораторное оборудование",
              "ru": "Лабораторное оборудование",
              "en": "Lab equipment"
            },
            "description": {
              "uz": "Описание лабораторного оборудования на узбекском",
              "ru": "Описание лабораторного оборудования на русском",
              "en": "Lab equipment description in English"
            },
            "orderNum": 1,
            "active": true
          }
        ]
      }
    },
    // s
    {
      "slug": "prime-medical-center",
      "data": {
        "id": 1,
        "banner": {
          "id": 1,
          "title": {
            "uz": "Prime Medical Center",
            "ru": "Prime Medical Center",
            "en": "Prime Medical Center"
          },
          "link": "https://pmcenter.uz/",
          "shortDescription": {
            "uz": "Гастроэнтерологический центр с большой историей (бывший GunchaMed)",
            "ru": "Гастроэнтерологический центр с большой историей (бывший GunchaMed)",
            "en": "Гастроэнтерологический центр с большой историей (бывший GunchaMed)"
          },
          "background": {
            "id": 4,
            "url": 'https://ucarecdn.com/bad1c69a-226e-4c68-9da5-bc69fb343e65/-/preview/999x272/' // Use imported image
          },
          "photo": {
            "id": 5,
            "url": primeMedicalImage // Use imported image
          },
          "logo": {
            "id": 6,
            "url": ''
          }
        },
        "query": ["lab equipment", "medical"],
        "providedService": [
          {
            "id": 1,
            "name": {
              "uz": "Лабораторное оборудование",
              "ru": "Лабораторное оборудование",
              "en": "Lab equipment"
            },
            "description": {
              "uz": "Описание лабораторного оборудования на узбекском",
              "ru": "Описание лабораторного оборудования на русском",
              "en": "Lab equipment description in English"
            },
            "orderNum": 1,
            "active": true
          }
        ]
      }
    },
    // sdfsdfsdf
    {
      "slug": "smile-design",
      "data": {
        "id": 1,
        "banner": {
          "id": 1,
          "title": {
            "uz": "Smile Design",
            "ru": "Smile Design",
            "en": "Smile Design"
          },
          "link": "",
          "shortDescription": {
            "uz": "Стоматология с передовыми технологиями и безупречной репутацией",
            "ru": "Стоматология с передовыми технологиями и безупречной репутацией",
            "en": "Стоматология с передовыми технологиями и безупречной репутацией"
          },
          "background": {
            "id": 4,
            "url": 'https://ucarecdn.com/58ffcb67-d2c8-400b-a9b1-2f5eb8085d2c/-/preview/999x272/' // Use imported image
          },
          "photo": {
            "id": 5,
            "url": "https://ucarecdn.com/61ec4e8a-5102-4acb-928b-a179a4960944/-/preview/1000x658/" // Use imported image
          },
          "logo": {
            "id": 6,
            "url": ''
          }
        },
        "query": ["lab equipment", "medical"],
        "providedService": [
          {
            "id": 1,
            "name": {
              "uz": "Лабораторное оборудование",
              "ru": "Лабораторное оборудование",
              "en": "Lab equipment"
            },
            "description": {
              "uz": "Описание лабораторного оборудования на узбекском",
              "ru": "Описание лабораторного оборудования на русском",
              "en": "Lab equipment description in English"
            },
            "orderNum": 1,
            "active": true
          }
        ]
      }
    },
    {
      "slug": "baxtiyor-nadjullayevich",
      "data": {
        "id": 1,
        "banner": {
          "id": 1,
          "title": {
            "uz": "Шамирзаев Бахтиёр Наджиюллаевич",
            "ru": "Шамирзаев Бахтиёр Наджиюллаевич",
            "en": "Шамирзаев Бахтиёр Наджиюллаевич"
          },
          "link": "",
          "shortDescription": {
            "uz": "Врач-хирург высшей категории. Специалист по эндоскопическим операциям",
            "ru": "Врач-хирург высшей категории. Специалист по эндоскопическим операциям",
            "en": "Врач-хирург высшей категории. Специалист по эндоскопическим операциям"
          },
          "background": {
            "id": 4,
            "url": 'https://ucarecdn.com/58ffcb67-d2c8-400b-a9b1-2f5eb8085d2c/-/preview/999x272/' // Use imported image
          },
          "photo": {
            "id": 5,
            "url": "https://ucarecdn.com/61ec4e8a-5102-4acb-928b-a179a4960944/-/preview/1000x658/" // Use imported image
          },
          "logo": {
            "id": 6,
            "url": ''
          }
        },
        "query": ["lab equipment", "medical"],
        "providedService": [
          {
            "id": 1,
            "name": {
              "uz": "Лабораторное оборудование",
              "ru": "Лабораторное оборудование",
              "en": "Lab equipment"
            },
            "description": {
              "uz": "Описание лабораторного оборудования на узбекском",
              "ru": "Описание лабораторного оборудования на русском",
              "en": "Lab equipment description in English"
            },
            "orderNum": 1,
            "active": true
          }
        ]
      }
    },
    // s



    {
      "slug": "mostona-med",
      "data": {
        "id": 1,
        "banner": {
          "id": 1,
          "title": {
            "uz": "Mastona Med",
            "ru": "Mastona Med",
            "en": "Mastona Med"
          },
          "link": "",
          "shortDescription": {
            "uz": "Клиника интегративной медицины по авторским методикам основателя Наргизы Хамидуллаевны",
            "ru": "Клиника интегративной медицины по авторским методикам основателя Наргизы Хамидуллаевны",
            "en": "Клиника интегративной медицины по авторским методикам основателя Наргизы Хамидуллаевны"
          },
          "background": {
            "id": 4,
            "url": 'https://ucarecdn.com/58ffcb67-d2c8-400b-a9b1-2f5eb8085d2c/-/preview/999x272/' // Use imported image
          },
          "photo": {
            "id": 5,
            "url": "https://ucarecdn.com/61ec4e8a-5102-4acb-928b-a179a4960944/-/preview/1000x658/" // Use imported image
          },
          "logo": {
            "id": 6,
            "url": ''
          }
        },
        "query": ["lab equipment", "medical"],
        "providedService": [
          {
            "id": 1,
            "name": {
              "uz": "Лабораторное оборудование",
              "ru": "Лабораторное оборудование",
              "en": "Lab equipment"
            },
            "description": {
              "uz": "Описание лабораторного оборудования на узбекском",
              "ru": "Описание лабораторного оборудования на русском",
              "en": "Lab equipment description in English"
            },
            "orderNum": 1,
            "active": true
          }
        ]
      }
    },
    {
      "slug": "ant-group",
      "data": {
        "id": 1,
        "banner": {
          "id": 1,
          "title": {
            "uz": "ANT-GROUP",
            "ru": "ANT-GROUP",
            "en": "ANT-GROUP"
          },
          "link": "https://www.instagram.com/antgroup_uz/",
          "shortDescription": {
            "uz": "Фармацевтическая компания",
            "ru": "Фармацевтическая компания",
            "en": "Фармацевтическая компания"
          },
          "background": {
            "id": 4,
            "url": 'https://ucarecdn.com/58ffcb67-d2c8-400b-a9b1-2f5eb8085d2c/-/preview/999x272/' // Use imported image
          },
          "photo": {
            "id": 5,
            "url": "https://ucarecdn.com/61ec4e8a-5102-4acb-928b-a179a4960944/-/preview/1000x658/" // Use imported image
          },
          "logo": {
            "id": 6,
            "url": ''
          }
        },
      }
    },
    {
      "slug": "nafisa-shuxratovna",
      "data": {
        "id": 1,
        "banner": {
          "id": 1,
          "title": {
            "uz": "Хусеинова Нафиса Шухратовна",
            "ru": "Хусеинова Нафиса Шухратовна",
            "en": "Хусеинова Нафиса Шухратовна"
          },
          "link": "https://www.stom-tashkent.uz/",
          "shortDescription": {
            "uz": "Врач стоматолог-имплантолог, ортопед",
            "ru": "Врач стоматолог-имплантолог, ортопед",
            "en": "Врач стоматолог-имплантолог, ортопед"
          },
          "background": {
            "id": 4,
            "url": 'https://ucarecdn.com/58ffcb67-d2c8-400b-a9b1-2f5eb8085d2c/-/preview/999x272/' // Use imported image
          },
          "photo": {
            "id": 5,
            "url": "https://ucarecdn.com/61ec4e8a-5102-4acb-928b-a179a4960944/-/preview/1000x658/" // Use imported image
          },
          "logo": {
            "id": 6,
            "url": ''
          }
        },
      }
    },
    {
      "slug": "xayrullo-rahmatullaevich",
      "data": {
        "id": 1,
        "banner": {
          "id": 1,
          "title": {
            "uz": "Хашимов Хайрилло Рахматуллаевич",
            "ru": "Хашимов Хайрилло Рахматуллаевич",
            "en": "Хашимов Хайрилло Рахматуллаевич"
          },
          "link": "https://dr-khashimov.uz/",
          "shortDescription": {
            "uz": "Врач-кардиохирург с 17-летним опытом",
            "ru": "Врач-кардиохирург с 17-летним опытом",
            "en": "Врач-кардиохирург с 17-летним опытом"
          },
          "background": {
            "id": 4,
            "url": 'https://ucarecdn.com/f8c2f4bc-85dd-4be0-bf5c-80666c2d9b1a/-/preview/999x272/' // Use imported image
          },
          "photo": {
            "id": 5,
            "url": "https://ucarecdn.com/0a0ff189-884d-4c6d-a678-b8d3e8f40586/-/preview/1000x658/" // Use imported image
          },
          "logo": {
            "id": 6,
            "url": ''
          }
        },
      }
    },
    {
      "slug": "aziza-shaxzadeevna",
      "data": {
        "id": 1,
        "banner": {
          "id": 1,
          "title": {
            "uz": "Джураева Азиза Шахзадэевна",
            "ru": "Джураева Азиза Шахзадэевна",
            "en": "Джураева Азиза Шахзадэевна"
          },
          "link": "https://endocrinolog.uz/",
          "shortDescription": {
            "uz": "Врач-эндокринолог, кандидат медицинских наук",
            "ru": "Врач-эндокринолог, кандидат медицинских наук",
            "en": "Врач-эндокринолог, кандидат медицинских наук"
          },
          "background": {
            "id": 4,
            "url": 'https://ucarecdn.com/4f4f29bf-b1cb-4fee-80d8-41881f492d5a/-/preview/999x272/' // Use imported image
          },
          "photo": {
            "id": 5,
            "url": "https://ucarecdn.com/fd6c5143-76f4-42ee-8049-585c8c692e48/-/preview/1000x658/" // Use imported image
          },
          "logo": {
            "id": 6,
            "url": ''
          }
        },
      }
    },
    {
      "slug": "alisher-baxromovich",
      "data": {
        "id": 1,
        "banner": {
          "id": 1,
          "title": {
            "uz": "Курбанов Алишер Бахромович",
            "ru": "Курбанов Алишер Бахромович",
            "en": "Курбанов Алишер Бахромович"
          },
          "link": "https://alisher-lor.uz/",
          "shortDescription": {
            "uz": "ЛОР-хирург, владелец клиники YUNUSOBOD LOR 24/7",
            "ru": "ЛОР-хирург, владелец клиники YUNUSOBOD LOR 24/7",
            "en": "ЛОР-хирург, владелец клиники YUNUSOBOD LOR 24/7"
          },
          "background": {
            "id": 4,
            "url": 'https://ucarecdn.com/b06061bf-c6e0-405f-a3c8-8c00def0a94f/-/preview/999x272/' // Use imported image
          },
          "photo": {
            "id": 5,
            "url": "https://ucarecdn.com/d6e7e984-22d9-47b3-ba35-530601731277/-/preview/1000x658/" // Use imported image
          },
          "logo": {
            "id": 6,
            "url": ''
          }
        },
      }
    },
    {
      "slug": "sanjar-akbarovich",
      "data": {
        "id": 1,
        "banner": {
          "id": 1,
          "title": {
            "uz": "Ахмедов Санджар Акбарович",
            "ru": "Ахмедов Санджар Акбарович",
            "en": "Ахмедов Санджар Акбарович"
          },
          "link": "https://dr-psixoterapevt.uz/",
          "shortDescription": {
            "uz": "Врач-психотерапевт высшей категории, кандидат медицинских наук, доцент",
            "ru": "Врач-психотерапевт высшей категории, кандидат медицинских наук, доцент",
            "en": "Врач-психотерапевт высшей категории, кандидат медицинских наук, доцент"
          },
          "background": {
            "id": 4,
            "url": 'https://ucarecdn.com/853d47be-7a0c-45a0-9619-0ed5a03f3327/-/preview/999x272/' // Use imported image
          },
          "photo": {
            "id": 5,
            "url": "https://ucarecdn.com/63b3f68b-0b99-40fc-88e7-a4adab282de6/-/preview/1000x658/" // Use imported image
          },
          "logo": {
            "id": 6,
            "url": ''
          }
        },
      }
    },



































	// end
  ];

  useEffect(() => {
    if (slug) {
      const selectedData = exampleData.find(item => item.slug === slug);
      setFilteredData(selectedData?.data || null); // If no data is found, set it to null
    }
  }, [slug]);

  if (!filteredData) {
    return <div>Loading...</div>; // Optional loading state
  }

  return (
    <div className='px-[16px] bg-[#F8F8F8]'>
      <Banner data={filteredData} />
      <Question />
      <ServicesProvided />
      <Result />
      <Images />
    </div>
  );
};

export default CaseItemMain;

"use client";
import { useEffect, useState } from 'react';
import Banner from './Banner';
import Question from './Question';
import ServicesProvided from './ServicesProvided';
import Result from './Result';
import Images from './Images';
import { useParams } from 'next/navigation';
import mrjImagePhoto from '@/public/images/bannerCase/MRJ/mrjImage.png';

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
            "uz": "Intermed Innovation / Крупнейший дилер медицинского оборудования в Узбекистане.",
            "ru": "Intermed Innovation / Крупнейший дилер медицинского оборудования в Узбекистане.",
            "en": "Intermed Innovation / Крупнейший дилер медицинского оборудования в Узбекистане."
          },
          "background": {
            "id": 1,
            "url": "https://ucarecdn.com/2e98b647-a0bd-4d53-8d42-b8d49a419983/-/preview/999x272/"
          },
          "photo": {
            "id": 2,
            "url": "https://ucarecdn.com/eaa487e0-df1f-4394-bc2e-0f89d4abd28e/-/preview/1000x658/"
          },
          // "logo": {
          //   "id": 3,
          //   "url": "https://ucarecdn.com/67fd2b7e-e746-47a8-9f1a-91b8e135119e/-/preview/200x100/"
          // }
        },
       
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
            "uz": "MRJ TRADE / Поставщик медицинского оборудования в странах Ближнего Востока и Африки.",
            "ru": "MRJ TRADE / Поставщик медицинского оборудования в странах Ближнего Востока и Африки.",
            "en": "MRJ TRADE / Поставщик медицинского оборудования в странах Ближнего Востока и Африки."
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
            "uz": "Хужакулов Одил Алишерович / Врач-эксперт в области пренатальной диагностики.",
            "ru": "Хужакулов Одил Алишерович / Врач-эксперт в области пренатальной диагностики.",
            "en": "Хужакулов Одил Алишерович / Врач-эксперт в области пренатальной диагностики."
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
            "uz": "Prime Medical Center / Гастроэнтерологический центр с многолетним опытом (бывший GunchaMed)",
            "ru": "Prime Medical Center / Гастроэнтерологический центр с многолетним опытом (бывший GunchaMed)",
            "en": "Prime Medical Center / Гастроэнтерологический центр с многолетним опытом (бывший GunchaMed)"
          },
          "background": {
            "id": 4,
            "url": 'https://ucarecdn.com/f1a7c7ac-cd7d-43cf-bdf0-fa4a1a201926/-/preview/999x272/' // Use imported image
          },
          "photo": {
            "id": 5,
            "url": "https://ucarecdn.com/9920a5c3-e006-49d5-8885-08af42a15fa5/-/preview/1000x658/" // Use imported image
          },
          "logo": {
            "id": 6,
            "url": ''
          }
        },
       
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
            "uz": "Smile Design / Стоматология с передовыми технологиями и безупречной репутацией.",
            "ru": "Smile Design / Стоматология с передовыми технологиями и безупречной репутацией.",
            "en": "Smile Design / Стоматология с передовыми технологиями и безупречной репутацией."
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
      "slug": "baxtiyor-nadjullayevich",
      "data": {
        "id": 1,
        "banner": {
          "id": 1,
          "title": {
            "uz": "Бахтиёр Наджиюллаевич",
            "ru": "Бахтиёр Наджиюллаевич",
            "en": "Бахтиёр Наджиюллаевич"
          },
          "link": "",
          "shortDescription": {
            "uz": "Шамирзаев Бахтиёр Наджиюллаевич / Врач-хирург высшей категории, специалист по эндоскопическим операциям.",
            "ru": "Шамирзаев Бахтиёр Наджиюллаевич / Врач-хирург высшей категории, специалист по эндоскопическим операциям.",
            "en": "Шамирзаев Бахтиёр Наджиюллаевич / Врач-хирург высшей категории, специалист по эндоскопическим операциям."
          },
          "background": {
            "id": 4,
            "url": 'https://ucarecdn.com/4e3c6491-5bdd-4aa0-958a-efbe4e6670b7/-/preview/999x272/' // Use imported image
          },
          "photo": {
            "id": 5,
            "url": "https://ucarecdn.com/d6a231a0-8e2b-453a-a428-9a4b3e64a64e/-/preview/1000x658/" // Use imported image
          },
          "logo": {
            "id": 6,
            "url": ''
          }
        },
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
          "link": "https://www.instagram.com/nargiza_xamidulayevna/",
          "shortDescription": {
            "uz": "Mastona Med / Клиника интегративной медицины по авторским методикам основателя Наргизы Хамидуллаевны.",
            "ru": "Mastona Med / Клиника интегративной медицины по авторским методикам основателя Наргизы Хамидуллаевны.",
            "en": "Mastona Med / Клиника интегративной медицины по авторским методикам основателя Наргизы Хамидуллаевны."
          },
          "background": {
            "id": 4,
            "url": 'https://ucarecdn.com/f0189c4c-6611-467b-a5c5-82c24256470c/-/preview/999x272/' // Use imported image
          },
          "photo": {
            "id": 5,
            "url": "https://ucarecdn.com/579a51de-1158-4161-b735-30128ac44b83/-/preview/1000x658/" // Use imported image
          },
          "logo": {
            "id": 6,
            "url": ''
          }
        },
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
            "uz": "ANT-GROUP / Фармацевтическая компания.",
            "ru": "ANT-GROUP / Фармацевтическая компания.",
            "en": "ANT-GROUP / Фармацевтическая компания."
          },
          "background": {
            "id": 4,
            "url": 'https://ucarecdn.com/640a5fd2-5914-437e-a311-887f0d0f202b/-/preview/999x272/' // Use imported image
          },
          "photo": {
            "id": 5,
            "url": "https://ucarecdn.com/accac460-a3d7-4e3f-87fe-bab5750e939c/-/preview/1000x658/" // Use imported image
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
            "uz": "Хусеинова Нафиса Шухратовна / Врач стоматолог-имплантолог, ортопед.",
            "ru": "Хусеинова Нафиса Шухратовна / Врач стоматолог-имплантолог, ортопед.",
            "en": "Хусеинова Нафиса Шухратовна / Врач стоматолог-имплантолог, ортопед."
          },
          "background": {
            "id": 4,
            "url": 'https://ucarecdn.com/bba89d59-ac39-4077-92cb-ef69fc9a3f68/-/preview/999x272/' // Use imported image
          },
          "photo": {
            "id": 5,
            "url": "https://ucarecdn.com/b5993efe-4c85-4728-a139-a970281f744f/-/preview/1000x658/" // Use imported image
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
            "uz": "Хашимов Хайрилло Рахматуллаевич / Врач-кардиохирург с 17-летним опытом.",
            "ru": "Хашимов Хайрилло Рахматуллаевич / Врач-кардиохирург с 17-летним опытом.",
            "en": "Хашимов Хайрилло Рахматуллаевич / Врач-кардиохирург с 17-летним опытом."
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
            "uz": "Джураева Азиза Шахзадэевна / Врач-эндокринолог, кандидат медицинских наук.",
            "ru": "Джураева Азиза Шахзадэевна / Врач-эндокринолог, кандидат медицинских наук.",
            "en": "Джураева Азиза Шахзадэевна / Врач-эндокринолог, кандидат медицинских наук."
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
            "uz": "Курбанов Алишер Бахромович / ЛОР-хирург, владелец клиники YUNUSOBOD LOR 24/7.*",
            "ru": "Курбанов Алишер Бахромович / ЛОР-хирург, владелец клиники YUNUSOBOD LOR 24/7.*",
            "en": "Курбанов Алишер Бахромович / ЛОР-хирург, владелец клиники YUNUSOBOD LOR 24/7.*"
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
            "uz": "Ахмедов Санджар Акбарович / Врач-психотерапевт высшей категории, кандидат медицинских наук, доцент.",
            "ru": "Ахмедов Санджар Акбарович / Врач-психотерапевт высшей категории, кандидат медицинских наук, доцент.",
            "en": "Ахмедов Санджар Акбарович / Врач-психотерапевт высшей категории, кандидат медицинских наук, доцент."
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

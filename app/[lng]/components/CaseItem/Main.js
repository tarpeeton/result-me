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
            "uz": "INTERMED INNOVATION",
            "ru": "INTERMED INNOVATION",
            "en": "INTERMED INNOVATION"
          },
          "link": "https://intermed-innovation.com",
          "shortDescription": {
            "uz": "«INTERMED INNOVATION» надежный поставщик медицинского оборудования от ведущих производителей",
            "ru": "«INTERMED INNOVATION» надежный поставщик медицинского оборудования от ведущих производителей",
            "en": "«INTERMED INNOVATION» надежный поставщик медицинского оборудования от ведущих производителей"
          },
          "background": {
            "id": 1,
            "url": "https://ucarecdn.com/e74e2b4a-231d-415c-9ed6-5f89d90f3da6/-/preview/800x600/"
          },
          "photo": {
            "id": 2,
            "url": "https://ucarecdn.com/10ee97fe-71fc-4ffe-a907-f4bb3377abed/-/preview/500x500/"
          },
          "logo": {
            "id": 3,
            "url": "https://ucarecdn.com/67fd2b7e-e746-47a8-9f1a-91b8e135119e/-/preview/200x100/"
          }
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
            "uz": "«MRJ TRADE» ведущий поставщик лабораторного оборудования",
            "ru": "«MRJ TRADE» ведущий поставщик лабораторного оборудования",
            "en": "«MRJ TRADE» ведущий поставщик лабораторного оборудования"
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
            "uz": "MRJ TRADE",
            "ru": "MRJ TRADE",
            "en": "MRJ TRADE"
          },
          "link": "https://mrj-trade.com",
          "shortDescription": {
            "uz": "«MRJ TRADE» ведущий поставщик лабораторного оборудования",
            "ru": "«MRJ TRADE» ведущий поставщик лабораторного оборудования",
            "en": "«MRJ TRADE» ведущий поставщик лабораторного оборудования"
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
    {
      "slug": "prime-medical-center",
      "data": {
        "id": 1,
        "banner": {
          "id": 1,
          "title": {
            "uz": "MRJ TRADE",
            "ru": "MRJ TRADE",
            "en": "MRJ TRADE"
          },
          "link": "https://prime-medical-center",
          "shortDescription": {
            "uz": "«MRJ TRADE» ведущий поставщик лабораторного оборудования",
            "ru": "«MRJ TRADE» ведущий поставщик лабораторного оборудования",
            "en": "«MRJ TRADE» ведущий поставщик лабораторного оборудования"
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
    }



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

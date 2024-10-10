'use client'
import { useEffect, useState } from 'react'
import Banner from './Banner'
import Question from './Question'
import ServicesProvided from './ServicesProvided'
import Result from './Result'
import Images from './Images'
import { useParams } from 'next/navigation'
import { exampleData } from '@/constants/exampleData'

const CaseItemMain = () => {
  const { slug } = useParams()
  const [filteredData, setFilteredData] = useState(null)

  useEffect(() => {
    if (slug) {
      const selectedData = exampleData.find(item => item.slug === slug)
      setFilteredData(selectedData?.data || null) // If no data is found, set it to null
    }
  }, [slug])

  if (!filteredData) {
    return <div>Loading...</div> // Optional loading state
  }

  return (
    <div className='px-[16px] bg-[#F8F8F8]'>
      <Banner data={filteredData} />
      <Question />
      <ServicesProvided />
      <Result />
      <Images />
    </div>
  )
}

export default CaseItemMain

'use client'
import { IoClose } from 'react-icons/io5'
import { useState } from 'react'
import { Dialog, DialogTitle, DialogContent } from '@mui/material'
import ServiceModal from './SeriviceModal'
import { useParams } from 'next/navigation'

const ServicePriceModal = ({ isOpen, onClose, price, serviceName }) => {
  const { lng } = useParams()
  const [service, setService] = useState(false)
  const setServiceModal = () => {
    setService(true)
    onClose()
  }
  const setCloseServiceModal = () => setService(false)
  return (
    <>
      {/* Main Form Modal */}
      <Dialog
        open={isOpen}
        onClose={onClose}
        fullWidth
        className='z-[9999999999]'
        PaperProps={{
          sx: {
            maxWidth: '460px',
            borderRadius: { xs: '20px', mdl: '30px' },
            padding: { xs: '2px 20px', mdl: '30px 20px' },
            zIndex: 9999999999 // Set z-index for the main modal
          }
        }}
      >
        <DialogTitle
          sx={{
            fontSize: { xs: '23px', mdl: '30px' },
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 'bold',
            zIndex: 999999999 // Set z-index for DialogTitle
          }}
        >
          {serviceName && serviceName[lng]}
          <div onClick={onClose} style={{ cursor: 'pointer' }}>
            <IoClose />
          </div>
        </DialogTitle>
        <DialogContent
          sx={{ zIndex: 99999 }}
          className='z-[9999] mt-[20px] mdl:mt-[25px] '
        >
          {/* Display the price */}
          <div className='flex flex-col pt-[20px] mdl:pt-[25px]  border-t border-[#F0F0F0]'>
            <span className='text-titleDark font-semibold text-[28px] mdl:text-[35px]'>
              {price && price[lng]}{' '}
              {/* Assuming `price` is provided in different languages */}
            </span>
            <p className='text-violet100 font-medium text-[15px] font-robotoFlex mt-[5px] mdl:text-[18px]'>
              {lng === 'ru'
                ? 'форма оплаты любая'
                : lng === 'uz'
                ? 'toʻlov turi ixtiyoriy'
                : 'any payment method'}{' '}
              {/* Payment form text */}
            </p>
          </div>

          <div>
            <button
              onClick={setServiceModal}
              className='text-white w-full text-center text-[18px] font-bold  mx-auto py-[30px] 3xl:py-[24px] px-[20px] bg-violet100 rounded-[100px] mt-[20px] mdl:mt-[40px]'
            >
              {lng === 'ru'
                ? 'Оставить заявку'
                : lng === 'uz'
                ? 'Ariza qoldirish'
                : 'Submit Request'}{' '}
              {/* Button text */}
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <ServiceModal isOpen={service} onClose={setCloseServiceModal} />
    </>
  )
}

export default ServicePriceModal

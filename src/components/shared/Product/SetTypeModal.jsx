import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ShowImageStatic from '@/utils/ShowImageStatic';


const SetTypeModal = ({ isOpen, onClose, onSelect, options }) => {
    const [selected, setSelected] = useState(null);
  
    if (!isOpen) return null;
  
    const handleConfirm = () => {
      if (selected) {
        onSelect(selected); // این به Product مقدار رو پاس می‌ده!
      }
    };
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition text-2xl"
          >
            ✕
          </button>
  
          <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            انتخاب نوع اشتراک
          </h2>
  
          <div className="grid grid-cols-2 gap-4">
            {options.map((item) => {
              const isActive = selected?.id === item.id;
  
              return (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelected(item)}
                  className={`cursor-pointer rounded-xl overflow-hidden flex flex-col items-center justify-center transition shadow-md 
                    ${isActive ? 'border-4 border-purple-600 shadow-xl' : 'border border-gray-200'} 
                    bg-white`}
                >
                  <ShowImageStatic
                    image={item.FieldImage}
                    alt={item.title}
                    className="w-full h-28 object-cover"
                  />
                  <h3 className='text-gray-500 mt-3'>اشتراک</h3>
                  <div className="p-2 -mt-3 text-center kalamehBold font-medium text-2xl text-gray-700">
                    {item.FieldName}
                  </div>
                </motion.div>
              );
            })}
          </div>
  
          <button
            onClick={handleConfirm}
            disabled={!selected}
            className={`mt-8 w-full ${
              selected
                ? 'bg-purple-600 hover:bg-purple-700 cursor-pointer'
                : 'bg-gray-300 cursor-not-allowed'
            } text-white font-medium py-2 rounded-xl transition`}
          >
            تایید و ادامه
          </button>
        </motion.div>
      </div>
    );
  };

export default SetTypeModal

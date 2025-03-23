import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SetTimeModal = ({ isOpen, onClose, onSelect, options }) => {
  const [selected, setSelected] = useState(null);

  if (!isOpen) return null;

  const handleSelect = (item) => {
    setSelected(item);
  };

  const handleConfirm = () => {
    if (selected) {
      onSelect(selected);
    }
  };

  const handleClose = () => {
    setSelected(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          انتخاب اشتراک
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {options.map((item) => {
            const isActive = selected?.id === item.id;

            return (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => handleSelect(item)}
                className={`cursor-pointer rounded-xl p-6 flex flex-col items-center justify-center transition shadow-md
                ${isActive
                    ? 'border-4 border-purple-600 shadow-xl'
                    : 'border border-transparent'}
                bg-gradient-to-br from-purple-500 to-indigo-500 text-white`}
              >
                <div className="text-6xl kalamehBold mb-2">{item.FieldName}</div>
                <div className="text-sm" dir='rtl'>{Number(item.FieldPriceIRR).toLocaleString('fa-IR')} تومان</div>
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
          {selected ? 'تایید و ادامه' : 'لطفا یک اشتراک انتخاب کنید'}
        </button>
      </motion.div>
    </div>
  );
};

export default SetTimeModal;

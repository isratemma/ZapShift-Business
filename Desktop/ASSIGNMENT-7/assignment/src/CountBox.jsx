import React from 'react';

const CountBox = ({ inProgress, resolved }) => {
  return (
    <div className="grid grid-cols-2 gap-4 my-6">
      {/* In-Progress Box */}
      <div
        className="relative rounded-xl p-6 overflow-hidden text-white"
        style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
      >
        <div className="relative z-10">
          <p className="text-sm font-medium opacity-90 mb-2">In-Progress</p>
          <p className="text-5xl font-bold">{inProgress}</p>
        </div>
        <div className="absolute right-4 top-4 w-24 h-24 rounded-full border border-white opacity-20" />
        <div className="absolute right-10 top-10 w-16 h-16 rounded-full border border-white opacity-20" />
      </div>

      {/* Resolved Box */}
      <div
        className="relative rounded-xl p-6 overflow-hidden text-white"
        style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}
      >
        <div className="relative z-10">
          <p className="text-sm font-medium opacity-90 mb-2">Resolved</p>
          <p className="text-5xl font-bold">{resolved}</p>
        </div>
        <div className="absolute right-4 top-4 w-24 h-24 rounded-full border border-white opacity-20" />
        <div className="absolute right-10 top-10 w-16 h-16 rounded-full border border-white opacity-20" />
      </div>
    </div>
  );
};

export default CountBox;

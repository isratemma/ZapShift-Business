import React from 'react';
import { MdCalendarToday } from 'react-icons/md';

const priorityColor = (priority) => {
  switch (priority) {
    case 'High': return 'text-red-500';
    case 'Medium': return 'text-yellow-500';
    case 'Low': return 'text-blue-400';
    default: return 'text-gray-500';
  }
};

const statusBadge = (status) => {
  switch (status) {
    case 'Open':
      return (
        <span className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
          Open
        </span>
      );
    case 'In-Progress':
      return (
        <span className="flex items-center gap-1 text-xs font-medium text-yellow-600 bg-yellow-50 border border-yellow-200 px-2 py-0.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block" />
          In- Progress
        </span>
      );
    case 'Resolved':
      return (
        <span className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
          Resolved
        </span>
      );
    default:
      return null;
  }
};

const Card = ({ data, onClick }) => {
  return (
    <>
      {data.map((ticket) => (
        <div
          key={ticket.id}
          onClick={() => onClick(ticket)}
          className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start mb-2">
            <h2 className="font-semibold text-sm text-gray-900 leading-snug pr-2">{ticket.subject}</h2>
            {statusBadge(ticket.status)}
          </div>
          <p className="text-xs text-gray-500 mb-3 line-clamp-2">{ticket.description}</p>
          <div className="flex justify-between items-center text-xs text-gray-500">
            <div className="flex items-center gap-3">
              <span className={`font-semibold uppercase text-xs ${priorityColor(ticket.priority)}`}>
                #{ticket.id} {ticket.priority.toUpperCase()} PRIORITY
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-600">{ticket.requestedBy}</span>
              <span className="flex items-center gap-1">
                <MdCalendarToday className="text-gray-400" />
                {ticket.date}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;

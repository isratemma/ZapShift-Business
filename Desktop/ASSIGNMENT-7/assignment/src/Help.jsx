import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Card from './Card';
import CountBox from './CountBox';

const Help = () => {
  const [tickets, setTickets] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setTickets(data))
      .catch((err) => console.log(err));
  }, []);

  // Click a card → add to In-Progress Task Status panel
  const handleTicketClick = (ticket) => {
    const alreadyAdded = inProgressTasks.find((t) => t.id === ticket.id);
    if (alreadyAdded) {
      toast.info(`"${ticket.subject}" is already in Task Status.`);
      return;
    }
    const updated = { ...ticket, status: 'In-Progress' };
    setTickets((prev) =>
      prev.map((t) => (t.id === ticket.id ? updated : t))
    );
    setInProgressTasks((prev) => [...prev, updated]);
    toast.success(`"${ticket.subject}" added to Task Status!`);
  };

  // Click Complete → remove from Task Status, add to Resolved, remove from ticket list
  const handleComplete = (task) => {
    setInProgressTasks((prev) => prev.filter((t) => t.id !== task.id));
    setResolvedTasks((prev) => [...prev, { ...task, status: 'Resolved' }]);
    setTickets((prev) => prev.filter((t) => t.id !== task.id));
    toast.success(`"${task.subject}" marked as Resolved!`);
  };

  const inProgressCount = inProgressTasks.length;
  const resolvedCount = resolvedTasks.length;

  return (
    <div className="px-8 py-4 bg-gray-50 min-h-screen">
      <CountBox inProgress={inProgressCount} resolved={resolvedCount} />

      <div className="grid md:grid-cols-3 gap-6 mt-4">
        {/* LEFT - Customer Tickets */}
        <div className="md:col-span-2">
          <h2 className="text-base font-bold text-gray-900 mb-3">Customer Tickets</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <Card data={tickets} onClick={handleTicketClick} />
          </div>
        </div>

        {/* RIGHT - Task Status */}
        <div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h2 className="text-base font-bold text-gray-900 mb-1">Task Status</h2>
            <p className="text-xs text-gray-400 mb-3">Select a ticket to add to Task Status</p>

            {inProgressTasks.length === 0 ? (
              <p className="text-xs text-gray-400 mb-4">No tasks in progress.</p>
            ) : (
              <div className="space-y-2 mb-4">
                {inProgressTasks.map((task) => (
                  <div key={task.id} className="border border-gray-200 rounded-lg p-3">
                    <p className="text-sm font-medium text-gray-800 mb-2">{task.subject}</p>
                    <button
                      onClick={() => handleComplete(task)}
                      className="w-full bg-green-500 hover:bg-green-600 text-white text-xs font-semibold py-1.5 rounded-md transition-colors"
                    >
                      Complete
                    </button>
                  </div>
                ))}
              </div>
            )}

            <h3 className="text-sm font-bold text-gray-900 mb-2">Resolved Task</h3>
            {resolvedTasks.length === 0 ? (
              <p className="text-xs text-gray-400">No resolved tasks yet.</p>
            ) : (
              <div className="space-y-2">
                {resolvedTasks.map((item) => (
                  <div key={item.id} className="bg-blue-50 border border-blue-100 rounded-lg px-3 py-2 text-sm text-gray-700">
                    {item.subject}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;

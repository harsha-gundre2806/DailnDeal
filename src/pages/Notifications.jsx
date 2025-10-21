import { useState, useEffect } from "react";
import { FaBell, FaTimes, FaShoppingCart, FaGift, FaCommentDots } from "react-icons/fa";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [activeNotification, setActiveNotification] = useState(null); // for details panel

  // Mock notifications - replace with API call
  useEffect(() => {
    const savedNotifications =
      JSON.parse(localStorage.getItem("notifications")) || [
        {
          id: 1,
          type: "order",
          title: "Order Shipped!",
          message: "Your order #12345 has been shipped. Track it now.",
          time: "2 hours ago",
          read: false,
        },
        {
          id: 2,
          type: "offer",
          title: "Special Discount!",
          message: "Get 20% off on your next purchase today only.",
          time: "5 hours ago",
          read: false,
        },
        {
          id: 3,
          type: "message",
          title: "New Message from Support",
          message: "Your query has been answered. Check your inbox.",
          time: "1 day ago",
          read: false,
        },
      ];
    setNotifications(savedNotifications);
  }, []);

  const iconByType = (type) => {
    switch (type) {
      case "order":
        return <FaShoppingCart className="text-blue-600 w-5 h-5" />;
      case "offer":
        return <FaGift className="text-green-600 w-5 h-5" />;
      case "message":
        return <FaCommentDots className="text-purple-600 w-5 h-5" />;
      default:
        return <FaBell className="text-gray-600 w-5 h-5" />;
    }
  };

  const handleRemove = (id) => {
    const updated = notifications.filter((n) => n.id !== id);
    setNotifications(updated);
    localStorage.setItem("notifications", JSON.stringify(updated));
  };

  const markAsRead = (id) => {
    const updated = notifications.map((n) =>
      n.id === id ? { ...n, read: true } : n
    );
    setNotifications(updated);
    localStorage.setItem("notifications", JSON.stringify(updated));
  };

  const handleNotificationClick = (note) => {
    markAsRead(note.id);
    setActiveNotification(note);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-4 relative">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 flex items-center gap-2">
          <FaBell /> Notifications
        </h1>

        {notifications.length === 0 ? (
          <p className="text-gray-500 text-center mt-20 text-lg">
            You have no notifications
          </p>
        ) : (
          <div className="space-y-4">
            {notifications.map((note) => (
              <div
                key={note.id}
                className={`relative flex items-start gap-4 p-4 border rounded-xl shadow-md transform transition-all duration-300 cursor-pointer
                  ${note.read ? "bg-white border-gray-200 hover:shadow-lg" : "bg-blue-50 border-l-4 border-blue-600 hover:bg-blue-100 shadow-sm"}
                  hover:-translate-y-1
                `}
                onClick={() => handleNotificationClick(note)}
              >
                {/* Icon */}
                <div className="flex-shrink-0 mt-1">{iconByType(note.type)}</div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className={`font-semibold ${note.read ? "text-gray-800" : "text-blue-700"}`}>
                    {note.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">{note.message}</p>
                  <span className="text-gray-400 text-xs mt-2 block">{note.time}</span>
                </div>

                {/* Remove Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(note.id);
                  }}
                  className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition"
                  title="Dismiss"
                >
                  <FaTimes />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Notification Details Panel */}
      {activeNotification && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
          <div className="bg-white w-1/2 h-full shadow-xl p-6 overflow-y-auto relative animate-slide-left">
            <button
              onClick={() => setActiveNotification(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
            >
              <FaTimes size={22} />
            </button>

            <div className="mt-6">
              <div className="flex items-center gap-3">
                {iconByType(activeNotification.type)}
                <h2 className="text-2xl font-bold text-gray-800">
                  {activeNotification.title}
                </h2>
              </div>
              <p className="mt-4 text-gray-700 text-sm">{activeNotification.message}</p>
              <span className="text-gray-400 text-xs mt-2 block">{activeNotification.time}</span>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes slide-left {
            0% { transform: translateX(100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          .animate-slide-left {
            animation: slide-left 0.3s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}

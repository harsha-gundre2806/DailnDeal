import { useState } from "react";
import { Star } from "lucide-react";

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [feedbackHistory, setFeedbackHistory] = useState([]);

  const maxCommentLength = 500;
  const emojis = ["😡", "😕", "😐", "😊", "😍"]; // 1-5 stars

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      setError("Please provide a rating.");
      return;
    }

    const newFeedback = { rating, comment, date: new Date().toLocaleString() };
    setFeedbackHistory([newFeedback, ...feedbackHistory]);

    setSubmitted(true);
    setError("");
    setRating(0);
    setHoverRating(0);
    setComment("");

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        We value your feedback!
      </h2>

      {/* Success Message */}
      {submitted && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg text-center animate-slide-in">
          Thank you for your feedback!
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-lg text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Star Rating */}
        <div className="mb-4 text-center">
          <p className="mb-2 font-medium text-gray-700">Rate your experience:</p>
          <div className="flex justify-center gap-2 relative">
            {[1, 2, 3, 4, 5].map((star) => {
              const fill = hoverRating >= star || (!hoverRating && rating >= star);
              return (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="focus:outline-none transform transition-transform duration-200 hover:scale-125"
                >
                  <Star
                    size={40}
                    className={`transition-colors duration-300 ${
                      fill ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Emoji Feedback without bouncing */}
          <div className="mt-3 text-5xl transition-transform duration-300">
            {hoverRating ? emojis[hoverRating - 1] : rating ? emojis[rating - 1] : "🤔"}
          </div>
        </div>

        {/* Comment Box with live character count */}
        <div className="mb-4">
          <label
            htmlFor="comment"
            className="block mb-2 font-medium text-gray-700"
          >
            Your Feedback
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value.slice(0, maxCommentLength))}
            rows={4}
            placeholder="Write your thoughts..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none transition-shadow duration-200 shadow-sm focus:shadow-md bg-white text-gray-800"
          />
          <p className="text-right text-sm text-gray-500 mt-1">
            {comment.length}/{maxCommentLength} characters
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={rating === 0}
        >
          Submit Feedback
        </button>
      </form>

      {/* Feedback History */}
      {feedbackHistory.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Recent Feedback</h3>
          <div className="flex flex-col gap-4">
            {feedbackHistory.map((fb, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 transition-transform transform hover:scale-105"
              >
                <div className="flex items-center gap-2 mb-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={`${
                        i < fb.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-auto text-gray-400 text-sm">{fb.date}</span>
                </div>
                <p className="text-gray-700">{fb.comment || "No comment provided."}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

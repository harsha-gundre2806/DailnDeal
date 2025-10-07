function ErrorMessage({ message = "Something went wrong." }) {
  return (
    <div className="p-4 pt-20 bg-red-100 text-red-700 border border-red-400 rounded-lg">
      {message}
    </div>
  );
}

export default ErrorMessage;

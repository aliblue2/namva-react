export const formatDate = (date) => {
  const dateTime = new Date(date);
  return dateTime.toLocaleDateString("fa-IR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const formatTime = (time) => {
  return time.toLocaleString("fa-IR");
};

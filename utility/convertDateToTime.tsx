const convertDateToTime = (time: Date) => {
  return time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export default convertDateToTime;

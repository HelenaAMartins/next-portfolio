export const getApi = async (route) => {
  const response = await fetch(
    `https://gzk9bkt2.directus.app/items/${route}`
  ).then((res) => res.json());
  return response?.data;
};

export const maskDate = (value) => {
  const monthNames = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  const dateArr = value.replace(/\D/g, "").slice(0, 8);
  const year = dateArr.slice(0, 4);
  const month = dateArr.slice(4, 6);
  const day = dateArr.slice(6, 8);
  const date = [day, monthNames[month], year];
  return date.join(" ");
};

export const readingTime = (text) => {
  const wpm = 225;
  const words = text?.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return `${time} min`;
};

const isDateValid = (value) => {
  const date = new Date(value);
  return !isNaN(date);
};

export default isDateValid;

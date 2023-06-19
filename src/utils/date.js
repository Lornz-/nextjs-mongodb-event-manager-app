const isDateValid = (value) => {
  const date = new Date(value);
  return !isNaN(date);
};

/**
 * Get formatted date and time with detected timezone
 *
 * @param {string} dateStr - A date as a string.
 * @param {string} locale - The specified locale for date formatting.
 * @returns {{ date: string, time: string }} Resolves to an `object` containing the formatted `date` and `time`.
 */
const getDateTimeWithTZ = (dateStr, locale = 'en-CA') => {
  if (!isDateValid(dateStr)) return;

  // get detected timezone
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const date = new Date(dateStr);

  const dateOptions = {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
  };

  const timeOptions = {
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  };

  return {
    date: Intl.DateTimeFormat(locale, {
      ...dateOptions,
      timeZone,
    }).format(date),

    time: Intl.DateTimeFormat(locale, {
      ...timeOptions,
      timeZone,
    }).format(date),
  };
};

export { isDateValid, getDateTimeWithTZ };

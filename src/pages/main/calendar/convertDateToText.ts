import moment from 'moment';

const convertDateToText = (d: any) => {
  if (d.date) {
    return moment(d.date).calendar(undefined, {
      sameDay: '[heute]',
      nextDay: '[morgen]',
      nextWeek: 'dddd',
      sameElse: 'DD.MM.YYYY',
    });
  }
  return moment(d.dateTime).calendar(undefined, {
    sameDay: 'HH:mm',
    nextDay: 'ddd HH:mm',
    nextWeek: 'ddd HH:mm',
    sameElse: 'DD.MM.YYYY',
  });
};

export default convertDateToText;

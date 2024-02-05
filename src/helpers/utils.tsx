import axios from 'axios';

export function getHoroSign(month: string, day: number) {

  let horoSign = "";

  if (month === 'December') {

    if (day < 22)
      horoSign = "Sagittarius";
    else
      horoSign = "Capricorn";
  }

  else if (month === 'January') {
    if (day < 20)
      horoSign = "Capricorn";
    else
      horoSign = "Aquarius";
  }

  else if (month === 'February') {
    if (day < 19)
      horoSign = "Aquarius";
    else
      horoSign = "Pisces";
  }

  else if (month === 'March') {
    if (day < 21)
      horoSign = "Pisces";
    else
      horoSign = "Aries";
  }
  else if (month === 'April') {
    if (day < 20)
      horoSign = "Aries";
    else
      horoSign = "Taurus";
  }

  else if (month === 'May') {
    if (day < 21)
      horoSign = "Taurus";
    else
      horoSign = "Gemini";
  }

  else if (month === 'June') {
    if (day < 21)
      horoSign = "Gemini";
    else
      horoSign = "Cancer";
  }

  else if (month === 'July') {
    if (day < 23)
      horoSign = "Cancer";
    else
      horoSign = "Leo";
  }

  else if (month === 'August') {
    if (day < 23)
      horoSign = "Leo";
    else
      horoSign = "Virgo";
  }

  else if (month === 'September') {
    if (day < 23)
      horoSign = "Virgo";
    else
      horoSign = "Libra";
  }

  else if (month === 'October') {
    if (day < 23)
      horoSign = "Libra";
    else
      horoSign = "Scorpio";
  }

  else if (month === 'November') {
    if (day < 22)
      horoSign = "Scorpio";
    else
      horoSign = "Sagittarius";
  }

  return horoSign;
}

const apiUrl = 'https://ro.sms.destiny4you.com';

export const client = axios.create({
  baseURL: apiUrl,
  withCredentials: false,
})
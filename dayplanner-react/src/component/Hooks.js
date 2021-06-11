// import { useEffect, useState } from "react";

// const UseDate = (events, nav) => {
//   const [days, setDays] = useState([]);
//   const [dateDisplay, setDataDisplay] = useState("");

//   const dateEvent = (date) => events.find((e) => e.date === date);

//   useEffect(() => {
//     // const dateEvent = (date) => events.find((e) => e.date === date);
//     const dt = new Date();
//     const weekdays = [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//     ];
//     if (nav !== 0) {
//       dt.setMonth(new Date().getMonth() + nav);
//     }

//     const day = dt.getDate();
//     const month = dt.getMonth();
//     const year = dt.getFullYear();

//     const firstDayOfMonth = new Date(year, month, 1);
//     const daysInMonth = new Date(year, month + 1, 0).getDate();

//     const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
//       weekday: "long",
//       year: "numeric",
//       month: "numeric",
//       day: "numeric",
//     });
//     setDataDisplay(
//       `${dt.toLocaleDateString("en-us", { month: "long" })} ${year}`
//     );

//     const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);

//     const daysArr = [];
//     for (let i = 1; i <= paddingDays + daysInMonth; i++) {
//       const dayString = `${month + 1}/${i - paddingDays}/${year}`;

//       if (1 > paddingDays) {
//         daysArr.push({
//           value: i - paddingDays,
//           events: dateEvent(dayString),
//           isCurrentDay: i - paddingDays === day && nav === 0,
//           date: dayString,
//         });
//       } else {
//         daysArr.push({
//           value: "padding",
//           events: null,
//           isCurrentDay: false,
//           date: "",
//         });
//       }
//     }
//     setDays(daysArr);
//   }, [events, nav]);
//   return { days, dateDisplay };
// };
import { useEffect, useState } from "react";

export const UseDate = (events, nav) => {
  const [dateDisplay, setDateDisplay] = useState("");
  const [days, setDays] = useState([]);

  const DateEvent = (date) => events.find((e) => e.date === date);

  useEffect(() => {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dt = new Date();

    if (nav !== 0) {
      dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    setDateDisplay(
      `${dt.toLocaleDateString("en-us", { month: "long" })} ${year}`
    );
    const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);

    const daysArr = [];

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = `${month + 1}/${i - paddingDays}/${year}`;

      if (i > paddingDays) {
        daysArr.push({
          value: i - paddingDays,
          event: DateEvent(dayString),
          isCurrentDay: i - paddingDays === day && nav === 0,
          date: dayString,
        });
      } else {
        daysArr.push({
          value: "padding",
          event: null,
          isCurrentDay: false,
          date: "",
        });
      }
    }

    setDays(daysArr);
  }, [events, nav]);

  return {
    days,
    dateDisplay,
  };
};
export default UseDate;

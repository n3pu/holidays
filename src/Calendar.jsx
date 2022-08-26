import './Calendar.css';

function Calendar() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  let today = date;
  let fullToday = `${day}/${month+1}/${year}`

  const daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

  const numbers = [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const isWeekend = (number) => {
    return number % 7 === 1 || number % 7 === 0;
  }
  const listItems = numbers.map((number) => 
    <td className={`day ${isWeekend(number) ? "weekend" : ""}`}>{number}</td>
  );

  const months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
  return(
    <>
      <h1>Today</h1>
      <h2>{fullToday}</h2>
      <h3>{months[month]}</h3>
      <table>
        <tr>
          <th>D</th>
          <th>S</th>
          <th>T</th>
          <th>Q</th>
          <th>Q</th>
          <th>S</th>
          <th>S</th>
        </tr>
        <tr>{listItems}</tr>
      </table>
    </>
  );
}

export default Calendar;
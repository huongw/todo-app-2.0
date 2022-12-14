export default function sortDueDates(todos) {
  // filter null dates and dates that exist (1)
  const nullDates = todos.filter(todo  => !todo.dateTime.fullDate && !todo.isComplete);
  const complete = todos.filter(todo  => todo.isComplete);
  const allDates = todos.filter(todo => todo.dateTime.fullDate && !todo.isComplete).sort((a, b) => { 
    if (a.dateTime.daysLeft < b.dateTime.daysLeft) return -1 
    if (a.dateTime.daysLeft > b.dateTime.daysLeft) return 1
    return 0
  });
  // then concat the null dates to the end of the array (2)
  const updatedArr = allDates.concat(nullDates, complete);
  return updatedArr;
}
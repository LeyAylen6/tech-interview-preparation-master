function clockMinuteAdder (time, minutesToAdd) {

  let hours = time[0] + time[1];
  let minutes = time[3] + time[4];

  let totalMinutes = +minutes + minutesToAdd;

  if (totalMinutes >= 60) {
    minutes = totalMinutes - 60
    hours = +hours + 1

  } else minutes = totalMinutes

  if(minutes < 10) minutes = '0' + minutes
  if(hours < 10) hours = '0' + hours
  
              // ? NO FUNCIONA.

  return `${hours}:${minutes}`

}

function clockMinuteAdder (time, minutesToAdd) {
  let hours = time[0] + time[1];
  let minutes = time[3] + time[4];

  let totalMinutes = +minutes + minutesToAdd;
  let totalHours = +hours + Math.floor(totalMinutes/60);

  totalMinutes = totalMinutes % 60
  totalHours = (totalHours - 1) % 12 + 1;

  if(totalMinutes < 10) totalMinutes = '0' + totalMinutes;
  if(totalHours < 10) totalHours = '0' + totalHours;

  return `${totalHours}:${totalMinutes}`
}

// Complejidad >>> O(n**0) = O(1)

function clockMinuteAdder (time, minutesToAdd) {
  let [hours, minutes] = time.split(':')

  let totalMinutes = +minutes + minutesToAdd;
  let totalHours = +hours + Math.floor(totalMinutes/60);

  totalMinutes %= 60
  totalHours = (totalHours - 1) % 12 + 1;

  if(totalMinutes < 10) totalMinutes = '0' + totalMinutes;
  if(totalHours < 10) totalHours = '0' + totalHours;

  return `${totalHours}:${totalMinutes}`
}

console.log(clockMinuteAdder('07:00', 155))

module.exports = clockMinuteAdder

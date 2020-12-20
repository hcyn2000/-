// 转换微秒为单位的时间
export function songTimeFormat(time) {
  //分钟
  var minute = time / 60;
  var minutes = parseInt(minute);

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  //秒
  var second = time % 60;
  var seconds = Math.round(second);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes && seconds) {
    return `${minutes}:${seconds}`;
  }
  return '00:00';
}
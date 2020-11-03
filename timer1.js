alarms = process.argv.splice(2);
for (let alarm of alarms) {
  if (alarm > 0 && Number.isInteger(parseInt(alarm))) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 1000 * alarm);
  }
}
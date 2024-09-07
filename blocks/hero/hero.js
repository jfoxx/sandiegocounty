function getTimeOfDayMessage() {
  const now = new Date();
  const hour = now.getHours(); // Get the current hour (0-23)

  if (hour >= 0 && hour < 12) {
    return 'Good morning';
  }

  if (hour >= 12 && hour < 18) {
    return 'Good afternoon';
  }

  return 'Good evening';
}

export default function decorate(block) {
  const greeting = block.querySelector('u');
  greeting.innerText = getTimeOfDayMessage();
  greeting.classList.add('set');
}

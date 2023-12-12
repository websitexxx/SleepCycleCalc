document.addEventListener("DOMContentLoaded", function() {
    updateTime();
    calculateWakeUpTimes();
  });
  
  function updateTime() {
    const currentTimeElement = document.getElementById("currentTime");
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    currentTimeElement.textContent = formattedTime;
  }
  
  function calculateWakeUpTimes() {
    const wakeUpTimesElement = document.getElementById("wakeUpTimes");
    const sleepCycles = [
      { cycles: 1, label: "1 chu kỳ - ngủ một tiếng rưỡi" },
      { cycles: 2, label: "2 chu kỳ - ngủ ba tiếng" },
      { cycles: 3, label: "3 chu kỳ - ngủ bốn tiếng rưỡi" },
      { cycles: 4, label: "4 chu kỳ - ngủ sáu tiếng" },
      { cycles: 5, label: "5 chu kỳ - ngủ bảy tiếng rưỡi" },
      { cycles: 6, label: "6 chu kỳ - ngủ chín tiếng" }
    ];
  
    for (const cycle of sleepCycles) {
      const wakeUpTime = calculateWakeUpTime(cycle.cycles);
      const listItem = document.createElement("li");
      listItem.textContent = `${wakeUpTime} - ${cycle.label}`;
      wakeUpTimesElement.appendChild(listItem);
    }
  }
  
  function calculateWakeUpTime(cycles) {
    const now = new Date();
    const wakeUpTime = new Date(now.getTime() + cycles * 90 * 60 * 1000); // 90 phút mỗi chu kỳ
    const hours = wakeUpTime.getHours();
    const minutes = wakeUpTime.getMinutes();
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  }
  
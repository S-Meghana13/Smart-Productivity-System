function detectProcrastination(delays) {
    if (delays.length < 2) return false;
    let increasing = 0;
    for (let i = 1; i < delays.length; i++) {
      if (delays[i] > delays[i - 1]) increasing++;
    }
    return (increasing / (delays.length - 1)) >= 0.5;
  }
  
  function generateInsight(delays, dates) {
    const isProcrastinating = detectProcrastination(delays);
    return {
      alert: isProcrastinating
        ? "⚠️ Procrastination detected! Your delay is increasing."
        : "✅ You're staying on track!",
      trend: dates.map((date, i) => ({
        date,
        delay: delays[i]
      }))
    };
  }
  
  module.exports = { detectProcrastination, generateInsight };
  
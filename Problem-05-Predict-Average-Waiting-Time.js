function waitingTime(waitingTimes, serialNumber) {
   if (typeof waitingTimes !== 'object' || typeof serialNumber !== 'number') {
       return "Invalid Input";
   }
   if (waitingTimes.length === 0 || serialNumber <= waitingTimes.length) {
       return "Invalid Input";
   }
   
   let sum = 0;
   for (let i = 0; i < waitingTimes.length; i++) {
       sum += waitingTimes[i];
   }

   const averageTime = Math.round(sum / waitingTimes.length);
   const peopleBefore = serialNumber - waitingTimes.length - 1;

   if (peopleBefore < 0) {
       return 0;
   }

   const totalWaitingTime = peopleBefore * averageTime;
   
   return totalWaitingTime;
}


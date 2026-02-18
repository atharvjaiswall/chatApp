// to convert the date and time inti standard form we have cretaed the new function

export function formatMessageTime(date){
  return new Date(date).toLocaleTimeString("en-us",{
    hour:"2-digit",
    minute:"2-digit",
    hour12: false
  })
}


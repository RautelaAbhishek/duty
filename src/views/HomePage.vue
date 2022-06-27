<template>
  <body>
    <div class="container">
      <div class="calendar">
        <div class="month">
          <i class="prev">
            <!-- <font-awesome-icon icon="fa-solid fa-angle-left"/> -->
          </i>
          <div class="date">
            <h1>{{month}}</h1>
            <p>{{fullDate}}</p>
          </div>
          <i class="next">
            <!-- <font-awesome-icon icon="fa-solid fa-angle-right"/> -->
          </i>
        </div>
        <div class="weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div class="days">
          <div v-for="day in prevMonth" :key="day.id" class="prev-date">{{day}}</div>
          <div v-for="day in currentMonth" :key="day.id" @click="select">{{day}}</div>
          <div v-for="day in nextMonth" :key="day.id" class="next-date">{{day}}</div>
        </div>
        <button @click="toggle">{{choice}}</button>
        <button @click="submit" type="submit">Submit</button>
      </div>
    </div>
  </body>
</template>

<script setup>
import {ref} from 'vue'

const date = new Date();
const month = ref()
const fullDate = ref()
// console.log(props)
const prevMonth = ([])
const currentMonth = ([])
const nextMonth = ([])
const exclude = ([])
const chosen = ([])
const choice = ref('Preference')
console.log(choice)
// const calDays = ref ()
// console.log(ref.days.innerText)

function toggle(){
  if(choice.value == 'Preference'){
    choice.value = 'Exclusion';
  }
  else{
    choice.value = 'Preference'
  }
}

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.getElementsByClassName(".days");
  console.log(monthDays)

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();
  console.log(firstDayIndex)
  console.log(prevLastDay)

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  month.value = months[date.getMonth()];
  // console.log(month)
  fullDate.value = new Date().toDateString();

    // console.log(document.getElementById('#month'))


  console.log(months[date.getMonth()])
  console.log(new Date().toDateString())
  // let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    prevMonth.push(prevLastDay - x +1);
  }
  console.log(prevMonth)
  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      currentMonth.push(i)
    } else {
      currentMonth.push(i)
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    nextMonth.push(j)
  }
  
};

console.log()
function select(event){

  console.log(event.target.innerHTML)
  if(choice.value == 'Preference'){
    if (event.target.style.backgroundColor == 'green'){
      event.target.style.backgroundColor = '';
      chosen.splice(chosen.indexOf(event.target.innerHTML),1)
    }
    else if (event.target.style.backgroundColor == ''){
      if (chosen.length >= 5){
        alert('Maximum prefered duty dates selected')
      }
      else{
        event.target.style.backgroundColor = 'green';
        chosen.push(event.target.innerHTML);
      }
      

    }
  }
  else if(choice.value == 'Exclusion'){
    if (event.target.style.backgroundColor == 'red'){
      event.target.style.backgroundColor = '';
      exclude.splice(exclude.indexOf(event.target.innerHTML),1)
    }
    else if (event.target.style.backgroundColor == ''){
      if (exclude.length >= 5){
        alert('Maximum excluded duty dates selected')
      }
      else{
        event.target.style.backgroundColor = 'red';
        exclude.push(event.target.innerHTML);
      }
      

    }
  }
  
  
  

  console.log(chosen)
  console.log(exclude)
}
const person = ref([])
const name = ref('hi')
function submit() {
    person.value.push([
      ['name',name],
      ['chosen dates',chosen],
      ['excluded dates',exclude]
    ])
    console.log(person.value.name)
    console.log(chosen)
    console.log(exclude)
  }

renderCalendar();
</script>

<style scoped>
@import '../assets/calendar.css'
</style>
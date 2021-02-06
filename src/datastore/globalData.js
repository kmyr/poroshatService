import Vue from "vue";

//data
export const salaryList = {
  salaryDetails: {
    baseSalary: 19104270,
    years: 1000000,
    worker: 4000000,
    housing: 3000000,
    childrenBase: 1910427,
  },
};

export const gender = ["مذکر", "مونث"];
export const diploma = [
  "ابتدایی",
  "سیکل",
  "دیپلم",
  "کاردانی",
  "کارشناسی",
  "کارشناسی ارشد",
  "دکترا",
];
export const department = [
  { name: "منابع انسانی", title: "hr" },
  { name: "اداری", title: "adminstrator" },
  { name: "فنی مهندسی", title: "r&d" },
  { name: "خرید", title: "purchase" },
  { name: "فروش", title: "sales" },
  { name: "انبار", title: "warehouse" },
  { name: "تولید", title: "production" },
  { name: "کنترل کیفی", title: "qc" },
  { name: "تضمین کیفیت", title: "qa" },
  { name: "it", title: "it" },
];
export const allMonths = [
  { name: "فروردین", number: 1, days: 31 },
  { name: "اردیبهشت", number: 2, days: 31 },
  { name: "خرداد", number: 3, days: 31 },
  { name: "تیر", number: 4, days: 31 },
  { name: "مرداد", number: 5, days: 31 },
  { name: "شهریور", number: 6, days: 31 },
  { name: "مهر", number: 7, days: 30 },
  { name: "آبان", number: 8, days: 30 },
  { name: "آذر", number: 9, days: 30 },
  { name: "دی", number: 10, days: 30 },
  { name: "بهمن", number: 11, days: 30 },
  { name: "اسفند", number: 12, days: 30 },
];

//emits
export const userActions = new Vue();
export const formFields = new Vue();

//conditions data
"فروش",
  "تولید",
  "خرید",
  "انبار",
  "فنی مهندسی",
  "اداری",
  "",
  "IT",
  "تضمین کیفیت",
  "کنترل کیفیت";

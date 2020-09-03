import Vue from 'vue';

//data
export const salaryList = {
	newSalaryList: [
		{
			baseSalary: '19,104,270',
			years: '1،000،000',
			worker: '4،000،000',
			housing: '3،000،000',
			children: '1,910,427',
			sumOfSalary: '29,014,697',
			salaryLetter: 'بیست و نه میلیون و چهارده هزار و ششصد و نود و هفت ریال',
			description: 'یک فرزند، یکسال سابقه'
		},
		{
			baseSalary: '19,104,270',
			years: '0',
			worker: '4,000,000',
			housing: '3,000,000',
			children: '1,910,427',
			sumOfSalary: '28,014,697',
			salaryLetter: 'بیست و هشت میلیون و چهارده هزار و ششصد و نود و هفت ریال',
			description: 'یک فرزند'
		},
		{
			baseSalary: '19,104,270',
			years: '1،000،000',
			worker: '4,000,000',
			housing: '3،000،000',
			children: '3,820,854',
			sumOfSalary: '30,925,124',
			salaryLetter: 'سی میلیون و نهصد و بیست و پنج هزار و صد و بیست و چهار ریال',
			description: 'دو فرزند، یکسال سابقه'
		},
		{
			baseSalary: '19,104,270',
			years: '0',
			worker: '4,000,000',
			housing: '3،000،000',
			children: '3,820,854',
			sumOfSalary: '29,925,124',
			salaryLetter: 'بیست و نه میلیون و  نهصد و  بیست و پنج هزار و صد و بیست و چهار ریال',
			description: 'دو فرزند'
		},
		{
			baseSalary: '19,104,270',
			years: '1،000،000',
			worker: '4,000,000',
			housing: '3،000،000',
			children: '0',
			sumOfSalary: '27,104,270',
			salaryLetter: 'بیست و هفت میلیون و صد و چهار هزار و دویست و هفتاد ریال',
			description: 'یکسال سابقه'
		},
		{
			baseSalary: '19,104,270',
			years: '0',
			worker: '4,000,000',
			housing: '3،000،000',
			children: '0',
			sumOfSalary: '26,104,270',
			salaryLetter: 'بیست و شش میلیون و صد و چهار هزار و دویست و هفتاد ریال',
			description: 'بدون عائله و سنوات'
		},
		{
			baseSalary: '21،703،260',
			years: '1,000,000',
			worker: '4,000,000',
			housing: '3،000،000',
			children: '1،910،427',
			sumOfSalary: '31،613،687',
			salaryLetter: 'سی و یک میلیون و ششصد و سیزده هزار و ششصد و هشتاد و هفت ریال',
			description: 'پایه حقوق بالاتر'
		}
	],
	salaryListOldVersion: [
		{
			baseSalary: '18,354,270',
			years: '1،750،000',
			worker: '4،000،000',
			housing: '1،000،000',
			children: '1,835,427',
			sumOfSalary: '26,939,697',
			salaryLetter: 'بیست و شش میلیون و نهصد و سی و نه هزار و ششصد و نود و هفت ریال',
			description: 'یک فرزند، یکسال سابقه'
		},
		{
			baseSalary: '18,354,270',
			years: '0',
			worker: '4,000,000',
			housing: '3,000,000',
			children: '1,835,427',
			sumOfSalary: '25,189,697',
			salaryLetter: 'بیست و پنج میلیون و صد و هشتاد و نه هزار و ششصد و نود و هفت ریال',
			description: 'یک فرزند'
		},
		{
			baseSalary: '18,354,270',
			years: '1،750،000',
			worker: '4,000,000',
			housing: '1،000،000',
			children: '3,670,854',
			sumOfSalary: '28,775,124',
			salaryLetter: 'بیست و هشت میلیون و هفتصد و هفتاد و پنج هزار و صد و بیست و چهار ریال',
			description: 'دو فرزند، یکسال سابقه'
		},
		{
			baseSalary: '18,354,270',
			years: '0',
			worker: '4,000,000',
			housing: '1،000،000',
			children: '3,670,854',
			sumOfSalary: '27,025,124',
			salaryLetter: 'بیست و هفت میلیون و  بیست و پنج هزار و صد و بیست و چهار ریال',
			description: 'دو فرزند'
		},
		{
			baseSalary: '18,354,270',
			years: '1،750،000',
			worker: '4,000,000',
			housing: '1،000،000',
			children: '0',
			sumOfSalary: '24,558,270',
			salaryLetter: 'بیست و چهار میلیون و پانصدو پنجاه و هشت هزار و دویست و هفتاد ریال',
			description: 'یکسال سابقه'
		},
		{
			baseSalary: '18,354,270',
			years: '0',
			worker: '4,000,000',
			housing: '1،000،000',
			children: '0',
			sumOfSalary: '23,354,270',
			salaryLetter: 'بیست و سه میلیون و دویست و پنجاه و چهار هزار و دویست و هفتاد ریال',
			description: 'بدون عائله و سنوات'
		}
	]
};

export const gender = [ 'مذکر', 'مونث' ];
export const education = [ 'ابتدایی', 'سیکل', 'دیپلم', 'کاردانی', 'کارشناسی', 'کارشناسی ارشد', 'دکترا' ];
export const department = [
	{ name: 'منابع انسانی', title: 'hr' },
	{ name: 'اداری', title: 'adminstrator' },
	{ name: 'فنی مهندسی', title: 'r&d' },
	{ name: 'خرید', title: 'purchase' },
	{ name: 'فروش', title: 'sales' },
	{ name: 'انبار', title: 'warehouse' },
	{ name: 'تولید', title: 'production' },
	{ name: 'کنترل کیفی', title: 'qc' },
	{ name: 'تضمین کیفیت', title: 'qa' },
	{ name: 'it', title: 'it' }
];

//emits
export const userActions = new Vue();
export const formFields = new Vue();

//conditions data
'فروش', 'تولید', 'خرید', 'انبار', 'فنی مهندسی', 'اداری', '', 'IT', 'تضمین کیفیت', 'کنترل کیفیت';

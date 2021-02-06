<template>
  <div class="preview-sheet">
    <button
      id
      class="btn btn-outline-primary hide-on-print"
      @click="printSheet"
    >
      پرینت
    </button>
    <button
      id="cancelBtn"
      class="btn btn-outline-danger hide-on-print"
      @click="cancel('/')"
    >
      انصراف
    </button>
    <button
      class="btn btn-primary hide-on-print"
      id="scrollTop"
      @click="scrollTop()"
    >
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-arrow-bar-up"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M11.354 5.854a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L8 3.207l2.646 2.647a.5.5 0 0 0 .708 0z"
        />
        <path
          fill-rule="evenodd"
          d="M8 10a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-1 0v6.5a.5.5 0 0 0 .5.5zm-4.8 1.6c0-.22.18-.4.4-.4h8.8a.4.4 0 0 1 0 .8H3.6a.4.4 0 0 1-.4-.4z"
        />
      </svg>
    </button>
    <div class="file">
      <div class="sheet" id="sheet">
        <div class="header">
          <div class="headerDate">
            <span class="headerDateValue">
              <span>
                1399/{{ userInfo.startDate.month }}/{{
                  userInfo.startDate.day
                }}
                : </span
              >تاریخ
            </span>
            <br />
            <span class="headerNumberValue"> <span>:</span>شماره </span>
          </div>
          <div class="headerTitle">
            <span class="titr" style="font-size: 22px"
              >فرم قراردادکار موقت</span
            >
            <br />
            <span class="titr">صنایع پالایش پروشات پالاد</span>
          </div>
          <div class="headerLogo">
            <img class="headerLogoImg" src="../../img/poroshat-logo.png" alt />
          </div>
        </div>
        <div class="body-part">
          اين قرارداد في‌مابين شركت صنایع پالایش پروشات پالاد به نمايندگي آقای
          نصیر صفاری كه در اين قرارداد اختصاراً «كـارفرمـا» ناميده می‌شود و طرف
          ديگر قرارداد كه اختصاراً « همکار » ناميده مي شود، با مشخصات زير منعقد
          مي گردد
          <br />آقای/خانم:
          <span class="bold"
            >{{ userInfo.firstName }} {{ userInfo.lastName }}</span
          >
          فرزند:
          <span class="bold">{{ userInfo.fatherName }}</span>
          متولد:
          <span class="bold">{{ userInfo.birthDate }}</span>
          شماره ملی:
          <span class="bold">{{ userInfo.idCard }}</span>
          میزان تحصیلات:
          <span class="bold">{{ userInfo.diploma }}</span>
          <br />به نشانی:
          <span class="bold">{{ userInfo.address }}</span>
          <br />
          <span class="titr">ماده 1) مـوضـوع قـرارداد</span>
          <br />عبارتست از انجـام وظايف ذيـل تـوسـط همکار در پسـت سـازمـانـي،
          تحـت عنـوان
          <span class="bold">{{ userInfo.role }}</span>
          و هم چنین انجام ساير امـور محـوله و وظايف مرتبـط با شغـل كـارمنـد
          براسـاس دستـورات كـارفـرمـا
          <br />
          <span class="titr">ماده 2) محل خدمت و انجام موضوع قـرارداد</span>
          <br />
          محل خدمت و انجام موضوع قرارداد، در {{ userInfo.employmentPlace }} مي
          باشد ليكن با توجه به بنـد « د » ماده 10 قانون كار،‌ همکار اختيار تغيير
          محل خدمت خـود را به كارفرما تفويض مي نمايد. بنابراين كارفرما حـق خواهد
          داشت با توجه نياز شركت، در هر زمان كه اقتضا نمايد محل خدمت كارمند را
          تغيير دهد. چنانچه همکار در واحد جديد حاضر به ادامه همكاري نباشد، اين
          موضوع به منزله استعفاي كارمند تلقي مي‌گرد؛ و همچنین همکار ضامن میشود
          که در مدت زمان همکاری با شرکت پروشات فیلتر، ساکن اصفهان باشد؛ در صورت
          قطع چنین ضمانتی، همکار میبایست در اسرع وقت به شرکت اطلاع دهد
          <br />
          <span class="titr">ماده 3) زمـان انجـام كـار</span>
          <br />زمان انجام كار ، 44 ساعت در هفته تعيين مي گردد كه توزيع آن در
          ماه براساس آئين نامه ها و ضوابط صورت مي پذيرد
          <br />
          <span class="titr">ماده 4) حقـوق و مـزايـا</span>
          <br />
          <table class="costs">
            <tbody>
              <tr>
                <td class="salaryTableTitle">حقوق پایه</td>
                <td class="salarySectionTable">
                  {{ thousandSeprator(userInfo.salary.baseSalary) }}
                </td>
                <td class="salaryCurrency">ریال</td>
              </tr>
              <tr>
                <td class="salaryTableTitle">پایه سنوات</td>
                <td class="salarySectionTable">
                  {{ thousandSeprator(userInfo.salary.years) }}
                </td>
                <td class="salaryCurrency">ریال</td>
              </tr>
              <tr>
                <td class="salaryTableTitle">بن کارگری</td>
                <td class="salarySectionTable">
                  {{ thousandSeprator(userInfo.salary.worker) }}
                </td>
                <td class="salaryCurrency">ریال</td>
              </tr>
              <tr>
                <td class="salaryTableTitle">حق مسکن</td>
                <td class="salarySectionTable">
                  {{ thousandSeprator(userInfo.salary.housing) }}
                </td>
                <td class="salaryCurrency">ریال</td>
              </tr>
              <tr>
                <td class="salaryTableTitle">حق عائله مندی و اولاد</td>
                <td class="salarySectionTable">
                  {{ thousandSeprator(userInfo.salary.children) }}
                </td>
                <td class="salaryCurrency">ریال</td>
              </tr>
              <tr>
                <td class="salaryTableTitle">
                  جمع کل:
                  <span class="bold">{{ userInfo.salary.salaryLetter }}</span>
                </td>
                <td class="salarySectionTable" colspan="2">
                  {{ thousandSeprator(userInfo.salary.totalSalary) }}
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <span class="bold">
            لازم به ذکر است مبنای جدول حقوق و مزایای فوق افزایش حداقل دستمزد
            مصوبه شورای عالی کار در سال 99 می باشد
          </span>
          <br />
          <span class="titr">ماده 5) مـدت قـرارداد</span>
          <br />
          مـدت قـرارداد از تـاريـخ 1399/{{ userInfo.startDate.month }}/{{
            userInfo.startDate.day
          }}
          لغـايـت 1399/{{ userInfo.startDate.month }}/{{ currentFinishedDay }}
          مي بـاشـد
          <br />
          <span class="titr">ماده 6) موارد فسـخ قـرارداد</span>
          <ol style="direction: rtl">
            <li>
              افشاء یا مخفی نمودن اطلاعات، اسناد، مدارک و اسرار محرمانه شرکت به
              هردلیل
            </li>
            <li>
              ارائه اسناد و مدارک هویتی جعلی یا اظهارات و اطلاعات فردی ارائه شده
              در کلیه فرمهای استخدامی و اداری که خلاف واقع باشد
            </li>
            <li>
              غيبت غير موجه همكار به مدت بيش از 3 روز بصورت متوالي یا 7 روز به
              صورت متناوب
            </li>
            <li>
              در صورت عدم نياز به همكاري،كارفرما موضوع را 15 روز قبل از اتمام
              قرارداد به همکار اعلام می نمايد
            </li>
            <li>
              تخلف همكار كه بنا به تشخيص كميسيون رسيدگي به تخلفات، حكم اخراج
              صادر گردد
            </li>
            <li>
              بروز حوادث غير مترقبه و پيش بيني نشده كه منجر به تعطيلي كارگاه به
              صورت موقت يا دائم گردد
            </li>
            <li>
              تعطیلی دفتر/کارگاه به هر علت از جمله اراده کارفرما مبنی بر تغییر
              یا تعطیل فعالیت، پایان پروژه، یا احکام مراجع صالحه اداری و قضایی
            </li>
            <li>عدم رضایت کارفرما از همکار</li>
            <li>
              طبق بند ""ز"" و "" ح"" (اصلاحیه ماده 21 قانون کار مصوب 87/08/25)
            </li>
          </ol>
        </div>
        <div class="footer">
          <div class="footerNumber"><span>PF0013 :</span>کد فرم</div>
          <div class="footerDate">تاریخ آخرین بازنگری: ۹۸/۰۱/۲۸</div>
          <div class="footerEdit">ویرایش: ۰۰۱</div>
        </div>
      </div>

      <div class="sheet second-sheet">
        <div class="header">
          <div class="headerDate">
            <span class="headerDateValue">
              <span>
                1399/{{ userInfo.startDate.month }}/{{
                  userInfo.startDate.day
                }}
                : </span
              >تاریخ
            </span>
            <br />
            <span class="headerNumberValue"> <span>:</span>شماره </span>
          </div>
          <div class="headerTitle">
            <span class="titr" style="font-size: 22px"
              >فرم قراردادکار موقت</span
            >
            <br />
            <span class="titr">صنایع پالایش پروشات پالاد</span>
          </div>
          <div class="headerLogo">
            <img class="headerLogoImg" src="../../img/poroshat-logo.png" alt />
          </div>
        </div>
        <div class="body-part">
          <span class="titr">ماده 7) تعهدات همکار</span>
          <ol style="direction: rtl">
            <li>
              انجام امور محوله به نحو احسن طبق شرح وظایف محوله از طرف کارفرما
            </li>
            <li>رعایت کلیة ضوابط و مقررات قانونی و داخلی شرکت</li>
            <li>
              در صورت عدم تمایل به همکاری 30 روز قبل از اتمام قرارداد باید
              کارفرما را کتباً مطلع نماید
            </li>
            <li>
              همکار با توجه به نوع قرارداد که موقت می باشد تعهد می نماید که بعد
              از اعلام عدم نیاز، اتمام اجرای پروژه/طرح، توقف کار بنا به دلایل
              اقتصادی، سیاسی و اجتماعی، اتمام قرارداد و ... ادعای هیچگونه حق و
              حقوقی نداشته، بدیهی است کارفرما در این مورد به غیر از دیون، تعهد و
              مسئولیت دیگری ندارد
            </li>
            <li>
              پرداخت هرگونه خسارت وارده به کارفرما ناشی از سهل انگاری یا کم کاری
              که موجبات خسارت یا هزینه های مازاد را به کارفرما فراهم آورد به
              اضافه 20درصد بالاسری
            </li>
            <li>
              همکار موظف به رعایت اصول ایمنی در کار و استفاده از وسایل حفاظت
              فردی تحویلی می باشد و بدیهی است هرگونه عواقب ناشی از عدم رعایت آن؛
              متوجه همکار خواهد بود
            </li>
            <li>
              همکار می بایست کلیه لوازم و امکاناتی را که در اختیار وی گذاشته شده
              به نحو احسن نگهداری نماید و حق خروج آنها را از محل کار ندارد
            </li>
            <li>
              کارفرما میتواند بنا بر ضرورت از همکار در شغل های مشابه و یا محل
              های دیگر برای مدت کوتاه یا تا پایان قرارداد استفاده نماید
            </li>
          </ol>

          <span class="titr">ماده8) تعهدات کارفرما</span>
          <ol style="direction: rtl">
            <li>
              پرداخت حقوق و مزایا مطابق با قرارداد جاری و در اختیار گذاشتن لوازم
              کار مناسب
            </li>
            <li>
              به موجب ماده 148 قانون کار، همکار را نزد سازمان تامین اجتماعی و یا
              سایر دستگاه های بیمه گر بیمه نماید
            </li>
            <li>
              پرداخت عیدی و پاداش سالیانه همکار مصوبه سال 70 مجلس شورای اسلامی
              که باتوافق همکار به صورت ماهیانه/سالیانه مطابق ماده 4
              قراردادپرداخت می گردد
            </li>
            <li>
              پرداخت سنوات پایان کار که با توافق همکار به صورت ماهیانه/سالیانه
              مطابق ماده 4 قرارداد پرداخت می گردد
            </li>
          </ol>
          <span class="titr">ماده 9) ساير مقررات</span>
          <ol style="direction: rtl">
            <li>
              همکار مشمول این قرارداد به لحاظ بیمه و بازنشستگی، از کارافتادگی،
              معذوریت از کار، بروز حادثه ناشی از کار، بیماری، فوت و سایر تسهیلات
              مقرر در قانون،تابع قانون کار و تأمین اجتماعی خواهد بود
            </li>
            <li>
              کلیه همکاران می بایست تضمین لازم و مناسب با شغل خویش را بسپارند
            </li>
            <li>
              هرگاه برای کارفرما اثبات گردد که همکار به هر طریق ممکن اطلاعات
              فنی، مهندسی، تحقیقاتی و یا اوراق، مدارك و اسناد مالی، اقتصادی و
              بازرگانی کارفرما را به هر دلیل مورد سوء استفاده قرار داده و یادر
              اثر قصور موجب ضرر و زیان به شرکت گردیده، کارفرما جهت رسیدن به حقوق
              خودوجبران ضررحاصله، ضمن فسخ قرارداد اقدامات قانونی خودرا ازطریق
              مراجعه به مقامات قضایی پیگیری می نماید
            </li>
            <li>
              در صورت فسخ یکطرفه قرارداد توسط همکار، کارفرما حق دارد ضرر و زیان
              ناشی از فسخ قرارداد را مطالبه نماید
            </li>
            <li>
              کلیة کسورات قانونی طبق مقررات از حقوق همکار در زمان پرداخت حقوق و
              مزایا کسر و به حساب های مربوطه واریز خواهد گردید
            </li>
            <li>
              کارفرما می تواند در صورت وجود اعتبار، عیدی و پاداش، سنوات قانونی و
              ... را به صورت ماهیانه پرداخت و در پایان قرارداد/ سال/ ماه تسویه
              حساب قطعی نماید
            </li>
            <li>
              همکار نمی تواند از مرخصی بدون حقوق استفاده نماید مگر با توافق
              کارفرما
            </li>
          </ol>
          <article>
            <p class="bold" style="text-align: right !important">
              همکار اقرار می نماید که با آگاهی کامل و در کمال صحت و سلامت کامل
              عقلی، به کلیه جوانب قرارداد و شرایط معمول و جاری شرکت/کارگاه آگاهی
              کامل دارد و موظف است کلیه قوانین و مقررات و آئین نامه های داخلی
              شرکت از جمله ایمنی و بهداشت را رویت و رعایت نماید. وی همچنین اقرار
              می نماید که کلیه مفاد این قرارداد از جمله موارد فسخ قرارداد )مطابق
              بندهای "ز" و "ح" ماده 21 ( و تعهدات را مطالعه و مورد قبول و توافق
              ایشان بوده و در آینده حق هیچگونه اعتراضی ندارد. امضاء زیر این برگه
              به منزله اطلاع و قبول کلیه شرایط مندرج در این قرارداد می باشد
            </p>
          </article>
          <br />
          <table class="signatureSection">
            <tr>
              <td>مدیر عامل</td>
              <td>مدیر منابع انسانی</td>
              <td>مدیر مربوطه</td>
              <td>همکار</td>
            </tr>
            <tr class="sign">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="footer">
          <div class="footerNumber"><span>PF0013 :</span>کد فرم</div>
          <div class="footerDate">تاریخ آخرین بازنگری: ۹۸/۰۱/۲۸</div>
          <div class="footerEdit">ویرایش: ۰۰۱</div>
        </div>
      </div>
    </div>

    <div
      class="file"
      v-for="(month, i) in parseInt(userInfo.periodDate)"
      :key="i"
    >
      <div class="sheet" id="sheet">
        <div class="header">
          <div class="headerDate">
            <span class="headerDateValue">
              <span>
                1399/{{
                  allMonths[parseInt(userInfo.startDate.month) + month - 1]
                    .number
                }}/1 : </span
              >تاریخ
            </span>
            <br />
            <span class="headerNumberValue"> <span>:</span>شماره </span>
          </div>
          <div class="headerTitle">
            <span class="titr" style="font-size: 22px"
              >فرم قراردادکار موقت</span
            >
            <br />
            <span class="titr">صنایع پالایش پروشات پالاد</span>
          </div>
          <div class="headerLogo">
            <img class="headerLogoImg" src="../../img/poroshat-logo.png" alt />
          </div>
        </div>
        <div class="body-part">
          اين قرارداد في‌مابين شركت صنایع پالایش پروشات پالاد به نمايندگي آقای
          نصیر صفاری كه در اين قرارداد اختصاراً «كـارفرمـا» ناميده می‌شود و طرف
          ديگر قرارداد كه اختصاراً « همکار » ناميده مي شود، با مشخصات زير منعقد
          مي گردد
          <br />آقای/خانم:
          <span class="bold"
            >{{ userInfo.firstName }} {{ userInfo.lastName }}</span
          >
          فرزند:
          <span class="bold">{{ userInfo.fatherName }}</span>
          متولد:
          <span class="bold">{{ userInfo.birthDate }}</span>
          شماره ملی:
          <span class="bold">{{ userInfo.idCard }}</span>
          میزان تحصیلات:
          <span class="bold">{{ userInfo.diploma }}</span>
          <br />به نشانی:
          <span class="bold">{{ userInfo.address }}</span>
          <br />
          <span class="titr">ماده 1) مـوضـوع قـرارداد</span>
          <br />عبارتست از انجـام وظايف ذيـل تـوسـط همکار در پسـت سـازمـانـي،
          تحـت عنـوان
          <span class="bold">{{ userInfo.role }}</span>
          و هم چنین انجام ساير امـور محـوله و وظايف مرتبـط با شغـل كـارمنـد
          براسـاس دستـورات كـارفـرمـا
          <br />
          <span class="titr">ماده 2) محل خدمت و انجام موضوع قـرارداد</span>
          <br />
          محل خدمت و انجام موضوع قرارداد، در {{ userInfo.employmentPlace }} مي
          باشد ليكن با توجه به بنـد « د » ماده 10 قانون كار،‌ همکار اختيار تغيير
          محل خدمت خـود را به كارفرما تفويض مي نمايد. بنابراين كارفرما حـق خواهد
          داشت با توجه نياز شركت، در هر زمان كه اقتضا نمايد محل خدمت كارمند را
          تغيير دهد. چنانچه همکار در واحد جديد حاضر به ادامه همكاري نباشد، اين
          موضوع به منزله استعفاي كارمند تلقي مي‌گرد؛ و همچنین همکار ضامن میشود
          که در مدت زمان همکاری با شرکت پروشات فیلتر، ساکن اصفهان باشد؛ در صورت
          قطع چنین ضمانتی، همکار میبایست در اسرع وقت به شرکت اطلاع دهد
          <br />
          <span class="titr">ماده 3) زمـان انجـام كـار</span>
          <br />زمان انجام كار ، 44 ساعت در هفته تعيين مي گردد كه توزيع آن در
          ماه براساس آئين نامه ها و ضوابط صورت مي پذيرد
          <br />
          <span class="titr">ماده 4) حقـوق و مـزايـا</span>
          <br />
          <table class="costs">
            <tbody>
              <tr>
                <td class="salaryTableTitle">حقوق پایه</td>
                <td class="salarySectionTable">
                  {{ thousandSeprator(userInfo.salary.baseSalary) }}
                </td>
                <td class="salaryCurrency">ریال</td>
              </tr>
              <tr>
                <td class="salaryTableTitle">پایه سنوات</td>
                <td class="salarySectionTable">
                  {{ thousandSeprator(userInfo.salary.years) }}
                </td>
                <td class="salaryCurrency">ریال</td>
              </tr>
              <tr>
                <td class="salaryTableTitle">بن کارگری</td>
                <td class="salarySectionTable">
                  {{ thousandSeprator(userInfo.salary.worker) }}
                </td>
                <td class="salaryCurrency">ریال</td>
              </tr>
              <tr>
                <td class="salaryTableTitle">حق مسکن</td>
                <td class="salarySectionTable">
                  {{ thousandSeprator(userInfo.salary.housing) }}
                </td>
                <td class="salaryCurrency">ریال</td>
              </tr>
              <tr>
                <td class="salaryTableTitle">حق عائله مندی و اولاد</td>
                <td class="salarySectionTable">
                  {{ thousandSeprator(userInfo.salary.children) }}
                </td>
                <td class="salaryCurrency">ریال</td>
              </tr>
              <tr>
                <td class="salaryTableTitle">
                  جمع کل:
                  <span class="bold">{{ userInfo.salary.salaryLetter }}</span>
                </td>
                <td class="salarySectionTable" colspan="2">
                  {{ thousandSeprator(userInfo.salary.totalSalary) }}
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <span class="bold">
            لازم به ذکر است مبنای جدول حقوق و مزایای فوق افزایش حداقل دستمزد
            مصوبه شورای عالی کار در سال 99 می باشد
          </span>
          <br />
          <span class="titr">ماده 5) مـدت قـرارداد</span>
          <br />
          مـدت قـرارداد از تـاريـخ 1399/{{
            allMonths[parseInt(userInfo.startDate.month) + month - 1].number
          }}/1 لغـايـت 1399/{{
            allMonths[parseInt(userInfo.startDate.month) + month - 1].number
          }}/{{
            allMonths[parseInt(userInfo.startDate.month) + month - 1].days
          }}
          مي بـاشـد
          <br />
          <span class="titr">ماده 6) موارد فسـخ قـرارداد</span>
          <ol style="direction: rtl">
            <li>
              افشاء یا مخفی نمودن اطلاعات، اسناد، مدارک و اسرار محرمانه شرکت به
              هردلیل
            </li>
            <li>
              ارائه اسناد و مدارک هویتی جعلی یا اظهارات و اطلاعات فردی ارائه شده
              در کلیه فرمهای استخدامی و اداری که خلاف واقع باشد
            </li>
            <li>
              غيبت غير موجه همكار به مدت بيش از 3 روز بصورت متوالي یا 7 روز به
              صورت متناوب
            </li>
            <li>
              در صورت عدم نياز به همكاري،كارفرما موضوع را 15 روز قبل از اتمام
              قرارداد به همکار اعلام می نمايد
            </li>
            <li>
              تخلف همكار كه بنا به تشخيص كميسيون رسيدگي به تخلفات، حكم اخراج
              صادر گردد
            </li>
            <li>
              بروز حوادث غير مترقبه و پيش بيني نشده كه منجر به تعطيلي كارگاه به
              صورت موقت يا دائم گردد
            </li>
            <li>
              تعطیلی دفتر/کارگاه به هر علت از جمله اراده کارفرما مبنی بر تغییر
              یا تعطیل فعالیت، پایان پروژه، یا احکام مراجع صالحه اداری و قضایی
            </li>
            <li>عدم رضایت کارفرما از همکار</li>
            <li>
              طبق بند ""ز"" و "" ح"" (اصلاحیه ماده 21 قانون کار مصوب 87/08/25)
            </li>
          </ol>
        </div>
        <div class="footer">
          <div class="footerNumber"><span>PF0013 :</span>کد فرم</div>
          <div class="footerDate">تاریخ آخرین بازنگری: ۹۸/۰۱/۲۸</div>
          <div class="footerEdit">ویرایش: ۰۰۱</div>
        </div>
      </div>

      <div class="sheet second-sheet">
        <div class="header">
          <div class="headerDate">
            <span class="headerDateValue">
              <span>
                1399/{{
                  allMonths[parseInt(userInfo.startDate.month) + month - 1]
                    .number
                }}/1 : </span
              >تاریخ
            </span>
            <br />
            <span class="headerNumberValue"> <span>:</span>شماره </span>
          </div>
          <div class="headerTitle">
            <span class="titr" style="font-size: 22px"
              >فرم قراردادکار موقت</span
            >
            <br />
            <span class="titr">صنایع پالایش پروشات پالاد</span>
          </div>
          <div class="headerLogo">
            <img class="headerLogoImg" src="../../img/poroshat-logo.png" alt />
          </div>
        </div>
        <div class="body-part">
          <span class="titr">ماده 7) تعهدات همکار</span>
          <ol style="direction: rtl">
            <li>
              انجام امور محوله به نحو احسن طبق شرح وظایف محوله از طرف کارفرما
            </li>
            <li>رعایت کلیة ضوابط و مقررات قانونی و داخلی شرکت</li>
            <li>
              در صورت عدم تمایل به همکاری 30 روز قبل از اتمام قرارداد باید
              کارفرما را کتباً مطلع نماید
            </li>
            <li>
              همکار با توجه به نوع قرارداد که موقت می باشد تعهد می نماید که بعد
              از اعلام عدم نیاز، اتمام اجرای پروژه/طرح، توقف کار بنا به دلایل
              اقتصادی، سیاسی و اجتماعی، اتمام قرارداد و ... ادعای هیچگونه حق و
              حقوقی نداشته، بدیهی است کارفرما در این مورد به غیر از دیون، تعهد و
              مسئولیت دیگری ندارد
            </li>
            <li>
              پرداخت هرگونه خسارت وارده به کارفرما ناشی از سهل انگاری یا کم کاری
              که موجبات خسارت یا هزینه های مازاد را به کارفرما فراهم آورد به
              اضافه 20درصد بالاسری
            </li>
            <li>
              همکار موظف به رعایت اصول ایمنی در کار و استفاده از وسایل حفاظت
              فردی تحویلی می باشد و بدیهی است هرگونه عواقب ناشی از عدم رعایت آن؛
              متوجه همکار خواهد بود
            </li>
            <li>
              همکار می بایست کلیه لوازم و امکاناتی را که در اختیار وی گذاشته شده
              به نحو احسن نگهداری نماید و حق خروج آنها را از محل کار ندارد
            </li>
            <li>
              کارفرما میتواند بنا بر ضرورت از همکار در شغل های مشابه و یا محل
              های دیگر برای مدت کوتاه یا تا پایان قرارداد استفاده نماید
            </li>
          </ol>

          <span class="titr">ماده8) تعهدات کارفرما</span>
          <ol style="direction: rtl">
            <li>
              پرداخت حقوق و مزایا مطابق با قرارداد جاری و در اختیار گذاشتن لوازم
              کار مناسب
            </li>
            <li>
              به موجب ماده 148 قانون کار، همکار را نزد سازمان تامین اجتماعی و یا
              سایر دستگاه های بیمه گر بیمه نماید
            </li>
            <li>
              پرداخت عیدی و پاداش سالیانه همکار مصوبه سال 70 مجلس شورای اسلامی
              که باتوافق همکار به صورت ماهیانه/سالیانه مطابق ماده 4
              قراردادپرداخت می گردد
            </li>
            <li>
              پرداخت سنوات پایان کار که با توافق همکار به صورت ماهیانه/سالیانه
              مطابق ماده 4 قرارداد پرداخت می گردد
            </li>
          </ol>
          <span class="titr">ماده 9) ساير مقررات</span>
          <ol style="direction: rtl">
            <li>
              همکار مشمول این قرارداد به لحاظ بیمه و بازنشستگی، از کارافتادگی،
              معذوریت از کار، بروز حادثه ناشی از کار، بیماری، فوت و سایر تسهیلات
              مقرر در قانون،تابع قانون کار و تأمین اجتماعی خواهد بود
            </li>
            <li>
              کلیه همکاران می بایست تضمین لازم و مناسب با شغل خویش را بسپارند
            </li>
            <li>
              هرگاه برای کارفرما اثبات گردد که همکار به هر طریق ممکن اطلاعات
              فنی، مهندسی، تحقیقاتی و یا اوراق، مدارك و اسناد مالی، اقتصادی و
              بازرگانی کارفرما را به هر دلیل مورد سوء استفاده قرار داده و یادر
              اثر قصور موجب ضرر و زیان به شرکت گردیده، کارفرما جهت رسیدن به حقوق
              خودوجبران ضررحاصله، ضمن فسخ قرارداد اقدامات قانونی خودرا ازطریق
              مراجعه به مقامات قضایی پیگیری می نماید
            </li>
            <li>
              در صورت فسخ یکطرفه قرارداد توسط همکار، کارفرما حق دارد ضرر و زیان
              ناشی از فسخ قرارداد را مطالبه نماید
            </li>
            <li>
              کلیة کسورات قانونی طبق مقررات از حقوق همکار در زمان پرداخت حقوق و
              مزایا کسر و به حساب های مربوطه واریز خواهد گردید
            </li>
            <li>
              کارفرما می تواند در صورت وجود اعتبار، عیدی و پاداش، سنوات قانونی و
              ... را به صورت ماهیانه پرداخت و در پایان قرارداد/ سال/ ماه تسویه
              حساب قطعی نماید
            </li>
            <li>
              همکار نمی تواند از مرخصی بدون حقوق استفاده نماید مگر با توافق
              کارفرما
            </li>
          </ol>
          <article>
            <p class="bold" style="text-align: right !important">
              همکار اقرار می نماید که با آگاهی کامل و در کمال صحت و سلامت کامل
              عقلی، به کلیه جوانب قرارداد و شرایط معمول و جاری شرکت/کارگاه آگاهی
              کامل دارد و موظف است کلیه قوانین و مقررات و آئین نامه های داخلی
              شرکت از جمله ایمنی و بهداشت را رویت و رعایت نماید. وی همچنین اقرار
              می نماید که کلیه مفاد این قرارداد از جمله موارد فسخ قرارداد )مطابق
              بندهای "ز" و "ح" ماده 21 ( و تعهدات را مطالعه و مورد قبول و توافق
              ایشان بوده و در آینده حق هیچگونه اعتراضی ندارد. امضاء زیر این برگه
              به منزله اطلاع و قبول کلیه شرایط مندرج در این قرارداد می باشد
            </p>
          </article>
          <br />
          <table class="signatureSection">
            <tr>
              <td>مدیر عامل</td>
              <td>مدیر منابع انسانی</td>
              <td>مدیر مربوطه</td>
              <td>همکار</td>
            </tr>
            <tr class="sign">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="footer">
          <div class="footerNumber"><span>PF0013 :</span>کد فرم</div>
          <div class="footerDate">تاریخ آخرین بازنگری: ۹۸/۰۱/۲۸</div>
          <div class="footerEdit">ویرایش: ۰۰۱</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import numeral from "numeral";
import $ from "jquery";
import { allMonths } from "../../datastore/globalData";

export default {
  data() {
    return {
      info: null,
      allMonths: [],
      currentFinishedDay: "",
    };
  },
  created() {
    this.checkData();
    this.setLastDayOfMonth();
    this.allMonths = allMonths;
  },
  mounted() {
    this.showOnScroll();
  },
  methods: {
    thousandSeprator(number) {
      return numeral(parseInt(number)).format("0,0");
    },

    checkData() {
      this.userInfo = JSON.parse(
        localStorage.getItem("preparingContractUserInfo")
      );
      if (this.userInfo == undefined || this.userInfo == null) {
        this.$router.push("/official-contract");
      }
      document.title = `قرارداد ${this.userInfo.firstName}  ${this.userInfo.lastName}`;
    },

    setLastDayOfMonth() {
      if (this.userInfo.startDate.month <= 6) {
        this.currentFinishedDay = 31;
      } else if (
        this.userInfo.startDate.month <= 12 &&
        this.userInfo.startDate.month >= 6
      ) {
        this.currentFinishedDay = 30;
      }
    },

    printSheet() {
      window.print();
    },

    cancel(target) {
      localStorage.removeItem("preparingContractUserInfo");
      this.$router.push(target);
    },

    showOnScroll() {
      $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 200) {
          $("#scrollTop").fadeIn();
        } else {
          $("#scrollTop").fadeOut();
        }
      });
    },

    scrollTop() {
      $("html,body").animate({ scrollTop: 0 }, "slow");
    },
  },
};
</script>
<style scoped>
@import url("../../assets/style/official-contract/contract.css");
@import url("../../assets/style/official-contract/tables.css");
@import url("../../assets/style/official-contract/header-footer.css");
</style>

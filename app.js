// Daily Routine Application Logic - Qarshi City Edition

const SCHEDULE_DATA = {
  odd: {
    id: 'odd',
    title: 'Toq kunlar — ML Grant kunlari',
    days: 'Dushanba · Chorshanba · Juma',
    contextTitle: 'Toq kunlar: ML Grant va Zaldan so‘ng to‘g‘ridan-to‘g‘ri dars',
    contextDesc: '17:00–18:30 Sport zali, 18:30–19:00 tezkor dush va kiyim almashtirish, 19:00–21:00 ML grant darsi. Shom namozini zal bilan dars oralig‘ida yoki dars boshlanishida o‘qib olish muhim!',
    items: [
      {
        id: 'odd-1',
        start: '05:30',
        end: '06:30',
        title: 'Bomdod, Qur\'on, zikr',
        category: 'deen',
        categoryLabel: 'Din & Ruhiyat',
        icon: '🕌',
        desc: 'Bomdod namozi, tonggi zikrlar va Qur\'on tilovati. Yangi kunga ruhiy baraka bilan boshlash.'
      },
      {
        id: 'odd-2',
        start: '06:30',
        end: '07:15',
        title: 'Nonushta, uy ishlari',
        category: 'routine',
        categoryLabel: 'Uy & Ovqat',
        icon: '🍳',
        desc: 'To‘yimli nonushta, idishlarni yuvish va xonani tartibga keltirish. Toza muhit — tiniq fikr.'
      },
      {
        id: 'odd-3',
        start: '07:15',
        end: '09:15',
        title: 'ML mustaqil ta\'lim',
        category: 'ml',
        categoryLabel: 'ML & Kod',
        icon: '🧠',
        desc: 'Eng qiyin Machine Learning nazariyasi, matematik formulalar va yangi mavzularni o‘rganish (2 soat chuqur fokus).'
      },
      {
        id: 'odd-4',
        start: '09:15',
        end: '09:35',
        title: 'Tanaffus (Ko‘z va miyani dam oldirish)',
        category: 'rest',
        categoryLabel: 'Dam olish',
        icon: '☕',
        desc: 'Choy, suv ichish, xonada yengil harakat, ko‘zlarni uzoqqa qaratish. Ekranga qaramaslik tavsiya etiladi.'
      },
      {
        id: 'odd-5',
        start: '09:35',
        end: '11:35',
        title: 'ML amaliyot va kod',
        category: 'ml',
        categoryLabel: 'ML & Kod',
        icon: '💻',
        desc: 'Jupyter Notebook / PyTorch / Scikit-Learn kodlari, datasetlar bilan ishlash va GitHub ga commit qilish.'
      },
      {
        id: 'odd-6',
        start: '11:35',
        end: '12:30',
        title: 'Peshin, tushlik',
        category: 'deen',
        categoryLabel: 'Din & Ovqat',
        icon: '🍲',
        desc: 'Peshin namozi, sifatli tushlik. Ovqatlanayotganda shoshilmaslik.'
      },
      {
        id: 'odd-7',
        start: '12:30',
        end: '13:00',
        title: 'Dam olish (Qaylula)',
        category: 'rest',
        categoryLabel: 'Dam olish',
        icon: '🛋️',
        desc: '20-30 daqiqalik yengil mizg‘ib olish (Qaylula sunnati). Kunning ikkinchi yarmiga yangi energiya beradi.'
      },
      {
        id: 'odd-8',
        start: '13:00',
        end: '14:00',
        title: 'Ingliz tili (Listening / Reading)',
        category: 'lang',
        categoryLabel: 'Tillar',
        icon: '🇬🇧',
        desc: 'IELTS / Tech English: podkastlar tinglash, ilmiy maqolalar o‘qish, yangi so‘zlar yodlash.'
      },
      {
        id: 'odd-9',
        start: '14:00',
        end: '14:50',
        title: 'Rus tili (Ibrat Academy)',
        category: 'lang',
        categoryLabel: 'Tillar',
        icon: '🇷🇺',
        desc: 'Ibrat Academy darslari, grammatika va faol so‘z boyligini oshirish.'
      },
      {
        id: 'odd-10',
        start: '14:50',
        end: '15:30',
        title: 'Asr, uy ishlari',
        category: 'deen',
        categoryLabel: 'Din & Uy',
        icon: '🧹',
        desc: 'Asr namozi, yengil tartibga keltirish, sport sumkasini tekshirib tayyorlab qo‘yish.'
      },
      {
        id: 'odd-11',
        start: '15:30',
        end: '16:15',
        title: 'ML takrorlash',
        category: 'ml',
        categoryLabel: 'ML & Kod',
        icon: '📝',
        desc: 'Ertalab o‘qilgan mavzularni qayta ko‘rib chiqish, konspektlash, grant darsi oldidan savollar tayyorlash.'
      },
      {
        id: 'odd-12',
        start: '16:15',
        end: '17:00',
        title: 'Yengil ovqat, zalga yo‘l',
        category: 'routine',
        categoryLabel: 'Uy & Yo‘l',
        icon: '🍌',
        desc: 'Energiya beruvchi yengil taom (banan, quruq mevalar), suv va zalga borish.'
      },
      {
        id: 'odd-13',
        start: '17:00',
        end: '18:30',
        title: 'Sport zali mashg‘uloti',
        category: 'sport',
        categoryLabel: 'Sport & Kuch',
        icon: '🏋️',
        desc: 'Rejalashtirilgan kuch yoki kardio mashqi. O‘zingni jarohatlamasdan intizom bilan mashq qilish.'
      },
      {
        id: 'odd-14',
        start: '18:30',
        end: '19:00',
        title: 'Dush, kiyim almashtirish, darsga yo‘l',
        category: 'routine',
        categoryLabel: 'Gigiyena & Yo‘l',
        icon: '🚿',
        desc: 'Tezkor dush, toza kiyim, Shom namozini ado etish va grant darsiga yetib borish.'
      },
      {
        id: 'odd-15',
        start: '19:00',
        end: '21:00',
        title: 'ML Grant darsi (Jonli)',
        category: 'ml',
        categoryLabel: 'ML & Grant',
        icon: '🎓',
        desc: 'Mentor darsi, jamoaviy muhokama va grant topshiriqlari. Maksimal faol qatnashish.'
      },
      {
        id: 'odd-16',
        start: '21:00',
        end: '22:00',
        title: 'Kechki ovqat, Xufton, muraja\'a',
        category: 'deen',
        categoryLabel: 'Din & Oila',
        icon: '🌙',
        desc: 'Kvartiraga qaytish, kechki yengil ovqat, Xufton namozi, Qur\'on muraja\'asi va ota-onaga qo‘ng‘iroq.'
      },
      {
        id: 'odd-17',
        start: '22:00',
        end: '05:30',
        title: 'Uyqu (To‘liq tiklanish)',
        category: 'rest',
        categoryLabel: 'Uyqu',
        icon: '🛌',
        desc: 'Barcha gadjetlarni chetga qo‘yish, ertangi kun niyati va tinch uyqu.'
      }
    ]
  },
  even: {
    id: 'even',
    title: 'Juft kunlar — Mustaqil rivojlanish',
    days: 'Seshanba · Payshanba · Shanba',
    contextTitle: 'Juft kunlar: Chuqur o‘z ustida ishlash va tiklanish',
    contextDesc: 'Bugun ML grant darsi yo‘q! Kechki paytni kitob mutolaasi, diniy ilm, Qur\'on va oila bilan muloqotga ajratamiz. Sportda faol tiklanish yoki yengil yugurish.',
    items: [
      {
        id: 'even-1',
        start: '05:30',
        end: '06:30',
        title: 'Bomdod, Qur\'on',
        category: 'deen',
        categoryLabel: 'Din & Ruhiyat',
        icon: '🕌',
        desc: 'Bomdod namozi va Qur\'on tilovati, musiqiy tinchlikda ruhiyatni boyitish.'
      },
      {
        id: 'even-2',
        start: '06:30',
        end: '07:15',
        title: 'Nonushta, uy ishlari',
        category: 'routine',
        categoryLabel: 'Uy & Ovqat',
        icon: '🍳',
        desc: 'Nonushta, xonani shamollatish, tozalik va kunlik rejani ko‘zdan kechirish.'
      },
      {
        id: 'even-3',
        start: '07:15',
        end: '09:15',
        title: 'ML nazariya (Deep Dive)',
        category: 'ml',
        categoryLabel: 'ML & Nazariya',
        icon: '📚',
        desc: 'Matematika, ehtimollar nazariyasi, algoritm arxitekturalari bo‘yicha chuqur mutolaa.'
      },
      {
        id: 'even-4',
        start: '09:15',
        end: '09:35',
        title: 'Tanaffus',
        category: 'rest',
        categoryLabel: 'Dam olish',
        icon: '🍵',
        desc: 'Suv ichish, ko‘zlarni dam oldirish, yengil cho‘zilish mashqlari.'
      },
      {
        id: 'even-5',
        start: '09:35',
        end: '11:35',
        title: 'ML mustaqil loyihalar (Pet-projects)',
        category: 'ml',
        categoryLabel: 'ML & Loyiha',
        icon: '💻',
        desc: 'O‘z mustaqil portfolio loyihalaringni yaratish, GitHub ga sifatli kod yuklash.'
      },
      {
        id: 'even-6',
        start: '11:35',
        end: '13:00',
        title: 'Peshin, tushlik, dam',
        category: 'deen',
        categoryLabel: 'Din & Dam',
        icon: '🍲',
        desc: 'Peshin namozi, foydali tushlik va 20 daqiqalik sokin dam olish.'
      },
      {
        id: 'even-7',
        start: '13:00',
        end: '14:00',
        title: 'English (Speaking & Writing)',
        category: 'lang',
        categoryLabel: 'Tillar',
        icon: '🇬🇧',
        desc: 'Ingliz tilida fikr bayon qilish, texnik maqola yozish yoki sun\'iy intellekt bilan muloqot.'
      },
      {
        id: 'even-8',
        start: '14:00',
        end: '14:50',
        title: 'Русский язык (Ibrat)',
        category: 'lang',
        categoryLabel: 'Tillar',
        icon: '🇷🇺',
        desc: 'Ibrat darslari, grammatika mashqlari va eshitib tushunish.'
      },
      {
        id: 'even-9',
        start: '14:50',
        end: '15:30',
        title: 'Uy ishlari, Asr',
        category: 'deen',
        categoryLabel: 'Din & Uy',
        icon: '🧹',
        desc: 'Asr namozi, kvartiradagi kundalik zarur yumushlar.'
      },
      {
        id: 'even-10',
        start: '15:30',
        end: '16:30',
        title: 'ML takrorlash va xatolar ustida ishlash',
        category: 'ml',
        categoryLabel: 'ML & Kod',
        icon: '🔍',
        desc: 'Kodlardagi xatolarni debug qilish, optimallashtirish va bilimlarni mustahkamlash.'
      },
      {
        id: 'even-11',
        start: '16:30',
        end: '17:00',
        title: 'Yengil tamaddi, sportga tayyorgarlik',
        category: 'routine',
        categoryLabel: 'Tayyorgarlik',
        icon: '🍎',
        desc: 'Suv, yengil meva va mashg‘ulotga ruhiy tayyorlanish.'
      },
      {
        id: 'even-12',
        start: '17:00',
        end: '19:00',
        title: 'Sport yoki faol tiklanish',
        category: 'sport',
        categoryLabel: 'Sport & Kardio',
        icon: '🏃',
        desc: 'Zal, kardio, yugurish yoki cho‘zilish mashqlari. Shom namozini vaqtida ado etish.'
      },
      {
        id: 'even-13',
        start: '19:00',
        end: '20:00',
        title: 'Dush, kechki ovqat',
        category: 'routine',
        categoryLabel: 'Uy & Ovqat',
        icon: '🍽️',
        desc: 'Issiq dush, toza kiyim, xotirjam va sifatli kechki taom.'
      },
      {
        id: 'even-14',
        start: '20:00',
        end: '21:00',
        title: 'Kitob, diniy ilm, Qur\'on',
        category: 'deen',
        categoryLabel: 'Din & Ilm',
        icon: '📖',
        desc: 'Foydali kitob mutolaasi, siyrat yoki hadis ilmlari, Qur\'on ma\'nolari bilan tanishish.'
      },
      {
        id: 'even-15',
        start: '21:00',
        end: '22:00',
        title: 'Oila, Xufton, ertangi reja',
        category: 'deen',
        categoryLabel: 'Din & Oila',
        icon: '📞',
        desc: 'Ota-ona va yaqinlar bilan suhbat, Xufton namozi, ertangi kun niyat va rejasini yozish.'
      },
      {
        id: 'even-16',
        start: '22:00',
        end: '05:30',
        title: 'Uyqu',
        category: 'rest',
        categoryLabel: 'Uyqu',
        icon: '🛌',
        desc: 'Qalb xotirjamligida uyquga ketish. Ertangi erta turish uchun eng zarur qadam.'
      }
    ]
  },
  sunday: {
    id: 'sunday',
    title: 'Yakshanba — Dam olish, tozalash va tahlil',
    days: 'Yakshanba',
    contextTitle: 'Yakshanba: Qayta quvvatlanish va haftalik audit',
    contextDesc: 'Bugun o‘tgan 6 kunlik mehnatingni tahlil qilasan: ML, GitHub, Tillar, Sport va Moliyani hisoblab chiqasan. Kvartirani tozalab, kelasi haftaga tayyorlanasan.',
    items: [
      {
        id: 'sun-1',
        start: '05:30',
        end: '06:30',
        title: 'Bomdod, Qur\'on, shukronalik',
        category: 'deen',
        categoryLabel: 'Din & Ruhiyat',
        icon: '🕌',
        desc: 'Bomdod namozi, haftalik berilgan ne\'matlar uchun shukr va Qur\'on tilovati.'
      },
      {
        id: 'sun-2',
        start: '06:30',
        end: '08:30',
        title: 'Kvartirani umumiy tozalash va kir yuvish',
        category: 'routine',
        categoryLabel: 'Uy ishlari',
        icon: '🧼',
        desc: 'Kvartirani pollarini yuvish, changlarni artish, kiyimlarni yuvib taxlash. Mustaqil hayot madaniyati!'
      },
      {
        id: 'sun-3',
        start: '08:30',
        end: '09:30',
        title: 'Mazali nonushta & qahva',
        category: 'routine',
        categoryLabel: 'Taom',
        icon: '☕',
        desc: 'Shoshmasdan, zavq bilan tayyorlangan to‘yimli nonushta.'
      },
      {
        id: 'sun-4',
        start: '09:30',
        end: '12:00',
        title: 'Haftalik Tahlil (Review) & GitHub tartibga solish',
        category: 'ml',
        categoryLabel: 'Tahlil & ML',
        icon: '📊',
        desc: 'O‘zlashtirilgan mavzularni sanash, GitHub repozitoriyalarni chiroyli README bilan bezash, o‘rganilgan yangi so‘zlarni qaytarish.'
      },
      {
        id: 'sun-5',
        start: '12:00',
        end: '13:30',
        title: 'Peshin, tushlik tayyorlash va ovqatlanish',
        category: 'deen',
        categoryLabel: 'Din & Taom',
        icon: '🍲',
        desc: 'Peshin namozi, o‘zing uchun to‘yimli va foydali taom pishirish.'
      },
      {
        id: 'sun-6',
        start: '13:30',
        end: '15:00',
        title: 'Erkin dam olish, mutolaa',
        category: 'rest',
        categoryLabel: 'Dam olish',
        icon: '📖',
        desc: 'Badiiy kitob, qiziqarli podkast yoki shunchaki xotirjam hordiq.'
      },
      {
        id: 'sun-7',
        start: '15:00',
        end: '17:30',
        title: 'Asr, Qarshi shahrida yengil sayr',
        category: 'sport',
        categoryLabel: 'Sayr & Havo',
        icon: '🚶',
        desc: 'Asr namozi, park yoki shahar ko‘chalarida toza havoda yurish, do‘stlar bilan uchrashuv.'
      },
      {
        id: 'sun-8',
        start: '17:30',
        end: '19:00',
        title: 'Haftalik bozorlik (Oziq-ovqat g‘amlash)',
        category: 'routine',
        categoryLabel: 'Bozorlik',
        icon: '🛒',
        desc: 'Yangi hafta uchun tuxum, go‘sht, sabzavot va mevalar xarid qilish, xarajatlarni yozib borish.'
      },
      {
        id: 'sun-9',
        start: '19:00',
        end: '20:30',
        title: 'Kechki ovqat, Shom, yangi hafta maqsadlari',
        category: 'deen',
        categoryLabel: 'Din & Reja',
        icon: '🎯',
        desc: 'Shom namozi, kechki taom, Dushanba-Shanba kunlariga aniq maqsadlar qo‘yish.'
      },
      {
        id: 'sun-10',
        start: '20:30',
        end: '22:00',
        title: 'Xufton, Qur\'on muraja\'asi, ota-ona bilan suhbat',
        category: 'deen',
        categoryLabel: 'Din & Oila',
        icon: '🌙',
        desc: 'Xufton namozi, Qur\'on takrori, oila bilan uzoq suhbatlashib duo olish.'
      },
      {
        id: 'sun-11',
        start: '22:00',
        end: '05:30',
        title: 'Uyqu (Yangi haftaga to‘la energiya)',
        category: 'rest',
        categoryLabel: 'Uyqu',
        icon: '🛌',
        desc: '05:30 da yangi haftani g‘alaba bilan boshlash uchun 22:00 da uxlash.'
      }
    ]
  }
};

// State
let currentTab = 'odd'; // 'odd' | 'even' | 'sunday'
let soundEnabled = true;
let completedTasks = {}; // { 'odd-1': true, ... }
let focusInterval = null;
let focusTimeRemaining = 25 * 60; // seconds

// Web Audio API Synth for notifications
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playChime(type = 'success') {
  if (!soundEnabled) return;
  try {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'success') {
      // Pleasant chime
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
      osc.frequency.setValueAtTime(1046.50, now + 0.3); // C6

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

      osc.start(now);
      osc.stop(now + 0.8);
    } else if (type === 'bell') {
      // Bell alert
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, now);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
      osc.start(now);
      osc.stop(now + 1.2);
    }
  } catch (e) {
    console.error('Audio play error:', e);
  }
}

// Determine auto day
function getAutoDayType() {
  const day = new Date().getDay(); // 0 is Sunday, 1 Mon, 2 Tue, 3 Wed, 4 Thu, 5 Fri, 6 Sat
  if (day === 0) return 'sunday';
  if (day === 1 || day === 3 || day === 5) return 'odd';
  return 'even';
}

function getDayNameUz(dayNum) {
  const names = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
  return names[dayNum];
}

// Convert "HH:MM" to minutes from 00:00
function timeToMinutes(tStr) {
  const [h, m] = tStr.split(':').map(Number);
  return h * 60 + m;
}

// Format seconds into MM:SS
function formatDuration(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// Load Storage
function loadFromStorage() {
  try {
    const savedCompleted = localStorage.getItem('daily_completed_tasks');
    if (savedCompleted) {
      completedTasks = JSON.parse(savedCompleted);
    }
    const savedReviews = localStorage.getItem('daily_weekly_reviews');
    if (savedReviews) {
      renderSavedReviews(JSON.parse(savedReviews));
    }
  } catch (e) {
    console.error(e);
  }
}

function saveCompletedToStorage() {
  localStorage.setItem('daily_completed_tasks', JSON.stringify(completedTasks));
}

// Main DOM Elements
const liveClockEl = document.getElementById('liveClock');
const liveDateEl = document.getElementById('liveDate');
const currentStatusBadgeEl = document.getElementById('currentStatusBadge');
const currentDayBadgeEl = document.getElementById('currentDayBadge');
const prayerReminderBadgeEl = document.getElementById('prayerReminderBadge');
const currentTaskTitleEl = document.getElementById('currentTaskTitle');
const currentTaskDescEl = document.getElementById('currentTaskDesc');
const timeElapsedTextEl = document.getElementById('timeElapsedText');
const timeRemainingTextEl = document.getElementById('timeRemainingText');
const taskProgressBarEl = document.getElementById('taskProgressBar');
const nextTaskTimeEl = document.getElementById('nextTaskTime');
const nextTaskTitleEl = document.getElementById('nextTaskTitle');
const completeCurrentTaskBtnEl = document.getElementById('completeCurrentTaskBtn');

const tabOddEl = document.getElementById('tabOdd');
const tabEvenEl = document.getElementById('tabEven');
const tabSunEl = document.getElementById('tabSun');

const bannerTitleEl = document.getElementById('bannerTitle');
const bannerDescEl = document.getElementById('bannerDesc');
const scheduleContainerEl = document.getElementById('scheduleContainer');
const dailyProgressTextEl = document.getElementById('dailyProgressText');
const resetDayBtnEl = document.getElementById('resetDayBtn');

const soundToggleBtnEl = document.getElementById('soundToggleBtn');
const soundIconOnEl = document.getElementById('soundIconOn');
const soundIconOffEl = document.getElementById('soundIconOff');

// Focus Modal Elements
const quickFocusBtnEl = document.getElementById('quickFocusBtn');
const focusModalEl = document.getElementById('focusModal');
const closeFocusModalBtnEl = document.getElementById('closeFocusModalBtn');
const focusModalTaskNameEl = document.getElementById('focusModalTaskName');
const focusTimerDisplayEl = document.getElementById('focusTimerDisplay');
const startFocusBtnEl = document.getElementById('startFocusBtn');
const resetFocusBtnEl = document.getElementById('resetFocusBtn');

// Weekly Review
const weeklyReviewFormEl = document.getElementById('weeklyReviewForm');
const savedReviewHistoryEl = document.getElementById('savedReviewHistory');

let activeCurrentItem = null;

// Render Timeline Schedule
function renderSchedule() {
  const currentPlan = SCHEDULE_DATA[currentTab];
  
  // Update banner
  bannerTitleEl.textContent = currentPlan.contextTitle;
  bannerDescEl.textContent = currentPlan.contextDesc;

  // Clear container
  scheduleContainerEl.innerHTML = '';

  const now = new Date();
  const currentMins = now.getHours() * 60 + now.getMinutes();
  const isAutoTabActive = (currentTab === getAutoDayType());

  let completedCount = 0;

  currentPlan.items.forEach((item, index) => {
    const isCompleted = !!completedTasks[item.id];
    if (isCompleted) completedCount++;

    const startMins = timeToMinutes(item.start);
    let endMins = timeToMinutes(item.end);
    if (endMins < startMins) endMins += 24 * 60; // past midnight wrap

    let isOngoing = false;
    if (isAutoTabActive) {
      if (startMins <= endMins) {
        isOngoing = (currentMins >= startMins && currentMins < endMins);
      } else {
        isOngoing = (currentMins >= startMins || currentMins < endMins);
      }
    }

    const card = document.createElement('div');
    card.className = `schedule-card group relative p-4 sm:p-5 rounded-2xl border transition-all duration-200 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
      isOngoing 
        ? 'is-current border-indigo-500/80 bg-slate-900/90 shadow-lg shadow-indigo-500/10' 
        : isCompleted 
        ? 'is-completed border-slate-800/60 bg-slate-900/40' 
        : 'border-slate-800/80 bg-slate-900/60 hover:bg-slate-900'
    }`;

    // Category styling
    const badgeClass = `badge-${item.category}`;

    card.innerHTML = `
      <div class="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
        <!-- Checkbox -->
        <button class="task-checkbox-btn shrink-0 w-6 h-6 mt-0.5 sm:mt-0 rounded-lg border flex items-center justify-center transition-all ${
          isCompleted 
            ? 'bg-emerald-500 border-emerald-400 text-slate-950 font-bold' 
            : 'border-slate-700 hover:border-indigo-400 text-transparent'
        }" data-id="${item.id}">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
          </svg>
        </button>

        <!-- Time & Icon -->
        <div class="shrink-0 flex sm:flex-col items-center sm:items-start gap-2 sm:gap-0.5 min-w-[90px]">
          <span class="font-mono text-xs sm:text-sm font-bold text-slate-200 tracking-tight">
            ${item.start}–${item.end}
          </span>
          <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${badgeClass}">
            ${item.categoryLabel}
          </span>
        </div>

        <!-- Title & Description -->
        <div class="space-y-0.5 flex-1 min-w-0">
          <div class="flex items-center gap-2">
            <span class="text-base">${item.icon}</span>
            <h4 class="task-name text-sm sm:text-base font-bold text-white tracking-tight truncate">
              ${item.title}
            </h4>
            ${isOngoing ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-indigo-500 text-white animate-pulse">Hozir</span>` : ''}
          </div>
          <p class="text-xs text-slate-400 leading-relaxed line-clamp-2">
            ${item.desc}
          </p>
        </div>
      </div>

      <!-- Action: Quick Focus Timer trigger for this task -->
      <div class="flex items-center gap-2 self-end sm:self-center shrink-0">
        <button class="focus-task-btn px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-indigo-600 hover:text-white border border-slate-700/60 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition" data-title="${item.title}">
          <span>⏱️</span>
          <span class="hidden md:inline">Fokus</span>
        </button>
      </div>
    `;

    scheduleContainerEl.appendChild(card);
  });

  // Attach event listeners for checkboxes
  document.querySelectorAll('.task-checkbox-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      toggleTaskCompletion(id);
    });
  });

  // Attach event listeners for specific focus buttons
  document.querySelectorAll('.focus-task-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const title = btn.getAttribute('data-title');
      openFocusModal(title);
    });
  });

  // Progress text
  const total = currentPlan.items.length;
  const pct = total > 0 ? Math.round((completedCount / total) * 100) : 0;
  dailyProgressTextEl.textContent = `${completedCount}/${total} bajarildi (${pct}%)`;
}

// Toggle Task Completion with Confetti
function toggleTaskCompletion(taskId) {
  if (completedTasks[taskId]) {
    delete completedTasks[taskId];
  } else {
    completedTasks[taskId] = true;
    playChime('success');
    
    // Confetti effect
    try {
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#6366f1', '#10b981', '#f59e0b', '#ec4899']
        });
      }
    } catch (err) {
      console.warn(err);
    }
  }

  saveCompletedToStorage();
  renderSchedule();
  updateLiveDashboard();
}

// Update Active Task, Clock and Countdowns
function updateLiveDashboard() {
  const now = new Date();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentSeconds = now.getSeconds();
  const currentTotalSeconds = currentHours * 3600 + currentMinutes * 60 + currentSeconds;
  const currentMins = currentHours * 60 + currentMinutes;

  // Live Clock string
  const clockStr = `${String(currentHours).padStart(2, '0')}:${String(currentMinutes).padStart(2, '0')}:${String(currentSeconds).padStart(2, '0')}`;
  liveClockEl.textContent = clockStr;

  // Live Date string
  const dayName = getDayNameUz(now.getDay());
  const dateFormatted = now.toLocaleDateString('uz-UZ', { day: 'numeric', month: 'long', year: 'numeric' });
  liveDateEl.textContent = `${dayName}, ${dateFormatted}`;

  // Find active task for real day
  const autoDay = getAutoDayType();
  const plan = SCHEDULE_DATA[autoDay];

  let currentItem = null;
  let nextItem = null;

  for (let i = 0; i < plan.items.length; i++) {
    const item = plan.items[i];
    const startMins = timeToMinutes(item.start);
    let endMins = timeToMinutes(item.end);

    let match = false;
    if (endMins > startMins) {
      match = (currentMins >= startMins && currentMins < endMins);
    } else {
      // wraps past midnight
      match = (currentMins >= startMins || currentMins < endMins);
    }

    if (match) {
      currentItem = item;
      nextItem = plan.items[(i + 1) % plan.items.length];
      break;
    }
  }

  // If before 05:30 or no direct slot matched, default to sleep/prep slot
  if (!currentItem) {
    currentItem = plan.items[plan.items.length - 1]; // usually sleep
    nextItem = plan.items[0]; // morning routine
  }

  activeCurrentItem = currentItem;

  // Update Hero UI
  currentDayBadgeEl.textContent = `Bugun: ${dayName} (${plan.id === 'odd' ? 'Toq kun — Grant' : plan.id === 'even' ? 'Juft kun — Mustaqil' : 'Yakshanba — Tahlil'})`;
  currentTaskTitleEl.innerHTML = `${currentItem.icon} ${currentItem.title}`;
  currentTaskDescEl.textContent = currentItem.desc;

  // Prayer reminder trigger
  if (currentItem.category === 'deen') {
    prayerReminderBadgeEl.classList.remove('hidden');
  } else {
    prayerReminderBadgeEl.classList.add('hidden');
  }

  // Calculate remaining time
  const startSec = timeToMinutes(currentItem.start) * 60;
  let endSec = timeToMinutes(currentItem.end) * 60;
  if (endSec <= startSec) endSec += 24 * 3600;

  let currentAdjustedSec = currentTotalSeconds;
  if (currentAdjustedSec < startSec && endSec > 24 * 3600) {
    currentAdjustedSec += 24 * 3600;
  }

  const durationSec = endSec - startSec;
  const elapsedSec = Math.max(0, currentAdjustedSec - startSec);
  const remainingSec = Math.max(0, endSec - currentAdjustedSec);

  const pct = Math.min(100, Math.max(0, (elapsedSec / durationSec) * 100));
  taskProgressBarEl.style.width = `${pct}%`;

  timeElapsedTextEl.textContent = `${formatDuration(elapsedSec)} o'tdi`;
  timeRemainingTextEl.textContent = `Qoldi: ${formatDuration(remainingSec)}`;

  // Next task UI
  if (nextItem) {
    nextTaskTimeEl.textContent = `${nextItem.start}–${nextItem.end}`;
    nextTaskTitleEl.innerHTML = `${nextItem.icon} ${nextItem.title}`;
  }

  // Completed status for active task button
  if (completedTasks[currentItem.id]) {
    completeCurrentTaskBtnEl.classList.replace('bg-emerald-600', 'bg-slate-800');
    completeCurrentTaskBtnEl.innerHTML = `<span>✓ Bajarilgan</span>`;
  } else {
    completeCurrentTaskBtnEl.classList.replace('bg-slate-800', 'bg-emerald-600');
    completeCurrentTaskBtnEl.innerHTML = `
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
      </svg>
      <span>Bajarildi deb belgilash</span>
    `;
  }
}

// Switch Tabs
function setTab(tabKey) {
  currentTab = tabKey;

  [tabOddEl, tabEvenEl, tabSunEl].forEach(btn => {
    btn.classList.remove('bg-indigo-600', 'text-white', 'shadow-md');
    btn.classList.add('text-slate-400');
  });

  if (tabKey === 'odd') {
    tabOddEl.classList.add('bg-indigo-600', 'text-white', 'shadow-md');
    tabOddEl.classList.remove('text-slate-400');
  } else if (tabKey === 'even') {
    tabEvenEl.classList.add('bg-indigo-600', 'text-white', 'shadow-md');
    tabEvenEl.classList.remove('text-slate-400');
  } else {
    tabSunEl.classList.add('bg-indigo-600', 'text-white', 'shadow-md');
    tabSunEl.classList.remove('text-slate-400');
  }

  renderSchedule();
}

// Focus Modal Logic
function openFocusModal(taskTitle = 'ML Amaliyot & Kod') {
  focusModalTaskNameEl.textContent = taskTitle;
  focusModalEl.classList.remove('hidden');
  focusModalEl.classList.add('flex');
}

function closeFocusModal() {
  focusModalEl.classList.add('hidden');
  focusModalEl.classList.remove('flex');
  stopFocusTimer();
}

function startFocusTimer() {
  if (focusInterval) return;
  startFocusBtnEl.textContent = 'Pauza';
  startFocusBtnEl.classList.replace('bg-indigo-600', 'bg-amber-600');

  focusInterval = setInterval(() => {
    if (focusTimeRemaining > 0) {
      focusTimeRemaining--;
      focusTimerDisplayEl.textContent = formatDuration(focusTimeRemaining);
    } else {
      stopFocusTimer();
      playChime('bell');
      alert('🎉 Fokus vaqti yakunlandi! Ajoyib mehnat qildingiz, 5 daqiqa dam oling.');
    }
  }, 1000);
}

function stopFocusTimer() {
  if (focusInterval) {
    clearInterval(focusInterval);
    focusInterval = null;
  }
  startFocusBtnEl.textContent = 'Boshlash';
  startFocusBtnEl.classList.replace('bg-amber-600', 'bg-indigo-600');
}

function resetFocusTimer(mins = 25) {
  stopFocusTimer();
  focusTimeRemaining = mins * 60;
  focusTimerDisplayEl.textContent = formatDuration(focusTimeRemaining);
}

// Weekly Review Logic
function handleWeeklyReviewSubmit(e) {
  e.preventDefault();
  const ml = document.getElementById('reviewML').value.trim();
  const github = document.getElementById('reviewGithub').value.trim();
  const eng = document.getElementById('reviewEnglish').value.trim();
  const rus = document.getElementById('reviewRussian').value.trim();
  const sport = document.getElementById('reviewSport').value.trim();
  const quran = document.getElementById('reviewQuran').value.trim();
  const fin = document.getElementById('reviewFinance').value.trim();

  if (!ml && !github && !sport) {
    alert('Iltimos, kamida ML, GitHub yoki Sport natijasini kiriting!');
    return;
  }

  const reviewItem = {
    date: new Date().toLocaleDateString('uz-UZ', { day: 'numeric', month: 'short', year: 'numeric' }),
    ml, github, eng, rus, sport, quran, fin
  };

  let reviews = [];
  try {
    const raw = localStorage.getItem('daily_weekly_reviews');
    if (raw) reviews = JSON.parse(raw);
  } catch (err) {}

  reviews.unshift(reviewItem);
  localStorage.setItem('daily_weekly_reviews', JSON.stringify(reviews));

  renderSavedReviews(reviews);
  weeklyReviewFormEl.reset();
  playChime('success');
  alert('✅ Haftalik tahlil muvaffaqiyatli saqlandi! Barakalla!');
}

function renderSavedReviews(reviews = []) {
  if (!reviews || reviews.length === 0) {
    savedReviewHistoryEl.innerHTML = `<p class="text-[11px] text-slate-500 italic">Hali saqlangan tahlillar mavjud emas. Har yakshanba to‘ldirib boring.</p>`;
    return;
  }

  savedReviewHistoryEl.innerHTML = `<h5 class="font-bold text-slate-300 text-[11px] uppercase tracking-wider mb-2">So‘nggi tahlillar:</h5>`;

  reviews.slice(0, 3).forEach((item, idx) => {
    const box = document.createElement('div');
    box.className = 'p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] space-y-1';
    box.innerHTML = `
      <div class="flex justify-between items-center font-bold text-indigo-300">
        <span>📅 ${item.date}</span>
        <span class="text-slate-500 text-[10px]">#${reviews.length - idx}</span>
      </div>
      ${item.ml ? `<div><strong>ML:</strong> <span class="text-slate-300">${item.ml}</span></div>` : ''}
      ${item.github ? `<div><strong>GitHub:</strong> <span class="text-slate-300">${item.github}</span></div>` : ''}
      ${item.sport ? `<div><strong>Sport:</strong> <span class="text-slate-300">${item.sport}</span></div>` : ''}
      ${item.fin ? `<div><strong>Moliya:</strong> <span class="text-slate-300">${item.fin}</span></div>` : ''}
    `;
    savedReviewHistoryEl.appendChild(box);
  });
}

// Event Listeners
function initEvents() {
  tabOddEl.addEventListener('click', () => setTab('odd'));
  tabEvenEl.addEventListener('click', () => setTab('even'));
  tabSunEl.addEventListener('click', () => setTab('sunday'));

  // Sound toggle
  soundToggleBtnEl.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    soundIconOnEl.classList.toggle('hidden', !soundEnabled);
    soundIconOffEl.classList.toggle('hidden', soundEnabled);
    if (soundEnabled) playChime('success');
  });

  // Complete current task button
  completeCurrentTaskBtnEl.addEventListener('click', () => {
    if (activeCurrentItem) {
      toggleTaskCompletion(activeCurrentItem.id);
    }
  });

  // Reset day
  resetDayBtnEl.addEventListener('click', () => {
    if (confirm('Bugungi barcha belgilangan vazifalarni qayta tiklamoqchimisiz?')) {
      const currentPlan = SCHEDULE_DATA[currentTab];
      currentPlan.items.forEach(it => {
        delete completedTasks[it.id];
      });
      saveCompletedToStorage();
      renderSchedule();
      updateLiveDashboard();
    }
  });

  // Focus modal controls
  quickFocusBtnEl.addEventListener('click', () => openFocusModal());
  closeFocusModalBtnEl.addEventListener('click', closeFocusModal);
  startFocusBtnEl.addEventListener('click', () => {
    if (focusInterval) {
      stopFocusTimer();
    } else {
      startFocusTimer();
    }
  });
  resetFocusBtnEl.addEventListener('click', () => resetFocusTimer(25));

  document.querySelectorAll('.preset-timer').forEach(btn => {
    btn.addEventListener('click', () => {
      const mins = Number(btn.getAttribute('data-mins'));
      resetFocusTimer(mins);
    });
  });

  // Weekly review form
  weeklyReviewFormEl.addEventListener('submit', handleWeeklyReviewSubmit);
}

// Initializer
function init() {
  loadFromStorage();
  
  // Set tab to current day of the week
  const initialDayType = getAutoDayType();
  setTab(initialDayType);

  initEvents();

  // Initial update
  updateLiveDashboard();

  // Run updates every second
  setInterval(() => {
    updateLiveDashboard();
  }, 1000);
}

// Start app on DOMContentLoaded
document.addEventListener('DOMContentLoaded', init);

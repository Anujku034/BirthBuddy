# 🎂 BirthBuddy

BirthBuddy is a modern birthday management and reminder web application designed to help users manage birthdays, contacts, reminders, messages, and WhatsApp birthday wishes from a single platform.

🔗 **Live Demo:** https://birth-buddy-gol7-sigma.vercel.app/

---

## 🚀 Project Status

> 🟢 **UI Development Completed**

The complete frontend UI for the current BirthBuddy application has been designed and implemented using React and Tailwind CSS.

All currently planned routes have their UI completed.

### Current Progress

- ✅ Landing Page UI
- ✅ Features Page UI
- ✅ How It Works Page UI
- ✅ Pricing Page UI
- ✅ About Page UI
- ✅ Login Page UI
- ✅ Signup Page UI
- ✅ Dashboard UI
- ✅ Add Person UI
- ✅ Upcoming Birthdays UI
- ✅ All Contacts UI
- ✅ Messages UI
- ✅ Settings UI
- ⏳ Backend Integration
- ⏳ Authentication
- ⏳ Database Integration
- ⏳ Dynamic Birthday Management
- ⏳ WhatsApp Integration
- ⏳ Reminder Automation

---

# 🌐 Routes

## Public Routes

| Route | Page | Status |
|---|---|---|
| `/` | Home / Landing Page | ✅ UI Completed |
| `/features` | Features | ✅ UI Completed |
| `/how-it-works` | How It Works | ✅ UI Completed |
| `/pricing` | Pricing | ✅ UI Completed |
| `/about` | About | ✅ UI Completed |
| `/login` | Login | ✅ UI Completed |
| `/signup` | Signup | ✅ UI Completed |

## Dashboard Routes

| Route | Page | Status |
|---|---|---|
| `/dashboard` | Dashboard | ✅ UI Completed |
| `/dashboard/add-person` | Add Person | ✅ UI Completed |
| `/dashboard/upcoming-birthdays` | Upcoming Birthdays | ✅ UI Completed |
| `/dashboard/contacts` | All Contacts | ✅ UI Completed |
| `/dashboard/messages` | Messages | ✅ UI Completed |
| `/dashboard/settings` | Settings | ✅ UI Completed |

---

# ✨ Features

### 🏠 Landing Page
- Modern hero section
- Birthday-focused visual design
- Call-to-action sections
- Feature highlights
- WhatsApp-focused messaging
- Responsive layout

### 📊 Dashboard
- Birthday statistics
- Upcoming birthdays
- Recent messages
- Quick actions
- Dashboard navigation
- Notification section

### 👤 Add Person
- Person information form
- Profile photo section
- Birthday information
- WhatsApp reminder option
- Reminder settings
- Birthday message section
- Message preview

### 🎂 Upcoming Birthdays
- Upcoming birthday list
- Birthday statistics
- Search functionality UI
- Filter UI
- Calendar section
- Weekly birthday overview

### 👥 All Contacts
- Contact management interface
- Search UI
- Contact statistics
- Birthday information
- WhatsApp indicators
- Edit/Delete action buttons
- Add contact UI

### 💬 Messages
- Message statistics
- Message search
- Message filtering
- Message history UI
- WhatsApp messaging interface
- Message preview
- Birthday message templates

### ⚙️ Settings
- Profile settings
- Notification settings
- WhatsApp notification settings
- Reminder settings
- Appearance settings
- Security settings
- Connected services
- Data management

---

# 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React
- React Icons

### Development Tools

- VS Code
- Git
- GitHub
- Vercel

---

# 📁 Folder Structure

```text
BirthBuddy/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   │
│   │   ├── home/
│   │   │   ├── HomebgImg.png
│   │   │   ├── HomeforegroundImg.png
│   │   │   ├── BirthdayBuddyIcon.png
│   │   │   ├── HomeWhatsappImg.png
│   │   │   ├── HomegiftImg.png
│   │   │   └── HomeBirthdayImg.png
│   │   │
│   │   ├── about/
│   │   │
│   │   ├── pricing/
│   │   │
│   │   ├── how-it-works/
│   │   │
│   │   └── dashboard/
│   │       ├── dashboardHero.png
│   │       ├── dashboardGift.png
│   │       ├── addPersonHero.png
│   │       ├── upcomingBirthdaysHero.png
│   │       ├── allContactsHero.png
│   │       ├── messagesHero.png
│   │       └── settingsHero.png
│   │
│   ├── components/
│   │   │
│   │   ├── Home/
│   │   │   ├── Navbar.jsx
│   │   │   └── HeroSection.jsx
│   │   │
│   │   ├── HowItWorks/
│   │   │   └── HowItWorksShowcase.jsx
│   │   │
│   │   ├── Dashboard/
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Navbar.jsx
│   │   │
│   │   └── Layout.jsx
│   │
│   ├── pages/
│   │   │
│   │   ├── Home.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Pricing.jsx
│   │   ├── About.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   │
│   │   └── Dashboard/
│   │       ├── Dashboard.jsx
│   │       ├── AddPerson.jsx
│   │       ├── UpcomingBirthdays.jsx
│   │       ├── AllContacts.jsx
│   │       ├── Messages.jsx
│   │       └── Settings.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

# 📆 Task Calendar Dashboard

A React-based task management dashboard that lets users add, view, and categorize tasks on a calendar interface. The project includes chart visualizations for task insights and uses modern libraries like Ant Design, Redux Toolkit, and Formik.

---

## 🔗 Live Demo

👉 **Deployed on Netlify:**  
[https://task-calendar-dashboard.netlify.app/](https://task-calendar-dashboard.netlify.app/)

---

## 📁 Features

### ✅ 1. Calendar View
- Integrated using Ant Design’s `<Calendar />` component.
- Click on a date to add/view tasks.

### ✅ 2. Add/Edit Task (Formik + Yup)
- Modal form opens on date selection.
- Fields:
  - **Title** (required)
  - **Description** (optional)
  - **Date** (auto-filled)
  - **Category** (Dropdown: `success`, `warning`, `issue`, `info`)
- Form validated with **Yup**.

### ✅ 3. Task Listing
- Shows tasks for the selected date.
- Each task displays:
  - Title, Description, Date, and Category
  - Edit and Delete options
- Categories are shown using **Ant Design Tags** (color-coded).

### ✅ 4. Chart Visualization
- **Pie chart** displays the number of tasks per category.
- Dropdown filter with **Apply** and **Reset** buttons.

### ✅ 5. State Management
- All task data is stored in the **Redux Toolkit store**.
- No backend – data lives only during the session.

---

## 🛠️ Tech Stack

- **ReactJS**
- **Ant Design** (UI library)
- **Redux Toolkit** (State management)
- **Formik + Yup** (Form and validation)
- **Recharts** (Chart visualization)
- **Day.js** (Date formatting)

---

## 📦 Getting Started

```bash
# Clone the repo
git clone https://github.com/hasaniisaher21/task-calendar-dashboard.git
cd task-calendar-dashboard

# Install dependencies
npm install

# Run development server
npm start

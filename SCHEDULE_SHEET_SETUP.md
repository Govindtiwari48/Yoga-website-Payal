# Class Schedule — Google Sheet Setup

Payal can update class timings in a Google Sheet. The website reads that sheet automatically — no code changes or redeploy needed after setup.

---

## Part 1: Create the Schedule Sheet (you do once)

### 1. Create a new Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like **"Yoga Class Schedule"**

### 2. Rename the tab to `Schedule`

1. At the bottom, double-click the tab name (default: "Sheet1")
2. Rename it to exactly: **`Schedule`**

### 3. Add column headers (Row 1)

Copy these headers into **Row 1** exactly:

| Days | Level | Time | Icon | Active |
|------|-------|------|------|--------|

### 4. Add current schedule (Row 2 onwards)

Copy this sample data to get started:

| Days | Level | Time | Icon | Active |
|------|-------|------|------|--------|
| Mon-Wed-Fri | Intermediate level | 7:30 AM - 8:30 AM | 🌅 | TRUE |
| Tues-Thurs-Sat | Intermediate level | 6:00 AM - 7:00 AM | 🌆 | TRUE |
| Mon-Wed-Fri | Beginners to intermediate level | 5:30 PM - 6:30 PM | 🌙 | TRUE |
| Mon-Wed-Fri | Beginners to intermediate level | 6:30 PM - 7:30 PM | 🌙 | TRUE |
| Flexible Sessions | At requested time slots | Flexible timings available | ⏰ | TRUE |

### 5. Share the sheet

**For Payal (editor):**
1. Click **Share**
2. Add Payal's Gmail address
3. Set role to **Editor**
4. Click **Send**

**For the website (viewer):**
1. Click **Share** → **General access**
2. Set to **Anyone with the link** → **Viewer**
3. Click **Done**

> The website only reads the sheet. It cannot change or delete anything.

### 6. Connect the sheet to the website

1. Open the sheet URL. It looks like:
   ```
   https://docs.google.com/spreadsheets/d/1ABC123xyz_EXAMPLE_ID/edit
   ```
2. Copy the long ID between `/d/` and `/edit`
3. Open `script.js` in the website project
4. Find this line:
   ```javascript
   const SCHEDULE_SHEET_ID = 'YOUR_SCHEDULE_SHEET_ID_HERE';
   ```
5. Replace `YOUR_SCHEDULE_SHEET_ID_HERE` with your copied Sheet ID
6. Deploy the website once (this is the only deploy needed for schedule setup)

---

## Part 2: How Payal updates timings (ongoing)

1. Open the **Yoga Class Schedule** Google Sheet (on phone or laptop)
2. Edit any cell in the **Days**, **Level**, **Time**, or **Icon** columns
3. Save happens automatically in Google Sheets
4. Refresh the website — updated timings appear immediately

### Column guide for Payal

| Column | What to enter | Example |
|--------|---------------|---------|
| **Days** | Which days the class runs | `Mon-Wed-Fri` |
| **Level** | Class level or description | `Intermediate level` |
| **Time** | Class timing | `7:30 AM - 8:30 AM` |
| **Icon** | One emoji (optional) | `🌅` `🌙` `⏰` |
| **Active** | Show on website? | `TRUE` to show, `FALSE` to hide |

### Common tasks

**Change a class time**
- Edit the **Time** cell → refresh website

**Temporarily hide a batch**
- Set **Active** to `FALSE` → refresh website

**Add a new batch**
- Add a new row at the bottom with all columns filled in

**Remove a batch from the website**
- Set **Active** to `FALSE` (recommended), or delete the row

---

## Troubleshooting

### Website shows old/default schedule?

- Check that `SCHEDULE_SHEET_ID` in `script.js` is correct
- Confirm the tab is named exactly **`Schedule`**
- Confirm sharing is **Anyone with the link → Viewer**
- Hard-refresh the browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

### Website says "Could not load schedule"?

- Sheet must be shared publicly as Viewer (see step 5 above)
- Column headers in Row 1 must match exactly: `Days`, `Level`, `Time`, `Icon`, `Active`
- At least one row must have `Active` = `TRUE`

### A row is not showing on the website?

- Check **Days**, **Level**, and **Time** are not empty
- Check **Active** is `TRUE` (or left blank)

---

## Quick reference

| Who | What | How often |
|-----|------|-----------|
| You | Create sheet, share, paste Sheet ID, deploy once | Once |
| Payal | Edit timings in the sheet | Whenever needed |
| Website | Fetches latest schedule on each visit | Automatic |

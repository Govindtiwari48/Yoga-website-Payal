# Google Sheets Integration Setup Guide

## Step-by-Step Instructions

### 1. Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it (e.g., "Yoga Class Enquiries")

### 2. Set Up Column Headers

In Row 1 of your sheet, add these exact column names:

| Timestamp | Name | Email | Phone | Preferred Batch | Message |
|-----------|------|-------|-------|-----------------|---------|
|           |      |       |       |                 |         |

**Column Names (copy exactly):**
- `Timestamp`
- `Name`
- `Email`
- `Phone`
- `Preferred Batch`
- `Message`

### 3. Create Apps Script

1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. Delete any default code
3. Copy the entire code from `google-apps-script.js` file
4. Paste it into the Apps Script editor
5. **Important:** Change `SHEET_NAME` if your sheet tab is not named "Sheet1"
   ```javascript
   const SHEET_NAME = 'Sheet1'; // Change to your sheet name
   ```

### 4. Deploy as Web App

1. Click **Deploy** > **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description:** "Yoga Form Handler" (optional)
   - **Execute as:** Me (your email)
   - **Who has access:** Anyone
5. Click **Deploy**
6. **Authorize** the script when prompted:
   - Click "Authorize access"
   - Choose your Google account
   - Click "Advanced" > "Go to [Project Name] (unsafe)"
   - Click "Allow"

### 5. Get Web App URL

1. After deployment, you'll see a **Web app URL**
2. Copy this URL (it looks like: `https://script.google.com/macros/s/.../exec`)
3. Open `script.js` in your website project
4. Find this line:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
   ```
5. Replace `YOUR_GOOGLE_SCRIPT_URL_HERE` with your copied URL

### 6. Test the Integration

1. Open your website
2. Fill out the contact form
3. Submit it
4. Check your Google Sheet - you should see a new row with the form data!

## Troubleshooting

### Form not submitting?
- Check browser console (F12) for errors
- Verify the Google Script URL is correct
- Make sure the Web App is deployed with "Anyone" access
- Check that column names match exactly

### Data not appearing in sheet?
- Verify the sheet name matches `SHEET_NAME` in the script
- Check that column headers are in Row 1
- Make sure the script has permission to edit the sheet

### CORS errors?
- The script uses `mode: 'no-cors'` which is normal
- The response won't be readable, but data will still be saved
- Check your Google Sheet to confirm data is being saved

## Security Note

The Web App URL is public, but only you can see the data in your Google Sheet. The script only appends data - it cannot read or delete existing data.

## Column Details

- **Timestamp**: Automatically recorded when form is submitted
- **Name**: User's full name
- **Email**: User's email address
- **Phone**: User's phone number
- **Preferred Batch**: Selected batch type (Online/Offline/Group/Personal/Society)
- **Message**: Optional message from user

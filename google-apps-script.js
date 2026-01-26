/**
 * Google Apps Script Code for Form Submission to Google Sheets
 * 
 * INSTRUCTIONS:
 * 1. Open Google Sheets and create a new spreadsheet
 * 2. Name the first sheet (or use default "Sheet1")
 * 3. Add these column headers in Row 1:
 *    - Timestamp
 *    - Name
 *    - Email
 *    - Phone
 *    - Preferred Batch
 *    - Message
 * 
 * 4. Go to Extensions > Apps Script
 * 5. Delete the default code and paste this entire code
 * 6. Replace 'YOUR_SHEET_NAME' with your actual sheet name (default: "Sheet1")
 * 7. Click "Deploy" > "New deployment"
 * 8. Click the gear icon next to "Select type" and choose "Web app"
 * 9. Set:
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 10. Click "Deploy"
 * 11. Copy the Web App URL and paste it in script.js (replace YOUR_GOOGLE_SCRIPT_URL_HERE)
 * 12. Click "Authorize access" when prompted
 */

// Replace 'Sheet1' with your actual sheet name
const SHEET_NAME = 'Sheet1';

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    // Parse the JSON data from the POST request
    const data = JSON.parse(e.postData.contents);
    
    // Prepare the row data in the order of your columns
    const rowData = [
      data.timestamp || new Date(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.batch || '',
      data.message || ''
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'message': 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Test function to verify the script works
function testDoPost() {
  const mockEvent = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: 'Test User',
        email: 'test@example.com',
        phone: '1234567890',
        batch: 'Online Yoga Classes/Sessions',
        message: 'This is a test message'
      })
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}

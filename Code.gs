function doGet(e) {
  try {
    const url = `http://grp.nalog.gov.by/api/grp-public/data?unp=${e.parameter.unp}`;
    const response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    const httpStatusCode = response.getResponseCode();
    const text = response.getContentText();
    const data = JSON.parse(text);
    return ContentService.createTextOutput(
      JSON.stringify({code: httpStatusCode, message: text, data: data })
    ).setMimeType(
      ContentService.MimeType.JSON
    );
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({code: 500, message: `${error}`})
    ).setMimeType(
      ContentService.MimeType.JSON
    );
  }
}
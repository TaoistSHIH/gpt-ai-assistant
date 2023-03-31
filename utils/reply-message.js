import config from '../config/index.js';
import { reply } from '../services/line.js';
var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1cJLdguzutVWYOw2WQwBe6sitrwGkDH8M6fkVgP8SSTk/edit#gid=0");//雲端試算表連結
var sheet = ss.getSheetByName("工作表1");//表單名稱
const replyMessage = ({
  replyToken,
  messages,
}) => {
  if (config.APP_ENV !== 'production') return { replyToken, messages };
  return reply({ replyToken, messages });
   
 sheet.appendRow([replyToken,userMessage,userid,returnmessage[0].text]);

};

export default replyMessage;

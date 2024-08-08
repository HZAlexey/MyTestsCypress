const today_start = new Date();
const today_end = new Date(new Date().setDate(new Date().getDate() + 1));
const fiveDaysAgo = new Date(new Date().setDate(new Date().getDate() - 5));
const fiveDaysInTheFuture = new Date(new Date().setDate(new Date().getDate() + 5));

module.exports = {
  "active": [
      {
          "id": "3299469",
          "start_date_utc": "2023-04-19T03:00:00",
          "end_date_utc": "2023-04-19T06:00:00",
          "reason_comment": "",
          "phone_number": "79062588617",
          "retries_counter": 1,
          "period_type": 2,
          "recall_information_type": 1,
          "recall_reasons": 0,
          "card_code": "9007727535735748"
      },
      {
          "id": "3299468",
          "start_date_utc": fiveDaysInTheFuture,
          "end_date_utc": fiveDaysInTheFuture,
          "reason_comment": "",
          "phone_id": "5920901",
          "phone_number": "79244778000",
          "retries_counter": 1,
          "period_type": 1,
          "recall_information_type": 1,
          "recall_reasons": 0,
          "card_code": "9007727535735748"
      },
      {
          "id": "3299466",
          "start_date_utc": fiveDaysAgo,
          "end_date_utc": fiveDaysAgo,
          "reason_comment": "попросили перезвонить через 15 минут",
          "phone_id": "16160050",
          "phone_number": "79144768200",
          "retries_counter": 1,
          "period_type": 0,
          "recall_information_type": 1,
          "recall_reasons": 2,
          "card_code": "9007727535735748"
      },
      {
          "id": "3299467",
          "start_date_utc": today_start,
          "end_date_utc": today_end,
          "reason_comment": "",
          "phone_id": "20638874",
          "phone_number": "79144820780",
          "retries_counter": 1,
          "period_type": 2,
          "recall_information_type": 1,
          "recall_reasons": 0,
          "card_code": "9007727535735748"
      }
  ],
  "last_active": []
}

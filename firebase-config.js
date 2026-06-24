/* ═══════════════════════════════════════════════════════════════
   원카드 · firebase-config.js
   각자 기기에서 함께 치는 "온라인 멀티"를 켜려면 아래 값을 채우세요.
   비워두면(또는 YOUR_ 그대로면) 자동으로 한 기기 패스앤플레이로 동작합니다.
   설정 방법은 README.md 참고.  (databaseURL 이 꼭 있어야 온라인이 켜집니다)
   ═══════════════════════════════════════════════════════════════ */
window.FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  databaseURL:       "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId:         "YOUR_PROJECT",
  storageBucket:     "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

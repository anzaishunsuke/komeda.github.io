<script
  src="https://code.jquery.com/jquery-3.6.1.js"
  integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI="
  crossorigin="anonymous"></script>

Push.Permission.request();


Push.create('こんにちは！', {
  　　body: '更新をお知らせします！',
  　　icon: 'icon.png',
  　　timeout: 8000, // 通知が消えるタイミング
  　　vibrate: [100, 100, 100], // モバイル端末でのバイブレーション秒数
  　　onClick: function() {
  　　　　// 通知がクリックされた場合の設定
  　　　　console.log(this);
  　　}
  });
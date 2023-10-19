<template>
  <div class="body">
    <div class="text-wrapper">
      <div class="title" data-content="404">403 - ACCESS DENIED</div>

      <div class="subtitle">
        Oops, Bạn không có quyền truy cập vào trang này!
      </div>
      <div class="isi">
        Một máy chủ web có thể trả về mã trạng thái HTTP 403 Forbidden trong
        phản hồi đối với yêu cầu từ một máy khách cho một trang web hoặc tài
        nguyên để chỉ ra rằng máy chủ có thể tiếp nhận và hiểu được yêu cầu,
        nhưng từ chối thực hiện bất kỳ hành động nào nữa. Các phản ứng với mã
        trạng thái 403 là kết quả của máy chủ web được cấu hình để từ chối quyền
        truy cập, vì một số lý do nào đó, đối với tài nguyên được yêu cầu bởi
        máy khách.
      </div>

      <div class="buttons">
        <router-link class="button" to="/">Quay lại trang chủ</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway:700);

div.body {
  font-family: 'Raleway', sans-serif;
  background-color: #342643;
  height: 100vh;
  padding: 10px;
  font-size: 125%;
}

a {
  color: #ee4b5e !important;
  text-decoration: none;
}
a:hover {
  color: #ffffff !important;
  text-decoration: none;
}

.text-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 5em;
  font-weight: 700;
  color: #ee4b5e;
}

.subtitle {
  font-size: 40px;
  font-weight: 700;
  color: #1fa9d6;
}
.isi {
  font-size: 18px;
  text-align: center;
  margin: 30px;
  padding: 20px;
  color: white;
}
.buttons {
  margin: 30px;
  font-weight: 700;
  border: 2px solid #ee4b5e;
  text-decoration: none;
  padding: 15px;
  text-transform: uppercase;
  color: #ee4b5e;
  border-radius: 26px;
  transition: all 0.2s ease-in-out;
  display: inline-block;
}

.buttons:hover {
  background-color: #ee4b5e;
  color: white;
  transition: all 0.2s ease-in-out;
}
</style>

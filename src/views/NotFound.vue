<template>
  <div class="body">
    <div class="text-wrapper">
      <div class="title" data-content="404">404 - NOT FOUND</div>

      <div class="subtitle">Oops, Không tìm thấy trang!</div>
      <div class="isi">
        Một máy chủ web có thể trả về mã trạng thái HTTP 404 Not Found trong
        phản hồi đối với yêu cầu từ một máy khách cho một trang web hoặc tài
        nguyên để chỉ ra rằng máy chủ không tìm thấy tài nguyên được yêu cầu. Mã
        trạng thái 404 được sử dụng để thể hiện rằng máy chủ không thể xác định
        hoặc không tìm thấy trang hoặc tài nguyên được yêu cầu bởi máy khách.
        Điều này có thể xảy ra nếu URL không tồn tại, hoặc nếu tài nguyên đã bị
        di chuyển hoặc xóa.
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

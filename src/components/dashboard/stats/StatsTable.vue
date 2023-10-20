<template>
  <h2 style="padding: 1.6rem 0; font-size: 2rem">Thông tin chi tiết</h2>
  <div>
    <el-table
      :data="null"
      style="width: 100%"
      :stripe="true"
      border
      size="large"
    >
      <el-table-column type="index" label="STT" min-width="90" align="center" />
      <el-table-column
        label="Khoa"
        align="center"
        min-width="180"
        header-align="center"
      />
      <el-table-column
        label="Tỉ lệ đi muộn (%)"
        min-width="180"
        header-align="center"
      />
      <el-table-column
        label="Tỉ lệ về sớm (%)"
        min-width="180"
        header-align="center"
        align="center"
      />
      <el-table-column
        label="Tổng số"
        min-width="180"
        header-align="center"
        align="center"
      />
      <el-table-column
        label="Ngày tạo"
        min-width="180"
        header-align="center"
        align="center"
      />

      <el-table-column
        label="Hành động"
        min-width="120"
        header-align="center"
        align="center"
      />
    </el-table>
    <div class="pagination-actions">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-count="1"
        :page-size="10"
      />
    </div>
  </div>
</template>

<script></script>

<template>
  <div class="app-container">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.phone }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.username }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getList,del } from '@/api/student'
export default {
  data() {
    return {
      tableData: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData(){
      getList().then((res)=>{
        console.log(res)
        this.tableData= res.data.data
      })
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
      let params = {
        id:row._id
      }
      del(params).then((res)=>{
        console.log(res)
        this.getData();
      })
    }
  }
};
</script>
<style scoped>
</style>
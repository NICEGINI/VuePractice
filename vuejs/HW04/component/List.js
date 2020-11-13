export default {
  template: `
  <div>
  <hr />
      <h1 class="text-center" style="color: rgb(68, 68, 255)">EMPLOYEE LIST</h1>
    <div class="text-center mb-3">
        <div class="row">
        <div class="col-8 text-right">
            <input type="text" style="width: 300px" id="searchBox" />
            <button id="SearchBtn" @click="view">검색</button>
        </div>
        <div class="col-4 text-right">
            <a class="btn btn-primary mx-auto" @click="movePage">사원등록</a>
        </div>
        </div>
    </div>
    <div v-if="items.length">
        <table class="table table-bordered table-condensed">
        <colgroup>
            <col width="20%" />
            <col width="20%" />
            <col width="20%" />
            <col width="20%" />
            <col width="20%" />
        </colgroup>
        <thead class="tcolor">
            <th>사원 아이디</th>
            <th>사원명</th>
            <th>부서</th>
            <th>직책</th>
            <th>연봉</th>
        </thead>
        <tr class="listArea" v-for="(emp, index) in items" :key="index +'_items'">
            <td>
            <router-link :to="'detail?id=' + emp.id">{{ emp.id }}</router-link>
            </td>
            <td>{{ emp.name }}</td>
            <td>{{ emp.dept_name }}</td>
            <td>{{ emp.title }}</td>
            <td>{{ emp.salary }}</td>
        </tr>
        </table>
    </div>
    <div v-else>사원이 없습니다.</div>
    </div>
    `,
  data() {
    return {
      items: [],
    };
  },
  created() {
    axios.get('http://localhost:8097/hrmboot/api/employee/all').then(({ data }) => {
      this.items = data;
    });
  },
  methods: {
    movePage() {
      this.$router.push('/add');
    },
    view() {
      let searchName = document.querySelector('#searchBox').value;
      console.log(searchName);
      const member = JSON.parse(localStorage.getItem('member'));
      this.items = [];
      for (let emp of member.items) {
        if (emp.name.includes(searchName)) {
          this.items.push(emp);
        }
      }
      this.items.sort((a, b) => {
        return -(a.id - b.id);
      });
      console.dir(this.items);
    },
  },
};

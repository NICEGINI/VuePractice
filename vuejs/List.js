export default {
  template: `
  <div>
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
        <tr v-for="(emp, index) in items" :key="index +'_items'">
            <td>
            <a :href="'hrm_detail.html?id=' + emp.id">{{ emp.id }}</a>
            </td>
            <td>{{ emp.name }}</td>
            <td>{{ emp.deptName }}</td>
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
    const member = localStorage.getItem('member');
    let newMember = {
      sequence: 0,
      items: [],
    };
    if (member) {
      newMember = JSON.parse(member);
    } else {
      localStorage.setItem('member', JSON.stringify(newMember));
    }
    newMember.items.sort((a, b) => {
      return -(a.id - b.id);
    });
    this.items = newMember.items;
  },
  methods: {
    movePage() {
      location.href = 'hrm_add.html';
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

export default {
  template: `
    <div>
    <hr />
      <h1 class="text-center mb-3" style="color: rgb(68, 68, 255)">EMPLOYEE DETAILS</h1>
        <div class="text-align">
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
            <tr>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.dept_name }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.salary }}</td>
            </tr>
        </table>
        <div class="text-left">
            <a class="btn btn-primary text-left" @click="movePage">사원목록</a>
        </div>
        </div>
    </div>
    `,
  data() {
    return {
      item: [],
    };
  },
  created() {
    // axion.get으로 사원의 상세 정보를 받아와야한다.
  },
  methods: {
    movePage() {
      this.$router.push('/list');
    },
  },
};
